const User = require('../models/user');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');

const Home = (req, res) => {
    res.send('This is the home page.');
}

const generateOTP = () => {
    return crypto.randomInt(100000, 999999).toString(); // 6-digit OTP
};

const generateOtpToken = (email, otp) => {
    const payload = { email, otp };
    return jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: '5m'
    });
}

// Handle Sign-up with OTP
const signupUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        // Check inputs
        if (!firstName || !lastName || !password || password.length < 8) {
            return res.status(400).json({ error: 'Password must be at least 8 characters.' });
        }
        
        const exist = await User.findOne({ email });
        if (exist) {
            // return res.json({ error: 'Email is already taken.' });
            return res.status(400).json({ error: 'Email is already taken.' });
        }

        // Create user without verification
        const otp = generateOTP();
        const otpToken = generateOtpToken(email, otp);

        const user = new User({
            firstName, lastName, email, password: hashedPassword, otp, otpVerified: false, otpExpiry: Date.now() + 300000 // 5 min expiry
        });

        try {
            await user.save();
        } catch (err) {
            console.log('Error saving user:', err);
            return res.status(500).json({ error: 'Error saving user to database.' });
        }

        // Send OTP via email
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: 'Book with DDC account verification.',
            text: `Your OTP code is ${otp}`
        };

        // await transporter.sendMail(mailOptions, (error, info) => {
        //     if (error) {
        //         console.log("Error sending email: ", error);
        //     } else {
        //         console.log('Email sent: ' + info.response);
        //     }
        // });

        try {
            const info = await transporter.sendMail(mailOptions);
            console.log('Email sent: ' + info.response);
        } catch (error) {
            console.log("Error sending email: ", error);
            return res.status(500).json({ message: 'Error sending OTP email.' });
        }
        

        res.status(201).json({
            message: 'User created. OTP sent to your email.',
            otpToken // Send the OTP token back to the client
        });

    } catch (error) {
        console.error('Signup error: ', error);
        res.status(500).json({
            error: 'An error occurred during signup.'
        });
    }
};

// Handle OTP 
const verifyOtp = async (req, res) => {
    const { email, otp, otpToken } = req.body;
    
    try {
        const decoded = jwt.verify(otpToken, process.env.JWT_SECRET);

        if (decoded.email !== email || decoded.otp !== otp) {
            return res.status(400).json({
                success: false,
                message: "Invalid OTP."
            });
        }

        const user = await User.findOne({ email });

        if (!user || user.otp !== otp || user.otpExpiry < Date.now()) {
            return res.status(400).json({ 
                success: false,
                message: 'Invalid or expired OTP.'
            });
        }

        // OTP verified, update user status
        user.otpVerified = true;
        // user.otp = null;  // Clear OTP
        // user.otpExpiry = null;
        await user.save();

        res.status(200).json({
            success: true,
            message: 'OTP verified successfully.'
        });
        
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(400).json({ success: false, message: 'OTP expired.' });
        }

        console.error('OTP verification error:', error);
        res.status(500).json({ success: false, message: 'Server error during OTP verification.' });
    }
};

module.exports = {
    Home,
    signupUser,
    verifyOtp
};

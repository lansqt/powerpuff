import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/SignUp.css';
import logo from '/src/assets/logo.png';
import sideImage from '/src/assets/signage.jpg';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Terms from '../components/Terms';
import OtpVerification from '../components/OtpVerification';
import axios from 'axios'
import { toast } from 'react-hot-toast';

const Signup = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);  // State to control modal visibility
    const [termsAccepted, setTermsAccepted] = useState(false); // State for tracking if terms are accepted
    const [otpVisible, setOtpVisible] = useState(false);  // State for showing OTP modal
    const navigate = useNavigate();

    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    })

    const [confirmPassword, setConfirmPassword] = useState('');

    const handleBackClick = () => {
        navigate(-1);
    };

    const handleHomeClick = () => {
        navigate('/');
    };

    const handleTermsClick = (e) => {
        e.preventDefault(); // Prevent default link behavior
        setIsModalOpen(true);  // Open the modal
    };

    const handleModalClose = () => {
        setTermsAccepted(false); // Declining should uncheck the checkbox
        setIsModalOpen(false);  // Close the modal
    };

    const handleAccept = () => {
        setTermsAccepted(true);  // User accepts the terms
        setIsModalOpen(false);   // Close the modal
    };




    const handleSignUpClick = async (e) => {
        e.preventDefault();

        const { firstName, lastName, email, password } = data;
        
        if (password !== confirmPassword) {
            toast.error('Passwords do not match.');
            return;
        }

        try {
            // const {data} = await axios.post('http://localhost:8000/signupUser', {
            //     firstName:firstName, lastName:lastName, email:email, password:password
            // }, {
            //     headers: {
            //         'Content-Type': 'application/json'
            //     }
            // });

            const response= await axios.post('http://localhost:5173/signup/signUpUser2', {
                firstName:firstName, lastName:lastName, email:email, password:password
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });

              const response2= await axios.post('/signUpUser2', {
                firstName:firstName, lastName:lastName, email:email, password:password
              })
              .then(function (response2) {
                console.log(response2);
              })
              .catch(function (error) {
                console.log(error);
              });
              


            if(response.data.error) {
                toast.error(response.data.error);
            } else {
                setData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                });
                setConfirmPassword('');
                toast.success('Sign up successful. Please check your email for the OTP.');
                setOtpVisible(true);
            }
        } catch (error) {
            console.error(ex.message);
            toast.error('Error occurred during sign up.');
        }
    };

    function signUpUser2 (firstName,lastName,email, password)
    {
        return true;
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

    const handleOtpVerified = async (otpCode) => {
        try {
            const response = await axios.post('http://localhost:8000/verify-otp', { 
                email: data.email, 
                otp: otpCode 
            });

            if (response.data.message) {
                toast.success(response.data.message);
                navigate('/login');
            } else {
                toast.error('Invalid OTP. Please try again.');
            } 
        } catch (error) {
            console.error(error);
            toast.error('Error occurred while verifying OTP.');
        }
    };

    const handleOtpClose = () => {
        setOtpVisible(false);  // Close OTP modal
    };

    // Toggle checkbox when clicked
    const handleCheckboxClick = () => {
        setTermsAccepted(prevState => !prevState); // Toggle state
    };

    const handleNextButtonClick = () => {
        navigate('/login');
    }

    if (!isVisible) return null;

    return (
        <div className="signup-page">
            <div className="left-columnp">
                <div className="backhome-container">
                    <button className="back-button" onClick={handleBackClick}><i className="bi bi-arrow-left-circle-fill"></i></button>
                    <button className="home-button" onClick={handleHomeClick}><i className="bi bi-house-fill"></i></button>
                </div>
                <img src={sideImage} alt="Side" className="side-image" />
            </div>
            <div className="right-columnp">
                <form id="signupform" onSubmit={handleSignUpClick}>
                    <div className="signup-header">
                        <img src={logo} alt="Logo" className="login-logo" />
                    </div>
                    <h1><strong>Create Account</strong></h1>
                    <div className="input-grp">
                        <input type="text" placeholder="First Name" value={data.firstName} onChange={(e) => setData({...data, firstName: e.target.value})} required />
                        <input type="text" placeholder="Last Name" value={data.lastName} onChange={(e) => setData({...data, lastName: e.target.value})} required />
                    </div>
                    <input type="email" placeholder="Email" value={data.email} onChange={(e) => setData({...data, email: e.target.value})} required />
                    <div className="input-grp">
                        <input type="password" placeholder="Password" value={data.password} onChange={(e) => setData({...data, password: e.target.value})} required />
                        <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                    </div>
                    <div className="checkbox-container">
                        <input 
                            type="checkbox" 
                            id="remember-me" 
                            className="remember-me-checkbox" 
                            checked={termsAccepted} 
                            onChange={handleCheckboxClick}  
                        />
                        <label htmlFor="remember-me" className="remember-me-label">I accept the</label>
                        <a href="#" className="terms-and-conditions" onClick={handleTermsClick}><strong>Terms and Conditions</strong></a>
                    </div>
                    <button type="submit" className="signup-button" disabled={!termsAccepted}>Sign up</button>
                </form>

                <div className="signup-footer">
                    <span>Already have an account? <strong>Log in here</strong></span>
                    <button className="next-button" onClick={handleNextButtonClick}><i className="bi bi-chevron-left"></i></button>
                </div>
            </div>

            {isModalOpen && (
                <Terms 
                    onAccept={handleAccept}
                    onDecline={handleModalClose}  // Decline button will uncheck the checkbox
                />
            )}

            {otpVisible && (
                <OtpVerification
                    email={data.email}
                    onVerify={handleOtpVerified} 
                    onClose={handleOtpClose}
                />
            )}
        </div>
    );
};

export default Signup;

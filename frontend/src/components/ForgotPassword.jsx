import React, { useState } from 'react';
import '../../styles/ForgotPassword.css';

const ForgotPassword = ({ onClose }) => {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [step, setStep] = useState(1); // Track steps in the modal
    const [isPasswordVisible, setIsPasswordVisible] = useState(false); // State for password visibility

    const handleSendOtp = (e) => {
        e.preventDefault();
        // Logic to send OTP to the user's email goes here
        console.log(`Sending OTP to ${email}`);
        setStep(2); // Move to the next step
    };

    const handleResetPassword = (e) => {
        e.preventDefault();
        // Logic to verify OTP and reset the password goes here
        console.log(`Resetting password for ${email} with OTP ${otp}`);
        console.log(`New Password: ${newPassword}`);
        // Close modal after successful password reset
        onClose();
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                {step === 1 && (
                    <form onSubmit={handleSendOtp}>
                        <h2>Forgot Password?</h2>
                        <p>Kindly provide the email or phone number you used to register your account, and we will send you an OTP. </p>
                        <input
                            type="email"
                            placeholder="Enter your email or phone number"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <div className="forgot-password-buttons">
                            <button type="submit" className="sendotp">Send OTP</button>
                            <button type="submit" className="cancel" onClick={onClose}>Cancel</button>
                        </div>
                    </form>
                )}
                {step === 2 && (
                    <form onSubmit={handleResetPassword}>
                        <h2>New Password</h2>
                        <p>We have sent you an OTP. Please enter it below and set your new password. </p>
                        <input
                            type="text"
                            placeholder="Enter OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            required
                        />
                        <div className="password-container">
                            <input
                                className="password-input"
                                type={isPasswordVisible ? "text" : "password"} // Toggle between text and password
                                placeholder="New Password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                            />
                            <span 
                                className="eye-icon" 
                                onClick={() => setIsPasswordVisible(!isPasswordVisible)} // Toggle visibility
                            >
                                {isPasswordVisible ? <i class="bi bi-eye"></i> : <i class="bi bi-eye-slash"></i>} {/* Eye icon */}
                            </span>
                        </div>
                        <div className="forgot-password-buttons">
                            <button type="submit" className="reset">Reset Password</button>
                            <button type="submit" className="cancel" onClick={onClose}>Cancel</button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ForgotPassword;

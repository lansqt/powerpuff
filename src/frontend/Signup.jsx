import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/SignUp.css';
import logo from '/src/assets/logo.png';
import sideImage from '/src/assets/signage.jpg';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Terms from './components/Terms';
import OtpVerification from './components/OtpVerification';

const Signup = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);  // State to control modal visibility
    const [termsAccepted, setTermsAccepted] = useState(false); // State for tracking if terms are accepted
    const [otpVisible, setOtpVisible] = useState(false);  // State for showing OTP modal
    const navigate = useNavigate();

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

    const handleSignUpClick = (e) => {
        e.preventDefault();
        // Show the OTP Verification modal
        setOtpVisible(true);
    };

    const handleOtpVerified = () => {
        // OTP was successfully verified, now navigate to login
        navigate('/login');
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
                <form>
                    <div className="signup-header">
                        <img src={logo} alt="Logo" className="login-logo" />
                    </div>
                    <h1><strong>Create Account</strong></h1>
                    <div className="input-grp">
                        <input type="text" placeholder="First Name" required />
                        <input type="text" placeholder="Last Name" required />
                    </div>
                    <input type="text" placeholder="Email or Phone Number" required />
                    <div className="input-grp">
                        <input type="password" placeholder="Password" required />
                        <input type="password" placeholder="Confirm Password" required />
                    </div>
                    <div className="checkbox-container">
                        {/* When the checkbox is clicked, it toggles the termsAccepted state */}
                        <input 
                            type="checkbox" 
                            id="remember-me" 
                            className="remember-me-checkbox" 
                            checked={termsAccepted} // Checkbox checked state reflects if terms are accepted
                            onChange={handleCheckboxClick}  // Toggle on checkbox click
                        />
                        <label htmlFor="remember-me" className="remember-me-label">I accept the</label>
                        <a href="#" className="terms-and-conditions" onClick={handleTermsClick}><strong>Terms and Conditions</strong></a>
                    </div>
                    <button 
                        type="submit" 
                        className="signup-button" 
                        disabled={!termsAccepted} 
                        onClick={handleSignUpClick}
                    >
                        Sign up
                    </button>
                </form>

                <div className="signup-footer">
                    <span>Already have an account? <strong>Log in here</strong></span>
                    <button className="next-button" onClick={handleNextButtonClick}><i class="bi bi-chevron-left"></i></button>
                </div>
            </div>

            {/* Conditionally render the Terms component */}
            {isModalOpen && (
                <Terms 
                    onAccept={handleAccept}
                    onDecline={handleModalClose}  // Decline button will uncheck the checkbox
                />
            )}

            {/* Conditionally render the OTP Verification modal */}
            {otpVisible && (
                <OtpVerification 
                    onVerify={handleOtpVerified} 
                    onClose={handleOtpClose}
                />
            )}
        </div>
    );
};

export default Signup;

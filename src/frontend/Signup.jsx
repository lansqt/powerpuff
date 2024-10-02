import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/SignUp.css';
import logo from '/src/assets/logo.png'; 
import sideImage from '/src/assets/signage.jpg';
import 'bootstrap-icons/font/bootstrap-icons.css';

const SignUp = () => {
    const [isVisible, setIsVisible] = useState(true); // State to control visibility
    const navigate = useNavigate(); // Initialize navigation function

    const handleClose = () => {
        setIsVisible(false); // Hide the login container when exit button is clicked
    };

    const handleNextButtonClick = () => {
        navigate('/login');
    };

    const handleBackClick = () => {
        navigate(-1); // Go back to the previous page
    };

    const handleHomeClick = () => {
        navigate('/'); // Navigate to the home page
    };

    if (!isVisible) return null; // If not visible, return null to remove the component from the DOM

    return (
        <div className="login-page">
            <div className="left-column">
                <div className="login-container">
                    <div className="login-header">
                        <img src={logo} alt="Logo" className="login-logo" />
                    </div>
                    <form>
                        <h1><strong>Sign up</strong></h1>
                        <input type="text" placeholder="Full Name" required />
                        <input type="text" placeholder="Email or Phone Number" required />
                        <input type="password" placeholder="Password" required />
                        <input type="password" placeholder="Confirm Password" required />
                        <div className="checkbox-container">
                                <input type="checkbox" id="remember-me" className="remember-me-checkbox" />
                                <label htmlFor="remember-me" className="remember-me-label">I accept the</label>
                                <a href="#" className="forgot-password"><strong>Terms and Conditions</strong></a>
                        </div>
                        <button type="submit" className="login-button">Sign up</button>
                    </form>
                    <div className="login-footer">
                        <span>Already have an account? <strong>Log in here</strong></span>
                        <button className="next-button" onClick={handleNextButtonClick}><i className="bi bi-chevron-left"></i></button>
                    </div>
                </div>
            </div>
            <div className="right-column">
                <div className="backhome-container">
                    <button className="back-button" onClick={handleBackClick}><i className="bi bi-arrow-left-circle-fill"></i></button>
                    <button className="home-button" onClick={handleHomeClick}><i className="bi bi-house-fill"></i></button>
                </div>
                <img src={sideImage} alt="Side" className="side-image" />
            </div>
        </div>
    );
};

export default SignUp;

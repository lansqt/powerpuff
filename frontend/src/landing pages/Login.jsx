import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import '../../styles/Login.css';
import logo from '/src/assets/logo.png';
import sideImage from '/src/assets/signage.jpg';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ForgotPassword from '../components/ForgotPassword'; // Import the ForgotPassword modal component

const Login = () => {
    const [isVisible, setIsVisible] = useState(true); // State to control visibility
    const [forgotPasswordVisible, setForgotPasswordVisible] = useState(false); // State for controlling Forgot Password modal
    const navigate = useNavigate(); // Initialize navigation function

    const handleNextButtonClick = () => {
        navigate('/signup');
    };

    const handleBackClick = () => {
        navigate(-1); // Go back to the previous page
    };

    const handleHomeClick = () => {
        navigate('/'); // Navigate to the home page
    };

    const handleForgotPasswordClick = (e) => {
        e.preventDefault();
        setForgotPasswordVisible(true); // Show the Forgot Password modal
    };

    const handleForgotPasswordClose = () => {
        setForgotPasswordVisible(false); // Close the Forgot Password modal
    };

    const handleLoginClick = (e) => {
        e.preventDefault()
        axios.get('/')
    }

    if (!isVisible) return null; // If not visible, return null to remove the component from the DOM

    return (
        <div className="login-page">
            <div className="left-columnp">
                <div className="backhome-container">
                    <button className="back-button" onClick={handleBackClick}><i className="bi bi-arrow-left-circle-fill"></i></button>
                    <button className="home-button" onClick={handleHomeClick}><i className="bi bi-house-fill"></i></button>
                </div>
                <img src={sideImage} alt="Side" className="side-image" />
            </div>
            <div className="right-columnp">
                <form>
                    <div className="login-header">
                        <img src={logo} alt="Logo" className="login-logo" />
                    </div>
                    <h1><strong>Log in</strong></h1>
                    <div className="login-input-grp">
                        <input type="text" placeholder="Email or Phone Number" required />
                    </div>
                    <div className="login-input-grp">
                        <input type="password" placeholder="Password" required />
                    </div>
                    <div className="checkbox-container">
                        <input type="checkbox" id="remember-me" className="remember-me-checkbox" />
                        <label htmlFor="remember-me" className="remember-me-label">Remember Me</label>
                        <a href="#" className="forgot-password" onClick={handleForgotPasswordClick}><strong>Forgot Password?</strong></a>
                    </div>
                    <button type="submit" className="login-button" onClick={handleLoginClick}>Log In</button>
                </form>
                <div className="login-footerp">
                    <span>Don't have an account? <strong>Create New</strong></span>
                    <button className="next-button" onClick={handleNextButtonClick}><i className="bi bi-chevron-right"></i></button>
                </div>
            </div>

            {/* Conditionally render the Forgot Password modal */}
            {forgotPasswordVisible && (
                <ForgotPassword onClose={handleForgotPasswordClose} />
            )}
        </div>
    );
};

export default Login;




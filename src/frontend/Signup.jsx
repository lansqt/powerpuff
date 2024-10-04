import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/SignUp.css';
import logo from '/src/assets/logo.png';
import sideImage from '/src/assets/signage.jpg';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Signup = () => {
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
        <div className="signup-page">
            <div className="left-columnp">
                <div className="backhome-container">
                    <button className="back-button" onClick={handleBackClick}><i class="bi bi-arrow-left-circle-fill"></i></button>
                    <button className="home-button" onClick={handleHomeClick}><i class="bi bi-house-fill"></i></button>
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
                        <input type="checkbox" id="remember-me" className="remember-me-checkbox" />
                        <label htmlFor="remember-me" className="remember-me-label">I accept the</label>
                        <a href="#" className="terms-and-conditions"><strong>Terms and Conditions</strong></a>
                    </div>
                    <button type="submit" className="signup-button">Sign up</button>
                </form>
                <div className="signup-footer">
                    <span>Already have an account? <strong>Log in here</strong></span>
                    <button className="next-button" onClick={handleNextButtonClick}><i class="bi bi-chevron-left"></i></button>
                </div>
            </div>
        </div>
    );
};

export default Signup;

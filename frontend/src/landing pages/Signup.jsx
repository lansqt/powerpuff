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
            const response = await axios.post('http://localhost:8000/signup', {
                firstName, lastName, email, password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
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
            console.error(error)
            toast.error('Error occurred during sign up.');
        }
    };

    const handleOtpVerified = async (otpCode) => {
        try {
            const response = await axios.post('http:localhost:8000/verify-otp', { 
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
                <form onSubmit={handleSignUpClick}>
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
                    <button className="next-button" onClick={handleNextButtonClick}><i class="bi bi-chevron-left"></i></button>
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

import React, { useState } from 'react';
import '../styles/OtpVerification.css';

const OtpVerification = ({ onVerify, onClose, onResendCode }) => {
    const [otp, setOtp] = useState(new Array(6).fill('')); // For 6 OTP fields

    // Handle OTP input
    const handleOtpChange = (element, index) => {
        if (isNaN(element.value)) return;
        let newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);

        // Auto-focus on next input
        if (element.nextSibling && element.value) {
            element.nextSibling.focus();
        }
    };

    const handleVerifyClick = () => {
        const otpCode = otp.join(''); // Join the 6 fields into a single OTP string
        if (otpCode === '123456') { // Example OTP verification logic
            onVerify();
        } else {
            alert('Invalid OTP, please try again.');
        }
    };

    return (
        <div className="otp-modal">
            <div className="otp-modal-content">
                <h2>OTP Verification</h2>
                <p>Enter the code sent to your email or phone</p>

                {/* Separate fields for OTP */}
                <div className="otp-inputs">
                    {otp.map((value, index) => (
                        <input
                            key={index}
                            type="text"
                            maxLength="1"
                            value={value}
                            onChange={(e) => handleOtpChange(e.target, index)}
                            onFocus={(e) => e.target.select()}
                        />
                    ))}
                </div>

                {/* Resend Code button */}
                <div className="resend-code">
                    <p>Didn't receive a code?</p><a className="resend-button" onClick={onResendCode}><strong>Resend Code</strong></a>
                </div>

                <div className="otp-modal-actions verification-buttons">
                    {/* Accept (Verify) and Decline (Close) buttons */}
                    <button className="accept" onClick={handleVerifyClick}>Verify</button>
                    <button className="decline" onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default OtpVerification;

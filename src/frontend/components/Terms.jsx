import React from 'react';
import '../styles/Terms.css';

const Terms = ({ onAccept, onDecline }) => {
    return (
        <div className="terms-modal">
            <div className="terms-modal-content">
                <h2>Terms and Conditions</h2>
                <p>Last updated October 4, 2024</p>
                <div className="terms-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lobortis facilisis maecenas tortor erat ullamcorper, senectus nascetur. Ultricies sed natoque maecenas porta a. Accumsan porttitor amet tristique lectus velit nisi. Aptent faucibus facilisi tristique phasellus pharetra lacus. Tellus faucibus ut nascetur vehicula lacus potenti. Posuere dictumst laoreet senectus luctus lectus rhoncus. Lorem id inceptos finibus potenti; ex urna quam. Malesuada sapien pellentesque taciti porttitor vivamus ridiculus risus. Semper curabitur maecenas nec imperdiet duis.</p>
                </div>
                <div className="terms-buttons">
                    <button className="decline" onClick={onDecline}>Decline</button>
                    <button className="accept" onClick={onAccept}>Accept</button>
                </div>
            </div>
        </div>
    );
};

export default Terms;

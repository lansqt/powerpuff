import React from 'react';
import "../../styles/PatientProfile.css";
import PatientSidebar from '../components/PatientSidebar';
import { useNavigate } from 'react-router-dom';

const PatientProfile = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleLogout = () => {
        // Handle logout logic
        navigate('/login');
    };

    return (
        <div className="patient-profile">
            <PatientSidebar handleLogout={handleLogout} />
            <div className="main-content-profile">
                <h1>Welcome to the Patient Profile</h1>
                <p>Select an option from the sidebar to manage the application.</p>
                <p>Salamat Lance Nico Duave Dequina!</p>
            </div>
        </div>
    );
};

export default PatientProfile;

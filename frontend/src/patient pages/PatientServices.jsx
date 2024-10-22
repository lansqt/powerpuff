import React from 'react';
import "../../styles/PatientServices.css";
import PatientSidebar from '../components/PatientSidebar';
import { useNavigate } from 'react-router-dom';

const PatientServices = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleLogout = () => {
        // Handle logout logic
        navigate('/login');
    };

    return (
        <div className="patient-services">
            <PatientSidebar handleLogout={handleLogout} />
            <div className="main-content-services">
                <h1>Welcome to the Patient Services</h1>
                <p>Select an option from the sidebar to manage the application.</p>
                <p>Salamat Lance Nico Duave Dequina!</p>
            </div>
        </div>
    );
};

export default PatientServices;

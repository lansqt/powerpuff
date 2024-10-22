import React from 'react';
import "../../styles/PatientDashboard.css";
import PatientSidebar from '../components/PatientSidebar';
import { useNavigate } from 'react-router-dom'; // Ensure you have useNavigate hook if you're navigating

const PatientDashboard = () => {
    const navigate = useNavigate(); // useNavigate hook

    const handleLogout = () => {
        // Handle logout logic
        navigate('/login');
    };

    return (
        <div className="patient-dashboard">
            <PatientSidebar handleLogout={handleLogout} /> {/* Use PatientSidebar */}
            <div className="main-content-dashboard">
                <h1>Welcome to the Patient Dashboard</h1>
            </div>
        </div>
    );
};

export default PatientDashboard;

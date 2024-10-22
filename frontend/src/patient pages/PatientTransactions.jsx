import React from 'react';
import "../../styles/PatientTransactions.css";
import PatientSidebar from '../components/PatientSidebar';
import { useNavigate } from 'react-router-dom';

const PatientTransactions = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleLogout = () => {
        // Handle logout logic
        navigate('/login');
    };

    return (
        <div className="patient-transactions">
            <PatientSidebar handleLogout={handleLogout} />
            <div className="main-content-transactions">
                <h1>Welcome to the Patient Transactions</h1>
                <p>Select an option from the sidebar to manage the application.</p>
                <p>Salamat Lance Nico Duave Dequina!</p>
            </div>
        </div>
    );
};

export default PatientTransactions;

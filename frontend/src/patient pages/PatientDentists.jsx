import React from 'react';
import "../../styles/PatientDentists.css";
import PatientSidebar from '../components/PatientSidebar';
import { useNavigate } from 'react-router-dom';

const PatientDentists = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleLogout = () => {
        // Handle logout logic
        navigate('/login');
    };

    return (
        <div className="patient-dentists">
            <PatientSidebar handleLogout={handleLogout} />
            <div className="main-content-dentists">
                <h1>Welcome to the Patient Dentist</h1>
                <p>Select an option from the sidebar to manage the application.</p>
                <p>Salamat Lance Nico Duave Dequina!</p>
            </div>
        </div>
    );
};

export default PatientDentists;

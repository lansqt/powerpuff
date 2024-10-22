import React from 'react';
import "../../styles/PatientAppointments.css";
import PatientSideBar from '../components/PatientSidebar';

const PatientAppointments = () => {
    const handleLogout = () => {
        // Handle logout logic
        navigate('/login');
    };

    return (
        <div className="patient-appointments">
            <PatientSideBar handleLogout={handleLogout} />
            <div className="main-content-appointments">
                <h1>Welcome to the Patient Appointments</h1>
                <p>Select an option from the sidebar to manage the application.</p>
                <p>Salamat Lance Nico Duave Dequina!</p>
            </div>
        </div>
    );
};

export default PatientAppointments;
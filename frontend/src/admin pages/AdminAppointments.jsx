import React from 'react';
import "../../styles/AdminAppointments.css";
import AdminSideBar from '../components/AdminSideBar';

const AdminAppointments = () => {
    const handleLogout = () => {
        // Handle logout logic
        navigate('/login');
    };

    return (
        <div className="admin-appointments">
            <AdminSideBar handleLogout={handleLogout} />
            <div className="main-content">
                <h1>Welcome to the Admin Appointments</h1>
                <p>Select an option from the sidebar to manage the application.</p>
                <p>Salamat Lance Nico Duave Dequina!</p>
            </div>
        </div>
    );
};

export default AdminAppointments;
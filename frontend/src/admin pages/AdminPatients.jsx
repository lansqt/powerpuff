import React from 'react';
import "../../styles/AdminPatients.css";
import AdminSideBar from '../components/AdminSideBar';

const AdminPatients = () => {
    const handleLogout = () => {
        // Handle logout logic
        navigate('/login');
    };

    return (
        <div className="admin-patients">
            <AdminSideBar handleLogout={handleLogout} />
            <div className="main-content-patients">
                <h1>Welcome to the Admin Patients</h1>
                <p>Select an option from the sidebar to manage the application.</p>
                <p>Salamat Lance Nico Duave Dequina!</p>
            </div>
        </div>
    );
};

export default AdminPatients;
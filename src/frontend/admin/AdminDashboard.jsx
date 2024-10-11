// src/frontend/pages/AdminDashboard.jsx
import React from 'react';
import "/src/frontend/styles/AdminDashboard.css";
import AdminSideBar from '/src/frontend/components/AdminSideBar';

const AdminDashboard = () => {
    const handleLogout = () => {
        // Handle logout logic
        navigate('/login');
    };

    return (
        <div className="admin-dashboard">
            <AdminSideBar handleLogout={handleLogout} />
            <div className="main-content">
                <h1>Welcome to the Admin Dashboard</h1>
                <p>Select an option from the sidebar to manage the application.</p>
                <p>Salamat Lance Nico Duave Dequina!</p>
            </div>
        </div>
    );
};

export default AdminDashboard;

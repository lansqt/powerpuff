import React from 'react';
import "/src/frontend/styles/AdminDashboard.css";
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Handle logout logic
        navigate('/login');
    };

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className="admin-dashboard">
            <div className="sidebar">
                <div className="sidebar-header">
                    <img src="/src/assets/logo.png" alt="Logo" className="logo" />
                    <h2>Book with DDC</h2>
                </div>
                <ul className="nav-list">
                    <li onClick={() => handleNavigation('/admin/dashboard')}>Dashboard</li>
                    <li onClick={() => handleNavigation('/admin/appointments')}>Appointments</li>
                    <li onClick={() => handleNavigation('/admin/dentists')}>Dentists</li>
                    <li onClick={() => handleNavigation('/admin/patients')}>Patients</li>
                    <li onClick={() => handleNavigation('/admin/transactions')}>Transactions</li>
                </ul>
                <div className="logout">
                    <li onClick={handleLogout}>
                        <i className="bi bi-box-arrow-left"></i> Log Out
                    </li>
                </div>
            </div>
            <div className="main-content">
                <h1>Welcome to the Admin Dashboard</h1>
                <p>Select an option from the sidebar to manage the application.</p>
                <p>Salamat Lance Nico Duave Dequina!</p>
            </div>
        </div>
    );
};

export default AdminDashboard;

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
                    <h2>Admin Dashboard</h2>
                </div>
                <ul className="nav-list">
                    <li onClick={() => handleNavigation('/admin/users')}>Users Management</li>
                    <li onClick={() => handleNavigation('/admin/reports')}>Reports</li>
                    <li onClick={() => handleNavigation('/admin/settings')}>Settings</li>
                    <li onClick={() => handleNavigation('/admin/activity-log')}>Activity Log</li>
                    <li onClick={() => handleLogout()}>Logout</li>
                </ul>
            </div>
            <div className="main-content">
                <h1>Welcome to the Admin Dashboard</h1>
                <p>Select an option from the sidebar to manage the application.</p>
            </div>
        </div>
    );
};

export default AdminDashboard;

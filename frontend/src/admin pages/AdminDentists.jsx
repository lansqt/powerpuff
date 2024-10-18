import React from 'react';
import "../../styles/AdminDentists.css";
import AdminSideBar from '../components/AdminSideBar';

const AdminDentists = () => {
    const handleLogout = () => {
        // Handle logout logic
        navigate('/login');
    };

    return (
        <div className="admin-dentists">
            <AdminSideBar handleLogout={handleLogout} />
            <div className="main-content-dentists">
                <h1>Welcome to the Admin Dentist</h1>
                <p>Select an option from the sidebar to manage the application.</p>
                <p>Salamat Lance Nico Duave Dequina!</p>
            </div>
        </div>
    );
};

export default AdminDentists;

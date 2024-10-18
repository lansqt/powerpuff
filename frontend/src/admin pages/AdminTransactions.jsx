import React from 'react';
import "../../styles/AdminTransactions.css";
import AdminSideBar from '../components/AdminSideBar';

const AdminTransactions = () => {
    const handleLogout = () => {
        // Handle logout logic
        navigate('/login');
    };

    return (
        <div className="admin-transactions">
            <AdminSideBar handleLogout={handleLogout} />
            <div className="main-content-transactions">
                <h1>Welcome to the Admin Transactions</h1>
                <p>Select an option from the sidebar to manage the application.</p>
                <p>Salamat Lance Nico Duave Dequina!</p>
            </div>
        </div>
    );
};

export default AdminTransactions;
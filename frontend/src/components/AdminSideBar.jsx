// src/frontend/components/AdminSideBar.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../../styles/AdminSideBar.css";

const AdminSideBar = ({ handleLogout }) => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <img src="/src/assets/logo.png" alt="Logo" className="logo-sidebar" />
                <h2>Book with DDC</h2>
            </div>
            <ul className="nav-list">
                <li onClick={() => handleNavigation('/admin')}>
                    <i className="bi bi-grid"></i> Dashboard
                </li>
                <li onClick={() => handleNavigation('/admin/appointments')}>
                    <i className="bi bi-calendar-check"></i> Appointments
                </li>
                <li onClick={() => handleNavigation('/admin/dentists')}>
                    <i className="bi bi-person-badge"></i> Dentists
                </li>
                <li onClick={() => handleNavigation('/admin/patients')}>
                    <i className="bi bi-people"></i> Patients
                </li>
                <li onClick={() => handleNavigation('/admin/transactions')}>
                    <i className="bi bi-receipt"></i> Transactions
                </li>
            </ul>
            <div className="logout">
                <li onClick={handleLogout}>
                    <i className="bi bi-box-arrow-left"></i> Log Out
                </li>
            </div>
        </div>
    );
};

export default AdminSideBar;

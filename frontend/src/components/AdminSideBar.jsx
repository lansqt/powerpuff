import React from 'react';
import { NavLink } from 'react-router-dom';
import "../../styles/AdminSideBar.css";

const AdminSideBar = ({ handleLogout }) => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <img src="/src/assets/logo.png" alt="Logo" className="logo-sidebar" />
                <h2>Book with DDC</h2>
            </div>
            <ul className="nav-list">
                <li>
                    <NavLink 
                        to="/admin" 
                        className={({ isActive }) => isActive ? 'active-link' : ''}>
                        <i className="bi bi-grid"></i> Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/appointments" 
                        className={({ isActive }) => isActive ? 'active-link' : ''}>
                        <i className="bi bi-calendar-check"></i> Appointments
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/dentists" 
                        className={({ isActive }) => isActive ? 'active-link' : ''}>
                        <i className="bi bi-person-badge"></i> Dentists
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/patients" 
                        className={({ isActive }) => isActive ? 'active-link' : ''}>
                        <i className="bi bi-people"></i> Patients
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/transactions" 
                        className={({ isActive }) => isActive ? 'active-link' : ''}>
                        <i className="bi bi-receipt"></i> Transactions
                    </NavLink>
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

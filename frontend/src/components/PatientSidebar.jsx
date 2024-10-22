import React from 'react';
import { NavLink } from 'react-router-dom';
import "../../styles/PatientSidebar.css";

const PatientSidebar = ({ handleLogout }) => {
    return (
        <div className="sidebar-patient">
            <div className="sidebar-header">
                <img src="/src/assets/logo.png" alt="Logo" className="logo-sidebar" />
                <h2>Book with DDC</h2>
            </div>
            <ul className="nav-list">
                <li>
                    <NavLink 
                        to="/patient" 
                        className={({ isActive }) => isActive ? 'active-link' : ''}>
                        <i className="bi bi-grid"></i> Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/bookappointment" 
                        className={({ isActive }) => isActive ? 'active-link' : ''}>
                        <i className="bi bi-calendar-check"></i> Book an Appointment
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/patient-dentists" 
                        className={({ isActive }) => isActive ? 'active-link' : ''}>
                        <i className="bi bi-person-badge"></i> Dentists
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/patient-services" 
                        className={({ isActive }) => isActive ? 'active-link' : ''}>
                        <i className="bi bi-journal-medical"></i> Services
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/patient-transactions" 
                        className={({ isActive }) => isActive ? 'active-link' : ''}>
                        <i className="bi bi-receipt"></i> Transactions
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/patient-profile" 
                        className={({ isActive }) => isActive ? 'active-link' : ''}>
                        <i className="bi bi-person"></i> Profile
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

export default PatientSidebar;

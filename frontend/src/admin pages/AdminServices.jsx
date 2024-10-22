import React from 'react';
import "../../styles/AdminServices.css";
import AdminSideBar from '../components/AdminSideBar';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const AdminServices = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleLogout = () => {
        // Handle logout logic
        navigate('/login');
    };

    return (
        <div className="admin-services">
            <AdminSideBar handleLogout={handleLogout} />
            <div className="main-content-services">
                <div className="header-icon-title">
                    <i className="bi bi-person-badge"></i>
                    <h1>Our Services</h1> {/* Header is outside the container */}
                </div>
                <div className="container-admin"> {/* Container for the rest of the content */}
                    <p>Here is a list of your services...</p> {/* Example content */}
                    {/* Add more content as needed */}
                </div>
            </div>
        </div>
    );
};

export default AdminServices;

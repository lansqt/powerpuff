import React, { useState } from 'react';
import "../../styles/AdminDentists.css";
import AdminSideBar from '../components/AdminSideBar';

const AdminDentists = () => {
    const [dentists, setDentists] = useState([
        { id: 1, name: "Dr. Carites M. Dominguez", image: "/src/assets/dentist1.jpg" },
        { id: 2, name: "Dr. Danessa M. Dominguez", image: "/src/assets/dentist2.jpg" },
    ]);

    const handleSearch = (event) => {
        // Implement search logic here
    };

    const handleAddDentist = () => {
        // Logic to add a dentist
    };

    const handleEditDentist = (id) => {
        // Logic to edit dentist details
    };

    const handleDeleteDentist = (id) => {
        // Logic to delete dentist
        setDentists(dentists.filter(dentist => dentist.id !== id));
    };

    return (
        <div className="admin-dentists">
            <AdminSideBar />
            <div className="main-content-dentists">
                <div className="header-icon-title">
                    <i className="bi bi-person-badge"></i>
                    <h1>Dentists</h1>
                </div>  

                {/* Search and Add button */}
                <div className="dentists-header">
                    <div className="search-bar">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search Dentist"
                            onChange={handleSearch}
                        />
                        <i className="bi bi-search search-icon"></i>
                    </div>
                    <button className="btn add-dentist-btn" onClick={handleAddDentist}>
                        Add Dentist <i className="bi bi-person-plus-fill"></i>
                    </button>

                </div>

                {/* Dentist cards */}
<div className="dentists-list">
    {dentists.map((dentist) => (
        <div key={dentist.id} className="dentist-card">
            <img src={dentist.image} alt={dentist.name} className="dentist-image" />
            <h2>{dentist.name} </h2>
            <div>
                
                <div className="dentist-info">
                    <p><i className="bi bi-telephone"></i>  (123) 456-7890</p>
                    <p><i className="bi bi-envelope"></i> dentist@example.com</p>
                    <p><i className="bi bi-calendar-check"></i> M W TH F S | 10:00 am - 5:00 pm</p>
                </div>
                <div className="button-group">
                    <button className="btn btn-secondary" onClick={() => handleEditDentist(dentist.id)}>
                        Edit
                    </button>
                    <button className="btn btn-danger" onClick={() => handleDeleteDentist(dentist.id)}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    ))}
</div>

            </div>
        </div>
    );
};

export default AdminDentists;

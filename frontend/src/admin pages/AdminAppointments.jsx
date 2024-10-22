import React, { useState } from 'react';
import "../../styles/AdminAppointments.css";
import AdminSideBar from '../components/AdminSideBar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import dayjs from 'dayjs';

const AdminAppointments = () => {
    const [appointments, setAppointments] = useState([
        { patientName: 'John Doe', dentist: 'Dr. Smith', service: 'Cleaning', date: '2024-10-05 10:00 AM', status: 'Confirmed' },
        { patientName: 'Jane Doe', dentist: 'Dr. Miller', service: 'Filling', date: '2024-10-05 12:00 PM', status: 'Pending' },
        { patientName: 'Alice Green', dentist: 'Dr. Brown', service: 'Extraction', date: '2024-10-06 11:00 AM', status: 'Cancelled' },
    ]);

    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
    const [filters, setFilters] = useState({
        dentist: [],
        service: [],
        status: [],
    });
    const [selectedDate, setSelectedDate] = useState(null);

    const dentists = ['Dr. Smith', 'Dr. Miller', 'Dr. Brown'];
    const services = ['Cleaning', 'Filling', 'Extraction'];
    const statuses = ['Pending', 'Confirmed', 'Ongoing', 'Cancelled', 'Rescheduled', 'Settled'];

    const toggleFilterModal = () => {
        setIsFilterModalOpen(!isFilterModalOpen);
    };

    const handleFilterChange = (event) => {
        const { name, value, checked } = event.target;
        setFilters((prevFilters) => {
            if (checked) {
                return {
                    ...prevFilters,
                    [name]: [...prevFilters[name], value],
                };
            } else {
                return {
                    ...prevFilters,
                    [name]: prevFilters[name].filter((item) => item !== value),
                };
            }
        });
    };

    const applyFilters = () => {
        toggleFilterModal();
    };

    const handleDateChange = (date) => {
        setSelectedDate(dayjs(date).format('YYYY-MM-DD'));
    };

    const resetFilters = () => {
        setFilters({
            dentist: [],
            service: [],
            status: [],
        });
        setSelectedDate(null);
    };

    const filteredAppointments = appointments.filter((appointment) => {
        const matchesDentist = filters.dentist.length === 0 || filters.dentist.includes(appointment.dentist);
        const matchesService = filters.service.length === 0 || filters.service.includes(appointment.service);
        const matchesStatus = filters.status.length === 0 || filters.status.includes(appointment.status);
        const matchesDate = selectedDate === null || dayjs(appointment.date).format('YYYY-MM-DD') === selectedDate;

        return matchesDentist && matchesService && matchesStatus && matchesDate;
    });

    return (
        <div className="admin-appointments">
            <AdminSideBar />

            <div className="main-content-appointments">
                <h1>Manage Appointments</h1>

                <div className="filter-buttons">
                    <button onClick={toggleFilterModal} className="filter-button">
                        Filter
                    </button>
                    <button onClick={resetFilters} className="reset-filter-button">
                        Reset Filters
                    </button>
                </div>

                <div className="appointments-list">
                    <table>
                        <thead>
                            <tr>
                                <th>Patient Name</th>
                                <th>Dentist</th>
                                <th>Service</th>
                                <th>Date/Time</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredAppointments.length > 0 ? (
                                filteredAppointments.map((appointment, index) => (
                                    <tr key={index}>
                                        <td>{appointment.patientName}</td>
                                        <td>{appointment.dentist}</td>
                                        <td>{appointment.service}</td>
                                        <td>{appointment.date}</td>
                                        <td>{appointment.status}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5">No appointments found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="calendar-section">
                <Calendar onChange={handleDateChange} />
            </div>

            {/* Filter Modal */}
            {isFilterModalOpen && (
                <div className="filter-modal">
                    <div className="filter-modal-content">
                        <h2>Filter Appointments</h2>
                        <div className="filter-section">
                            <h3>Dentist</h3>
                            {dentists.map((dentist) => (
                                <label key={dentist}>
                                    <input
                                        type="checkbox"
                                        name="dentist"
                                        value={dentist}
                                        checked={filters.dentist.includes(dentist)}
                                        onChange={handleFilterChange}
                                    />
                                    {dentist}
                                </label>
                            ))}
                        </div>

                        <div className="filter-section">
                            <h3>Service</h3>
                            {services.map((service) => (
                                <label key={service}>
                                    <input
                                        type="checkbox"
                                        name="service"
                                        value={service}
                                        checked={filters.service.includes(service)}
                                        onChange={handleFilterChange}
                                    />
                                    {service}
                                </label>
                            ))}
                        </div>

                        <div className="filter-section">
                            <h3>Status</h3>
                            {statuses.map((status) => (
                                <label key={status}>
                                    <input
                                        type="checkbox"
                                        name="status"
                                        value={status}
                                        checked={filters.status.includes(status)}
                                        onChange={handleFilterChange}
                                    />
                                    {status}
                                </label>
                            ))}
                        </div>

                        <button onClick={applyFilters} className="apply-filter-button">Apply Filters</button>
                        <button onClick={toggleFilterModal} className="close-modal-button">Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminAppointments;

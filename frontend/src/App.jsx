import {Routes, Route} from 'react-router-dom';
import '../styles/App.css';
import Home from'./landing pages/Home';
import Login from './landing pages/Login'
import Signup from './landing pages/Signup';
import AdminDashboard from './admin pages/AdminDashboard';
import AdminAppointments from './admin pages/AdminAppointments';
import AdminDentists from './admin pages/AdminDentists';
import AdminTransactions from './admin pages/AdminTransactions';
import AdminPatients from './admin pages/AdminPatients';


const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/appointments" element={<AdminAppointments />} />
        <Route path="/dentists" element={<AdminDentists />} />
        <Route path="/patients" element={<AdminPatients />} />
        <Route path="/transactions" element={<AdminTransactions />} />
      </Routes>
  );
};

export default App;



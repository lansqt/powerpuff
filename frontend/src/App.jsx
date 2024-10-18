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
import axios from 'axios';
import { Toaster } from 'react-hot-toast'

axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true



const App = () => {
  return (
      <>
      <Toaster position='bottom-right' toastOptions={{duration: 2000}} />
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
      </>
  );
};

export default App;



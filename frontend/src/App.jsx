import {Routes, Route} from 'react-router-dom';
import '../styles/App.css';
import Home from'./landing pages/Home';
import Login from './landing pages/Login'
import Signup from './landing pages/Signup';
import AdminDashboard from './admin pages/AdminDashboard';

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
  );
};

export default App;



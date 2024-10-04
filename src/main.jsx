import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import HomePage from '../src/frontend/App.jsx';  // Updated to ensure HomePage component is properly referenced
import './index.css';  // Link to the updated global CSS file

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomePage />  {/* Render the HomePage component */}
  </StrictMode>,
);

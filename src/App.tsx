
//import './style.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CollegeNavbar from './components/Navbar';
import Slideshow from './components/Slideshow';
import BodyContent from './components/BodyContent';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard'; 
const App: React.FC = () => {
  return (
    <Router>
      <div>
        {/* Common Navbar */}
        <CollegeNavbar />

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />  {/* Home page */}
          <Route path="/dashboard" element={<Dashboard />} />  {/* Page after sign-in */}
        </Routes>

        {/* Common Footer */}
        <Footer />
      </div>
    </Router>
  );
};
export default App;

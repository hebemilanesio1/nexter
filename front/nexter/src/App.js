import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/Homepage';
import About from './components/About';
import Services from './components/Services';
import Clients from './components/Clients';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import BusinessIntelligence from './components/BusinessIntelligence';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/business-intelligence" element={<BusinessIntelligence />} />
      </Routes>
    </Router>
  );
}

export default App;



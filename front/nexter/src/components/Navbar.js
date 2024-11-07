import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/nexter_logo.jpg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Nexter Logo" className="logo-image" /> {/* Agrega la imagen como logo */}
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">Sobre Nosotros</Link></li>
        <li><Link to="/services">Servicios</Link></li>
        <li><Link to="/clients">Clientes</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;



import React, { useState } from 'react';
import { FaHome, FaUserFriends, FaCalendarAlt, FaBox } from 'react-icons/fa';
import logo from '../assets/Logo.jpg';
import './NavBar.css';

const NavBar = ({ onViewChange }) => {
  return (
    <nav className="navbar">
      <div className="title">
        <span>Clinica Dental Knight</span>
        <img src={logo} alt="Logo" className="logo-clinica" />
      </div>
      <ul className="navbar-buttons">
        <li>
          <button className="nav-button" onClick={() => onViewChange('dashboard')}>
            <FaHome className="nav-icon" />
            Dashboard
          </button>
        </li>
        <li>
          <button className="nav-button">
            <FaUserFriends className="nav-icon" />
            Pacientes
          </button>
        </li>
        <li>
          <button className="nav-button">
            <FaCalendarAlt className="nav-icon" />
            Citas
          </button>
        </li>
        <li>
          <button className="nav-button">
            <FaBox className="nav-icon" />
            Inventario
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
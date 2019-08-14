import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/LOGOgirasoles.png';

import '../NavBar/Navbar.css';

const Navbar = () => (
  <header className="Navbar">
    <div className="Navbar__Logo">
      <img src={logo} alt="Logo" />
    </div>
    <div className="Navbar__Menu">
      <ul>
        <li>
          <Link to="/">
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/course-list">
            Lista de Salas
          </Link>
        </li>
        <li>
          <Link to="/students-data">
            Datos de Alumnos
          </Link>
        </li>
      </ul>
    </div>
  </header>
);

export default Navbar;
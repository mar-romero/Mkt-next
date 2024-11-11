// src/components/Header/Header.tsx
import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Header.module.scss';
import MiCuentaPopup from '../MiCuentaPopup/MiCuentaPopup';
import logo from '../../../public/images/Group3.png'; // Ajusta la ruta según sea necesario

const Header: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [showMiCuentaPopup, setShowMiCuentaPopup] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
    if (loggedIn) {
      setUsername(localStorage.getItem('username') || 'Usuario');
    }
  }, []);

  const handleLogout = () => {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    navigate('/');
  };

  const handleMisCursos = () => {
    navigate('/mycourse');
  };

  const handleMiCuenta = () => {
    setShowMiCuentaPopup(true);
  };
  return (
    <nav className={`navbar navbar-expand-lg  ${styles.navbarCustom}`}>
      <Link className={styles.navbarBrand} to="/">
        <img src={logo} alt="Logo" style={{ width: '50px', height: 'auto' }} />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className={styles.navLink} to="/">
              Inicio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={styles.navLink} to="/cursos">
              Cursos
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={styles.navLink} to="/membresia">
              Membresías
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={styles.navLink} to="/empresa">
              Empresas
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={styles.navLink} to="/sobre-nosotros">
              Sobre Nosotros
            </NavLink>
          </li>
        </ul>
        <ul className={`navbar-nav ml-auto ${styles.loginLink}`}>
          {isLoggedIn ? (
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic" className={styles.dropdownToggleCustom}>
                {username}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={handleMisCursos}>Mis Cursos</Dropdown.Item>
                <Dropdown.Item onClick={handleMiCuenta}>Mi Cuenta</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleLogout}>Cerrar Sesión</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <li className="nav-item">
              <NavLink className={styles.navLink} to="/login">
                Iniciar Sesión/Registrarse
              </NavLink>
            </li>
          )}
        </ul>
      </div>

      <MiCuentaPopup show={showMiCuentaPopup} onHide={() => setShowMiCuentaPopup(false)} />
    </nav>
  );
};

export default Header;
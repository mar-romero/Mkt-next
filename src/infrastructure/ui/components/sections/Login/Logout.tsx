import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('isLoggedIn'); // Borra el estado de inicio de sesión del localStorage
    navigate('/'); // Redirige al usuario a la página de inicio
  }, [navigate]);

  return null;
};

export default Logout;

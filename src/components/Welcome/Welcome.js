import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css';

const Welcome = () => {
  return (
    <div className="welcome-container">
       <img src="/logoSomary-removebg-preview.png" alt="Marca Somary" className="menu-brand-image" />
      <h1>¡Bienvenido a Somary!</h1>
      <p>Descubre nuestras colecciones exclusivas de moda.</p>
      <Link to="/Products" className="welcome-button">
        Ver Productos
      </Link>
      
    </div>

  );
  
};

export default Welcome;


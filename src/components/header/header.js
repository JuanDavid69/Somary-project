import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Configuración de Helmet para SEO */}
      <Helmet>
        <title>Bienvenidos a SOMARY - Moda Urbana y Confort</title>
        <meta name="description" content="Explora SOMARY, la marca de moda urbana que ofrece calidad y estilo con productos exclusivos y confortables." />
        <meta name="keywords" content="SOMARY, moda urbana, ropa de calidad, estilo exclusivo, confort, moda actual" />
      </Helmet>

      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <a href="/" className="logo-link">
          <img src="/logoSomary-removebg-preview.png" alt="Logo Somary" className="logo" />
        </a>
        <div className="menu-icon" onClick={toggleMenu}>
          ☰ {/* Icono de menú */}
        </div>
        <nav className="nav-menu">
          <ul className={isMenuOpen ? 'active' : ''}>
            <li><a href="/" onClick={toggleMenu}>Inicio</a></li>
            <li><a href="/products" onClick={toggleMenu}>Productos</a></li>
            <li><a href="/about" onClick={toggleMenu}>Sobre Nosotros</a></li>
            <li><a href="/contact" onClick={toggleMenu}>Contáctenos</a></li>
            <li className="menu-image">
              <img src="/logoSomary-removebg-preview.png" alt="Marca Somary" className="menu-brand-image" />
            </li>
          </ul>
        </nav>
      </header>

      {/* Banner con GIF solo en la página de inicio */}
      {location.pathname === '/' && (
        <div className="video-banner">
          <video autoPlay loop muted className="banner-video">
            <source src="/VID-20241029-WA0011.mp4" type="video/mp4" />
            Tu navegador no soporta videos HTML5.
          </video>
        </div>
      )}
    </>
  );
};

export default Header;

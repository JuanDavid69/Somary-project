import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <h2>Nuestras redes sociales</h2>
        <a href="https://www.facebook.com/people/Somary/100084801674131/?mibextid=qi2Omg&rdid=66mSmxMfS5iZJCAZ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FNEXazwnorEsDiWxy%2F%3Fmibextid%3Dqi2Omg" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/s_o_m_a_r_y/?igsh=MW0zMjA3MXkwYmtiNg%3D%3D" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://api.whatsapp.com/send?phone=573125251999" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
      </div>
      <div className="contact-info">
        <p>Teléfono: +57 3125251999</p>
        <p>Email: contacto@somary.com</p>
        
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Helmet } from 'react-helmet';
import './contac.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <Helmet>
        <title>Contacto - SOMARY</title>
        <meta name="description" content="Ponte en contacto con SOMARY para cualquier pregunta o comentario. Completa nuestro formulario de contacto para obtener ayuda y más información sobre nuestros productos." />
        <meta name="keywords" content="SOMARY, contacto, formulario de contacto, ayuda, ropa, moda" />
      </Helmet>

      <div className="video-banner">
        <video autoPlay loop muted className="banner-video">
          <source src="/VID-20241024-WA0018.mp4" type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
      </div>
      
      <div className="contact-info">
        <h2>Contáctenos</h2>
        <p>
          Si tienes alguna pregunta o comentario, por favor completa el siguiente formulario. Estaremos encantados de ayudarte.
        </p>
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLSc-gIhKAuZ92PFvC4Bl-V1lDsHvVLdjTVyWTta9IRP7VXz7eg/viewform?embedded=true" 
          title="Formulario de contacto con somary" 
          width="640" 
          height="880" 
          frameBorder="0" 
          marginHeight="0" 
          marginWidth="0">
          Cargando…
        </iframe>
      </div>
    </div>
  );
};

export default Contact;


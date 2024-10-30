import React from 'react';
import { Helmet } from 'react-helmet';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <Helmet>
        <title>Sobre Nosotros - SOMARY</title>
        <meta name="description" content="Conoce más sobre SOMARY, nuestra misión y visión en el mundo de la moda." />
        <meta name="keywords" content="SOMARY, ropa, moda, calidad, misión, visión, exclusividad" />
      </Helmet>

      {/* Banner de video */}
      <div className="video-banner">
      <video autoPlay loop muted className="banner-video">
       <source src={`${process.env.PUBLIC_URL}/VID-20241024-WA0017.mp4`} type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
        </div>
      
      {/* Sección de información de la marca */}
      <section className="about-info">
        <div className="about-text">
          <h2 className="titulo-colorido">
            <span className="color-uno">Sobre</span> 
            <span className="color-dos">Nosotros</span>
          </h2>
          <p>
            Somos SOMARY, una marca de ropa que prioriza la calidad y comodidad para nuestros clientes. Somos fabricantes directos, comprometidos a brindar la mejor experiencia a nuestros clientes.
          </p>
        </div>
        <div className="img-somary">
  <img src={`${process.env.PUBLIC_URL}/logoSomary-removebg-preview.png`} alt="Logo de SOMARY" />
    </div>
      </section>

      <div className="about-video">
  <video autoPlay loop muted className="about-extra-video">
    <source src={`${process.env.PUBLIC_URL}/VID-20241029-WA0006.mp4`} type="video/mp4" />
    Tu navegador no soporta videos HTML5.
  </video>
</div>

      {/* Sección de misión */}
      <section className="about-info">
        <div className="about-text-mision">
          <h2 className="color-mision">Misión</h2>
          <p>
            Nuestra misión es brindar confianza y calidad a nuestros clientes con cada una de nuestras prendas, utilizando los mejores materiales y diseños exclusivos.
          </p>
          <div className="img-somary-black">
            <img src={`${process.env.PUBLIC_URL}/IMG-20241024-WA0016.jpg`} alt="SOMARY misión" />
          </div>
        </div>
      </section>

      {/* Sección de visión */}
      <section className="about-info">
        <div className="about-text-mision">
          <h2 className="color-mision">Visión</h2>
          <p>
            En SOMARY, creemos que la moda va más allá de la ropa; es una expresión de identidad y una declaración de propósito. Nuestra visión es transformar el mundo de la moda con un enfoque en sostenibilidad, innovación y autenticidad.
          </p>
        </div>
      </section>

      <div className="about-video">
  <video autoPlay loop muted className="about-extra-video">
    <source src={`${process.env.PUBLIC_URL}/VID-20241029-WA0005.mp4`} type="video/mp4" />
    Tu navegador no soporta videos HTML5.
  </video>
</div>
    </div>
  );
};

export default About;

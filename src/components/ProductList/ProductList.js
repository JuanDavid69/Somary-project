// src/components/ProductList/ProductList.js
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import './ProductList.css';

const ProductList = () => {
  // Estado para controlar el modal
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Lista de productos
  const products = [
    {
      id: 1,
      name: 'Conjunto boxyfit negro',
      description: 'Conjunto exclusivo color negro perfecto para cualquier día.',
      price: '$60.000',
      image: "/img1.png"
    },
    {
      id: 2,
      name: 'Conjunto boxyfit gris',
      description: 'Descripción detallada del producto 2',
      price: '$60.000',
      image: "/img2.png"
    },
    {
      id: 3,
      name: 'Conjunto boxyfit gris',
      description: 'Descripción detallada del producto 2',
      price: '$60.000',
      image: "/img3.png"
    },
    {
      id: 4,
      name: 'Conjunto boxyfit gris',
      description: 'Descripción detallada del producto 2',
      price: '$60.000',
      image: "/img4.png"
    },
    {
      id: 5,
      name: 'Conjunto boxyfit gris',
      description: 'Descripción detallada del producto 2',
      price: '$60.000',
      image: "/img5.png"
    }
  ];

  // Función para abrir el modal con el producto seleccionado
  const handleOpenModal = (product) => {
    setSelectedProduct(product);
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="product-page">
      <Helmet>
        <title>Nuestros Diseños - SOMARY</title>
        <meta name="description" content="Explora nuestra colección de conjuntos boxyfit en distintos colores y estilos. Diseños exclusivos y de alta calidad para el día a día." />
        <meta name="keywords" content="ropa, boxyfit, conjuntos, moda, diseño, Somary" />
      </Helmet>

      <div className="video-banner">
        <video autoPlay loop muted className="banner-video">
          <source src="/VID-20241024-WA0014.mp4" type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
      </div>

      <h2 className="product-heading">Nuestros Diseños</h2>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-item" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={() => handleOpenModal(product)}>Ver detalles</button>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={handleCloseModal}>&times;</span>
            <img src={selectedProduct.image} alt={selectedProduct.name} className="modal-image" />
            <h3>{selectedProduct.name}</h3>
            <p>{selectedProduct.description}</p>
            <p>{selectedProduct.price}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;

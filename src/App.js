// src/App.js
import './App.css';
import { BrowserRouter as Router, HashRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts';
import './components/FeaturedProducts/FeaturedProducts.css';
import About from './components/About/About';
import ProductList from './components/ProductList/ProductList';
import Contact from './components/Contact/contac'; // Asegúrate de que el nombre del archivo sea correcto
import Footer from './components/Footer/Footer';
import Welcome from './components/Welcome/Welcome';

// Definir el Router condicionalmente
const RouterComponent = process.env.NODE_ENV === 'production' ? HashRouter : Router;

function App() {
  return (
    <RouterComponent>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Welcome />
            <div className="home-video">
              <video autoPlay loop muted className="home-banner-video">
                <source src={`${process.env.PUBLIC_URL}/VID-20241024-WA0019.mp4`} type="video/mp4" />
                Tu navegador no soporta videos HTML5.
              </video>
            </div>
            <FeaturedProducts />
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </RouterComponent>
  );
}

export default App;


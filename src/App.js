// src/App.js
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts';
import './components/FeaturedProducts/FeaturedProducts.css'
import About from './components/About/About';
import ProductList from './components/ProductList/ProductList';
import Contact from './components/Contact/contac';
import Footer from './components/Footer/Footer';
import Welcome from './components/Welcome/Welcome';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<><Welcome />
          <div className="home-video">
                <video autoPlay loop muted className="home-banner-video">
                  <source src="/VID-20241024-WA0019.mp4" type="video/mp4" />
                  Tu navegador no soporta videos HTML5.
                </video>
              </div>
        <FeaturedProducts /></>} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


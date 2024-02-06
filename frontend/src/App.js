import './Styles/styles.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import Sidebar from './components/Sidebar';
import Products from './pages/Products'; // Import the Products page
import ProductDetailPage from './pages/ProductDetailPage'; // Import the ProductDetailPage component

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />

        <div className="content-container">
          {/* Main content area */}
          <div className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/products" element={<Products />} /> {/* Add the Products route */}
              <Route path="/products/:productId" element={<ProductDetailPage />} /> {/* Add the ProductDetailPage route */}
            </Routes>
          </div>

          {/* Include the Sidebar component */}
          <div className="sidebar">
            <Sidebar greeting="Hi" />
          </div>
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default App;

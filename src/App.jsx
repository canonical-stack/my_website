// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/home/Home';
import Services from './pages/services/Services';
import Portfolio from './pages/portfolio/Portfolio';
// import About from './pages/About';
// import Contact from './pages/Contact';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />  */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
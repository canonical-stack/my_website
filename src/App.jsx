// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/home/Home';
import Services from './pages/services/Services.jsx'
import ServiceDetail from './pages/services/components/ServiceDetail';
import Portfolio from './pages/portfolio/Portfolio';
import ProjectDetail from './pages/portfolio/components/ProjectDetail';
import Price from './pages/price/Price';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:id" element={<ProjectDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/price" element={<Price />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
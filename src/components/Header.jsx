// src/components/Header.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header>
        <h1 className="site-heading text-center text-faded d-none d-lg-block">
          <span className="site-heading-upper text-primary mb-3">IT-решения для бизнеса</span>
          <span className="site-heading-lower">Ваша IT-компания</span>
        </h1>
      </header>

      <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
        <div className="container">
          <Link className="navbar-brand text-uppercase fw-bold d-lg-none" to="/">
            Ваша IT-компания
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item px-lg-4">
                <Link
                  className={`nav-link text-uppercase ${isActive('/') ? 'active' : ''}`}
                  to="/"
                >
                  Главная
                </Link>
              </li>
              <li className="nav-item px-lg-4">
                <Link
                  className={`nav-link text-uppercase ${isActive('/services') ? 'active' : ''}`}
                  to="/services"
                >
                  Услуги
                </Link>
              </li>
              <li className="nav-item px-lg-4">
                <Link
                  className={`nav-link text-uppercase ${isActive('/portfolio') ? 'active' : ''}`}
                  to="/portfolio"
                >
                  Портфолио
                </Link>
              </li>
              <li className="nav-item px-lg-4">
                <Link
                  className={`nav-link text-uppercase ${isActive('/price') ? 'active' : ''}`}
                  to="/price"
                >
                  Тарифы
                </Link>
              </li>
              <li className="nav-item px-lg-4">
                <Link
                  className={`nav-link text-uppercase ${isActive('/about') ? 'active' : ''}`}
                  to="/about"
                >
                  О нас
                </Link>
              </li>
              <li className="nav-item px-lg-4">
                <Link
                  className={`nav-link text-uppercase ${isActive('/contact') ? 'active' : ''}`}
                  to="/contact"
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
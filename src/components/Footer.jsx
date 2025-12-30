// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css'; // ← импортируем модуль

const Footer = () => {
  return (
    <footer className={`footer text-center text-lg-start py-5 ${styles.customFooter}`}>
      <div className="container">
        <div className="row">
          {/* Колонка 1: О компании */}
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 className={`text-uppercase ${styles.heading}`}>О компании</h5>
            <ul className="list-unstyled mb-0">
              <li className="mb-1">
                <Link to="/about" className={`text-decoration-none ${styles.link}`}>О нас</Link>
              </li>
              <li className="mb-1">
                <Link to="/portfolio" className={`text-decoration-none ${styles.link}`}>Портфолио</Link>
              </li>
              <li className="mb-1">
                <Link to="/contact" className={`text-decoration-none ${styles.link}`}>Контакты</Link>
              </li>
            </ul>
          </div>

          {/* Колонка 2: Услуги */}
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 className={`text-uppercase ${styles.heading}`}>Услуги</h5>
            <ul className="list-unstyled mb-0">
              <li className="mb-1">
                <Link to="/services/crm" className={`text-decoration-none ${styles.link}`}>CRM/ERP</Link>
              </li>
              <li className="mb-1">
                <Link to="/services/web" className={`text-decoration-none ${styles.link}`}>Веб-приложения</Link>
              </li>
              <li className="mb-1">
                <Link to="/services/support" className={`text-decoration-none ${styles.link}`}>Техподдержка</Link>
              </li>
              <li className="mb-1">
                <Link to="/services/security" className={`text-decoration-none ${styles.link}`}>Кибербезопасность</Link>
              </li>
              <li className="mb-1">
                <Link to="/services" className={`text-decoration-none ${styles.link}`}>Все услуги</Link>
              </li>
            </ul>
          </div>

          {/* Колонка 3: Портфолио */}
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 className={`text-uppercase ${styles.heading}`}>Портфолио</h5>
            <ul className="list-unstyled mb-0">
              <li className="mb-1">
                <Link to="/portfolio" className={`text-decoration-none ${styles.link}`}>Все проекты</Link>
              </li>
              <li className="mb-1">
                <Link to="/portfolio?category=crm" className={`text-decoration-none ${styles.link}`}>CRM / ERP</Link>
              </li>
              <li className="mb-1">
                <Link to="/portfolio?category=web" className={`text-decoration-none ${styles.link}`}>Веб-приложения</Link>
              </li>
              <li className="mb-1">
                <Link to="/portfolio" className={`text-decoration-none ${styles.link}`}>Отзывы клиентов</Link>
              </li>
            </ul>
          </div>

          {/* Колонка 4: Контакты */}
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 className={`text-uppercase ${styles.heading}`}>Контакты</h5>
            <address className={`mb-2 ${styles.contact}`}>
              <strong>г. Москва, ул. Ленина, 123</strong><br />
              Офис в бизнес-центре «ТехноПарк»<br /><br />
              <strong>Телефон:</strong><br />
              <a href="tel:+78612560809" className={`text-decoration-none ${styles.link}`}>
                +7 (861) 256-08-09
              </a><br /><br />
              <strong>Email:</strong><br />
              <a href="mailto:info@вашсайт.рф" className={`text-decoration-none ${styles.link}`}>
                info@вашсайт.рф
              </a>
            </address>
          </div>
        </div>

        {/* Копирайт */}
        <hr className="my-4" />
        <div className="row">
          <div className="col text-center">
            <p className={`m-0 small ${styles.copyright}`}>
              Copyright &copy; Ваша IT-компания {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
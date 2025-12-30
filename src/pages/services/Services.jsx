// src/pages/Services.jsx
import React, { useEffect, useRef } from 'react';
import ServiceBlock from './components/ServiceBlock';
import { services } from '../../data/servicesData';
import styles from './Services.module.css';

const Services = () => {
  const blockRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    // Сохраняем текущие ссылки
    const currentBlockRefs = blockRefs.current;

    // Используем currentBlockRefs
    currentBlockRefs.forEach((ref) => {
      if (ref) {
        ref.classList.add(styles.fadeInLeft);
        observer.observe(ref);
      }
    });

    return () => {
      // Используем currentBlockRefs
      currentBlockRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="page-section">
      {/* Заголовок H1 */}
      <div className="container text-center mb-5">
        <h1 className="section-heading">
          <span className="section-heading-h1">УСЛУГИ</span>
        </h1>
      </div>

      {/* Блоки услуг */}
      <div className="container">
        {services.map((service, index) => (
          <div
            key={service.id}
            ref={(el) => (blockRefs.current[index] = el)}
            className={styles.fadeInLeft}
          >
            <ServiceBlock
              image={service.image}
              title={service.title}
              description={service.description}
              link={service.link} // ← добавлено
              reverse={index % 2 === 1}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
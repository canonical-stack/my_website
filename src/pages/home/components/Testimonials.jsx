// src/components/Testimonials.jsx
import { useState, useEffect, useRef } from 'react';
import styles from './Testimonials.module.css'; 
import { testimonials } from '../../../data/testimonials';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef(null);
  

 
const totalSlides = testimonials.length;
  // Автопрокрутка
  useEffect(() => {
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 6000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  // Позиция трека
  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  return (
    <section className="page-section">
      <div className="container">
        <h2 className="section-heading text-center mb-5">
          <span className="section-heading-upper">Отзывы клиентов</span>
        </h2>
        <div className={styles.testimonialSlider}>
          <button className={`${styles.slideNav} ${styles.prev}`} onClick={goToPrev}>
            ‹
          </button>
          <div className={styles.testimonialTrack} ref={trackRef}>
            {testimonials.map((item, index) => (
  <div 
    className={styles.testimonialSlide} 
    key={index}
    style={{ backgroundColor: item.bgColor }}
  >
    <div className={styles.testimonialCard}>
      <p className={styles.testimonialText}>{item.text}</p>
      <p className={styles.testimonialAuthor}>— {item.author}</p>
    </div>
  </div>
))}
          </div>
          <button className={`${styles.slideNav} ${styles.next}`} onClick={goToNext}>
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
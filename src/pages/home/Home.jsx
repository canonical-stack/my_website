// src/pages/Home.jsx
import React, { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';
import Testimonials from './components/Testimonials';
import { services } from '../../data/servicesData'
import ContactModal from '../../components/ContactModal';



const Home = () => {
  const featureRefs = useRef([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const topServices = services
      .filter(s => [1, 2, 3, 4].includes(s.id))
      .map(s => ({
        title: s.title.replace('ВНЕДРЕНИЕ ', '').replace('РАЗРАБОТКА ', ''),
        description: s.description,
        link: s.link
      }));

  useEffect(() => {
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Найти индекс карточки
            const index = featureRefs.current.indexOf(entry.target);
            if (index !== -1) {
              // Установить задержку: 100 мс между карточками
              entry.target.style.setProperty('--delay', `${index * 100}ms`);
              entry.target.classList.add(styles.animate);
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      featureRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const features = [
    { title: 'Быстро', desc: 'Решаем задачи в сжатые сроки без потери качества.' },
    { title: 'Надёжно', desc: 'Гарантируем стабильность и поддержку после запуска.' },
    { title: 'Экономия', desc: 'Помогаем снизить расходы за счёт автоматизации.' },
    { title: 'Опыт', desc: 'Более 5 лет в IT-сфере и сотни успешно реализованных проектов.' },
  ];
  return (
    <div>
      <section className={`page-section clearfix ${styles.home}`}>
        {/* Верхняя часть: изображение + наложенный текст */}
        <div className="container">
          <div className="intro">
            <img
              className="intro-img img-fluid mb-3 mb-lg-0 rounded"
              src="/assets/img/intro.jpg"
              alt="IT-услуги"
            />
            <div className="intro-text left-0 text-center bg-faded p-5 rounded">
              <h2 className="section-heading mb-4">
                <span className="section-heading-upper">Надёжные IT-решения</span>
                <span className="section-heading-lower">Для вашего бизнеса</span>
              </h2>
              <p className="mb-3">
                Мы помогаем компаниям внедрять современные технологии, автоматизировать процессы и повышать эффективность.
              </p>
              <div className="intro-button mx-auto">
                <a className="btn btn-primary btn-xl" href="/contact">
                  Связаться с нами
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Нижняя часть: блок "Почему выбирают нас */}
      {/* Блок: Почему выбирают нас */}
      <section className="container mt-5">
        <h2 className="section-heading text-center mb-4">
          <span className="section-heading-upper">Почему выбирают нас</span>
        </h2>
        <div className="row justify-content-center">
          {features.map((feature, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div
                ref={(el) => (featureRefs.current[index] = el)}
                className={`feature-box p-3 text-center h-100 bg-faded ${styles.featureCard}`}
              >
                <h5>{feature.title}</h5>
                <p>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Наши услуги */}
      {/* Популярные услуги */}
      <section className="page-scale bg-faded">
        <div className={`container ${styles.heading}`}>
          <h2 className="section-heading text-center mb-5">
            <span className="section-heading-upper">Популярные услуги</span>
            <span className="section-heading-lower">Наши решения для бизнеса</span>
          </h2>

          <div className="row text-center">
            {topServices.map((service, index) => (
              <div className="col-lg-3 col-md-6 mb-4" key={index}>
                <div className={`p-4 bg-white rounded h-100 ${styles.serviceCard}`}>
                  <h5 className="mb-3">{service.title}</h5>
                  <p className="text-muted">{service.description}</p>
                  <a href={service.link} className="btn btn-outline-primary mt-2">
                    Подробнее
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Призыв к действию (CTA) */}
     <section className="page-section cta">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <div className="cta-inner bg-faded text-center rounded">
                <h2 className="section-heading mb-3">
                  <span className="section-heading-upper">Готовы начать?</span>
                  <span className="section-heading-lower">Получите бесплатную консультацию уже сегодня!</span>
                </h2>
                <div className="mt-4">
                  {/* Кнопка теперь вызывает модалку */}
                  <button
                    className="btn btn-primary btn-xl"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Получить консультацию
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Модальное окно */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Получить консультацию"
      />

    </div>


  );
};

export default Home;
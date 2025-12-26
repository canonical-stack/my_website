// src/pages/Services.jsx
import React from 'react';

const Services = () => {
  return (
    <>
      <section className="page-section">
        <div className="container">
          <div className="product-item">
            <div className="product-item-title d-flex">
              <div className="bg-faded p-5 d-flex ms-auto rounded">
                <h2 className="section-heading mb-0">
                  <span className="section-heading-upper">Разработка с нуля</span>
                  <span className="section-heading-lower">Веб-сайты и приложения</span>
                </h2>
              </div>
            </div>
            <img
              className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
              src="/assets/img/services-01.jpg"
              alt="Веб-разработка"
            />
            <div className="product-item-description d-flex me-auto">
              <div className="bg-faded p-5 rounded">
                <p className="mb-0">
                  Создаём современные, адаптивные и быстрые сайты под ключ: от лендингов до сложных веб-приложений.
                  Используем актуальные технологии и следуем лучшим практикам.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="product-item">
            <div className="product-item-title d-flex">
              <div className="bg-faded p-5 d-flex me-auto rounded">
                <h2 className="section-heading mb-0">
                  <span className="section-heading-upper">Техническая поддержка</span>
                  <span className="section-heading-lower">Для бизнеса</span>
                </h2>
              </div>
            </div>
            <img
              className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
              src="/assets/img/services-02.jpg"
              alt="Техподдержка"
            />
            <div className="product-item-description d-flex ms-auto">
              <div className="bg-faded p-5 rounded">
                <p className="mb-0">
                  Обеспечиваем бесперебойную работу ваших IT-систем: мониторинг, устранение сбоев, обновления,
                  резервное копирование и консультации. Поддержка 24/7 по договору.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="product-item">
            <div className="product-item-title d-flex">
              <div className="bg-faded p-5 d-flex ms-auto rounded">
                <h2 className="section-heading mb-0">
                  <span className="section-heading-upper">Интеграция и автоматизация</span>
                  <span className="section-heading-lower">Бизнес-процессов</span>
                </h2>
              </div>
            </div>
            <img
              className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
              src="/assets/img/services-03.jpg"
              alt="Автоматизация"
            />
            <div className="product-item-description d-flex me-auto">
              <div className="bg-faded p-5 rounded">
                <p className="mb-0">
                  Автоматизируем рутинные задачи: CRM, учёт, документооборот, отчётность. Интегрируем ваши системы между
                  собой и с внешними сервисами — быстро, надёжно, без потерь.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
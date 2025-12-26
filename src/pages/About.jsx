// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <>
      {/* CTA Section — "We're Open" */}
      <section className="page-section cta">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <div className="cta-inner bg-faded text-center rounded">
                <h2 className="section-heading mb-5">
                  <span className="section-heading-upper">Готовы к работе</span>
                  <span className="section-heading-lower">Мы на связи</span>
                </h2>
                <ul className="list-unstyled list-hours mb-5 text-left mx-auto">
                  <li className="list-unstyled-item list-hours-item d-flex">
                    Воскресенье
                    <span className="ms-auto">Выходной</span>
                  </li>
                  <li className="list-unstyled-item list-hours-item d-flex">
                    Понедельник
                    <span className="ms-auto">9:00 – 18:00</span>
                  </li>
                  <li className="list-unstyled-item list-hours-item d-flex">
                    Вторник
                    <span className="ms-auto">9:00 – 18:00</span>
                  </li>
                  <li className="list-unstyled-item list-hours-item d-flex">
                    Среда
                    <span className="ms-auto">9:00 – 18:00</span>
                  </li>
                  <li className="list-unstyled-item list-hours-item d-flex">
                    Четверг
                    <span className="ms-auto">9:00 – 18:00</span>
                  </li>
                  <li className="list-unstyled-item list-hours-item d-flex">
                    Пятница
                    <span className="ms-auto">9:00 – 18:00</span>
                  </li>
                  <li className="list-unstyled-item list-hours-item d-flex">
                    Суббота
                    <span className="ms-auto">10:00 – 16:00</span>
                  </li>
                </ul>
                <p className="address mb-5">
                  <em>
                    <strong>г. Краснодар, ул. Ленина, 123</strong>
                    <br />
                    Офис в бизнес-центре «ТехноПарк»
                  </em>
                </p>
                <p className="mb-0">
                  <small><em>Звоните в любое время</em></small>
                  <br />
                  +7 (861) 256-08-09
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="page-section about-heading">
        <div className="container">
          <img
            className="img-fluid rounded about-heading-img mb-3 mb-lg-0"
            src="/assets/img/about.jpg"
            alt="О нас"
          />
          <div className="about-heading-content">
            <div className="row">
              <div className="col-xl-9 col-lg-10 mx-auto">
                <div className="bg-faded rounded p-5">
                  <h2 className="section-heading mb-4">
                    <span className="section-heading-upper">Надёжные IT-решения</span>
                    <span className="section-heading-lower">О нашей компании</span>
                  </h2>
                  <p>
                    Мы работаем с 2015 года, помогая бизнесу автоматизировать процессы, внедрять цифровые решения
                    и повышать эффективность. Наша команда — сертифицированные специалисты с опытом в веб-разработке,
                    кибербезопасности и технической поддержке.
                  </p>
                  <p className="mb-0">
                    Мы гарантируем прозрачность, чёткие сроки и поддержку даже после завершения проекта.
                    Доверьте ваш IT нам — и сосредоточьтесь на развитии бизнеса.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
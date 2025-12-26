// src/pages/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <>
      {/* CTA Section — "We're Open" → переименуем в "Свяжитесь с нами" */}
      <section className="page-section cta">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <div className="cta-inner bg-faded text-center rounded">
                <h2 className="section-heading mb-5">
                  <span className="section-heading-upper">Готовы к сотрудничеству?</span>
                  <span className="section-heading-lower">Свяжитесь с нами</span>
                </h2>
                <ul className="list-unstyled list-hours mb-5 text-left mx-auto">
                  <li className="list-unstyled-item list-hours-item d-flex">
                    Воскресенье
                    <span className="ms-auto">Выходной</span>
                  </li>
                  <li className="list-unstyled-item list-hours-item d-flex">
                    Понедельник – Пятница
                    <span className="ms-auto">9:00 – 18:00</span>
                  </li>
                  <li className="list-unstyled-item list-hours-item d-flex">
                    Суббота
                    <span className="ms-auto">По предварительной договорённости</span>
                  </li>
                </ul>
                <p className="address mb-5">
                  <em>
                    <strong>г. Краснодар, ул. Ленина, 123</strong>
                    <br />
                    Бизнес-центр «ТехноПарк», офис 5
                  </em>
                </p>
                <p className="mb-0">
                  <small><em>Пишите или звоните в любое время</em></small>
                  <br />
                  +7 (861) 256-08-09
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Форма обратной связи (заглушка) */}
      <section className="page-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <div className="bg-faded rounded p-5">
                <h2 className="section-heading mb-4 text-center">
                  <span className="section-heading-upper">Оставить заявку</span>
                  <span className="section-heading-lower">Обратная связь</span>
                </h2>
                <form id="contactForm" /* action можно добавить позже */>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      id="name"
                      type="text"
                      placeholder="Ваше имя"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      id="email"
                      type="email"
                      placeholder="Email или Telegram"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      id="message"
                      placeholder="Опишите задачу"
                      rows="5"
                      required
                    ></textarea>
                  </div>
                  <div className="d-grid">
                    <button className="btn btn-primary btn-xl" type="submit">
                      Отправить заявку
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
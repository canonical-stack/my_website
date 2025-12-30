// src/pages/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <>
      {/* CTA Section — "Свяжитесь с нами" */}
      <section className="page-section cta">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <div className="cta-inner bg-faded text-center rounded">
                <h2 className="section-heading mb-5">
                  <span className="section-heading-upper">Готовы к сотрудничеству?</span>
                  <span className="section-heading-lower">Свяжитесь с нами</span>
                </h2>
                <p className="address mb-4">
                  <em>
                    <strong>г. Москва, ул. Тверская, 15</strong>
                    <br />
                    Бизнес-центр «Премьер», офис 12
                  </em>
                </p>
                <p className="mb-0">
                  <small><em>Пишите или звоните в любое время — ответим в течение часа</em></small>
                  <br />
                  +7 (495) 032-77-90
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Форма обратной связи */}
      <section className="page-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <div className="bg-faded rounded p-5">
                <h2 className="section-heading mb-4 text-center">
                  <span className="section-heading-upper">Оставить заявку</span>
                  <span className="section-heading-lower">Обратная связь</span>
                </h2>
                <form id="contactForm">
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
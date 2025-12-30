// src/components/ContactModal.jsx
import React from 'react';

const ContactModal = ({ isOpen, onClose, serviceTitle }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь можно добавить отправку формы позже
    alert('Форма отправлена!');
    onClose();
  };

  return (
    <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050 }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          {/* Крестик закрытия */}
          <button
            type="button"
            className="btn-close"
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              zIndex: 1,
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              opacity: 0.7,
              color: '#000'
            }}
          >
            ×
          </button>

          <div className="bg-faded rounded p-5" style={{ position: 'relative' }}>
            <h2 className="section-heading mb-4 text-center">
              <span className="section-heading-upper">Оставить заявку</span>
              <span className="section-heading-lower">Обратная связь</span>
            </h2>

            <form id="contactForm" onSubmit={handleSubmit}>
              {serviceTitle && (
                <input type="hidden" name="service" value={serviceTitle} />
              )}

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
  );
};

export default ContactModal;
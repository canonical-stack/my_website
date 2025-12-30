// src/pages/ServiceDetail.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { services } from '../../../data/servicesData';
import { Link } from 'react-router-dom';
import ContactModal from '../../../components/ContactModal';

const ServiceDetail = () => {
    const { slug } = useParams();
    const [isModalOpen, setIsModalOpen] = useState(false); // ← состояние модалки

    const service = services.find(s => s.link === `/services/${slug}`);

    if (!service) {
        return (
            <section className="page-section">
                <div className="container text-center py-5">
                    <h2>Услуга не найдена</h2>
                    <p className="text-muted">
                        <Link to="/services" className="btn btn-link">← Вернуться к услугам</Link>
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section className="page-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <Link to="/services" className="d-inline-block mb-3">
                            ← К списку услуг
                        </Link>

                        <h1 className="section-heading mb-4 text-center">
                            <span className="section-heading-upper">{service.title}</span>
                        </h1>

                        <div className="text-center mb-4">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="img-fluid rounded"
                                style={{ maxHeight: '400px', objectFit: 'cover' }}
                            />
                        </div>

                        <div className="bg-faded p-4 p-md-5 rounded">
                            <div className="text-center mb-4">
                                <p className="h4 mb-1">От <strong>{service.priceFrom.toLocaleString('ru-RU')} ₽</strong></p>
                                <p className="text-muted small">
                                    {service.priceFrom >= 100000
                                        ? 'Полная стоимость рассчитывается индивидуально после аудита'
                                        : 'в месяц'}
                                </p>
                            </div>

                            <div className="mb-4">
                                <h3 className="mb-3">Описание</h3>
                                <div style={{ whiteSpace: 'pre-line', lineHeight: '1.8' }}>
                                    {service.fullDescription}
                                </div>
                            </div>

                            {/* Кнопка "Заказать услугу" — открывает модалку */}
                            <div className="text-center">
                                <button
                                    className="btn btn-primary btn-xl me-3"
                                    onClick={() => setIsModalOpen(true)}
                                >
                                    Заказать услугу
                                </button>

                                <a
                                    href="tel:+78612560809"
                                    className="btn btn-outline-primary btn-xl"
                                >
                                    Позвонить
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Модальное окно */}
            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                serviceTitle={service.title} // ← передаём название услуги
            />
        </section>
    );
};

export default ServiceDetail;
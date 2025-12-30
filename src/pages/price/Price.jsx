// src/pages/Price.jsx
import React from 'react';

const Price = () => {
    return (
        <>
            {/* H1 заголовок */}
            <div className="container my-4">
                <h1 className="text-center mb-4">Цены на IT-услуги</h1>
            </div>

            {/* Вводный текст */}
            <section className="page-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9 text-center">
                            <p className="lead mb-4">
                                Стоимость каждого проекта рассчитывается индивидуально — ведь у каждого бизнеса свои задачи.
                                Ниже приведены ориентировочные диапазоны для типовых решений. Точную смету подготовим бесплатно после аудита.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Прайс-блоки */}
            <section className="page-section cta">
                <div className="container">
                    <div className="row text-center">

                        {/* Услуга 1: Внедрение CRM/ERP */}
                        <div className="col-lg-6 mb-5">
                            <div className="service-card p-4 bg-white rounded h-100">
                                <h3 className="mb-3">Внедрение CRM / ERP</h3>
                                <p className="text-muted mb-3">
                                    Автоматизация продаж, учёта клиентов, склада, финансов и отчётности.
                                </p>
                                <p className="h5 mb-3">
                                    <strong>от 90 000 ₽</strong>
                                </p>
                                <p className="text-muted small mb-3">
                                    Типовой проект для малого бизнеса (до 10 пользователей).<br />
                                    Срок: от 2 недель.
                                </p>
                                <a href="/contact" className="btn btn-outline-primary">Получить расчёт</a>
                            </div>
                        </div>

                        {/* Услуга 2: Разработка веб-приложений */}
                        <div className="col-lg-6 mb-5">
                            <div className="service-card p-4 bg-white rounded h-100">
                                <h3 className="mb-3">Разработка веб-приложений</h3>
                                <p className="text-muted mb-3">
                                    Личные кабинеты, CRM, системы учёта, маркетплейсы, SaaS-продукты.
                                </p>
                                <p className="h5 mb-3">
                                    <strong>от 120 000 ₽</strong>
                                </p>
                                <p className="text-muted small mb-3">
                                    Базовое приложение с авторизацией и 3–5 разделами.<br />
                                    Срок: от 3 недель.
                                </p>
                                <a href="/contact" className="btn btn-outline-primary">Получить расчёт</a>
                            </div>
                        </div>

                        {/* Услуга 3: Техническая поддержка */}
                        <div className="col-lg-6 mb-5">
                            <div className="service-card p-4 bg-white rounded h-100">
                                <h3 className="mb-3">Техническая поддержка</h3>
                                <p className="text-muted mb-3">
                                    24/7 мониторинг, устранение сбоев, обновления, консультации.
                                </p>
                                <p className="h5 mb-3">
                                    <strong>от 7 500 ₽ / мес</strong>
                                </p>
                                <p className="text-muted small mb-3">
                                    Для компаний с 1–5 серверами или до 20 пользователей.<br />
                                    Гарантия реакции — до 15 минут.
                                </p>
                                <a href="/contact" className="btn btn-outline-primary">Подключить поддержку</a>
                            </div>
                        </div>

                        {/* Услуга 4: Кибербезопасность */}
                        <div className="col-lg-6 mb-5">
                            <div className="service-card p-4 bg-white rounded h-100">
                                <h3 className="mb-3">Аудит и кибербезопасность</h3>
                                <p className="text-muted mb-3">
                                    Комплексная проверка IT-инфраструктуры на уязвимости, настройка защиты от атак и угроз.
                                </p>
                                <p className="h5 mb-3">
                                    <strong>от 45 000 ₽</strong>
                                </p>
                                <p className="text-muted small mb-3">
                                    Включает сканирование сетей, анализ конфигураций, проверку ПО и рекомендации по устранению рисков.<br />
                                    Отчёт с детализацией уязвимостей и планом защиты.
                                </p>
                                <a href="/contact" className="btn btn-outline-primary">Заказать аудит</a>
                            </div>
                        </div>

                    </div>

                    {/* Финальный призыв */}
                    <div className="row justify-content-center mt-5">
                        <div className="col-lg-8 text-center">
                            <div className="bg-white rounded p-4 shadow-sm">
                                <p className="mb-3">
                                    <strong>Не нашли подходящий пакет?</strong><br />
                                    Опишите свою задачу — подготовим индивидуальное коммерческое предложение в течение 24 часов.
                                </p>
                                <a href="/contact" className="btn btn-primary btn-xl">Обсудить проект</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Price;
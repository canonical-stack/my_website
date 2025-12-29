// src/components/Testimonials.jsx
import { useState, useEffect, useRef } from 'react';
import styles from './Testimonials.module.css'; // или создайте отдельный CSS — см. ниже

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef(null);
  

  const testimonials = [
  {
    text: 'Команда внедрила систему учёта за 2 недели — теперь экономим 15 часов в неделю!',
    author: 'Иван Петров, директор ООО «ТехноЛогика»',
  },
  {
    text: 'Спасибо за быструю разработку CRM! Уже видим рост продаж на 20%. Рекомендуем!',
    author: 'Анна Смирнова, руководитель отдела продаж «ГрандТорг»',
  },
  {
    text: 'Техническая поддержка работает 24/7 — за полгода ни одного серьёзного простоя. Очень ценно!',
    author: 'Дмитрий Орлов, ИТ-директор сети кафе «Лавка Удовольствий»',
  },
  {
    text: 'После аудита безопасности устранили все уязвимости в нашей инфраструктуре. Чувствуем себя защищёнными.',
    author: 'Елена Козлова, CEO FinTrust Solutions',
  },
  {
    text: 'Разработали веб-приложение для учёта логистики — теперь управляем 50+ машинами из одного интерфейса.',
    author: 'Максим Волков, владелец транспортной компании «Экспресс-Доставка»',
  },
  {
    text: 'ERP-система окупилась за 3 месяца за счёт автоматизации учёта и снижения ошибок в закупках.',
    author: 'Сергей Морозов, финансовый директор «СтройМастер»',
  },
  {
    text: 'Миграция на новую платформу прошла без потерь данных и простоев. Профессионалы своего дела!',
    author: 'Ольга Никитина, владелец онлайн-магазина «Мир Текстиля»',
  },
  {
    text: 'Благодаря автоматизации отчётности наши бухгалтеры теперь тратят на 70% меньше времени на рутину.',
    author: 'Артём Соколов, управляющий партнёр консалтинговой группы «Альфа-Финанс»',
  },
  {
    text: 'Ваша команда интегрировала наши склады и онлайн-магазин — теперь заказы обрабатываются в 2 раза быстрее.',
    author: 'Виктория Лебедева, основатель бренда одежды «UrbanLine»',
  },
  {
    text: 'Кибербезопасность — не пустой звук у вас. После внедрения защиты фишинг-атаки перестали быть проблемой.',
    author: 'Роман Гусев, ИТ-специалист банка «РегионФинанс»',
  },
];
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
              <div className={styles.testimonialSlide} key={index}>
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
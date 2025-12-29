// src/pages/Portfolio.jsx
import React, { useState, useMemo } from 'react';
import PortfolioItem from './components/PortfolioItem';
import { portfolioProjects } from '../../data/portfolio';

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const projectsPerPage = 12;

  // Форматирование названия категории
  const formatCategory = (cat) => {
    const map = {
      crm: 'CRM / ERP',
      erp: 'ERP-системы',
      web: 'Веб-приложения',
      mobile: 'Мобильные приложения',
      integration: 'Интеграции',
      security: 'Кибербезопасность',
      ecommerce: 'Интернет-магазины',
      website: 'Сайты',
      default: cat.charAt(0).toUpperCase() + cat.slice(1)
    };
    return map[cat] || map.default;
  };

  // Список уникальных категорий (с кэшированием через useMemo)
  const categories = useMemo(() => {
    const unique = [...new Set(portfolioProjects.map(p => p.category))];
    return [
      { key: 'all', label: 'Все проекты' },
      ...unique.map(cat => ({ key: cat, label: formatCategory(cat) }))
    ];
  }, [portfolioProjects]);

  // Фильтрация проектов
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return portfolioProjects;
    return portfolioProjects.filter(project => project.category === selectedCategory);
  }, [selectedCategory, portfolioProjects]);

  // Пагинация
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  // Сброс пагинации при смене категории
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <section className="page-section">
      {/* Заголовок */}
      <div className="container text-center mb-5">
        <h1 className="section-heading">
          <span className="section-heading-upper">НАШЕ ПОРТФОЛИО</span>
        </h1>
      </div>

      {/* Фильтры */}
      <div className="container mb-4">
        <div className="d-flex flex-wrap justify-content-center gap-2">
          {categories.map(({ key, label }) => (
            <button
              key={key}
              className={`btn ${
                selectedCategory === key
                  ? 'btn-primary'
                  : 'btn-outline-primary'
              }`}
              onClick={() => handleCategoryChange(key)}
              style={{ whiteSpace: 'nowrap' }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Сетка проектов */}
      <div className="container">
        {paginatedProjects.length > 0 ? (
          <div className="row g-4">
            {paginatedProjects.map(project => (
              <div key={project.id} className="col-lg-4 col-md-6">
                <PortfolioItem project={project} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-5">
            <p className="text-muted">Проектов в этой категории пока нет.</p>
          </div>
        )}

        {/* Пагинация */}
        {totalPages > 1 && (
          <div className="d-flex justify-content-center mt-5">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                className={`btn mx-1 ${
                  currentPage === page ? 'btn-primary' : 'btn-outline-primary'
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
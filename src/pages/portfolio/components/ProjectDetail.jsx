// src/pages/ProjectDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { portfolioProjects } from '../../../data/portfolio';
import { Link } from 'react-router-dom';
import styles from './ProjectDetail.module.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = portfolioProjects.find(p => p.id.toString() === id);

  if (!project) {
    return (
      <div className="page-section">
        <div className="container text-center py-5">
          <h2>Проект не найден</h2>
          <p className="text-muted">Вернуться к <Link to="/portfolio">портфолио</Link></p>
        </div>
      </div>
    );
  }

  return (
    <section className="page-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto" style={{ position: 'relative' }}>
            {/* Ссылка "Назад" — абсолютное позиционирование */}
            <Link to="/portfolio" className={styles.backLink}>
              ← Назад к портфолио
            </Link>

            {/* Заголовок */}
            <h1 className="section-heading text-center mb-4">
              <span className="section-heading-upper">{project.title}</span>
            </h1>

            {/* Картинка */}
            {project.image && (
              <img
                src={project.image}
                className="img-fluid rounded mb-4"
                alt={project.title}
              />
            )}

            {/* Описание */}
            <div className="bg-faded p-4 rounded">
              <p className="lead mb-3">
                <strong>Категория:</strong> {project.categoryLabel || project.category}
              </p>
              <p className="mb-4" style={{ whiteSpace: 'pre-line' }}>
                {project.fullDescription}
              </p>

              {project.technologies && (
                <div className="mb-4">
                  <strong>Технологии:</strong> {project.technologies.join(', ')}
                </div>
              )}

              {project.result && (
                <div className="mb-4">
                  <strong>Результат:</strong> {project.result}
                </div>
              )}

              <div className="text-center mt-4">
                <Link to="/contact" className="btn btn-primary btn-xl">
                  Обсудить похожий проект
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
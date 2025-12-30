// src/pages/components/PortfolioItem.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioItem = ({ project }) => {
  return (
    <div className="card h-100 shadow-sm border-0 rounded">
      {project.image && (
        <img
          src={project.image}
          className="card-img-top"
          alt={project.title}
          style={{ height: '200px', objectFit: 'cover' }}
        />
      )}
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text text-muted flex-grow-1">{project.shortDescription}</p>
        <Link
          to={`/portfolio/${project.id}`}
          className="btn btn-primary mt-auto"
        >
          Подробнее
        </Link>
      </div>
    </div>
  );
};

export default PortfolioItem;
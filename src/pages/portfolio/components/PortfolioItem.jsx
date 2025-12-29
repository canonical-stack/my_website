// src/components/PortfolioItem.jsx
import React from 'react';

const PortfolioItem = ({ project }) => {
  return (
    <div className="bg-faded rounded h-100 d-flex flex-column">
      <img
        src={project.image}
        alt={project.title}
        className="img-fluid rounded-top"
        loading="lazy"
        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
      />
      <div className="p-3 flex-grow-1 d-flex flex-column">
        <h5 className="mb-2">{project.title}</h5>
        <p className="text-muted mb-3 flex-grow-1">{project.description}</p>
        {project.link && (
          <a
            href={project.link}
            className="btn btn-outline-primary mt-auto"
            style={{ fontSize: '0.9rem' }}
          >
            Подробнее
          </a>
        )}
      </div>
    </div>
  );
};

export default PortfolioItem;
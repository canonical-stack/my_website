// src/components/ServiceBlock.jsx
import React from 'react';

const ServiceBlock = ({ image, title, description, reverse = false, animated = false, className = '' }) => {
  return (
    <div 
      className={`row align-items-stretch mb-5 ${className}`}
      data-animated={animated} // можно использовать для отладки
    >
      {reverse ? (
        <>
          <div className="col-lg-7 pe-3">
            <div className="bg-faded p-4 p-md-5 rounded h-100 d-flex flex-column justify-content-center">
              <h2 className="section-heading mb-3">
                <span className="section-heading-upper">{title}</span>
              </h2>
              <p className="mb-0">{description}</p>
            </div>
          </div>
          <div className="col-lg-5 d-flex justify-content-center">
            <img
              src={image}
              alt={title}
              className="img-fluid rounded"
              loading="lazy"
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
          </div>
        </>
      ) : (
        <>
          <div className="col-lg-5 d-flex justify-content-center">
            <img
              src={image}
              alt={title}
              className="img-fluid rounded"
              loading="lazy"
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
          </div>
          <div className="col-lg-7 ps-3">
            <div className="bg-faded p-4 p-md-5 rounded h-100 d-flex flex-column justify-content-center">
              <h2 className="section-heading mb-3">
                <span className="section-heading-upper">{title}</span>
              </h2>
              <p className="mb-0">{description}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ServiceBlock;
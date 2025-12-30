// src/components/ServiceBlock.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceBlock = ({ 
  image, 
  title, 
  description, 
  reverse = false, 
  link,
  className = '' 
}) => {
  return (
    <div className={`row align-items-stretch mb-5 ${className}`}>
      {/* На десктопе: если reverse=false — сначала текст, потом картинка */}
      {!reverse && (
        <>
          <div className="d-none d-lg-block col-lg-7 pe-3">
            <div className="bg-faded p-4 p-md-5 rounded h-100 d-flex flex-column justify-content-center">
              <h2 className="section-heading mb-3">
                <span className="section-heading-upper">{title}</span>
              </h2>
              <p className="mb-3">{description}</p>
              {link && (
                <div>
                  <Link to={link} className="btn btn-primary">
                    Подробнее
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div className="d-none d-lg-block col-lg-5 d-flex justify-content-center">
            <img
              src={image}
              alt={title}
              className="img-fluid rounded"
              loading="lazy"
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
          </div>
        </>
      )}

      {/* На десктопе: если reverse=true — сначала картинка, потом текст */}
      {reverse && (
        <>
          <div className="d-none d-lg-block col-lg-5 d-flex justify-content-center">
            <img
              src={image}
              alt={title}
              className="img-fluid rounded"
              loading="lazy"
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
          </div>
          <div className="d-none d-lg-block col-lg-7 ps-3">
            <div className="bg-faded p-4 p-md-5 rounded h-100 d-flex flex-column justify-content-center">
              <h2 className="section-heading mb-3">
                <span className="section-heading-upper">{title}</span>
              </h2>
              <p className="mb-3">{description}</p>
              {link && (
                <div>
                  <Link to={link} className="btn btn-primary">
                    Подробнее
                  </Link>
                </div>
              )}
            </div>
          </div>
        </>
      )}

      {/* На мобильных: всегда одинаково — картинка сверху, текст снизу */}
      <div className="d-lg-none col-12 d-flex justify-content-center">
        <img
          src={image}
          alt={title}
          className="img-fluid rounded"
          loading="lazy"
          style={{ maxHeight: '400px', objectFit: 'cover' }}
        />
      </div>
      <div className="d-lg-none col-12 mt-3">
        <div className="bg-faded p-4 p-md-5 rounded h-100 d-flex flex-column justify-content-center">
          <h2 className="section-heading mb-3">
            <span className="section-heading-upper">{title}</span>
          </h2>
          <p className="mb-3">{description}</p>
          {link && (
            <div>
              <Link to={link} className="btn btn-primary">
                Подробнее
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceBlock;
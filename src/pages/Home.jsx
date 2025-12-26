// src/pages/Home.jsx
const Home = () => {
  return (
    <section className="page-section clearfix">
      <div className="container">
        <div className="intro">
          <img
            className="intro-img img-fluid mb-3 mb-lg-0 rounded"
            src="/assets/img/intro.jpg"
            alt="IT-услуги"
          />
          <div className="intro-text left-0 text-center bg-faded p-5 rounded">
            <h2 className="section-heading mb-4">
              <span className="section-heading-upper">Надёжные IT-решения</span>
              <span className="section-heading-lower">Для вашего бизнеса</span>
            </h2>
            <p className="mb-3">
              Мы помогаем компаниям внедрять современные технологии, автоматизировать процессы и повышать эффективность.
            </p>
            <div className="intro-button mx-auto">
              <a className="btn btn-primary btn-xl" href="/contact">Связаться с нами</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
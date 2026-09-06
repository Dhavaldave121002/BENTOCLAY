import { useState } from 'react';
import { Link } from 'react-router-dom';
import { industries } from '../data/industries';
import { products } from '../data/products';
import ProductModal from '../components/ProductModal';

export default function ApplicationsPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const getProductObj = (gradeId) => {
    return products.find((p) => p.id === gradeId);
  };

  return (
    <main>
      <section className="page-hero applications-hero">
        <div className="container">
          <div>
            <span className="section-number">INDUSTRIAL APPLICATIONS</span>
            <h1>
              One mineral.<br />
              <em>Multiple advantages.</em>
            </h1>
            <p>
              From saline drilling mud to premium architectural coatings, attapulgite brings valuable rheology, absorption, binding and stability to demanding industrial processes.
            </p>
          </div>
          <figure className="page-visual">
            <img
              src="/assets/applications-industries.png"
              alt="Attapulgite applications across drilling, foundry, coatings and agriculture"
            />
          </figure>
        </div>
      </section>

      <section className="function-strip">
        <div className="container">
          <span>VISCOSITY</span>
          <span>SUSPENSION</span>
          <span>ABSORPTION</span>
          <span>BINDING</span>
          <span>STABILITY</span>
        </div>
      </section>

      {/* Comprehensive Industry Grid */}
      <section className="industry-section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="section-number">16 TARGET INDUSTRIES</span>
              <h2>
                Grade-to-industry<br />
                <span>performance mapping.</span>
              </h2>
            </div>
            <p>Select any grade to view certified parameters and specifications.</p>
          </div>

          <div className="industry-grid">
            {industries.map((ind, i) => (
              <article key={i}>
                <span>0{i + 1 > 9 ? i + 1 : `0${i + 1}`}</span>
                <div>
                  <small>APPLICATION PROFILE</small>
                  <h3>{ind.name}</h3>
                  <p>{ind.shortDesc}</p>
                  <p className="industry-benefit">
                    <strong>Key Advantage:</strong> {ind.keyBenefit}
                  </p>
                  <div className="grade-badges-inline">
                    {ind.recommendedGrades.map((gId) => {
                      const p = getProductObj(gId);
                      if (!p) return null;
                      return (
                        <Link
                          key={gId}
                          to={`/products/${p.slug || p.id}`}
                          className="btn-link"
                        >
                          {p.shortName} ({p.form}) ↗
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </article>
            ))}

            <article className="industry-quote">
              <div>
                <small>NOT SURE WHICH GRADE?</small>
                <h3>Tell us what performance you need.</h3>
                <p>Our Bhavnagar technical team will help align grade properties with your target process.</p>
                <Link className="btn btn-white" to="/contact">
                  Talk to us ↗
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="page-cta">
        <div className="container">
          <div>
            <span>DIRECT TECHNICAL & COMMERCIAL INQUIRIES</span>
            <h2>Need grade recommendations for your application?</h2>
          </div>
          <Link className="btn btn-white" to="/contact">
            Request quotation <b>↗</b>
          </Link>
        </div>
      </section>

      {/* Specification Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </main>
  );
}

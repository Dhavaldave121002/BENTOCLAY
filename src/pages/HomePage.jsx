import { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { industries } from '../data/industries';
import ProductCard from '../components/ProductCard';
import ProductCardSkeleton from '../components/ProductCardSkeleton';
import ProductModal from '../components/ProductModal';
import GradeComparisonTable from '../components/GradeComparisonTable';
import FaqAccordion from '../components/FaqAccordion';
import useScrollReveal from '../hooks/useScrollReveal';
import AnimatedCounter from '../components/AnimatedCounter';

export default function HomePage() {
  const [filter, setFilter] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  // High-performance scroll reveal animation trigger
  useScrollReveal([filter, loading]);

  const handleFilterChange = (newCat) => {
    if (newCat === filter) return;
    setLoading(true);
    setFilter(newCat);
    setTimeout(() => {
      setLoading(false);
    }, 180);
  };

  const filteredProducts = products.filter((p) => {
    if (filter === 'all') return true;
    return p.categories.includes(filter);
  });

  const getCount = (cat) => {
    if (cat === 'all') return products.length;
    return products.filter((p) => p.categories.includes(cat)).length;
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-glow"></div>
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">
              <span></span> Attapulgite specialists · Bhavnagar, India
            </div>
            <h1>
              Attapulgite engineered to the<br />
              <em>parameter that matters.</em>
            </h1>
            <p>
              Bentoclay Claytech manufactures six specialized attapulgite grades — from 35 cps salt gel for saline drilling fluids to 210 m²/g Premium 325 for paint and coatings — each controlled to a published data sheet in 25 kg HDPE packing.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#products">
                Explore the six grades <span>↓</span>
              </a>
              <Link className="btn btn-secondary" to="/contact">
                Request a quote <span>↗</span>
              </Link>
            </div>

            {/* Metric counters */}
            <div className="hero-metrics-bar">
              <div className="metric-item">
                <strong><AnimatedCounter target={6} /></strong>
                <span>Attapulgite grades</span>
              </div>
              <div className="metric-item">
                <strong><AnimatedCounter target={25} suffix=" kg" /></strong>
                <span>HDPE with liner</span>
              </div>
              <div className="metric-item">
                <strong><AnimatedCounter target={2} /></strong>
                <span>Powder & granule forms</span>
              </div>
              <div className="metric-item">
                <strong>1–5 mm</strong>
                <span>Granule range</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-card">
              <img
                src="/assets/product-range.jpeg"
                alt="Bentoclay range of attapulgite powders and granules"
              />
              <div className="formula-chip">
                <small>MINERAL COMPOSITION</small>
                <strong>(Mg, Al)₅ Si₈ O₂₂ (OH)₄</strong>
                <span>Rod-like / needle-like crystal habit</span>
              </div>
            </div>
            <div className="floating-tag">
              <strong>6</strong>
              <span>Specialised<br />product grades</span>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Mineral Story */}
      <section className="intro section-pad" id="about">
        <div className="container intro-grid reveal-on-scroll">
          <div>
            <span className="section-number">01 / OUR MINERAL</span>
            <h2>
              One remarkable clay.<br />
              <span>Countless possibilities.</span>
            </h2>
          </div>
          <div className="intro-text">
            <p>
              Attapulgite is a naturally occurring hydrated aluminium magnesium silicate. Unlike plate-structured swelling clays (such as bentonite), its rigid rod-like needle crystals build viscosity through mechanical lattice entrapment.
            </p>
            <p>
              Because its suspension relies on mechanical interlocking rather than chemical double-layer hydration, attapulgite maintains high viscosity and suspension even in saturated salt water, brine, and high-temperature environments.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products section-pad" id="products">
        <div className="container">
          <div className="section-head reveal-on-scroll">
            <div>
              <span className="section-number">02 / PRODUCT RANGE</span>
              <h2>
                Six grades, one mineral,<br />
                <span>six different jobs.</span>
              </h2>
            </div>
            <p>Every specification below is reproduced from the published Bentoclay Claytech product data sheet for that grade.</p>
          </div>

          <div className="filter-bar" role="tablist" aria-label="Product filters">
            <button
              className={`filter ${filter === 'all' ? 'active' : ''}`}
              onClick={() => handleFilterChange('all')}
              type="button"
            >
              All products <b>{getCount('all')}</b>
            </button>
            <button
              className={`filter ${filter === 'drilling' ? 'active' : ''}`}
              onClick={() => handleFilterChange('drilling')}
              type="button"
            >
              Drilling <b>{getCount('drilling')}</b>
            </button>
            <button
              className={`filter ${filter === 'industrial' ? 'active' : ''}`}
              onClick={() => handleFilterChange('industrial')}
              type="button"
            >
              Industrial <b>{getCount('industrial')}</b>
            </button>
            <button
              className={`filter ${filter === 'natural' ? 'active' : ''}`}
              onClick={() => handleFilterChange('natural')}
              type="button"
            >
              Natural <b>{getCount('natural')}</b>
            </button>
          </div>

          <div className="product-grid" id="productGrid">
            {loading ? (
              [...Array(filter === 'all' ? 6 : getCount(filter) || 3)].map((_, idx) => (
                <ProductCardSkeleton key={idx} />
              ))
            ) : (
              filteredProducts.map((p) => {
                const originalIndex = products.findIndex((orig) => orig.id === p.id);
                return (
                  <ProductCard
                    key={p.id}
                    product={p}
                    index={originalIndex}
                    onViewDetails={setSelectedProduct}
                  />
                );
              })
            )}
          </div>
        </div>
      </section>

      {/* Grade Comparison Matrix */}
      <GradeComparisonTable onSelectProduct={setSelectedProduct} />

      {/* Interactive Customizer Banner Callout */}
      <section className="customizer-callout-section reveal-on-scroll">
        <div className="container">
          <div className="customizer-callout-card">
            <div className="callout-content">
              <span className="section-number">TAILORED MINERAL RHEOLOGY</span>
              <h2>Configure Specifications Directly on Any Product Grade</h2>
              <p>
                Need specialized mesh fineness (100–325 mesh), high-salinity drilling rheology, calcined low moisture, or export palletization? Click any product to access its built-in interactive specification customizer and dispatch instant quotes.
              </p>
              <div className="callout-badges">
                <span>✓ Grade-Specific Parameters</span>
                <span>✓ Real-time Packaging Breakdown</span>
                <span>✓ Direct WhatsApp & Mail Inquiries</span>
              </div>
            </div>
            <div className="callout-actions">
              <Link to="/products/premium-325-attapulgite-powder#customizer-section" className="btn btn-primary btn-lg">
                Customize Premium 325 ⚙
              </Link>
              <Link to="/products/salt-gel-attapulgite-powder#customizer-section" className="btn btn-outline">
                Customize Salt Gel Grade ⚙
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Bentoclay (How We Work) */}
      <section className="why section-pad" id="why-us">
        <div className="container">
          <div className="section-head light reveal-on-scroll">
            <div>
              <span className="section-number">03 / HOW WE WORK</span>
              <h2>
                Specification-led supply,<br />
                <span>not generic clay.</span>
              </h2>
            </div>
            <p>From mineral grading to final export packaging, every parameter is verified to standard data sheets.</p>
          </div>

          <div className="value-grid">
            <article className="reveal-on-scroll stagger-1">
              <b>01</b>
              <span className="value-icon">⌁</span>
              <h3>Parameter-controlled</h3>
              <p>Grades are controlled on the value your process depends on: 600 rpm viscosity, mesh, BET surface area or oil absorption.</p>
            </article>
            <article className="reveal-on-scroll stagger-2">
              <b>02</b>
              <span className="value-icon">◎</span>
              <h3>Published data sheets</h3>
              <p>Requirements and certified laboratory results are shown exactly as tested and printed without alteration.</p>
            </article>
            <article className="reveal-on-scroll stagger-3">
              <b>03</b>
              <span className="value-icon">◇</span>
              <h3>Powder & granules</h3>
              <p>Specialized fine micronised powders through to 1–5 mm porous ball granules from the same pure mineral deposit.</p>
            </article>
            <article className="reveal-on-scroll stagger-4">
              <b>04</b>
              <span className="value-icon">↗</span>
              <h3>Export-ready packing</h3>
              <p>25 kg HDPE moisture-proof bags with inner liner, palletized and dispatched from Bhavnagar, Gujarat.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="applications section-pad reveal-on-scroll" id="industries">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="section-number">04 / INDUSTRIES SERVED</span>
              <h2>
                Where our attapulgite<br />
                <span>is specified worldwide.</span>
              </h2>
            </div>
          </div>

          <div className="industries-pill-cloud">
            {industries.map((ind, i) => (
              <Link key={i} to="/applications" className="industry-pill">
                {ind.name}
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link className="text-link" to="/applications" style={{ display: 'inline-flex', fontSize: '16px', fontWeight: 'bold' }}>
              See all industry applications <span style={{ marginLeft: '8px' }}>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <FaqAccordion />

      {/* Contact CTA Section */}
      <section className="contact" id="contact">
        <div className="container contact-card reveal-on-scroll">
          <div>
            <span className="eyebrow">
              <span></span> LET'S WORK TOGETHER
            </span>
            <h2>Need a grade matched to your formulation?</h2>
            <p>
              Share your viscosity, mesh, or absorption target. Our Bhavnagar technical team replies with matching grade recommendations, published PDS, and 25 kg pricing.
            </p>
          </div>
          <div className="contact-actions">
            <Link className="btn btn-white" to="/contact">
              Request a quote <span>↗</span>
            </Link>
            <a className="phone" href="tel:+917435818628">
              Call us: +91 74358 18628
            </a>
          </div>
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

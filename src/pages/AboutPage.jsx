import { Link } from 'react-router-dom';
import FaqAccordion from '../components/FaqAccordion';

export default function AboutPage() {
  const currentYear = new Date().getFullYear();
  const yearsInOperation = Math.max(1, currentYear - 2023);

  const productsList = [
    { num: '01', name: 'Attapulgite Powder', desc: 'High viscosity, sorptive & rheological powder for saline fluids, paints & formulations.' },
    { num: '02', name: 'Attapulgite Granules', desc: 'Low-dust 1–5 mm absorbent granules for cat litter, carrier & spill control.' },
    { num: '03', name: 'Attapulgite Lumps', desc: 'Raw high-purity mineral feedstock for specialized grinding and formulation.' },
    { num: '04', name: 'Dolomite Powder', desc: 'High-purity calcium magnesium carbonate powder for construction & ceramics.' },
    { num: '05', name: 'Bentonite Powder', desc: 'Industrial binder, suspension agent and sealing clay for foundry & drilling.' },
    { num: '06', name: 'Bentonite Granules & Lumps', desc: 'Porous absorbents and heavy-duty industrial binding granules.' },
  ];

  const applicationsList = [
    { label: 'DR', title: 'Drilling fluids', desc: 'Viscosity & gel strength in high-salt saline conditions' },
    { label: 'OG', title: 'Oil & gas', desc: 'Thermal stability & rheology for deep drilling' },
    { label: 'FD', title: 'Foundry', desc: 'Binding agent & thermal stabilizer for mold sand' },
    { label: 'AB', title: 'Absorbents', desc: 'High porosity liquid absorption for industrial spills' },
    { label: 'CL', title: 'Cat litter', desc: 'Low-dust, non-swelling absorbent granules for pet care' },
    { label: 'AF', title: 'Animal feed', desc: 'Carrier & anti-caking agent for mineral supplements' },
    { label: 'IF', title: 'Filtration', desc: 'Decolorizing & purification for oils and liquids' },
    { label: 'CM', title: 'Construction', desc: 'Thickening & workability modifier for mortars & sealants' },
    { label: 'AG', title: 'Agriculture', desc: 'Pesticide carrier & soil moisture conditioning' },
    { label: 'SF', title: 'Specialty', desc: 'Custom particle sizing for adhesives, paints & coatings' },
  ];

  return (
    <main>

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="page-hero split-hero visual-split">
        <div className="container">
          <div>
            <span className="section-number">ABOUT BENTOCLAY CLAYTECH</span>
            <h1>
              Attapulgite specialists.<br />
              <em>Bhavnagar, India.</em>
            </h1>
            <p>
              Bentoclay Claytech manufactures specialized attapulgite powder and granules from its processing works in Kardej, Bhavnagar, Gujarat, supplying drilling and industrial formulators worldwide.
            </p>
            <div className="mineral-formula compact-formula">
              <small>CHEMICAL FORMULA &amp; CRYSTALLOGRAPHY</small>
              <strong>(Mg, Al)₅Si₈O₂₂(OH)₄</strong>
              <span>Hydrated aluminium magnesium silicate · Rod-like / needle-like crystal structure</span>
            </div>
          </div>
          <figure className="page-visual">
            <img
              src="/assets/about-processing-plant.png"
              alt="Modern attapulgite mineral processing plant in Bhavnagar"
            />
          </figure>
        </div>
      </section>

      {/* ── Dynamic Experience Metrics Bar ─────────────────────── */}
      <section className="about-metrics-bar">
        <div className="container about-metrics-grid">
          <div className="about-metric-card">
            <strong>{yearsInOperation}+</strong>
            <span>Years of Direct<br />Operations</span>
          </div>
          <div className="about-metric-card">
            <strong>28+</strong>
            <span>Years Industry<br />Processing Expertise</span>
          </div>
          <div className="about-metric-card">
            <strong>2,500 MT</strong>
            <span>Annual Manufacturing<br />Capacity</span>
          </div>
          <div className="about-metric-card">
            <strong>06</strong>
            <span>Specialised Attapulgite<br />Product Grades</span>
          </div>
        </div>
      </section>

      {/* ── Mineral Story (original) ─────────────────────────────── */}
      <section className="story-section">
        <div className="container story-grid">
          <div>
            <span className="section-number">OUR MINERAL BASE</span>
            <h2>
              Nature's needle lattice,<br />
              <span>refined for industrial processes.</span>
            </h2>
          </div>
          <div>
            <p>
              Attapulgite is a naturally occurring, fibrous clay mineral renowned for its exceptional <strong>gel-forming, sorptive, rheological, and adsorption properties</strong>. It is widely used across a range of industrial applications where high absorption, viscosity control, suspension, and binding performance are required.
            </p>
            <p>
              The mineral was named after <strong>Attapulgus, Georgia (USA)</strong>, where an important source of the mineral was identified. It occurs naturally as characteristic needle-shaped fibrous crystals and bundles, often associated with minerals such as dolomite.
            </p>
            <p>
              Unlike plate-structured swelling bentonite, attapulgite needles do not rely on osmotic swelling between silicate sheets. In liquid, high shear disperses these elongated crystals into a random brush-heap network that traps fluids mechanically — retaining viscosity fully in high-salt, high-calcium, and elevated-temperature environments.
            </p>
            <div className="material-tags">
              <span>Non-swelling</span>
              <span>Needle-like lattice</span>
              <span>High electrolyte tolerance</span>
              <span>Thermal stability</span>
              <span>High surface area</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bhavnagar Deposits ───────────────────────────────────── */}
      <section className="deposit-section">
        <div className="container deposit-grid">
          <div className="deposit-text">
            <span className="section-number">HIGH-QUALITY MINERAL DEPOSITS</span>
            <h2>
              Bhavnagar, Gujarat —<br />
              <span>our natural resource advantage.</span>
            </h2>
            <p>
              Bhavnagar, Gujarat, India, is recognized as an important region for attapulgite deposits. The naturally occurring deposits in the region contain <strong>needle-shaped attapulgite structures associated with dolomite</strong>, providing a distinctive mineral resource for industrial processing.
            </p>
            <p>
              Our manufacturing operations are strategically located in Bhavnagar, close to the mineral resources. This enables us to maintain efficient control over raw-material sourcing, processing, quality, and supply — from the mine to the final 25 kg HDPE bag.
            </p>
          </div>
          <div className="deposit-stats">
            <div className="deposit-stat">
              <b>BHAVNAGAR</b>
              <span>Gujarat, India · Primary deposit region</span>
            </div>
            <div className="deposit-stat">
              <b>KARDEJ</b>
              <span>Processing works · L.S. 341/P-2</span>
            </div>
            <div className="deposit-stat">
              <b>DOLOMITE</b>
              <span>Associated mineral in raw ore</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Facts Bar (original) ─────────────────────────────────── */}
      <section className="facts-section">
        <div className="container">
          <article>
            <strong>06</strong>
            <span>Attapulgite<br />product grades</span>
          </article>
          <article>
            <strong>25</strong>
            <span>kg HDPE bags<br />with inner liner</span>
          </article>
          <article>
            <strong>02</strong>
            <span>Powder &amp; granule<br />physical forms</span>
          </article>
          <article>
            <strong>1–5</strong>
            <span>mm natural<br />granule sizing</span>
          </article>
        </div>
      </section>

      {/* ── Manufacturing Capability ─────────────────────────────── */}
      <section className="capabilities-section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="section-number">OUR MANUFACTURING CAPABILITY</span>
              <h2>
                Precision processing,<br />
                <span>six specialised grades.</span>
              </h2>
            </div>
            <p>
              With over 28 years of industry experience, our facilities include extruders, hammer mills, pulverizing and screening equipment — enabling manufacture to different particle sizes and specifications per customer requirements.
            </p>
          </div>
          <div className="products-capability-grid">
            {productsList.map((prod) => (
              <div key={prod.num} className="capability-card">
                <span className="capability-num">{prod.num}</span>
                <h3>{prod.name}</h3>
                <p>{prod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Production Capacity Band ─────────────────────────────── */}
      <section className="capacity-band">
        <div className="container capacity-grid">
          <div>
            <span className="section-number" style={{ color: '#d1ae8c' }}>ANNUAL PRODUCTION CAPACITY</span>
            <h2 style={{ color: '#fff', marginTop: '12px' }}>Up to 2,500 metric tons per year.</h2>
            <p style={{ color: '#cbb8ad', fontSize: '16px', lineHeight: '1.75', marginTop: '18px', maxWidth: '600px' }}>
              We focus on consistent quality, reliable supply, customised specifications, and export-oriented manufacturing — serving customers across domestic and international markets.
            </p>
          </div>
          <div className="capacity-actions" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px' }}>
            <Link to="/products/premium-325-attapulgite-powder#customizer-section" className="btn btn-primary">
              Configure a custom grade <span>↗</span>
            </Link>
            <Link to="/products" className="text-link-white" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '15px', fontWeight: '600' }}>
              Explore all 6 grades ↗
            </Link>
          </div>
        </div>
      </section>

      {/* ── Applications Grid ────────────────────────────────────── */}
      <section className="applications-about-section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="section-number">INDUSTRIAL APPLICATIONS</span>
              <h2>
                Where our mineral<br />
                <span>products are specified.</span>
              </h2>
            </div>
            <p>Our attapulgite products deliver absorption, binding, and rheology control across 10+ core sectors.</p>
          </div>
          <div className="about-app-grid">
            {applicationsList.map((item) => (
              <div key={item.label} className="about-app-card">
                <span className="about-app-badge">{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Location (original) ──────────────────────────────────── */}
      <section className="location-section">
        <div className="container">
          <div>
            <span className="section-number">MANUFACTURING WORKS</span>
            <h2>Kardej, Bhavnagar, Gujarat.</h2>
            <p>
              L.S. 341/P-2, Behind Manpasand Dhaba, Vallabhipur Highway, Kardej, Bhavnagar – 364060, Gujarat, India
            </p>
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Kardej+Bhavnagar+364060"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in Google Maps ↗
          </a>
        </div>
      </section>

      {/* ── FAQ (original) ───────────────────────────────────────── */}
      <FaqAccordion />

      {/* ── CTA (original) ───────────────────────────────────────── */}
      <section className="page-cta">
        <div className="container">
          <div>
            <span>DIRECT TECHNICAL &amp; COMMERCIAL INQUIRIES</span>
            <h2>Connect with our Bhavnagar manufacturing team.</h2>
          </div>
          <Link className="btn btn-white" to="/contact">
            Request quotation <b>↗</b>
          </Link>
        </div>
      </section>

    </main>
  );
}

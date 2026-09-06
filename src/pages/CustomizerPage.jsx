import { Link } from 'react-router-dom';
import ProductConfigurator from '../components/ProductConfigurator';

export default function CustomizerPage() {
  return (
    <main>
      <section className="page-hero customizer-hero">
        <div className="container">
          <div className="customizer-hero-text">
            <span className="section-number">TAILORED MINERAL ENGINEERING</span>
            <h1>
              Configure your exact<br />
              <em>mineral specification.</em>
            </h1>
            <p>
              Whether you need superfine 325-mesh powder for coatings, API-13A high-shear drilling rheology, or calcined carrier granules, our Bhavnagar plant customizes physical habit, rheology, and moisture to your exact batch parameters.
            </p>
          </div>
          <div className="customizer-hero-badges">
            <div className="custom-stat-pill">
              <strong>100%</strong>
              <span>In-House Processing</span>
            </div>
            <div className="custom-stat-pill">
              <strong>±1.5%</strong>
              <span>Moisture Precision</span>
            </div>
            <div className="custom-stat-pill">
              <strong>25kg to 1MT</strong>
              <span>Export Packaging</span>
            </div>
            <div className="custom-stat-pill">
              <strong>24hr</strong>
              <span>Tech Quote Turnaround</span>
            </div>
          </div>
        </div>
      </section>

      <section className="customizer-body-section">
        <div className="container">
          <div className="customizer-intro-banner">
            <div className="intro-badge">INTERACTIVE SPECIFICATION BUILDER</div>
            <h2>Build your custom formulation recipe</h2>
            <p>
              Follow the 6 steps below to specify application, mesh particle distribution, target rheology, and packaging. The system will generate a custom recipe code and calculated pallet manifest for immediate quote dispatch.
            </p>
          </div>

          {/* Interactive Configurator */}
          <ProductConfigurator />
        </div>
      </section>

      {/* Industrial Customization Capabilities */}
      <section className="customizer-capabilities-section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="section-number">TOLL PROCESSING & R&D</span>
              <h2>
                Our Customization<br />
                <span>Capabilities & Standards.</span>
              </h2>
            </div>
            <p>Backed by our dedicated QC testing laboratory and mining operations in Bhavnagar, Gujarat.</p>
          </div>

          <div className="capabilities-grid">
            <div className="capability-card">
              <div className="capability-num">01</div>
              <h3>Custom Sieve & Air Classification</h3>
              <p>
                From 100 mesh standard industrial grades down to 325 mesh (44 micron) superfine powders, our high-efficiency air separators deliver tight particle size distribution for high-gloss coatings and sensitive slurries.
              </p>
              <ul className="capability-bullets">
                <li>325 mesh (98.5% pass) for architectural paint</li>
                <li>200 mesh (95% pass) for API-13A drilling mud</li>
                <li>1–3mm / 2–4mm granular grading for agro carriers</li>
              </ul>
            </div>

            <div className="capability-card">
              <div className="capability-num">02</div>
              <h3>Thermal Activation & Moisture Limits</h3>
              <p>
                Equipped with rotary dryers and indirect calcining units, we can produce low-moisture (6–8% free moisture) thermally activated attapulgite for moisture-reactive polyurethane sealants, adhesives, and catalysts.
              </p>
              <ul className="capability-bullets">
                <li>Standard atmospheric dried (10–12% H₂O)</li>
                <li>Heat-activated low-moisture (6–8% H₂O)</li>
                <li>Controlled loss on ignition (LOI) testing per batch</li>
              </ul>
            </div>

            <div className="capability-card">
              <div className="capability-num">03</div>
              <h3>Toll Packaging & Private Labeling</h3>
              <p>
                Export-ready packaging formats with automated bagging, robotic palletizing, and shrink wrapping to withstand multi-modal maritime transit from Mundra Port and Pipavav Port.
              </p>
              <ul className="capability-bullets">
                <li>25 kg & 50 kg multi-wall HDPE bags with moisture barrier</li>
                <li>1000 kg (1 MT) FIBC jumbo bulk bags with bottom discharge</li>
                <li>Custom client stencil, OEM private labeling, and barcoding</li>
              </ul>
            </div>

            <div className="capability-card">
              <div className="capability-num">04</div>
              <h3>Lab Sample Kits & Pilot Batches</h3>
              <p>
                We provide 25 kg evaluation bags dispatched via air courier along with full Certificate of Analysis (COA), XRD mineralogical profile, and safety data sheet (SDS) for bench-scale formulation trials.
              </p>
              <div className="capability-action">
                <Link to="/contact" className="btn btn-secondary btn-sm">
                  Request Free Lab Sample ↗
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

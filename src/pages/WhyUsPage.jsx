import { Link } from 'react-router-dom';
import FaqAccordion from '../components/FaqAccordion';
import useScrollReveal from '../hooks/useScrollReveal';
import AnimatedCounter from '../components/AnimatedCounter';

export default function WhyUsPage() {
  useScrollReveal();

  return (
    <main>
      <section className="page-hero split-hero visual-split">
        <div className="container">
          <div>
            <span className="section-number">WHY BENTOCLAY CLAYTECH</span>
            <h1>
              Specification-led supply,<br />
              <em>not generic clay.</em>
            </h1>
            <p>
              Processing consists of drying and grinding crude clay to specific particle size distributions with specific ranges of gel viscosity, measured according to the end use.
            </p>
            <div className="inline-facts">
              <span>
                <b><AnimatedCounter target={6} /></b> attapulgite grades
              </span>
              <span>
                <b><AnimatedCounter target={25} suffix=" kg" /></b> HDPE with liner
              </span>
            </div>
          </div>
          <figure className="page-visual">
            <img
              src="/assets/why-quality-lab.png"
              alt="Attapulgite quality control laboratory bench with viscometer and sample beakers"
            />
          </figure>
        </div>
      </section>

      {/* 4 Pillars Section */}
      <section className="reason-section">
        <div className="container reason-grid">
          <article className="reveal-on-scroll stagger-1">
            <b>01</b>
            <h3>Parameter-controlled</h3>
            <p>
              Grades are controlled on the value your process depends on: 600 rpm dial viscosity, wet mesh, BET surface area, swelling index or oil absorption.
            </p>
          </article>
          <article className="reveal-on-scroll stagger-2">
            <b>02</b>
            <h3>Published data sheets</h3>
            <p>
              Requirements — and certified reported results where the data sheet provides them — are shown exactly as tested on daily production composite samples.
            </p>
          </article>
          <article className="reveal-on-scroll stagger-3">
            <b>03</b>
            <h3>Powder & granules</h3>
            <p>
              From 325 mesh (44 μm) fine micronised powders through to 1–5 mm porous ball granules produced from the same high-purity mineral deposit.
            </p>
          </article>
          <article className="reveal-on-scroll stagger-4">
            <b>04</b>
            <h3>Export-ready packing</h3>
            <p>
              All grades are supplied in robust 25 kg HDPE woven bags with heat-sealed inner polyethylene liners, palletized for container export worldwide.
            </p>
          </article>
        </div>
      </section>

      {/* Quality Band */}
      <section className="quality-band">
        <div className="container quality-grid">
          <div>
            <span className="section-number">OUR LABORATORY STANDARDS</span>
            <h2>
              Measured parameters.<br />
              <span>Practical results.</span>
            </h2>
            <p className="quality-copy">
              Depending on grade, our published data sheets define moisture, pH, wet particle size, specific gravity, Fann suspension viscosity, Brookfield viscosity, swelling index, surface area (BET) and loss on ignition (LOI).
            </p>
          </div>
          <div className="quality-list">
            <p>
              <b>01</b>
              <span>Moisture and particle-size distribution control</span>
            </p>
            <p>
              <b>02</b>
              <span>Viscosity, shear thinning and suspension performance</span>
            </p>
            <p>
              <b>03</b>
              <span>Physical and chemical oxide test reporting</span>
            </p>
            <p>
              <b>04</b>
              <span>Protected 25 kg HDPE packaging with moisture barrier</span>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <FaqAccordion />

      <section className="page-cta">
        <div className="container">
          <div>
            <span>PUT OUR QUALITY TO WORK</span>
            <h2>Discuss your target specifications with our team.</h2>
          </div>
          <Link className="btn btn-white" to="/contact">
            Contact technical team <b>↗</b>
          </Link>
        </div>
      </section>
    </main>
  );
}

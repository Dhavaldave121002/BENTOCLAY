import { Link } from 'react-router-dom';
import FaqAccordion from '../components/FaqAccordion';

export default function FAQPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container" style={{ paddingTop: '80px', paddingBottom: '40px' }}>
          <span className="section-number">SUPPORT</span>
          <h1>Frequently Asked Questions</h1>
          <p style={{ marginTop: '20px', maxWidth: '600px' }}>Find answers to common technical and commercial questions about our attapulgite and bentonite mineral products.</p>
        </div>
      </section>
      
      <FaqAccordion />

      <section style={{ padding: '60px 0 100px', textAlign: 'center' }}>
        <div className="container">
          <h3 style={{ marginBottom: '16px' }}>Still have questions?</h3>
          <p style={{ color: 'var(--muted)', marginBottom: '32px' }}>Our technical team is ready to assist with detailed specifications or custom grade requirements.</p>
          <Link to="/contact" className="btn btn-primary">
            Contact Support <span>↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

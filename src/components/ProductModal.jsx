import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ProductModal({ product, onClose }) {
  useEffect(() => {
    if (!product) return;

    document.body.classList.add('modal-open');

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
    >
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close specifications dialog"
        >
          ×
        </button>

        <div className="modal-body">
          <span className="section-number">
            {product.type.toUpperCase()} · {product.form.toUpperCase()}
          </span>
          <h2 id="modalTitle">{product.name}</h2>
          <p className="modal-subtitle">{product.tagline || product.desc}</p>

          {product.directAnswer && (
            <div className="modal-in-short">
              <small>TECHNICAL SUMMARY</small>
              <p>{product.directAnswer}</p>
            </div>
          )}

          <table className="spec-table">
            <thead>
              <tr>
                <th>Controlled Parameter</th>
                <th>Requirement / Certified Result</th>
              </tr>
            </thead>
            <tbody>
              {product.specs.map((spec, i) => (
                <tr key={i}>
                  <td>{spec[0]}</td>
                  <td>
                    <strong>{spec[1]}</strong>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {product.specNote && (
            <p className="modal-spec-note">
              <em>Note:</em> {product.specNote}
            </p>
          )}

          <h3 className="modal-apps-title">Typical Industrial Applications</h3>
          <div className="modal-apps">
            {product.apps.map((app, i) => (
              <span key={i}>{app}</span>
            ))}
          </div>

          <div className="modal-action-row">
            <Link
              to={`/contact?grade=${encodeURIComponent(product.shortName)}`}
              className="btn btn-primary"
              onClick={onClose}
            >
              Request Quote for {product.shortName} ↗
            </Link>
            {product.pdsName && (
              <span className="pds-badge">
                📄 Published PDS Available: {product.pdsName}
              </span>
            )}
          </div>

          <div className="modal-note">
            <span>Composition: Hydrated aluminium magnesium silicate (Mg,Al)₅Si₈O₂₂(OH)₄</span>
            <strong>Standard: 25 kg HDPE liner bag</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

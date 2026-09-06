import { Link } from 'react-router-dom';
import { products } from '../data/products';

export default function GradeComparisonTable({ onSelectProduct }) {
  return (
    <section className="comparison-section section-pad" id="comparison">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="section-number">TECHNICAL MATRIX</span>
            <h2>
              Grade comparison<br />
              <span>at a glance.</span>
            </h2>
          </div>
          <p>
            Side-by-side technical parameters reproduced from published Bentoclay Claytech product data sheets.
          </p>
        </div>

        <div className="table-responsive">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Grade</th>
                <th>Form</th>
                <th>Key Controlled Value</th>
                <th>Primary Use</th>
                <th>Packaging</th>
                <th>Data Sheet</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => {
                const formClass = (p.form || 'powder').toLowerCase();
                const primaryHighlight = p.highlights?.[0];
                const secondaryHighlight = p.highlights?.[1];
                return (
                  <tr key={p.id}>
                    <td>
                      <strong>{p.shortName || p.name}</strong>
                      <span className="grade-sub">{p.type}</span>
                    </td>
                    <td>
                      <span className={`badge-form ${formClass}`}>
                        {p.form || 'Powder'}
                      </span>
                    </td>
                    <td>
                      {primaryHighlight ? (
                        <strong className="text-highlight">
                          {primaryHighlight.label}: {primaryHighlight.value}
                        </strong>
                      ) : (
                        <strong className="text-highlight">{p.tags?.[0] || 'Standard'}</strong>
                      )}
                      {secondaryHighlight && (
                        <small className="sub-highlight">
                          {secondaryHighlight.label}: {secondaryHighlight.value}
                        </small>
                      )}
                    </td>
                    <td>{p.apps?.[0] || 'Industrial processing'}</td>
                    <td>25 kg HDPE with liner</td>
                    <td>
                      <Link
                        to={`/products/${p.slug || p.id}`}
                        className="btn-link"
                      >
                        View Specs ↗
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

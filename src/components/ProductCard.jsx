import { Link } from 'react-router-dom';

export default function ProductCard({ product, index }) {
  const targetUrl = `/products/${product.slug || product.id}`;

  return (
    <article className="product-card">
      <Link to={targetUrl} className="product-card-link-wrap" aria-label={`View ${product.name}`}>
        <div className={`product-photo product-photo-${index + 1}`}>
          <img
            src={product.image || "/assets/product-range.jpeg"}
            alt={product.name}
            loading="lazy"
          />
        </div>
        <div className="product-content">
          <div className="product-top">
            <div className="product-meta-badge">
              <span className="product-num">0{index + 1}</span>
              <span className="product-code-tag product-symbol">{product.code}</span>
            </div>
            <span className="product-type">{product.type.toUpperCase()}</span>
          </div>
          <h3>{product.name}</h3>
          <p>{product.desc || product.tagline}</p>
          <div className="product-card-params">
            {(product.highlights || []).slice(0, 2).map((h, idx) => (
              <div key={idx} className="card-param-col">
                <span className="card-param-label">{h.label}</span>
                <strong className="card-param-val">{h.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </Link>
      <div className="product-card-actions">
        <Link
          to={targetUrl}
          className="details-btn"
          aria-label={`View specifications for ${product.name}`}
        >
          View specs <span>↗</span>
        </Link>
        <Link
          to={`${targetUrl}#customizer-section`}
          className="customize-card-btn"
          aria-label={`Customize ${product.name} specifications`}
        >
          Customize <span>⚙</span>
        </Link>
      </div>
    </article>
  );
}

export default function ProductCardSkeleton() {
  return (
    <article className="product-card skeleton-card" aria-hidden="true">
      <div className="product-photo skeleton-photo">
        <div className="skeleton-shimmer skeleton-box" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="product-content">
        <div className="product-top" style={{ marginBottom: '8px' }}>
          <div style={{ display: 'inline-flex', gap: '6px', alignItems: 'center' }}>
            <span className="skeleton-shimmer skeleton-pill" style={{ width: '22px', height: '14px' }} />
            <span className="skeleton-shimmer skeleton-pill" style={{ width: '32px', height: '16px', borderRadius: '4px' }} />
          </div>
          <span className="skeleton-shimmer skeleton-pill" style={{ width: '70px', height: '18px', borderRadius: '20px' }} />
        </div>
        <div className="skeleton-shimmer skeleton-line" style={{ width: '85%', height: '18px', marginBottom: '6px' }} />
        <div className="skeleton-shimmer skeleton-line" style={{ width: '95%', height: '12px', marginBottom: '4px' }} />
        <div className="skeleton-shimmer skeleton-line" style={{ width: '65%', height: '12px', marginBottom: '10px' }} />

        <div className="product-card-params" style={{ paddingTop: '8px', borderTop: '1px solid #eee4d9' }}>
          <div className="card-param-col">
            <span className="skeleton-shimmer skeleton-line" style={{ width: '75%', height: '9px', marginBottom: '4px' }} />
            <span className="skeleton-shimmer skeleton-line" style={{ width: '55%', height: '13px' }} />
          </div>
          <div className="card-param-col">
            <span className="skeleton-shimmer skeleton-line" style={{ width: '70%', height: '9px', marginBottom: '4px' }} />
            <span className="skeleton-shimmer skeleton-line" style={{ width: '50%', height: '13px' }} />
          </div>
        </div>
      </div>
      <div className="product-card-actions" style={{ height: '38px' }}>
        <div style={{ padding: '10px 14px', borderRight: '1px solid #ebdccb' }}>
          <span className="skeleton-shimmer skeleton-line" style={{ width: '80px', height: '12px' }} />
        </div>
        <div style={{ padding: '10px' }}>
          <span className="skeleton-shimmer skeleton-line" style={{ width: '65px', height: '12px' }} />
        </div>
      </div>
    </article>
  );
}

export default function ProductDetailSkeleton() {
  return (
    <main className="product-detail-page skeleton-detail-page" aria-hidden="true">
      <section className="product-detail-hero">
        <div className="container">
          {/* Breadcrumb Skeleton */}
          <div className="breadcrumb" style={{ marginBottom: '30px' }}>
            <span className="skeleton-shimmer skeleton-line" style={{ width: '220px', height: '14px' }} />
          </div>

          <div className="product-hero-grid">
            <div className="product-hero-copy">
              <span className="skeleton-shimmer skeleton-line" style={{ width: '180px', height: '12px', marginBottom: '16px', display: 'block' }} />
              <div className="skeleton-shimmer skeleton-line" style={{ width: '85%', height: '46px', marginBottom: '10px' }} />
              <div className="skeleton-shimmer skeleton-line" style={{ width: '55%', height: '46px', marginBottom: '18px' }} />
              <div className="hairline" style={{ background: '#eee4d9' }} />
              <div className="skeleton-shimmer skeleton-line" style={{ width: '92%', height: '18px', marginBottom: '8px' }} />
              <div className="skeleton-shimmer skeleton-line" style={{ width: '70%', height: '18px', marginBottom: '30px' }} />

              <div className="product-hero-actions" style={{ display: 'flex', gap: '14px', marginBottom: '36px' }}>
                <div className="skeleton-shimmer" style={{ width: '190px', height: '48px', borderRadius: '4px' }} />
                <div className="skeleton-shimmer" style={{ width: '140px', height: '48px', borderRadius: '4px' }} />
              </div>

              <div className="hero-param-grid" style={{ paddingTop: '24px', borderTop: '1px solid var(--line)' }}>
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="hero-param-item">
                    <div className="skeleton-shimmer skeleton-line" style={{ width: '90px', height: '11px', marginBottom: '8px' }} />
                    <div className="skeleton-shimmer skeleton-line" style={{ width: '130px', height: '22px' }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Image Card Shimmer */}
            <div className="product-image-card" style={{ height: '360px', background: '#eee8df' }}>
              <div className="skeleton-shimmer" style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Body Grid Shimmer */}
      <section className="section-pad">
        <div className="container product-body-grid">
          <div>
            <div className="skeleton-shimmer" style={{ width: '100%', height: '110px', borderRadius: '12px', marginBottom: '44px' }} />
            <div className="skeleton-shimmer skeleton-line" style={{ width: '220px', height: '26px', marginBottom: '20px' }} />
            <div className="skeleton-shimmer skeleton-line" style={{ width: '100%', height: '15px', marginBottom: '10px' }} />
            <div className="skeleton-shimmer skeleton-line" style={{ width: '92%', height: '15px', marginBottom: '10px' }} />
            <div className="skeleton-shimmer skeleton-line" style={{ width: '78%', height: '15px', marginBottom: '40px' }} />
            <div className="skeleton-shimmer" style={{ width: '100%', height: '260px', borderRadius: '8px' }} />
          </div>
          <div className="product-sidebar">
            <div className="skeleton-shimmer" style={{ width: '100%', height: '180px', borderRadius: '12px', marginBottom: '24px' }} />
            <div className="skeleton-shimmer" style={{ width: '100%', height: '220px', borderRadius: '12px' }} />
          </div>
        </div>
      </section>
    </main>
  );
}

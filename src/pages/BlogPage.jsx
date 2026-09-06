import { Link } from 'react-router-dom';
import { blogArticles } from '../data/blogData';

export default function BlogPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container" style={{ padding: '80px 0', minHeight: '30vh' }}>
          <span className="section-number">UPDATES & NEWS</span>
          <h1>Industry Insights & Company Updates</h1>
          <p style={{ marginTop: '20px', maxWidth: '600px' }}>Stay informed with the latest developments in mineral processing, product applications, and news from Bentoclay Claytech.</p>
        </div>
      </section>

      <section className="blog-content" style={{ padding: '40px 0 80px' }}>
        <div className="container">
          <div className="blog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '30px' }}>
            {blogArticles.map((article, idx) => (
              <article key={idx} className="blog-card" style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#fdfbfa', borderRadius: '12px', border: '1px solid #eaeaea', overflow: 'hidden', transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}>
                <Link to={`/blog/${article.slug}`}>
                  <img src={article.image} alt={article.title} style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} />
                </Link>
                <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <span style={{ fontSize: '12px', color: 'var(--green)', fontWeight: 'bold', textTransform: 'uppercase' }}>{article.category}</span>
                  <h3 style={{ fontSize: '20px', margin: '16px 0', lineHeight: '1.3' }}>
                    <Link to={`/blog/${article.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>{article.title}</Link>
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '24px', lineHeight: '1.6', flex: 1 }}>{article.excerpt}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                    <span style={{ fontSize: '13px', color: '#888' }}>{article.date}</span>
                    <Link to={`/blog/${article.slug}`} style={{ fontSize: '14px', fontWeight: '700', textDecoration: 'none', color: 'var(--ink)' }}>Read more ↗</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

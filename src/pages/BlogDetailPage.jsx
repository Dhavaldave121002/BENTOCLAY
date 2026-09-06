import { useParams, Navigate, Link } from 'react-router-dom';
import { blogArticles } from '../data/blogData';

export default function BlogDetailPage() {
  const { slug } = useParams();
  const article = blogArticles.find(a => a.slug === slug);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <main>
      <section className="page-hero" style={{ padding: '80px 0 40px' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Link to="/blog" style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: '14px', marginBottom: '32px', display: 'inline-block' }}>← Back to Blog</Link>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '24px' }}>
            <span style={{ fontSize: '13px', color: 'var(--green)', fontWeight: 'bold', textTransform: 'uppercase' }}>{article.category}</span>
            <span style={{ fontSize: '13px', color: '#888' }}>{article.date}</span>
          </div>
          <h1 style={{ lineHeight: '1.2' }}>{article.title}</h1>
        </div>
      </section>

      <section className="article-content" style={{ padding: '0 0 100px' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <img 
            src={article.image} 
            alt={article.title} 
            style={{ width: '100%', borderRadius: '12px', marginBottom: '50px', objectFit: 'cover', height: '400px' }} 
          />
          
          <div style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--ink)' }}>
            {article.content.split('\n').map((paragraph, i) => (
              paragraph.trim() ? <p key={i} style={{ marginBottom: '24px' }}>{paragraph.trim()}</p> : null
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

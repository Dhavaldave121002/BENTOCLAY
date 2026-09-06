import { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import ProductCardSkeleton from '../components/ProductCardSkeleton';
import ProductModal from '../components/ProductModal';
import GradeComparisonTable from '../components/GradeComparisonTable';
import FaqAccordion from '../components/FaqAccordion';
import useScrollReveal from '../hooks/useScrollReveal';

export default function ProductsPage() {
  const [filter, setFilter] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  useScrollReveal([filter, loading]);

  const handleFilterChange = (newCat) => {
    if (newCat === filter) return;
    setLoading(true);
    setFilter(newCat);
    setTimeout(() => {
      setLoading(false);
    }, 180);
  };

  const filteredProducts = products.filter((p) => {
    if (filter === 'all') return true;
    return p.categories.includes(filter);
  });

  const getCount = (cat) => {
    if (cat === 'all') return products.length;
    return products.filter((p) => p.categories.includes(cat)).length;
  };

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="section-number">PRODUCT PORTFOLIO / 06 GRADES</span>
          <h1>
            Attapulgite powder and<br />
            <em>granule grades.</em>
          </h1>
          <p>
            Six grades produced from the same rod-structured hydrated aluminium magnesium silicate, each ground and controlled for a different performance parameter. All specifications are taken from published product data sheets.
          </p>
        </div>
      </section>

      {/* Filterable Products */}
      <section className="products page-products" id="products">
        <div className="container">
          <div className="filter-bar" role="tablist" aria-label="Product filters">
            <button
              className={`filter ${filter === 'all' ? 'active' : ''}`}
              onClick={() => handleFilterChange('all')}
              type="button"
            >
              All products <b>{getCount('all')}</b>
            </button>
            <button
              className={`filter ${filter === 'drilling' ? 'active' : ''}`}
              onClick={() => handleFilterChange('drilling')}
              type="button"
            >
              Drilling <b>{getCount('drilling')}</b>
            </button>
            <button
              className={`filter ${filter === 'industrial' ? 'active' : ''}`}
              onClick={() => handleFilterChange('industrial')}
              type="button"
            >
              Industrial <b>{getCount('industrial')}</b>
            </button>
            <button
              className={`filter ${filter === 'natural' ? 'active' : ''}`}
              onClick={() => handleFilterChange('natural')}
              type="button"
            >
              Natural <b>{getCount('natural')}</b>
            </button>
          </div>

          <div className="product-grid" id="productGrid">
            {loading ? (
              [...Array(filter === 'all' ? 6 : getCount(filter) || 3)].map((_, idx) => (
                <ProductCardSkeleton key={idx} />
              ))
            ) : (
              filteredProducts.map((p) => {
                const originalIndex = products.findIndex((orig) => orig.id === p.id);
                return (
                  <ProductCard
                    key={p.id}
                    product={p}
                    index={originalIndex}
                    onViewDetails={setSelectedProduct}
                  />
                );
              })
            )}
          </div>
        </div>
      </section>

      {/* Grade Comparison Table */}
      <GradeComparisonTable onSelectProduct={setSelectedProduct} />

      {/* Technical FAQ */}
      <FaqAccordion />

      <section className="page-cta reveal-on-scroll">
        <div className="container">
          <div>
            <span>NEED TECHNICAL GUIDANCE?</span>
            <h2>Let’s identify the right grade for your process.</h2>
          </div>
          <Link className="btn btn-white" to="/contact">
            Discuss your application <b>↗</b>
          </Link>
        </div>
      </section>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </main>
  );
}

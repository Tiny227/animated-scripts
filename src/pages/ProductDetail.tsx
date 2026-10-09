import { useState, useEffect } from 'react';
import { useParams, Link, useSearchParams } from 'react-router-dom';
import { products } from '../config/products';

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [searchParams] = useSearchParams();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [referralData, setReferralCode] = useState({ code: '', count: 0 });

  const product = products.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return (
      <div className="container mt-20 text-center">
        <h1>Product Not Found</h1>
        <Link to="/" className="btn btn-primary mt-4">Back to Home</Link>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const referredBy = searchParams.get('ref');
    
    if (email) {
      try {
        const response = await fetch('/api/waitlist', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, referralCode: referredBy }),
        });

        const data = await response.json();

        if (response.ok) {
          setReferralCode({ code: data.referralCode, count: data.referralCount });
          setSubmitted(true);
          setEmail('');
        } else {
          alert('Something went wrong. Please try again.');
        }
      } catch (error) {
        alert('Could not connect to the server.');
      }
    }
  };

  return (
    <div className="product-detail-page">
      <section className="product-hero section">
        <div className="container">
          <div className="product-hero-grid">
            <div className="product-hero-image">
              <img src={product.image} alt={product.name} className="main-product-img" />
            </div>
            <div className="product-hero-info">
              <nav className="breadcrumb">
                <Link to="/">Collection</Link> / <span className="current">{product.name}</span>
              </nav>
              <h1 className="product-title">{product.name}</h1>
              <p className="product-category-detail">{product.category}</p>
              <p className="product-price-detail">{product.price}</p>
              
              <div className="product-description mt-6">
                <p>{product.description}</p>
              </div>

              <div className="product-specs mt-8">
                <div className="spec-item">
                  <span className="spec-label">Made in</span>
                  <span className="spec-value">{product.origin}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Construction</span>
                  <span className="spec-value">{product.construction}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Materials</span>
                  <span className="spec-value">{product.materials}</span>
                </div>
              </div>

              <div className="cta-block mt-10">
                {!submitted ? (
                  <form className="waitlist-form-inline" onSubmit={handleSubmit}>
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="waitlist-input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button type="submit" className="btn btn-primary">Reserve Early Access</button>
                  </form>
                ) : (
                  <div className="success-message-inline">
                    <p className="text-accent"><strong>You're on the list!</strong></p>
                    <p className="item-desc">Refer friends to move up. Your link: {referralData.code}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-transparency section bg-alt">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Transparent Pricing</h2>
            <p className="section-subtitle">We believe you should know exactly what you're paying for.</p>
          </div>

          <div className="breakdown-container-narrow mt-10">
            <table className="cost-table">
              <thead>
                <tr>
                  <th>Component</th>
                  <th className="text-right">Cost</th>
                  <th className="text-right">% of Retail</th>
                </tr>
              </thead>
              <tbody>
                {product.breakdown.components.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <strong>{item.label}</strong>
                      <span className="item-desc">{item.description}</span>
                    </td>
                    <td className="text-right">${item.cost}</td>
                    <td className="text-right">{item.percent}%</td>
                  </tr>
                ))}
                <tr className="table-subtotal">
                  <td><strong>True Cost of Production</strong></td>
                  <td className="text-right"><strong>${product.breakdown.totalCost}</strong></td>
                  <td className="text-right"><strong>{Math.round((product.breakdown.totalCost / product.breakdown.retail) * 100)}%</strong></td>
                </tr>
                <tr className="table-retail">
                  <td><strong>Stride & Soul Price</strong></td>
                  <td className="text-right"><strong>${product.breakdown.retail}</strong></td>
                  <td className="text-right"></td>
                </tr>
              </tbody>
            </table>
            
            <div className="comparison-box mt-8">
              <p>
                A comparable {product.name.toLowerCase()} from a traditional luxury brand typically retails for <strong>${product.slug === 'compass' ? '350' : '440'}+</strong>. By cutting out the middleman and retail markups, we offer the same quality for <strong>{product.price}</strong>.
              </p>
            </div>
            
            <div className="text-center mt-8">
              <Link to="/transparency" className="link-underlined">Learn more about our radical transparency</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;

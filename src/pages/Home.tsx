import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Home = () => {
  const [searchParams] = useSearchParams()
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [referralData, setReferralCode] = useState({ code: '', count: 0 })

  const products = [
    { name: 'The Sentinel', price: '$185', category: 'Cap-toe Oxford', origin: 'Elda, Spain', image: '/logo_concept_01.webp' },
    { name: 'The Pivot', price: '$175', category: 'Penny Loafer', origin: 'Ubrique, Spain', image: '/logo_concept_02.webp' },
    { name: 'The Compass', price: '$155', category: 'Minimalist Sneaker', origin: 'Porto, Portugal', image: '/color_palette_moodboard.webp' },
    { name: 'The Anchor', price: '$215', category: 'Chelsea Boot', origin: 'Elda, Spain', image: '/brand_moodboard.webp' }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const referredBy = searchParams.get('ref')
    
    if (email) {
      try {
        const response = await fetch('/api/waitlist', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, referralCode: referredBy }),
        })

        const data = await response.json()

        if (response.ok) {
          setReferralCode({ code: data.referralCode, count: data.referralCount })
          setSubmitted(true)
          setEmail('')
        } else {
          console.error('Failed to join waitlist')
          alert('Something went wrong. Please try again.')
        }
      } catch (error) {
        console.error('Error:', error)
        alert('Could not connect to the server.')
      }
    }
  }

  const referralLink = `${window.location.origin}/?ref=${referralData.code}`

  return (
    <>
      <header className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Handcrafted in Europe. <br /><span className="text-accent">Priced with Honesty.</span></h1>
            <p className="hero-subtitle">Premium, ethically-manufactured footwear for the modern professional. Built for the life you actually live.</p>
            <div className="hero-btns">
              <a href="#waitlist" className="btn btn-primary">Join the Waitlist</a>
              <button className="btn btn-secondary">Our Story</button>
            </div>
          </div>
          <div className="hero-image-container">
            <img src="/brand_moodboard.webp" alt="Stride & Soul Brand Moodboard" className="hero-image" />
          </div>
        </div>
      </header>

      <section id="collections" className="featured-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">The Foundation Collection</h2>
            <p className="section-subtitle">Timeless designs crafted from sustainable materials in Europe's finest workshops.</p>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <div key={product.name} className="product-card">
                <div className="product-image">
                  <div className="image-placeholder">
                    <img src={product.image} alt={product.name} className="concept-thumb" />
                  </div>
                </div>
                <div className="product-info">
                  <div className="product-meta">
                    <span className="product-origin">{product.origin}</span>
                  </div>
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-category">{product.category}</p>
                  <p className="product-price">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ethics" className="ethics-section">
        <div className="container">
          <div className="ethics-content">
            <h2 className="section-title">Crafted with Integrity</h2>
            <p className="ethics-text">
              We believe luxury shouldn't come at a hidden cost. Our shoes are manufactured in ethical workshops where artisans are paid fair wages and work in safe conditions.
            </p>
            <div className="ethics-grid">
              <div className="ethics-item">
                <h4>Ethical Production</h4>
                <p>Fair wages and safe environments for all our makers.</p>
              </div>
              <div className="ethics-item">
                <h4>Sustainable Materials</h4>
                <p>Recycled rubber soles and ethically sourced leathers.</p>
              </div>
              <div className="ethics-item">
                <h4>Transparent Pricing</h4>
                <p>Luxury quality without the traditional retail markup.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="waitlist" className="waitlist-section">
        <div className="container">
          <div className="waitlist-content">
            <h2 className="section-title">Step Into the Future</h2>
            <p className="section-subtitle">Join our exclusive waitlist for early access to our debut collection and members-only pricing.</p>
            
            {submitted ? (
              <div className="waitlist-success">
                <h3>Welcome to the Movement.</h3>
                <p>You're on the list! We'll reach out soon with exclusive updates.</p>
                
                <div className="referral-box">
                  <h4>Share the Stride</h4>
                  <p>Move up the list by inviting your colleagues. For every friend who joins, you both get <strong>$25 off</strong> at launch.</p>
                  <p className="referral-stats">You have <strong>{referralData.count}</strong> referrals so far.</p>
                  <div className="referral-link-container">
                    <input readOnly value={referralLink} className="referral-input" />
                    <button onClick={() => navigator.clipboard.writeText(referralLink)} className="btn-copy">Copy</button>
                  </div>
                  <div className="share-btns">
                    <a href={`https://twitter.com/intent/tweet?text=Just joined the waitlist for @StrideAndSoul. Premium, ethical footwear for the urban professional. Join me and we both get $25 off: ${referralLink}`} target="_blank" className="share-link">Share on X</a>
                    <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${referralLink}`} target="_blank" className="share-link">Share on LinkedIn</a>
                  </div>
                </div>
              </div>
            ) : (
              <form className="waitlist-form" onSubmit={handleSubmit}>
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="waitlist-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn btn-primary">Get Early Access</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;

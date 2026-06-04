import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      try {
        const response = await fetch('http://localhost:3001/api/waitlist', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        })

        if (response.ok) {
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

  return (
    <div className="app">
      <nav className="navbar">
        <div className="container nav-container">
          <div className="logo">
            <span className="logo-text">STRIDE & SOUL</span>
          </div>
          <ul className="nav-links">
            <li><a href="#collections">Collections</a></li>
            <li><a href="#craftsmanship">Craftsmanship</a></li>
            <li><a href="#ethics">Ethics</a></li>
          </ul>
          <div className="nav-actions">
            <button className="btn-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </button>
            <button className="btn-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
            </button>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Luxury Craftsmanship. <br /><span className="text-accent">Ethical Soul.</span></h1>
            <p className="hero-subtitle">High-quality, ethically-manufactured footwear for the modern urban professional. Experience the perfect stride.</p>
            <div className="hero-btns">
              <a href="#waitlist" className="btn btn-primary">Join the Waitlist</a>
              <button className="btn btn-secondary">Our Story</button>
            </div>
          </div>
          <div className="hero-image-container">
            <img src="/brand_moodboard.png" alt="Stride & Soul Brand Moodboard" className="hero-image" />
          </div>
        </div>
      </header>

      <section id="collections" className="featured-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">The Urban Collection</h2>
            <p className="section-subtitle">Timeless designs crafted from sustainable materials.</p>
          </div>
          <div className="product-grid">
            {[1, 2, 3].map((i) => (
              <div key={i} className="product-card">
                <div className="product-image">
                  <div className="image-placeholder">
                    {i === 1 && <img src="/logo_concept_01.png" alt="Concept 1" className="concept-thumb" />}
                    {i === 2 && <img src="/logo_concept_02.png" alt="Concept 2" className="concept-thumb" />}
                    {i === 3 && <img src="/color_palette_moodboard.png" alt="Palette" className="concept-thumb" />}
                  </div>
                </div>
                <div className="product-info">
                  <h3 className="product-name">The Executive Stride 0{i}</h3>
                  <p className="product-price">$245.00</p>
                  <p className="product-material">Full-Grain Leather</p>
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
                <h3>Thank you for joining!</h3>
                <p>We've added your email to the list. Stay tuned for updates.</p>
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

      <footer className="footer">
        <div className="container footer-container">
          <div className="footer-brand">
            <span className="logo-text">STRIDE & SOUL</span>
            <p>Elevating your journey, one step at a time.</p>
          </div>
          <div className="footer-links">
            <div className="link-group">
              <h5>Shop</h5>
              <ul>
                <li><a href="#">Men's</a></li>
                <li><a href="#">Women's</a></li>
                <li><a href="#">Accessories</a></li>
              </ul>
            </div>
            <div className="link-group">
              <h5>Company</h5>
              <ul>
                <li><a href="#">Our Story</a></li>
                <li><a href="#">Ethics</a></li>
                <li><a href="#">Sustainability</a></li>
              </ul>
            </div>
            <div className="link-group">
              <h5>Support</h5>
              <ul>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Shipping</a></li>
                <li><a href="#">Returns</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p>&copy; 2024 Stride & Soul. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

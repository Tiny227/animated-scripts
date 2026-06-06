import { useState } from 'react'

const Home = () => {
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
    <>
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
    </>
  )
}

export default Home;

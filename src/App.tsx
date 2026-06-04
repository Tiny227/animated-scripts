import './App.css'

function App() {
  return (
    <div className="container">
      <header className="header">
        <nav className="nav">
          <div className="logo">STRIDE & SOUL</div>
          <ul className="nav-links">
            <li><a href="#">Shop</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Ethics</a></li>
          </ul>
        </nav>
      </header>

      <main className="main">
        <section className="hero">
          <h1 className="hero-title">Luxury Craftsmanship. <br />Ethical Soul.</h1>
          <p className="hero-subtitle">High-quality, ethically-manufactured footwear sold directly to you.</p>
          <button className="cta-button">Coming Soon</button>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Stride & Soul. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App

import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container nav-container">
          <div className="logo">
            <Link to="/" className="logo-text">STRIDE & SOUL</Link>
          </div>
          <ul className="nav-links">
            <li><Link to="/#collections">Collections</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/transparency">Transparency</Link></li>
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

      <main>
        <Outlet />
      </main>

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
                <li><Link to="/about">Our Story</Link></li>
                <li><Link to="/transparency">Transparency</Link></li>
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
  );
};

export default Layout;

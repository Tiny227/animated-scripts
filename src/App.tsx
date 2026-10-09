import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Transparency from './pages/Transparency';
import ProductDetail from './pages/ProductDetail';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="transparency" element={<Transparency />} />
          <Route path="product/:slug" element={<ProductDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

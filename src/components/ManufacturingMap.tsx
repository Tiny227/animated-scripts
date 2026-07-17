const ManufacturingMap = () => {
  return (
    <div className="manufacturing-map">
      <svg viewBox="0 0 400 300" className="map-svg">
        {/* Simplified Iberian Peninsula */}
        <path 
          d="M50,50 L350,50 L350,250 L150,250 L150,200 L50,200 Z" 
          fill="var(--off-white)" 
          stroke="var(--warm-grey)" 
          strokeWidth="2" 
        />
        {/* Spain/Portugal Border (simplified) */}
        <path d="M150,250 L150,50" fill="none" stroke="var(--warm-grey)" strokeWidth="1" strokeDasharray="4" />
        
        {/* Locations */}
        {/* Elda */}
        <circle cx="300" cy="180" r="6" fill="var(--terracotta)" />
        <text x="310" y="185" fontSize="12" fontWeight="600" fill="var(--deep-forest)">Elda</text>
        
        {/* Ubrique */}
        <circle cx="220" cy="220" r="6" fill="var(--terracotta)" />
        <text x="230" y="225" fontSize="12" fontWeight="600" fill="var(--deep-forest)">Ubrique</text>
        
        {/* Porto */}
        <circle cx="150" cy="100" r="6" fill="var(--terracotta)" />
        <text x="100" y="105" fontSize="12" fontWeight="600" fill="var(--deep-forest)">Porto</text>
        
        <text x="70" y="40" fontSize="14" fontWeight="600" fill="var(--warm-grey)">PORTUGAL</text>
        <text x="220" y="40" fontSize="14" fontWeight="600" fill="var(--warm-grey)">SPAIN</text>
      </svg>
      <div className="map-legend">
        <p><span className="dot dot-elda"></span> <strong>Elda:</strong> Flagship Factory (Goodyear Welt)</p>
        <p><span className="dot dot-ubrique"></span> <strong>Ubrique:</strong> Leather Artisans (Blake Stitch)</p>
        <p><span className="dot dot-porto"></span> <strong>Porto:</strong> Sustainable & Luxury Sneakers</p>
      </div>
    </div>
  );
};

export default ManufacturingMap;

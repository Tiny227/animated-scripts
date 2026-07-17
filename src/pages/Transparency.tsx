import { useState } from 'react';

const Transparency = () => {
  const [activeModel, setActiveModel] = useState('The Sentinel');

  const breakdowns: Record<string, any> = {
    'The Sentinel': {
      retail: 185,
      components: [
        { label: 'Materials', description: 'Italian LWG Gold calfskin, cork, leather sole', cost: 34, percent: 18 },
        { label: 'Labor', description: 'Goodyear welted by artisans in Elda, Spain', cost: 24, percent: 13 },
        { label: 'Transport & Duty', description: 'Iberian Peninsula to distribution center', cost: 12, percent: 7 },
        { label: 'Packaging', description: 'FSC-certified box, organic cotton bag', cost: 4, percent: 2 },
      ],
      totalCost: 74
    },
    'The Pivot': {
      retail: 175,
      components: [
        { label: 'Materials', description: 'Spanish suede, Blake-stitch components', cost: 28, percent: 16 },
        { label: 'Labor', description: 'Hand-stitched in Ubrique, Spain', cost: 18, percent: 10 },
        { label: 'Transport & Duty', description: 'Iberian Peninsula to distribution center', cost: 12, percent: 7 },
        { label: 'Packaging', description: 'FSC-certified box, organic cotton bag', cost: 4, percent: 2 },
      ],
      totalCost: 62
    },
    'The Compass': {
      retail: 155,
      components: [
        { label: 'Materials', description: 'Recycled rubber, organic cotton, eco-leather', cost: 14, percent: 9 },
        { label: 'Labor', description: 'Sustainable assembly in Porto, Portugal', cost: 10, percent: 6 },
        { label: 'Transport & Duty', description: 'Iberian Peninsula to distribution center', cost: 10, percent: 7 },
        { label: 'Packaging', description: 'FSC-certified box, organic cotton bag', cost: 4, percent: 3 },
      ],
      totalCost: 38
    },
    'The Anchor': {
      retail: 215,
      components: [
        { label: 'Materials', description: 'Italian LWG Gold calfskin, rugged welt', cost: 38, percent: 18 },
        { label: 'Labor', description: 'Goodyear welted by artisans in Elda, Spain', cost: 25, percent: 12 },
        { label: 'Transport & Duty', description: 'Iberian Peninsula to distribution center', cost: 15, percent: 7 },
        { label: 'Packaging', description: 'FSC-certified box, organic cotton bag', cost: 4, percent: 2 },
      ],
      totalCost: 82
    }
  };

  const currentBreakdown = breakdowns[activeModel];

  const collectionPricing = [
    { model: 'The Compass', price: '$155–$175', positioning: 'Minimalist Sneaker', origin: 'Porto, Portugal' },
    { model: 'The Pivot', price: '$175–$185', positioning: 'Penny Loafer', origin: 'Ubrique, Spain' },
    { model: 'The Sentinel', price: '$185–$195', positioning: 'Cap-toe Oxford', origin: 'Elda, Spain' },
    { model: 'The Anchor', price: '$215–$225', positioning: 'Chelsea Boot', origin: 'Elda, Spain' },
  ];

  const constructionMethods = [
    {
      icon: '/assets/transparency/icon_goodyear_welt.webp',
      name: 'Goodyear Welt',
      location: 'Elda, Spain',
      usedIn: ['The Sentinel', 'The Anchor'],
      description: 'A heritage construction with a leather welt stitched to the upper and outsole, filled with cork. Resoleable. Takes 2+ weeks per pair.'
    },
    {
      icon: '/assets/transparency/icon_blake_stitch.webp',
      name: 'Blake Stitch',
      location: 'Ubrique, Spain',
      usedIn: ['The Pivot'],
      description: 'The upper is stitched directly through the insole and outsole in one pass. Lighter, more flexible, and still fully resoleable.'
    },
    {
      icon: '/assets/transparency/icon_blake_rapid.webp',
      name: 'Cemented/Cupsole',
      location: 'Porto, Portugal',
      usedIn: ['The Compass'],
      description: 'High-quality vulcanized or cupsole construction using recycled rubber. Designed for comfort and durability in an urban environment.'
    }
  ];

  const materialBadges = [
    { src: '/assets/transparency/badge_lwg_calfskin.webp', alt: 'LWG Silver Italian Calfskin' },
    { src: '/assets/transparency/badge_spanish_suede.webp', alt: 'Premium Spanish Suede' },
    { src: '/assets/transparency/badge_recycled_rubber.webp', alt: 'Recycled Rubber Outsole' }
  ];

  return (
    <div className="page-content">
      <header className="page-header">
        <div className="container">
          <h1 className="page-title">Radical Transparency</h1>
          <p className="large-text mt-4">What we make. Where we make it. How we make it.</p>
        </div>
      </header>

      <section className="section no-padding-bottom">
        <div className="container">
          <div className="transparency-map-container">
            <img src="/assets/transparency/manufacturing_map.webp"
                 alt="Stride & Soul manufacturing map showing our three Iberian hubs: Elda, Ubrique, and Porto"
                 className="transparency-map" />
          </div>
          <div className="content-block text-center mt-4">
            <h3 className="sub-headline">"Three cities. Three centuries of craft. One ethical promise."</h3>
            <p className="narrow-container">
              Our footwear is born in the heart of the Iberian Peninsula, where shoemaking isn't just an industry—it's a multi-generational legacy. From the Goodyear welt masters in Elda to the Blake stitch artisans in Ubrique and the sustainable innovators in Porto, we partner with the best in the world.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-alt">
        <div className="container">
          <div className="content-block text-center">
            <h2 className="section-title">How We Build</h2>
            <p>Quality construction is the difference between a shoe that lasts a season and one that lasts a decade.</p>
          </div>
          
          <div className="construction-grid">
            {constructionMethods.map((method, index) => (
              <div key={index} className="construction-card">
                <img src={method.icon} alt={method.name} role="img" />
                <h3>{method.name}</h3>
                <div className="location">{method.location}</div>
                <p>{method.description}</p>
                <div className="item-desc mt-4">Used in: {method.usedIn.join(', ')}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-block text-center">
            <h2 className="section-title">Material Certifications</h2>
            <p>We source only the finest materials, screened for safety and sustainability.</p>
          </div>
          
          <div className="material-badges">
            {materialBadges.map((badge, index) => (
              <img key={index} src={badge.src} alt={badge.alt} className="badge" />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-alt">
        <div className="container">
          <div className="content-block text-center">
            <h2 className="section-title">Honest Pricing</h2>
            <h3 className="sub-headline">No Mystery Markup.</h3>
          </div>
          
          <div className="collection-pricing-container">
            <table className="cost-table">
              <thead>
                <tr>
                  <th>Model</th>
                  <th>Positioning</th>
                  <th>Origin</th>
                  <th className="text-right">Price (DTC)</th>
                </tr>
              </thead>
              <tbody>
                {collectionPricing.map((item: any, index: number) => (
                  <tr key={index}>
                    <td><strong>{item.model}</strong></td>
                    <td>{item.positioning}</td>
                    <td>{item.origin}</td>
                    <td className="text-right"><strong>{item.price}</strong></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="content-block text-center mt-8">
            <h3 className="sub-headline">Cost Breakdown Analysis</h3>
            <p className="item-desc">Select a model to see our itemized production costs.</p>
            
            <div className="model-selector mt-4">
              {Object.keys(breakdowns).map(model => (
                <button 
                  key={model}
                  className={`btn btn-sm ${activeModel === model ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={() => setActiveModel(model)}
                  style={{ margin: '0 5px' }}
                >
                  {model.replace('The ', '')}
                </button>
              ))}
            </div>
          </div>
          
          <div className="breakdown-container mt-6">
            <table className="cost-table">
              <thead>
                <tr>
                  <th>Component</th>
                  <th className="text-right">Cost</th>
                  <th className="text-right">% of Retail</th>
                </tr>
              </thead>
              <tbody>
                {currentBreakdown.components.map((item: any, index: number) => (
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
                  <td><strong>Subtotal — What It Costs to Make</strong></td>
                  <td className="text-right"><strong>${currentBreakdown.totalCost}</strong></td>
                  <td className="text-right"><strong>{Math.round((currentBreakdown.totalCost / currentBreakdown.retail) * 100)}%</strong></td>
                </tr>
                <tr className="table-retail">
                  <td><strong>What You Pay</strong></td>
                  <td className="text-right"><strong>${currentBreakdown.retail}</strong></td>
                  <td className="text-right"></td>
                </tr>
              </tbody>
            </table>

            <div className="breakdown-notes">
              <p>The difference (${currentBreakdown.retail - currentBreakdown.totalCost}) covers:</p>
              <ul className="notes-list">
                <li>Product development and sampling</li>
                <li>Customer service and quality assurance</li>
                <li>Website operations and secure checkout</li>
                <li>Shipping and easy returns</li>
                <li>Building a brand you can trust</li>
              </ul>
            </div>
          </div>

          <div className="comparison-box">
            <h4>For Comparison</h4>
            <p>
              A comparable {activeModel.toLowerCase()} from a traditional luxury brand retails for <strong>${activeModel === 'The Compass' ? '350' : '440'}+</strong> — and costs roughly the same in materials and labor to produce. The extra markup goes to retailers and marketing hype.
            </p>
            <p className="text-accent">We charge ${currentBreakdown.retail}. And we'll show you every dollar.</p>
          </div>
        </div>
      </section>

      <section className="section bg-forest text-off-white">
        <div className="container">
          <div className="content-block text-center">
            <h2 className="section-title text-camel">Our Commitment</h2>
          </div>
          <div className="promise-grid">
            <div className="promise-card">
              <h5>EU REACH Compliant</h5>
              <p>Every material is screened against the EU restricted substances list—AZO dyes, Chrome VI, formaldehyde, phthalates, and more. Your safety is non-negotiable.</p>
            </div>
            <div className="promise-card">
              <h5>Fair Wages</h5>
              <p>Our artisans earn living wages in facilities that enforce human and labor rights, fair treatment, and anti-corruption policies.</p>
            </div>
            <div className="promise-card">
              <h5>Built for Decades</h5>
              <p>Quality construction, repairable designs, and materials that age gracefully. The most sustainable shoe is the one you never have to replace.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Transparency;

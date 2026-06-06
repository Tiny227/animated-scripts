const Transparency = () => {
  const breakdown = [
    { label: 'Materials', description: 'Italian vegetable-tanned leather, lining, sole, hardware', cost: 52, percent: 28 },
    { label: 'Labor', description: 'Hand cutting, stitching, lasting by Spanish artisans', cost: 35, percent: 19 },
    { label: 'Transport & Duty', description: 'Spain to North America', cost: 15, percent: 8 },
    { label: 'Packaging', description: 'Premium box, tissue, care card', cost: 4, percent: 2 },
  ];

  const subtotal = 106;
  const retail = 185;

  return (
    <div className="page-content">
      <header className="page-header">
        <div className="container">
          <h1 className="page-title">What You're Really Paying For</h1>
        </div>
      </header>

      <section className="section">
        <div className="container narrow-container">
          <div className="content-block">
            <h2 className="section-title">The Philosophy</h2>
            <h3 className="sub-headline">No Mystery Markup. Just Honest Pricing.</h3>
            <p>
              Most luxury shoe brands charge you $400+ for a pair of shoes that costs $60 to make. The difference? Brand markup, retail margins, and a whole lot of mystery.
            </p>
            <p>We believe you deserve better.</p>
            <p>
              At Stride & Soul, we show you exactly where every dollar goes. When you pay $185 for a pair of our shoes, here's the breakdown — no markups, no middlemen, no secrets.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-alt">
        <div className="container">
          <div className="content-block text-center">
            <h2 className="section-title">The Cost Breakdown</h2>
            <h3 className="sub-headline">The Anatomy of $185</h3>
          </div>
          
          <div className="breakdown-container">
            <table className="cost-table">
              <thead>
                <tr>
                  <th>Component</th>
                  <th className="text-right">Cost</th>
                  <th className="text-right">% of Retail</th>
                </tr>
              </thead>
              <tbody>
                {breakdown.map((item, index) => (
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
                  <td className="text-right"><strong>${subtotal}</strong></td>
                  <td className="text-right"><strong>57%</strong></td>
                </tr>
                <tr className="table-retail">
                  <td><strong>What You Pay</strong></td>
                  <td className="text-right"><strong>${retail}</strong></td>
                  <td className="text-right"></td>
                </tr>
              </tbody>
            </table>

            <div className="breakdown-notes">
              <p>The difference ($79) covers:</p>
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
              A comparable cap-toe oxford from a traditional luxury brand retails for <strong>$440+</strong> — and costs roughly the same $52 in materials and $35 in labor to produce. The extra $200+ is margin, marketing, and markup.
            </p>
            <p className="text-accent">We charge $185. And we'll show you every dollar.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-block text-center">
            <h2 className="section-title">Our Commitment</h2>
            <h3 className="sub-headline">Radical Transparency in Everything We Do</h3>
          </div>
          <div className="commitment-grid">
            <div className="commitment-item">
              <h4>We name our factory</h4>
              <p>SEROMOL Group in Elda, Spain — a family-owned operation since 1990. You can visit their website and learn about their 30+ years of craftsmanship.</p>
            </div>
            <div className="commitment-item">
              <h4>We test for what matters</h4>
              <p>Every material is screened against the EU REACH restricted substances list. Your safety is non-negotiable.</p>
            </div>
            <div className="commitment-item">
              <h4>We pay fairly</h4>
              <p>Our artisans earn living wages in a facility that enforces human and labor rights, fair treatment, and anti-corruption policies.</p>
            </div>
            <div className="commitment-item">
              <h4>We build for years</h4>
              <p>Quality construction, repairable designs, and materials that age gracefully. The most sustainable shoe is the one you never replace.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-forest text-off-white">
        <div className="container">
          <div className="content-block text-center">
            <h2 className="section-title text-camel">Our Promise to You</h2>
          </div>
          <div className="promise-grid">
            <div className="promise-card">
              <h5>30-Day Trial</h5>
              <p>If they're not the most comfortable professional shoes you've owned, return them — no questions asked.</p>
            </div>
            <div className="promise-card">
              <h5>One-Year Guarantee</h5>
              <p>If a defect appears in the first year, we'll repair or replace them free of charge.</p>
            </div>
            <div className="promise-card">
              <h5>Lifetime Sole Care</h5>
              <p>Send us your worn soles and we'll resole them at cost. We're here to help maintain your investment.</p>
            </div>
          </div>
          <p className="text-center mt-4">
            <strong>Because trust should be the only thing that costs more.</strong>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Transparency;

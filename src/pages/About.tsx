const About = () => {
  return (
    <div className="page-content">
      <header className="page-header">
        <div className="container">
          <h1 className="page-title">Every Stride Has a Story</h1>
        </div>
      </header>

      <section className="section">
        <div className="container narrow-container">
          <div className="content-block">
            <h2 className="section-title">The Idea</h2>
            <h3 className="sub-headline">The Shoes Your Career Deserves</h3>
            <p>
              We believe the best shoes are the ones you forget you're wearing — because they fit perfectly, move with you effortlessly, and look like they belong in every room you walk into. But for too long, the choice was simple: buy ethically and settle for sneakers that felt too casual for the office, or buy luxury and accept the opacity of traditional retail.
            </p>
            <p>
              We started Stride & Soul because we refused to choose.
            </p>
            <p>
              Our founders — a brand strategist, a designer, and an engineer — came together around a simple conviction: the modern professional shouldn't have to compromise between values and style. You deserve shoes that are as honest as they are beautiful. Shoes that take you from the morning commute to the client meeting to the evening dinner, without missing a beat.
            </p>
            <p>So we set out to build them.</p>
          </div>
        </div>
      </section>

      <section className="section bg-alt">
        <div className="container">
          <div className="content-block text-center">
            <h2 className="section-title">The Craft</h2>
            <h3 className="sub-headline">Made in Spain. Made with Purpose.</h3>
          </div>
          <div className="craft-grid">
            <div className="craft-text">
              <p>
                Every pair of Stride & Soul shoes is handcrafted in <strong>Elda, Spain</strong> — a city that has been the heart of Spanish footwear craftsmanship for over a century. We partner directly with <strong>SEROMOL Group</strong>, a family-operated factory founded in 1990, where master artisans bring decades of experience to every stitch, every cut, and every last.
              </p>
              <div className="pillars-grid">
                <div className="pillar">
                  <h4>1. Quality That Lasts</h4>
                  <p>Before a single pair goes into production, every component is tested. Every leather hide is inspected. Every last is developed specifically for the fit requirements of our global customers.</p>
                </div>
                <div className="pillar">
                  <h4>2. Craftsmanship, Not Assembly</h4>
                  <p>In an industry that's moved toward mass automation, we choose the human touch. Our shoes are cut by hand, stitched on classic sewing machines, and finished by artisans.</p>
                </div>
                <div className="pillar">
                  <h4>3. Transparency by Default</h4>
                  <p>We name our factory because we're proud of them. We share our costs because we have nothing to hide. We believe trust is earned through honesty, not marketing.</p>
                </div>
              </div>
            </div>
            <div className="craft-image">
              <img src="/brand_moodboard.png" alt="Craftsmanship in Elda, Spain" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container narrow-container">
          <div className="content-block">
            <h2 className="section-title">The Mission</h2>
            <h3 className="sub-headline">Style That Stands for Something</h3>
            <p>
              Stride & Soul exists for the professional who believes that what you wear should reflect not just your taste, but your values. We're building a brand where:
            </p>
            <ul className="mission-list">
              <li>
                <strong>Ethics and aesthetics are equal partners.</strong> Sustainable doesn't mean boring. Professional doesn't mean stuffy. You shouldn't have to choose.
              </li>
              <li>
                <strong>Transparency is a feature, not a footnote.</strong> You have the right to know exactly where your shoes come from, who made them, and what they cost to produce.
              </li>
              <li>
                <strong>Quality is the ultimate sustainability.</strong> A shoe that lasts five years is better for the planet — and your wardrobe — than five pairs that last one season.
              </li>
            </ul>
            <p>
              We're not here to save the planet. We're here to make great shoes — shoes that happen to be made ethically, priced honestly, and designed to be the most dependable pair in your rotation.
            </p>
          </div>
        </div>
      </section>

      <section className="section invitation-section bg-forest text-off-white">
        <div className="container text-center">
          <h2 className="section-title text-camel">Join the Movement</h2>
          <p className="large-text">
            Stride & Soul is more than a footwear brand. It's a community of professionals who believe that style and substance can — and should — coexist.
          </p>
          <p className="footer-quote">
            <strong>Welcome to Stride & Soul. Made in Spain. Priced with honesty. Built for your life.</strong>
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;

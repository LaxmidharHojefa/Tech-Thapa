import "./Home.css";
import { useState, useEffect } from "react";

const Home = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-canvas">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
          <div className="blob blob-4"></div>
        </div>

        <div className="stars">
          {Array(50)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="star"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  "--duration": `${3 + Math.random() * 4}s`,
                  "--delay": `${Math.random() * 5}s`,
                }}
              ></div>
            ))}
        </div>

        <div className="hero-container">
          
          {/* LEFT CONTENT */}
          <div className="hero-content">
            <p className="hero-subtitle">🚀 Welcome to Excellence</p>
            <h1 className="hero-title">
              Transform Your Business with <span className="gradient-text">Fakhri Technology</span>
            </h1>
            <p className="hero-description">
              Unlock unlimited potential with cutting-edge IT solutions designed for modern enterprises. We deliver innovation, security, and excellence.
            </p>

            <div className="hero-buttons">
              <button className="btn-primary">
                <span>Get Started</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
              <button className="btn-secondary">Learn More</button>
            </div>

            <div className="hero-stats-mini">
              <div className="mini-stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Companies</span>
              </div>
              <div className="mini-stat">
                <span className="stat-number">100K+</span>
                <span className="stat-label">Users</span>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hero-image-wrapper">
            <div className="hero-image-glow"></div>
            <img src="/images/marvel.jpg" alt="IT Solutions" className="hero-image" />
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features-section">
        <div className="features-container">
          <h2>Why Choose Us</h2>
          <div className="features-grid">
            {[
              { icon: "⚡", title: "Lightning Speed", desc: "Super fast performance" },
              { icon: "🔒", title: "Secure", desc: "Military-grade protection" },
              { icon: "📈", title: "Scalable", desc: "Grows with your needs" },
              { icon: "🌍", title: "Global", desc: "Worldwide coverage" },
              { icon: "💡", title: "Innovative", desc: "Cutting-edge tech" },
              { icon: "🤝", title: "Support", desc: "24/7 assistance" },
            ].map((feat, i) => (
              <div key={i} className="feature-card" style={{ "--index": i }}>
                <div className="feature-icon">{feat.icon}</div>
                <h3>{feat.title}</h3>
                <p>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="stats-section">
        <div className="stats-background"></div>
        <div className="stats-container">
          <div className="stat-box" style={{"--delay": "0s"}}>
            <div className="stat-icon">📊</div>
            <h2>50+</h2>
            <p>Registered Companies</p>
          </div>
          <div className="stat-box" style={{"--delay": "0.2s"}}>
            <div className="stat-icon">😊</div>
            <h2>100K+</h2>
            <p>Happy Clients</p>
          </div>
          <div className="stat-box" style={{"--delay": "0.4s"}}>
            <div className="stat-icon">👨‍💻</div>
            <h2>500+</h2>
            <p>Expert Developers</p>
          </div>
          <div className="stat-box" style={{"--delay": "0.6s"}}>
            <div className="stat-icon">🕐</div>
            <h2>24/7</h2>
            <p>Always Available</p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <div className="cta-container">

          {/* LEFT IMAGE */}
          <div className="cta-image">
            <img src="/images/registration-image.jpg" alt="Get Started" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="cta-content">
            <h2>Ready to Elevate Your Business?</h2>
            <p>
              Join thousands of companies trusting us with their digital transformation. Get a personalized consultation and discover how we can accelerate your growth.
            </p>

            <div className="cta-features">
              <div className="cta-feature">
                <span className="cta-check">✓</span>
                <span>Customized Solutions</span>
              </div>
              <div className="cta-feature">
                <span className="cta-check">✓</span>
                <span>Enterprise Security</span>
              </div>
              <div className="cta-feature">
                <span className="cta-check">✓</span>
                <span>Lightning Fast Deployment</span>
              </div>
            </div>

            <div className="hero-buttons">
              <button className="btn-primary">Start Free Trial</button>
              {/* <button className="btn-secondary">Schedule Demo</button> */}
            </div>
          </div>

        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-grid">
          {[
            { name: "John Doe", role: "CEO", text: "Best decision we made!" },
            { name: "Jane Smith", role: "CTO", text: "Amazing support team!" },
            { name: "Mike Johnson", role: "Manager", text: "Game changer for us!" },
          ].map((testimonial, i) => (
            <div key={i} className="testimonial-card" style={{ "--delay": i * 0.2 }}>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <h4>{testimonial.name}</h4>
              <p className="testimonial-role">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;

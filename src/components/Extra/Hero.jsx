import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="blur-circle top-left"></div>
      <div className="blur-circle bottom-right"></div>

      <h1 className="hero-heading">
        Entrepreneurship <br />
        Cell, <span className="highlight">WIET</span>
      </h1>

      <p className="hero-description">
        We’re more than just events. At E-Cell WIET, we empower the next generation of leaders to think big and build bold.
      </p>

      <div className="hero-buttons">
        <a href="#" className="btn-primary">Get Started 🚀</a>
        <a href="#about" className="btn-outline">Know More</a>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import { Link } from "react-router-dom";
import HeroSectionAbout from '../assets/Hero-section-about.jpeg'
import OurTeam from './OurTeam'
import about1 from '../assets/about-1.jpeg';
import about2 from '../assets/about-2.jpeg';
import about3 from '../assets/about-3.jpeg';
import about4 from '../assets/about-4.jpeg';
import about5 from '../assets/about-5.jpeg';
import about6 from '../assets/about-6.jpeg';
import MouseGlowCursor from './Three/MouseGlowCursor'

import './Aboutus.css'

/* -------------------- Button Component -------------------- */
const Button = React.forwardRef(
  ({ className = '', variant = 'primary', size = 'default', children, ...props }, ref) => {
    const baseClass = 'btn';
    const variantClass = `btn-${variant}`;
    const sizeClass = `btn-${size}`;
    const buttonClass = `${baseClass} ${variantClass} ${sizeClass} ${className}`.trim();

    return (
      <button className={buttonClass} ref={ref} {...props}>
      <MouseGlowCursor></MouseGlowCursor>
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';

/* -------------------- HeroSection Component -------------------- */
const HeroSection = () => {
  return (
    <section className="hero-section-about">
      <MouseGlowCursor></MouseGlowCursor>
      <div className="hero-container">
        <div className="hero-grid">
          {/* Left Content */}
          <div className="hero-content">
            <h1 className="hero-title">
              Who We Are:
              <br />
              Fostering
              <br />
              Innovation and
              <br />
              Entrepreneurship
            </h1>
            <p className="hero-description">
              E-Cell WIET is dedicated to cultivating a vibrant ecosystem for aspiring entrepreneurs.
              We empower students with the knowledge, skills, and network needed to transform
              innovative ideas into impactful ventures. Our mission is to inspire, educate, and
              support the next generation of leaders.
            </p>
          </div>

          {/* Right Image */}
          <div className="hero-image-container">
            <div className="hero-image-wrapper">
              <img
                src={HeroSectionAbout}
                alt="Professional businessman working with technology and data analytics"
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* -------------------- MilestonesSection Component -------------------- */
const milestones = [
  { id: 1, title: "First Startup Summit", date: "March 2021", image: about1, icon: "⚙️" },
  { id: 2, title: "National Incubation", date: "June 2021", image: about2, icon: "🏢" },
  { id: 3, title: "Tech Innovation Lab", date: "September 2021", image: about3, icon: "💡" },
  { id: 4, title: "Bootcamp Initiative", date: "January 2024", image: about4, icon: "⚡" },
  { id: 5, title: "Startup Ecosystem", date: "March 2024", image: about5, icon: "🎯" },
  { id: 6, title: "Innovation Showcase", date: "June 2024", image: about6, icon: "🔬" }
];

const MilestonesSection = () => {
  const getDescription = (id) => {
    const descriptions = {
      1: "Launched our first comprehensive startup summit for early-stage entrepreneurs.",
      2: "Opened our national incubation center to support growing startups.",
      3: "Established cutting-edge technology innovation laboratories.",
      4: "Launched intensive bootcamp programs for skill development.",
      5: "Created a comprehensive startup ecosystem platform.",
      6: "Hosted our annual innovation showcase and demo day."
    };
    return descriptions[id];
  };

  return (
    <section className="milestones-section">
      <MouseGlowCursor></MouseGlowCursor>
      <div className="milestones-container">
        <h2 className="milestones-title">Our Journey: Key Milestones</h2>
        <div className="milestones-grid">
          {milestones.map((milestone) => (
            <div key={milestone.id} className="milestone-card">
              <div className="milestone-image-container">
                <img src={milestone.image} alt={milestone.title} className="milestone-image" />
                <div className="milestone-icon">{milestone.icon}</div>
                <div className="milestone-date">{milestone.date}</div>
              </div>
              <div className="milestone-content">
                <h3 className="milestone-title">{milestone.title}</h3>
                <p className="milestone-description">{getDescription(milestone.id)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* -------------------- TeamSection Component -------------------- */
const TeamSection = () => {
  return (
    <section className="team-section">
      <MouseGlowCursor></MouseGlowCursor>
      <div className="team-container">
        <h2 className="team-title">Meet the Minds Behind Our Vision</h2>
       <Button variant="hero" size="lg" className="team-cta" asChild>
              <Link to="/ourteam">Explore Our Team</Link>
       </Button>
      </div>
    </section>
  );
};

/* -------------------- Main App Component -------------------- */
const App = () => {
  return (
    <>
      <HeroSection />
      <MilestonesSection />
      <TeamSection />
    </>
  );
};

export default App;

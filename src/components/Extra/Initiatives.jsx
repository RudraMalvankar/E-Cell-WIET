import React from 'react';
import './Initiatives.css';

const Initiatives = () => {
  return (
    <section id="initiatives" className="initiatives-section">
      <h2 className="initiatives-heading">Our Initiatives</h2>
      <div className="initiatives-grid">
        <div className="initiative-card">
          <h3>Startup Workshops</h3>
          <p>Interactive sessions with successful entrepreneurs to learn how ideas become ventures.</p>
        </div>
        <div className="initiative-card">
          <h3>Pitch Competitions</h3>
          <p>Opportunities for students to pitch ideas, get feedback, and win funding or incubation support.</p>
        </div>
        <div className="initiative-card">
          <h3>Community Meetups</h3>
          <p>Networking events for aspiring founders to connect, collaborate, and grow together.</p>
        </div>
      </div>
    </section>
  );
};

export default Initiatives;

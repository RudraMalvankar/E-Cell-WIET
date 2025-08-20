import React from "react";
import './OurInitiatives.css'
import OurVision1 from '../assets/OurVision1.jpeg'
import OurVision2 from '../assets/OurVision2.jpeg'
import OurVision3 from '../assets/OurVision3.jpeg'
import OurVision4 from '../assets/OurVision4.jpeg'
import OurVision5 from '../assets/OurVision5.jpeg'
import OurVision6 from '../assets/OurVision6.jpeg'
import MouseGlowCursor from './Three/MouseGlowCursor'

export default function OurInitiatives() {
  return (
    <>
    <MouseGlowCursor></MouseGlowCursor>
      <section className="initiatives-section" id="initiatives">
        <div className="container">
          <h2 className="section-title">Our Initiatives: Past Successes & Upcoming Events</h2>
          <div className="initiatives-grid">
            <div className="event-card">
              <div className="card-tag past-event">Past Event</div>
              <img
                src={OurVision1}
                alt="Global Sustainability Summit"
                className="card-image"
              />
              <div className="card-content">
                <h3>Global Sustainability Summit</h3>
                <p>
                  A landmark event bringing together world leaders and
                  environmentalists to tackle pressing global issues.
                </p>
              </div>
            </div>

            <div className="event-card">
              <img
                src={OurVision2}
                alt="Innovation Accelerator Program"
                className="card-image"
              />
              <div className="card-content">
                <h3>Innovation Accelerator Program</h3>
                <p>
                  Mentoring next-generation startups focused on disruptive
                  technologies for a sustainable future.
                </p>
              </div>
            </div>

            <div className="event-card">
              <div className="card-tag past-event">Past Event</div>
              <img
                src={OurVision3}
                alt="Community Outreach Series"
                className="card-image"
              />
              <div className="card-content">
                <h3>Community Outreach Series</h3>
                <p>
                  Engaging local communities through workshops and educational
                  programs to foster innovation.
                </p>
              </div>
            </div>

            <div className="event-card">
              <div className="card-tag upcoming-event">Upcoming</div>
              <img
                src={OurVision4}
                alt="Future Tech Conference"
                className="card-image"
              />
              <div className="card-content">
                <h3>Future Tech Conference</h3>
                <p>Exploring the advancements in AI, blockchain, and quantum computing.</p>
                <p className="date">August 20, 2024</p>
              </div>
            </div>

            <div className="event-card">
              <img
                src={OurVision5}
                alt="Healthcare Innovation Challenge"
                className="card-image"
              />
              <div className="card-content">
                <h3>Healthcare Innovation Challenge</h3>
                <p>Identifying and funding groundbreaking solutions to global health crises.</p>
              </div>
            </div>

            <div className="event-card">
              <div className="card-tag upcoming-event">Upcoming</div>
              <img
                src={OurVision6}
                alt="Youth Leadership Workshop"
                className="card-image"
              />
              <div className="card-content">
                <h3>Youth Leadership Workshop</h3>
                <p>Developing leadership skills and civic engagement among young leaders.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
        
      <section className="progress-section" id="progress">
        <div className="container">
          <h2 className="section-title">Our Progress by Numbers</h2>
          <div className="stats-container">
            <div className="stat-item">
              <div className="number">0</div>
              <div className="label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="number">0</div>
              <div className="label">Community Members</div>
            </div>
            <div className="stat-item">
              <div className="number">0</div>
              <div className="label">Lives Impacted</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

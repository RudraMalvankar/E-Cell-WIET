import React from 'react'

const Speakers = () => {
  return (
      <div
        className="speakers-partners-wrapper"
        style={{ backgroundColor: "var(--light-grey-bg)" }}
      >
        <section className="speakers-section" id="speakers">
          <div className="container">
            <h2 className="section-title">Meet Our Visionary Speakers</h2>
            <div className="speakers-container">
              <div className="speaker-card">
                <div className="speaker-photo-wrapper">
                  <img
                    src="https://via.placeholder.com/350x400/dcdde1/333333?text=Dr.+Anya+Sharma"
                    alt="Dr. Anya Sharma"
                    className="speaker-photo"
                  />
                  <div className="speaker-info-overlay">
                    <h3 className="speaker-name">Dr. Anya Sharma</h3>
                    <p className="speaker-title">Lead AI Ethicist</p>
                  </div>
                </div>
                <a href="#" className="read-bio-link">
                  Read Bio <i className="fa-solid fa-chevron-down"></i>
                </a>
              </div>

              <div className="speaker-card">
                <div className="speaker-photo-wrapper">
                  <img
                    src="https://via.placeholder.com/350x400/c7ecee/333333?text=Mark+Chen"
                    alt="Mark Chen"
                    className="speaker-photo"
                  />
                  <div className="speaker-info-overlay">
                    <h3 className="speaker-name">Mark Chen</h3>
                    <p className="speaker-title">Sustainability Advocate</p>
                  </div>
                </div>
                <a href="#" className="read-bio-link">
                  Read Bio <i className="fa-solid fa-chevron-down"></i>
                </a>
              </div>

              <div className="speaker-card">
                <div className="speaker-photo-wrapper">
                  <img
                    src="https://via.placeholder.com/350x400/dff9fb/333333?text=Sarah+Johnson"
                    alt="Sarah Johnson"
                    className="speaker-photo"
                  />
                  <div className="speaker-info-overlay">
                    <h3 className="speaker-name">Sarah Johnson</h3>
                    <p className="speaker-title">CEO, Innovate Global</p>
                  </div>
                </div>
                <a href="#" className="read-bio-link">
                  Read Bio <i className="fa-solid fa-chevron-down"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Speakers;
import React from 'react'

const Sponsors = () => {
  return (
    <div>
      <section className="partners-section" id="partners">
          <div className="container">
            <h2 className="section-title">Our Esteemed Partners & Sponsors</h2>

            <div className="partners-tier">
              <h3>Platinum Partners</h3>
              <div className="logos-container">
                <div className="logo-box">
                  <i className="fa-solid fa-wave-square"></i>
                </div>
                <div className="logo-box">
                  <i className="fa-solid fa-braille"></i>
                </div>
                <div className="logo-box">
                  <i className="fa-solid fa-chart-line"></i>
                </div>
              </div>
            </div>

            <div className="partners-tier">
              <h3>Gold Sponsors</h3>
              <div className="logos-container">
                <div className="logo-box">
                  <i className="fa-solid fa-mountain"></i>
                </div>
                <div className="logo-box">
                  <i className="fa-regular fa-circle"></i>
                </div>
                <div className="logo-box">
                  <i className="fa-solid fa-atom"></i>
                </div>
              </div>
            </div>

            <div className="partners-tier">
              <h3>Event Partners</h3>
              <div className="logos-container">
                <div className="logo-box">
                  <i className="fa-solid fa-share-nodes"></i>
                </div>
                <div className="logo-box">
                  <i className="fa-solid fa-bolt"></i>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  )
}

export default Sponsors

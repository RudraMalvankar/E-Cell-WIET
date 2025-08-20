// components/Membership.jsx
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="membership" className="membership-section">
      <h2 className="membership-heading">Get In Touch</h2>
      <p className="membership-subheading">
        Stay connected with us and be part of our entrepreneurial journey!
      </p>

      <div className="membership-grid">
        <div className="membership-contact">
          <p>📞 Telephone: <span className="highlight-text">310-437-2766</span></p>
          <p>📧 Email: <span className="highlight-text">unreal@outlook.com</span></p>
          <p>📍 Address: <span className="highlight-text">706 Campfire Ave. Meriden, CT 06450</span></p>
          <p>📠 Fax: <span className="highlight-text">+1-000-0000</span></p>
        </div>

        <iframe
          title="Location Map"
          src="https://maps.google.com/maps?q=Watumull%20Institute&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="membership-map"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;

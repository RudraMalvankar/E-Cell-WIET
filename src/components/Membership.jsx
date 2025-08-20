import React from "react";
import "./Membership.css";

const Membership = () => {
  return (
    <div className="membership-container">
      {/* 🔒 Locked Overlay */}
      <div className="overlay">
        <div className="lock-icon">🔒</div>
        <h1>The page is not yet unlocked</h1>
      </div>

      {/* Header Section */}
      <header className="membership-header">
        <h1 className="gradient-text">Entrepreneurship Membership</h1>
        <p>
          At E-Cell WIET, our membership program is designed to empower
          aspiring entrepreneurs with the right tools, mentorship, and
          opportunities to transform ideas into impactful startups.
        </p>
      </header>

      {/* Why Join Section */}
      <section className="membership-section">
        <h2 className="gradient-text">Why Join?</h2>
        <ul>
          <li>🚀 <b>Practical Workshops</b> — Learn startup essentials, product building, and marketing.</li>
          <li>🤝 <b>Networking Opportunities</b> — Connect with students, mentors, and investors.</li>
          <li>📚 <b>Startup Resources</b> — Access curated templates, funding guides, and pitch decks.</li>
          <li>🎯 <b>Mentorship Support</b> — Get guidance from industry experts & successful founders.</li>
        </ul>
      </section>

      {/* Benefits Section */}
      <section className="membership-section alt-bg">
        <h2 className="gradient-text">Membership Benefits</h2>
        <div className="benefits-grid">
          <div className="benefit">
            <h3>🌐 Community Access</h3>
            <p>
              Join a thriving community of innovators, entrepreneurs, and
              changemakers. Collaborate and share ideas 24/7.
            </p>
          </div>
          <div className="benefit">
            <h3>👨‍🏫 Expert Mentorship</h3>
            <p>
              1-on-1 sessions with mentors from different industries, helping
              you refine your startup journey.
            </p>
          </div>
          <div className="benefit">
            <h3>🎤 Events & Competitions</h3>
            <p>
              Participate in hackathons, idea challenges, and investor pitch
              competitions with exciting rewards.
            </p>
          </div>
          <div className="benefit">
            <h3>🏢 Incubation & Funding</h3>
            <p>
              Shortlisted startups get access to incubation, seed funding, and
              workspace facilities.
            </p>
          </div>
          <div className="benefit">
            <h3>💡 Startup Toolkit</h3>
            <p>
              Templates for business plans, financial models, and marketing
              strategies tailored for student entrepreneurs.
            </p>
          </div>
          <div className="benefit">
            <h3>📈 Growth Support</h3>
            <p>
              Guidance on scaling, legal compliance, and connecting with angel
              investors & venture capitalists.
            </p>
          </div>
        </div>
      </section>

      {/* Plans & Pricing Section */}
      <section className="membership-section">
        <h2 className="gradient-text">Plans & Pricing</h2>
        <div className="pricing">
          <div className="price-box">
            <h3>Basic</h3>
            <p className="price">₹499 / year</p>
            <ul>
              <li>✔ Access to workshops</li>
              <li>✔ Entry to community forums</li>
              <li>✔ Monthly newsletters</li>
            </ul>
          </div>
          <div className="price-box">
            <h3>Pro</h3>
            <p className="price">₹1499 / year</p>
            <ul>
              <li>✔ Everything in Basic</li>
              <li>✔ 5 mentorship sessions</li>
              <li>✔ Startup resource toolkit</li>
              <li>✔ Priority event access</li>
            </ul>
          </div>
          <div className="price-box">
            <h3>Elite</h3>
            <p className="price">₹4999 / year</p>
            <ul>
              <li>✔ Everything in Pro</li>
              <li>✔ Unlimited mentorship</li>
              <li>✔ Incubation & funding opportunities</li>
              <li>✔ Networking with investors</li>
              <li>✔ Showcase at annual E-Summit</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="membership-section alt-bg">
        <h2 className="gradient-text">Frequently Asked Questions</h2>
        <div className="faq">
          <div>
            <h3>❓ Who can join the membership?</h3>
            <p>
              Any student or aspiring entrepreneur with a passion for building
              startups and learning about entrepreneurship is welcome.
            </p>
          </div>
          <div>
            <h3>❓ Do I need a startup idea before joining?</h3>
            <p>
              Not at all! Even if you’re just exploring entrepreneurship, our
              programs will help you discover and validate ideas.
            </p>
          </div>
          <div>
            <h3>❓ How do I register?</h3>
            <p>
              Once the page is unlocked, you can register directly through the
              “Join Now” button and select your membership plan.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;

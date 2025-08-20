import React, { useState, useEffect } from 'react'
import './Home.css'
import Float from './Three/Float'
import Vision1 from '../assets/HomeVision1.png'
import MouseGlowCursor from './Three/MouseGlowCursor'
import WaveBackground from './Three/WaveBackground'
import HomeAbout from '../assets/HomeAbout.jpeg'
import Initiatives1 from '../assets/InitivativeHome.jpeg'
import Initiatives2 from '../assets/InitiativeHome2.jpeg'
import Initiatives3 from '../assets/InitiativeHome3.jpeg'
import BlogHome from '../assets/Bloghome.webp'
import BlogHome2 from '../assets/BlogHome2.jpg'
import Grid from '../components/Three/Grid'

const Home = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🔥 Responsive blob sizing
  const getBlobSize = (baseSize) => {
    if (screenSize.width < 480) return baseSize * 0.5; // small phones
    if (screenSize.width < 768) return baseSize * 0.7; // tablets
    if (screenSize.width < 1024) return baseSize * 0.85; // small laptops
    return baseSize; // default for desktops
  };

  return (
    <div>
      <MouseGlowCursor />
      <div style={{ position: "relative", overflow: "hidden" }}>
        <Grid></Grid>
        {/* Left-Top Blob → half visible, slowly moves near Entrepreneurship */}
        <Float
          size={getBlobSize(6)} // 👈 responsive size
          position={[-200, -250]}
          moveDir="downRight"
        />

        {/* Right-Bottom Blob → half visible, slowly moves near "bold" */}
        <Float
          size={getBlobSize(5)} // 👈 responsive size
          position={[screenSize.width - 400, screenSize.height - 400]}
          moveDir="upLeft"
        />


        {/* ---- Hero Section ---- */}
        <section className="hero-section">
          <MouseGlowCursor></MouseGlowCursor>
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

  {/* About */}
<section id="about" className="about-section">
  <div className="about-img-home">
    <img src={HomeAbout} alt="" className="image-aboutus"/>
  </div>
  <div className="about-content">
    <h2 className="about-heading">What is E-cell, WIET?</h2>
    <p className="about-description">
      The Entrepreneurship Cell of WIET is a dynamic platform dedicated to nurturing
      innovation, creativity, and entrepreneurial spirit among students. We empower future
      leaders by providing resources, mentorship, and opportunities to transform ideas into
      impactful ventures.
    </p>
    <a href="#more" className="btn">
      Know More <span style={{ fontSize: "1.2rem" }}>↗</span>
    </a>
  </div>
</section>


{/* ---- Initiatives Section ---- */}
<section id="initiatives" className="initiatives-section">
  <h2 className="initiatives-heading">Our Initiatives</h2>
  <p className="initiatives-subtext">
    At E-Cell WIET, our initiatives are designed to spark innovation and encourage entrepreneurial thinking.
    From hands-on workshops to real-world startup experiences, we strive to turn ideas into action.
  </p>

  <div className="initiatives-grid">
    {/* Card 1 */}
    <div 
      className="initiative-card" 
      style={{ backgroundImage: `url(${Initiatives1})` }}
    >
      <div className="initiative-overlay"></div>
      <div className="initiative-content">
        <h3>Workshops ↗</h3>
        <p>Weekly workshops to sharpen skills, spark ideas, and inspire action.</p>
      </div>
    </div>

    {/* Card 2 */}
    <div 
      className="initiative-card" 
      style={{ backgroundImage: `url(${Initiatives2})` }}
    >
      <div className="initiative-overlay"></div>
      <div className="initiative-content">
        <h3>Founders Talk ↗</h3>
        <p>Real stories. Raw journeys. Learn directly from our startup founders.</p>
      </div>
    </div>

    {/* Card 3 */}
    <div 
      className="initiative-card" 
      style={{ backgroundImage: `url(${Initiatives3})` }}
    >
      <div className="initiative-overlay"></div>
      <div className="initiative-content">
        <h3>Startup Pitch ↗</h3>
        <p>Turn bold ideas into funded ventures through our high-impact events.</p>
      </div>
    </div>
  </div>
</section>


{/* ---- Blogs / Stories Section ---- */}
<section id="blogs" className="blogs-section v2">
  <h2 className="blogs-heading">Startup Stories & Insights</h2>
  <p className="blogs-subheading">
    Explore stories, insights, and experiences that fuel the entrepreneurial spirit. From student-led startups to expert tips, our blog is your gateway to innovation and growth. Stay inspired, stay ahead.
  </p>

  <div className="blogs-rail" role="list">
    <article className="story-card" role="listitem">
      <figure className="story-figure">
        <img
          src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1600&auto=format&fit=crop"
          alt="Founder's talk discussion"
          loading="lazy"
        />
      </figure>
      <div className="story-caption">
        <h3 className="story-title">
          Key Lessons We Learned from Hosting Our Very First Founder’s Talk...
        </h3>
      </div>
    </article>

    <article className="story-card" role="listitem">
      <figure className="story-figure">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop"
          alt="Charts and planning"
          loading="lazy"
        />
      </figure>
      <div className="story-caption">
        <h3 className="story-title">
          Top 10 Skills Every Aspiring Entrepreneur Should Learn Today...
        </h3>
      </div>
    </article>

    <article className="story-card" role="listitem">
      <figure className="story-figure">
        <img
          src={BlogHome}
          alt="Student workspace"
          loading="lazy"
        />
      </figure>
      <div className="story-caption">
        <h3 className="story-title">
          From Dorm Room to Boardroom: How Students Made It Big...
        </h3>
      </div>
    </article>

    <article className="story-card" role="listitem">
      <figure className="story-figure">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop"
          alt="Pitch day audience"
          loading="lazy"
        />
      </figure>
      <div className="story-caption">
        <h3 className="story-title">
          Pitch Competitions: What We Learned from Student Founders
        </h3>
      </div>
    </article>

    <article className="story-card" role="listitem">
      <figure className="story-figure">
        <img
          src={BlogHome2}
          alt="Team collaboration"
          loading="lazy"
        />
      </figure>
      <div className="story-caption">
        <h3 className="story-title">
          Building Winning Teams: Collaboration that Scales...
        </h3>
      </div>
    </article>

    <article className="story-card" role="listitem">
      <figure className="story-figure">
        <img
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop"
          alt="Startup presentation"
          loading="lazy"
        />
      </figure>
      <div className="story-caption">
        <h3 className="story-title">
          Investor Readiness: Turning Pitches into Yeses...
        </h3>
      </div>
    </article>
  </div>
</section>
        {/* ---- Membership Section ---- */}
        <section id="membership" className="membership-section">
          <h2 className="membership-heading">Get In Touch</h2>
          <p className="membership-subheading">
            Stay connected with us and be part of our entrepreneurial journey!
          </p>

          <div className="membership-grid">
            <div className="membership-contact">
              <p>📞 Telephone: <span className="highlight-text">+91 77386 98067</span></p>
              <p>📧 Email: <span className="highlight-text">ecell@watumull.edu.in</span></p>
              <p>📍 Address: <span className="highlight-text">CHM campus, Plot No.157, opp. Ulhasnagar Railway Station, Laxmi Nagar, Yashwant Colony, Ulhasnagar, Maharashtra 421003</span></p>
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
      </div>
    </div>
  )
}

export default Home

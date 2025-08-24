import React from "react";
import "./ViewBlog.css";
import TopBanner from '../assets/BannerBlog1.jpeg'
import Speaker from '../assets/Speaker.jpeg'
import Requirements from '../assets/BusinessREQ.png'
import StartUp from '../assets/StartUp.png'
import Revenue from '../assets/Revenue.jpg'
import CR from '../assets/CustomerRelationship.webp'

export default function ViewBlog() {
  return (
    <div className="blog-container">
      <div className="blog-content">
        
        {/* --- Hero Section --- */}
        <header className="blog-hero">
          <img
            src={TopBanner}
            alt="Event Banner"
            className="banner-img"
          />
          <h1>Journey of Entrepreneurship – Insights and Learnings</h1>
          <p className="subtitle">
            An inspiring journey into ideas, strategies, and forward-thinking visions 
            that shaped the entrepreneurial discussions in our recent session.
          </p>
        </header>

        {/* --- Principal Sir Introduction --- */}
        <section className="blog-section">
          <h2>Principal’s Introduction</h2>
          <p>
            The event was opened with a warm introduction by <strong>Principal Sir</strong>, 
            who highlighted the importance of entrepreneurship in shaping not only 
            careers but also society at large. He set the tone by emphasizing innovation, 
            responsibility, and courage as the foundation of future leadership.
          </p>
        </section>

        {/* --- Speaker Section --- */}
        <section className="blog-section">
          <h2>Keynote Speaker: Prof. Amit Singh</h2>
          <p>
            The session was led by <strong>Prof. Amit Singh</strong>, an expert in startup 
            policies and the incharge of <em>E-Cell, VESIT</em>. Known for his interactive 
            and approachable teaching style, Prof. Singh discussed the essentials of 
            legally establishing a startup, entrepreneurship policies, and navigating 
            the competitive ecosystem.
          </p>
          <ul>
            <img 
            src={Speaker} 
            alt="Guest Speaker Session"
            className="section-img"
          />
            <li>Stressed that <strong>“90% of startups is about documentation.”</strong></li>
            <li>Explained the role of a <strong>Company Secretary (CA/CS)</strong> as a legal 
                backbone for forming companies.</li>
            <li>Shared that the government provides extensive <strong>data and policies</strong> 
                to support budding entrepreneurs.</li>
            <li>Highlighted schemes like <strong>Mudra Yojana</strong>, offering 
                ₹5–10 lakhs funding opportunities.</li>
          </ul>
        </section>

        {/* --- Why Startup Section --- */}
        <section className="blog-section">
          <h2>Why Do a Startup?</h2>
          <p>
            Entrepreneurship is more than just building a company — it’s about 
            embracing freedom, innovation, and the drive to create meaningful impact. 
            Some of the key motivators shared during the session include:
          </p>
          <img 
            src={StartUp} 
            alt="Why Startup Inspiration"
            id="image-startup"
          />
          <ul>
            <li>Freedom & Independence – Be your own decision-maker and build your path.</li>
            <li>Opportunity to Solve Real Problems – Address critical needs in society.</li>
            <li>High Growth Potential – Achieve rapid scalability with the right execution.</li>
            <li>Learning & Skill Development – Every step is an opportunity to grow.</li>
            <li>Impact & Legacy – Create something long-lasting, like the Tata legacy.</li>
          </ul>
        </section>

        {/* --- Business Requirements --- */}
        <section className="blog-section">
          <h2>Business Requirements</h2>
          <p>
            Running a successful business requires clarity in structure and discipline 
            in execution. Prof. Singh emphasized the following aspects:
          </p>
          <img 
            src={Requirements} 
            alt="Why Startup Inspiration"
            id="image-requirements"
          />
          <ul>
            <li>
              <strong>First Stage:</strong> The founder plays multiple roles — CEO, manager, 
              and employee simultaneously.
            </li>
            <li>
              <strong>Team Competencies:</strong> Build an analytical, problem-solving team 
              to handle growth and challenges.
            </li>
            <li>
              <strong>Cash Flow:</strong> Financial planning is critical. No funds means 
              operations stall immediately.
            </li>
            <li>
              <strong>Resource Management:</strong> Effective allocation ensures client 
              satisfaction and efficient production.
            </li>
          </ul>
        </section>

        {/* --- Costing Model --- */}
        <section className="blog-section">
          <h2>Costing Model</h2>
          <p>
            A well-defined costing model provides financial clarity and stability. 
            The discussion outlined:
          </p>
          <ul>
            <li>Service-based costing (per hour/day).</li>
            <li>Fixed-cost project models with defined deliverables.</li>
            <li>Customized solutions tailored to client requirements.</li>
          </ul>
        </section>

        {/* --- Revenue Streams --- */}
        <section className="blog-section">
          <h2>Revenue Streams</h2>
          <p>
            Multiple streams of income ensure business sustainability. Entrepreneurs 
            must continuously innovate and adapt revenue models in response to 
            changing markets.
          </p>
          <img 
            src={Revenue}
            alt="Revenue Streams"
            id ="image-revenue"
          />
        </section>

        {/* --- Customer Relationship --- */}
        <section className="blog-section">
          <h2>Customer Relationship Strategy</h2>
          <p>
            Building trust and loyalty with clients is at the heart of business growth. 
            Key strategies included:
          </p>
          <img 
            src={CR}
            alt="Customer Relationship"
            id="image-customer"
          />
          <ul>
            <li>Prioritize customers from day one.</li>
            <li>Engage regularly and understand customer needs.</li>
            <li>Offer dedicated support for recurring issues.</li>
            <li>Encourage feedback and implement it actively.</li>
            <li>Share knowledge openly to build authority and credibility.</li>
          </ul>
        </section>

        {/* --- Future Plans --- */}
        <section className="blog-section">
          <h2>Future Plans & Mindset</h2>
          <p>
            The closing message focused on the importance of perseverance, 
            adaptability, and continuous learning. Entrepreneurs must create an 
            environment that nurtures innovation and resilience.
          </p>
          <ul>
            <li>Expand client base with strong networks.</li>
            <li>Streamline operations for efficiency.</li>
            <li>Develop unique solutions to market problems.</li>
            <li>Adopt a mindset of <strong>“Never Quit.”</strong></li>
            <li>Survive competition by embracing it and learning from it.</li>
          </ul>
          <blockquote className="highlight-quote">
            "Innovation is not about expensive technology, it's about creating simple, impactful solutions."
          </blockquote>
        </section>

        {/* --- Footer --- */}
        <footer className="blog-footer">
          <p>
            This session provided a comprehensive roadmap for aspiring entrepreneurs. 
            By focusing on documentation, resource management, customer engagement, 
            and government-supported opportunities, students were inspired to take 
            their first step into the startup ecosystem. The message was clear: 
            <strong> Start now, don’t wait, and never quit.</strong>
          </p>
        </footer>
      </div>
    </div>
  );
}

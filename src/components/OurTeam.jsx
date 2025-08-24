import React, { useEffect, useRef } from "react";
import "./OurTeam.css";
import MouseGlowCursor from './Three/MouseGlowCursor';
import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function OurTeam() {
  const avatarsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show-avatar");
          }
        });
      },
      { threshold: 0.2 }
    );

    avatarsRef.current.forEach((avatar) => {
      if (avatar) observer.observe(avatar);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="ourteam-container">
      <MouseGlowCursor />
      <div className="Team-image"></div>

      {/* Advisors Section */}
      <section className="advisors-section">
        <h3 id="Advisors-Faculty">Advisors & Faculty</h3>
        <p>
          Our esteemed mentors and faculty members provide invaluable guidance,
          shaping the entrepreneurial journey of our students.
        </p>
        <div className="advisors-grid">
          {[
            ["Prof. Chaitali Godse", "Faculty Advisor", "prof-chaitali-godse"],
            ["Prof. Sangharsh Syal", "Faculty Advisor", "prof-sangharsh-syal"],
            ["Prof. Nilima Mhatre", "Faculty Advisor", "prof-nilima-mhatre"],
            ["Prof. Priyanka Shinde", "Faculty Advisor", "prof-priyanka-shinde"],
          ].map(([name, role, className], i) => (
            <div className="advisor-card" key={i}>
              <div
                className={`avatar ${className}`}
                ref={(el) => (avatarsRef.current[i] = el)}
              ></div>
              <p className="member-name"><strong>{name}</strong></p>
              <p>{role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Student Team Section */}
      <section className="students-section">
        <h3 id="Team-Student">Our Dynamic Student Team</h3>
        <p>
          Meet the passionate students at the core of E-Cell WIET, driving
          initiatives and fostering an innovative campus culture.
        </p>
        <div className="students-grid">
          {[
            ["Atharv Khetale", "President","atharv-khetale" ,"https://www.linkedin.com/in/atharva-khetale-01210226b/", "https://www.instagram.com/_atharvaaaa_k?igsh=MWZycXhsbzh4ZmFpYg=="], 
            ["Rasika Shinde", "Vice President","rasika-shinde", "https://www.linkedin.com/in/rasika-shinde-895440346/", "https://www.instagram.com/rasika_0619?igsh=MWNxczNzZ3I1emsxYQ=="], 
            ["Rudra Malvankar", "Technical Head", "rudra-malvankar","https://www.linkedin.com/in/rudra-malvankar/", "https://www.instagram.com/rudra.builds"],
            ["Sujal Maurya", "Technical Co-Head", "sujal-maurya","https://www.linkedin.com/in/sujal-maurya-68234434b/", ""],
            ["Shivam Pandey", "Media Head", "shivam-pandey","https://www.linkedin.com/in/shivam-pandey-a33265258/", "https://www.instagram.com/shivam_py12/?hl=en"], 
            ["Soham Shimpi", "Media Co-Head", "soham-shimpi","https://www.linkedin.com/in/soham11/", "https://www.instagram.com/__soham__19/"], 
            ["Pranav Tiwari", "Media Co-Head", "pranav-tiwari","https://www.linkedin.com/in/pranav-tiwari-7ab693347/", "https://www.instagram.com/___vichitra_prani__"], 
            ["Praneet Poojary", "Treasurer", "praneet-poojary","https://www.linkedin.com/in/p-praneet/", "https://www.instagram.com/_.nothingmatters4/"],
            ["Kashvi Kandalkar", "Treasurer","kashvi-kandalkar","https://www.linkedin.com/in/kashvi-kandalkar/", "https://www.instagram.com/____kashkan____?igsh=b29xcWp2ODZ1Njc5/"],
            ["Adarshkumar Singh", "Event Co-ordinator", "adarshkumar-singh","https://www.linkedin.com/in/adarshkumar-singh-43b014271/", "https://www.instagram.com/agentadarsh?igsh=bXVvZmQ0dW11bms="],
            ["Parth Shinde", "Event Co-ordinator", "parth-shinde","", "https://www.instagram.com/_parthshinde?igsh=OTA0dW9jb3ExenI3"],
            ["Ariba Gazi", "Event Co-ordinator", "ariba-gazi","https://www.linkedin.com/in/ariba-gazi-51111a311/", "https://www.instagram.com/nerdyy_gabby/profilecard/?igsh=MTB1ZGd5Yngxa3Y4Mg=="]
                    ].map(([name, role, className, link, insta], i) => (
            <div className="student-card" key={i}>
              <div
                className={`avatar ${className}`}
                ref={(el) => (avatarsRef.current[i + 4] = el)}
              ></div>
              <p className="member-name"><strong>{name}</strong></p>
              <p>{role}</p>
              <div className="social-icons">
                <a href={link} target="_blank" rel="noopener noreferrer" className="linkedin-icon">
                  <FaLinkedin />
                </a>
                <a href={insta} target="_blank" rel="noopener noreferrer" className="instagram-icon">
                  <FaInstagram />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Developers Section */}
      <section className="developers-section">
        <h3 id="Team-Developers">Our Designers & Developers</h3>
        <p>
          The brilliant minds who have built and maintained the digital
          ecosystem of E-Cell WIET.
        </p>
        <div className="students-grid">
          {[
            ["Shivam Pandey", "UI/UX Designer", "shivam-pandey", "https://www.linkedin.com/in/shivam-pandey-a33265258/", "https://www.instagram.com/shivam_py12/?hl=en"],
            ["Soham Shimpi", "Developer", "soham-shimpi", "https://www.linkedin.com/in/soham11/", "https://www.instagram.com/__soham__19/"],
            ["Vishal Moota", "Developer", "vishal-moota", "https://www.linkedin.com/in/vishal-moota/", ""],
            ["Pranay Pandey", "Developer", "pranay-pandey", "https://www.linkedin.com/in/pranay-pandey-aa3b56271/", "https://www.instagram.com/pranay_25114/"],
          ].map(([name, role, className, link, insta], i) => (
            <div className="student-card" key={i}>
              <div
                className={`avatar ${className}`}
                ref={(el) => (avatarsRef.current[i + 16] = el)}
              ></div>
              <p className="member-name"><strong>{name}</strong></p>
              <p>{role}</p>
              <div className="social-icons">
                <a href={link} target="_blank" rel="noopener noreferrer" className="linkedin-icon">
                  <FaLinkedin />
                </a>
                <a href={insta} target="_blank" rel="noopener noreferrer" className="instagram-icon">
                  <FaInstagram />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

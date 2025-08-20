import React from "react";
import {
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="ec-footer" role="contentinfo">
      <div className="ec-footer__inner">
        {/* Left block - brand + description */}
        <div className="ec-footer__col ec-footer__brand">
          <h3 className="brand-title">E-Cell</h3>
          <p className="brand-desc">
            Empowering innovation and entrepreneurship through mentorship,
            resources, and impactful initiatives.
          </p>
          <div className="social-row">
            <a className="social-circle" href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a className="social-circle" href="https://www.linkedin.com/company/entrepreneurship-cell-wiet/" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a className="social-circle" href="https://www.instagram.com/ecell_wiet?igsh=dm54dnM3c3JnaWZj" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a className="social-circle" href="#" aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="ec-footer__col ec-footer__links">
          <h4 className="col-title">Quick Links</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Initiatives</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="ec-footer__col ec-footer__links">
          <h4 className="col-title">Resources</h4>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Startups</a></li>
            <li><a href="#">Case Studies</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="ec-footer__col ec-footer__contact">
          <h4 className="col-title">Contact</h4>
          <p className="contact-info">
            Entrepreneurship Cell<br />
            <a href="mailto:ecell@email.com">
              ecell@watumull.edu.in
            </a>
          </p>
        </div>
      </div>

      {/* bottom bar */}
      <div className="ec-footer__bottom">
        <div className="ec-footer__bottom-box">
          © {new Date().getFullYear()} Entrepreneurship Cell · All rights reserved · Designed by Shivam Pandey
        </div>
      </div>
    </footer>
  );
}

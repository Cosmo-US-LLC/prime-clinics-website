import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import "./footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    "Health and Performance Optimization",
    "Hormone and Sexual Edge",
    "Aesthetic and Body Enhancement",
    "Mental and Cognitive Edge",
  ];

  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Top Section */}
        <div className="footer-top">
          {/* Left Column - Logo & Description */}
          <div className="footer-column footer-column-logo">
            <div className="logo-section">
              <div className="footer-logo">
                {/* Replace with your actual logo */}
                <span className="logo-text">PRIME CLINICS</span>
              </div>
              <p className="footer-description">
                Unlocking potential through science and personalized care. Join the elite community dedicated to longevity and performance.
              </p>
            </div>
            
            {/* Social Media Icons */}
            <div className="social-media">
              <a href="#" className="social-icon" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-icon" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-icon" aria-label="YouTube">
                <Youtube size={20} />
              </a>
              <a href="#" className="social-icon" aria-label="Google My Business">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Middle Column - Our Services */}
          <div className="footer-column footer-column-services">
            <h3 className="footer-heading">Our Services</h3>
            <ul className="footer-list">
              {services.map((service, index) => (
                <li key={index}>
                  <Link to="#" className="footer-link">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Get in Touch */}
          <div className="footer-column footer-column-contact">
            <h3 className="footer-heading">Get in touch</h3>
            <div className="contact-list">
              <div className="contact-item">
                <div className="contact-icon">
                  <Phone size={24} />
                </div>
                <a href="tel:8004567890" className="contact-link">
                  (800) 456 7890
                </a>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={24} />
                </div>
                <a href="mailto:lina@primeclinics.ca" className="contact-link">
                  lina@primeclinics.ca
                </a>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={24} />
                </div>
                <span className="contact-link">Address</span>
              </div>
            </div>
          </div>

          {/* Right Column - CTA */}
          <div className="footer-column footer-column-cta">
            <h3 className="footer-heading">only 50 spots available</h3>
            <button className="footer-cta-button">
              Claim My Free DEXA Scan
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} All rights reserved
            </p>
            <div className="footer-links">
              <Link to="/privacy-policy" className="footer-bottom-link">
                Privacy Policy
              </Link>
              <Link to="/terms-and-conditions" className="footer-bottom-link">
                Term & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

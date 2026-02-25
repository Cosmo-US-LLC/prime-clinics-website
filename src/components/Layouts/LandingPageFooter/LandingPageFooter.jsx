import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  ArrowRight,
  Building2,
} from "lucide-react";
import Logo from "@/assets/icons/Prime_Logo.svg";
import "./LandingPageFooter.css";

const QUICK_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Membership", to: "/membership" },
  { label: "VIP Access", to: "/vip-access" },
  { label: "Careers", to: "/careers" },
  { label: "Meet the Team", to: "/meet-the-team" },
  { label: "Contact Us", to: "/contact" },
];

const OUR_SERVICES = [
  { label: "Physical Health", to: "/services/physical-health" },
  { label: "Hormone Health", to: "/services/hormone-health" },
  { label: "Intimate Health", to: "/services/intimate-health" },
  { label: "Regenerative Aesthetics", to: "/services/regenerative-aesthetics" },
  { label: "Weight Management", to: "/services/weight-management" },
  { label: "Mental Fitness", to: "/services/mental-fitness" },
  { label: "Joint Rehabilitation", to: "/services/joint-rehabilitation" },
];

const SOCIAL_LINKS = [
  { label: "Instagram", href: "#", Icon: Instagram },
  { label: "Facebook", href: "#", Icon: Facebook },
  { label: "LinkedIn", href: "#", Icon: Linkedin },
  { label: "Google Business", href: "#", Icon: Building2, hoverFilled: true },
];

function LandingPageFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) setSubscribed(true);
  };

  return (
    <footer className="landing-footer">
      <div className="landing-footer__container">
        <div className="landing-footer__main">
          {/* Column 1: Logo, Newsletter, Social */}
          <div className="landing-footer__col landing-footer__col--brand">
            <div className="landing-footer__brand-block">
              <Link to="/" className="landing-footer__logo">
                <img
                  src={Logo}
                  alt="Prime Clinics"
                  className="landing-footer__logo-img"
                />
              </Link>
              <div className="landing-footer__newsletter">
                {subscribed ? (
                  <p className="landing-footer__thank-you">
                    Thank you! Your submission has been received!
                  </p>
                ) : (
                  <>
                    <p className="landing-footer__newsletter-heading">
                      Subscribe for our newsletter
                    </p>
                    <form
                      className="landing-footer__newsletter-form"
                      onSubmit={handleNewsletterSubmit}
                    >
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="landing-footer__newsletter-input"
                        aria-label="Email for newsletter"
                      />
                      <button
                        type="submit"
                        className="landing-footer__newsletter-submit"
                        aria-label="Subscribe"
                      >
                        <ArrowRight size={20} />
                      </button>
                    </form>
                    <p className="landing-footer__newsletter-disclaimer">
                      Your information is never disclosed to third parties.
                    </p>
                  </>
                )}
              </div>
            </div>
            <div className="landing-footer__social">
              {SOCIAL_LINKS.map((item) => {
                const SocialIcon = item.Icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`landing-footer__social-icon ${
                      item.hoverFilled
                        ? "landing-footer__social-icon--hover-filled"
                        : ""
                    }`}
                    aria-label={item.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SocialIcon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="landing-footer__col">
            <h3 className="landing-footer__heading">Quick Links</h3>
            <ul className="landing-footer__list">
              {QUICK_LINKS.map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="landing-footer__link">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="landing-footer__col">
            <h3 className="landing-footer__heading">Our Services</h3>
            <ul className="landing-footer__list">
              {OUR_SERVICES.map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="landing-footer__link">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get in touch */}
          <div className="landing-footer__col landing-footer__col--contact">
            <h3 className="landing-footer__heading">Get in touch</h3>
            <div className="landing-footer__contact-list">
              <div className="landing-footer__contact-item">
                <div className="landing-footer__contact-icon">
                  <Phone size={24} />
                </div>
                <a href="tel:8004567890" className="landing-footer__contact-link">
                  (800) 456 7890
                </a>
              </div>
              <div className="landing-footer__contact-item">
                <div className="landing-footer__contact-icon">
                  <Mail size={24} />
                </div>
                <a
                  href="mailto:info@primeclinics.ca"
                  className="landing-footer__contact-link landing-footer__contact-link--underline"
                >
                  info@primeclinics.ca
                </a>
              </div>
              <div className="landing-footer__contact-item">
                <div className="landing-footer__contact-icon">
                  <MapPin size={24} />
                </div>
                <span className="landing-footer__contact-link">
                  Opening Soon
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="landing-footer__bottom">
          <div className="landing-footer__divider" />
          <div className="landing-footer__bottom-inner">
            <p className="landing-footer__copyright">
              ©2026 All rights reserved
            </p>
            <div className="landing-footer__legal">
              <Link to="/privacy-policy" className="landing-footer__legal-link">
                Privacy Policy
              </Link>
              <Link
                to="/terms-and-conditions"
                className="landing-footer__legal-link"
              >
                Term & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="landing-footer__warning">
        <p>
          This site is not intended for emergencies. If you need immediate help,
          please call <strong>911</strong>.
        </p>
      </div>
    </footer>
  );
}

export default LandingPageFooter;

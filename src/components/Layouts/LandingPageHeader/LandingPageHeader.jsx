import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import LogoPrimary from "@/assets/icons/prime_logo_not_scrolled.svg";
import LogoScrolled from "@/assets/icons/prime_logo_scrolled.svg";
import "./LandingPageHeader.css";

const NAV_LINKS = [
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    hasDropdown: true,
  },
  { label: "Private Prescriptions", href: "/private-prescriptions" },
  { label: "Careers", href: "/careers" },
  { label: "VIP Access", href: "/vip-access" },
  { label: "Contact", href: "/contact" },
];

function LandingPageHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 150;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`landing-page-header ${
        scrolled ? "landing-page-header--scrolled" : ""
      }`}
      data-name="Navigation Bar"
    >
      <div className="landing-page-header__inner">
        <Link
          to="/"
          className="landing-page-header__logo"
          aria-label="Prime Clinics home"
        >
          <img
            src={scrolled ? LogoScrolled : LogoPrimary}
            alt="Prime Clinics Logo"
            className="landing-page-header__logo-img"
            draggable={false}
          />
        </Link>

        <nav className="landing-page-header__nav">
          <ul className="landing-page-header__nav-list">
            {NAV_LINKS.map((item) => (
              <li key={item.label} className="landing-page-header__nav-item">
                <Link
                  to={item.href}
                  className="landing-page-header__nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <ChevronDown
                      className="landing-page-header__nav-icon"
                      aria-hidden
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/free-dexa-scan"
            className="landing-page-header__cta btn-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            Join Waitlist
          </Link>
        </nav>

        <button
          type="button"
          className="landing-page-header__menu-btn"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`landing-page-header__mobile-nav ${
          mobileMenuOpen ? "landing-page-header__mobile-nav--open" : ""
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <ul className="landing-page-header__mobile-list">
          {NAV_LINKS.map((item) => (
            <li key={item.label}>
              <Link
                to={item.href}
                className="landing-page-header__mobile-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/free-dexa-scan"
              className="landing-page-header__cta btn-primary landing-page-header__cta--mobile"
              onClick={() => setMobileMenuOpen(false)}
            >
              Join Waitlist
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default LandingPageHeader;

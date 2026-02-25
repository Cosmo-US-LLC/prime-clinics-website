import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import Logo from "@/assets/icons/prime_clinic_logo.svg";

// You can replace this with your actual logo path
// For now, using a placeholder - update this path to your logo
// import Logo from "@/assets/images/logo.svg";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 150;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine CTA text based on route
  const getCTAText = () => {
    if (location.pathname === "/free-dexa-scan-and-longevity-assessment") {
      return "Claim My Assessment Spot";
    }
    return "Enter to Win a Free Scan";
  };

  const scrollToHero = () => {
    const heroSection = document.getElementById('hero-section');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="navbar-container">
      <nav className={`navbarWrapper ${scrolled ? "scrolled" : ""}`}>
        <div className="max-w-[1280px] w-full h-full mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center select-none [-webkit-user-select:none] [-webkit-touch-callout:none]"
          >
             
            <div className="w-[80px] md:w-[140px] pt-[4px] h-auto flex items-center">              
              <img
                src={Logo}
                alt="Prime Clinics Logo"
                className="w-full h-auto cursor-pointer z-20 select-none [-webkit-user-select:none] [-webkit-user-drag:none]"
                draggable="false"
              />
             
            </div>
          </Link>

          {/* Button */}
          <div className="flex items-center">
            
            <button className="btn-primary" onClick={scrollToHero}>
            {getCTAText()}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

// You can replace this with your actual logo path
// For now, using a placeholder - update this path to your logo
// import Logo from "@/assets/images/logo.svg";

function Navbar() {
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
    <div className="navbar-container">
      <nav className={`navbarWrapper ${scrolled ? "scrolled" : ""}`}>
        <div className="max-w-[1280px] w-full h-full mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center select-none [-webkit-user-select:none] [-webkit-touch-callout:none]"
          >
            {/* Replace with your actual logo */}
            <div className="md:w-[196px] w-[140px] h-auto flex items-center">
              <span className="text-white text-xl font-display font-bold">
                Prime Clinics
              </span>
              {/* Or use an img tag:
              <img
                src={Logo}
                alt="Prime Clinics Logo"
                className="w-full h-auto cursor-pointer z-20 select-none [-webkit-user-select:none] [-webkit-user-drag:none]"
                draggable="false"
              />
              */}
            </div>
          </Link>

          {/* Button */}
          <div className="flex items-center">
            <button className="btn-primary">
              Get Started
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

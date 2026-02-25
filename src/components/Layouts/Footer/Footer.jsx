import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";
import "./footer.css";
import Logo from "@/assets/icons/Prime_Logo.svg";

function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  // Determine CTA text based on route
  const getCTAText = () => {
    if (location.pathname === "/free-dexa-scan-and-longevity-assessment") {
      return "Claim My Assessment Spot";
    }
    return "Enter to Win a Free Scan";
  };

  const scrollToHero = () => {
    const heroSection = document.getElementById("hero-section");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

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
            <div className="logo-section ">
              <div className="footer-logo">
                {/* Replace with your actual logo */}
                <img
                  src={Logo}
                  alt="Prime Clinics Logo"
                  className="logo-image"
                />
              </div>
              <p className="footer-description">
                Unlocking potential through science and personalized care. Join
                the elite community dedicated to longevity and performance.
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="social-media">
              <a
                href="https://www.instagram.com/primeclinicsca/?hl=en"
                className="social-icon"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61586592020190"
                className="social-icon"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={18} />
              </a>
              {/* <a href="#" className="social-icon" aria-label="YouTube">
                <Youtube size={18} />
              </a>
              <a href="#" className="social-icon" aria-label="Google My Business">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M7.125 9.77837H12V3.54688H7.929L7.125 9.77837Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7.9291 3.54688H4.5712C4.34767 3.54687 4.13058 3.62175 3.95459 3.75957C3.77861 3.89739 3.65387 4.09021 3.6003 4.30722L2.25 9.77863H7.125" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12 9.77734C12 10.4238 11.7432 11.0438 11.2861 11.5009C10.829 11.958 10.209 12.2148 9.5625 12.2148C8.91603 12.2148 8.29605 11.958 7.83893 11.5009C7.38181 11.0438 7.125 10.4238 7.125 9.77734" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7.125 9.77734C7.125 10.4238 6.86819 11.0438 6.41107 11.5009C5.95395 11.958 5.33397 12.2148 4.6875 12.2148C4.04103 12.2148 3.42105 11.958 2.96393 11.5009C2.50681 11.0438 2.25 10.4238 2.25 9.77734" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16.875 9.77837H12V3.54688H16.071L16.875 9.77837Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16.0703 3.54688H19.4282C19.6517 3.54687 19.8688 3.62175 20.0448 3.75957C20.2208 3.89739 20.3455 4.09021 20.3991 4.30722L21.7494 9.77863H16.8744" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12 9.77734C12 10.4238 12.2568 11.0438 12.7139 11.5009C13.171 11.958 13.791 12.2148 14.4375 12.2148C15.084 12.2148 15.704 11.958 16.1611 11.5009C16.6182 11.0438 16.875 10.4238 16.875 9.77734" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16.875 9.77734C16.875 10.4238 17.1318 11.0438 17.5889 11.5009C18.046 11.958 18.666 12.2148 19.3125 12.2148C19.959 12.2148 20.579 11.958 21.0361 11.5009C21.4932 11.0438 21.75 10.4238 21.75 9.77734" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M3.66406 11.9883V19.453C3.66406 19.7182 3.76942 19.9726 3.95696 20.1601C4.14449 20.3476 4.39885 20.453 4.66406 20.453H19.3391C19.6043 20.453 19.8586 20.3476 20.0462 20.1601C20.2337 19.9726 20.3391 19.7182 20.3391 19.453V11.9889" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16.7477 16.7847H18.726C18.7323 17.0458 18.6871 17.3055 18.5931 17.5492C18.499 17.7928 18.3578 18.0155 18.1777 18.2045C17.9975 18.3936 17.7819 18.5453 17.5431 18.6511C17.3043 18.7568 17.0471 18.8145 16.786 18.8208L16.7476 18.8214C16.4801 18.8214 16.2153 18.7687 15.9682 18.6663C15.7211 18.564 15.4966 18.414 15.3075 18.2248C15.1183 18.0357 14.9683 17.8112 14.866 17.5641C14.7636 17.317 14.7109 17.0522 14.7109 16.7847C14.7109 16.5173 14.7636 16.2524 14.866 16.0053C14.9683 15.7582 15.1183 15.5337 15.3075 15.3446C15.4966 15.1555 15.7211 15.0054 15.9682 14.9031C16.2153 14.8007 16.4801 14.7481 16.7476 14.7481C17.102 14.7465 17.4505 14.839 17.7576 15.0159" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
              </a> */}
            </div>
          </div>

          {/* Middle Column - Our Services */}
          {/* <div className="footer-column footer-column-services">
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
          </div> */}

          {/* Right Column - Get in Touch */}
          <div className="footer-column footer-column-contact">
            <h3 className="footer-heading">Get in touch</h3>
            <div className="contact-list">
              <div className="contact-item">
                <div className="contact-icon">
                  <Phone size={20} />
                </div>
                <a href="tel:8004567890" className="contact-link">
                  (800) 456 7890
                </a>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M16.6665 3.33325H3.33317C2.4127 3.33325 1.6665 4.07944 1.6665 4.99992V14.9999C1.6665 15.9204 2.4127 16.6666 3.33317 16.6666H16.6665C17.587 16.6666 18.3332 15.9204 18.3332 14.9999V4.99992C18.3332 4.07944 17.587 3.33325 16.6665 3.33325Z"
                      stroke="currentColor"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.3332 5.83325L10.8582 10.5833C10.6009 10.7444 10.3034 10.8299 9.99984 10.8299C9.69624 10.8299 9.39878 10.7444 9.1415 10.5833L1.6665 5.83325"
                      stroke="currentColor"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <a href="mailto:lina@primeclinics.ca" className="contact-link">
                  lina@primeclinics.ca
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - CTA */}
          <div className="footer-column footer-column-cta">
            <h3 className="footer-heading">only 50 spots available</h3>
            <button className="footer-cta-button" onClick={scrollToHero}>
              {getCTAText()}
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="copyright">© {currentYear} All rights reserved</p>
            <ul className="footer-links max-md:flex justify-center max-md:!flex-row items-center gap-4 max-md:list-disc max-md:list-inside">
              <li className="max-md:list-item md:list-none">
                <Link to="/privacy-policy" className="footer-bottom-link">
                  Privacy Policy
                </Link>
              </li>
              <li className="max-md:list-item md:list-none">
                <Link to="/terms-and-conditions" className="footer-bottom-link">
                  Term & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

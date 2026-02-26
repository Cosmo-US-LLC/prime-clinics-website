import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import LogoPrimary from "@/assets/icons/prime_logo_not_scrolled.svg";
import LogoScrolled from "@/assets/icons/prime_logo_scrolled.svg";

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

  const headerBase = `fixed inset-x-0 top-0 z-50 w-full h-[${scrolled ? "84px" : "94px"}] transition-all duration-200`;
  const headerState = scrolled
    ? "bg-white shadow-[0_1px_2px_rgba(15,23,42,0.5)] backdrop-blur"
    : "bg-transparent";

  const linkBase =
    "flex items-center gap-1.5 px-2 py-4 text-[16px] font-medium leading-6 whitespace-nowrap transition-colors";
  const linkState = scrolled
    ? "text-[#030712] hover:text-[#2463D8]"
    : "text-white hover:text-[#E5EDFF]";

  const mobileLinkBase =
    "block px-2 py-3 text-[16px] font-medium leading-6 text-white transition-colors hover:text-white/85";

  return (
    <header
      className={`${headerBase} ${headerState}`}
      data-name="Navigation Bar"
    >
      <div className="mx-auto flex h-full w-full max-w-[1280px] items-center justify-between gap-6 md:px-8 px-4">
        <Link
          to="/"
          className="flex h-14 w-auto shrink-0 items-center"
          aria-label="Prime Clinics home"
        >
          <img
            src={scrolled ? LogoScrolled : LogoPrimary}
            alt="Prime Clinics Logo"
            className="block h-full w-auto select-none"
            draggable={false}
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          <ul className="flex items-center gap-4 list-none m-0 p-0">
            {NAV_LINKS.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className={`${linkBase} ${linkState}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <ChevronDown
                      className="h-[16px] w-[16px] shrink-0"
                      aria-hidden
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/free-dexa-scan"
            className="inline-flex shrink-0 btn-primary text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            Join Waitlist
          </Link>
        </nav>

        <button
          type="button"
          className={`inline-flex items-center justify-center rounded-md p-2 lg:hidden ${
            scrolled
              ? "text-[#030712] hover:text-[#2463D8]"
              : "text-white hover:text-white/85"
          }`}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`block w-full overflow-hidden bg-slate-900/95 transition-[max-height] duration-200 lg:hidden ${
          mobileMenuOpen ? "max-h-[80vh]" : "max-h-0"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <ul className="flex list-none flex-col gap-2 px-6 pb-6 pt-4 m-0">
          {NAV_LINKS.map((item) => (
            <li key={item.label}>
              <Link
                to={item.href}
                className={mobileLinkBase}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/free-dexa-scan"
              className="mt-2 inline-flex w-full btn-primary text-white"
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

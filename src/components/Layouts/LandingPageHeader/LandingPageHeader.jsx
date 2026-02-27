import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import LogoPrimary from "@/assets/icons/prime_logo_not_scrolled.svg";
import LogoScrolled from "@/assets/icons/prime_logo_scrolled.svg";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

import card1 from "@/assets/images/home/services/service_card1.webp";
import card2 from "@/assets/images/home/services/service_card2.webp";
import card3 from "@/assets/images/home/services/service_card3.webp";
import card4 from "@/assets/images/home/services/service_card4.webp";
import card5 from "@/assets/images/home/services/service_card5.webp";
import card6 from "@/assets/images/home/services/service_card6.webp";
import card7 from "@/assets/images/home/services/service_card7.webp";

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

const SERVICE_LINKS = [
  {
    label: "Physical Health",
    href: "/services/physical-health",
    image: card1,
  },
  {
    label: "Hormone Health",
    href: "/services/hormone-health",
    image: card2,
  },
  {
    label: "Intimate Health",
    href: "/services/intimate-health",
    image: card3,
  },
  {
    label: "Regenerative Aesthetics",
    href: "/services/regenerative-aesthetics",
    image: card4,
  },
  {
    label: "Weight Management",
    href: "/services/weight-management",
    image: card5,
  },
  {
    label: "Mental Fitness",
    href: "/services/mental-fitness",
    image: card6,
  },
  {
    label: "Joint Rehabilitation",
    href: "/services/joint-rehabilitation",
    image: card7,
  },
];

function LandingPageHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 150;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerBase = `fixed inset-x-0 ${scrolled ? "top-0" : "top-6"} z-50 w-full h-[${scrolled ? "84px" : "94px"}] transition-all duration-200`;
  const headerState = scrolled
    ? "bg-white shadow-[0_1px_2px_rgba(15,23,42,0.5)] backdrop-blur"
    : "bg-transparent";

  const linkBase =
    "flex items-center gap-1.5 px-2 py-4 text-[16px] font-medium leading-6 whitespace-nowrap transition-colors";
  const linkState = scrolled
    ? "text-[#030712] hover:text-[#2463D8]"
    : "text-white hover:text-[#E5EDFF]";

  // mobileLinkBase is no longer used; keep naming for potential future reuse
  const MOBILE_LINK_BASE =
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
            {NAV_LINKS.map((item) =>
              item.label === "Services" ? (
                <li key={item.label} className="relative">
                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger
                          className={`${linkBase} ${linkState} bg-transparent border-none px-2 py-4`}
                        >
                          <span>Services</span>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="mt-3 rounded-2xl border border-slate-200 bg-[#f9fafb] px-8 py-6 shadow-xl min-w-[1040px]">
                          <div className="flex flex-col gap-5">
                            <div className="text-2xl font-bold uppercase tracking-tight text-slate-900">
                              Our Services
                            </div>
                            <div className="grid gap-3 md:grid-cols-4 lg:grid-cols-4">
                              {SERVICE_LINKS.map((service) => (
                                <Link
                                  key={service.label}
                                  to={service.href}
                                  className="group flex flex-col gap-3"
                                >
                                  <div className="relative h-36 w-[220px] rounded-[8px] overflow-hidden">
                                    <img
                                      src={service.image}
                                      alt={service.label}
                                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                                      loading="lazy"
                                    />
                                  </div>
                                  <div className="pb-4">
                                    <p className="text-[18px] leading-7 font-normal text-[#040a16]">
                                      {service.label}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                </li>
              ) : (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className={`${linkBase} ${linkState}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ),
            )}
          </ul>
          <Link
            to="/free-dexa-scan"
            className="inline-flex shrink-0 btn-primary text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            Join Waitlist
          </Link>
        </nav>

        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              className={`inline-flex items-center justify-center rounded-md p-2 lg:hidden ${
                scrolled
                  ? "text-[#030712] hover:text-[#2463D8]"
                  : "text-white hover:text-white/85"
              }`}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </SheetTrigger>

          <SheetContent
            side="left"
            className="bg-slate-900 text-white px-6 py-4 lg:hidden"
          >
            <div className="mb-6 flex items-center justify-between">
              <Link
                to="/"
                className="flex h-10 w-auto shrink-0 items-center"
                aria-label="Prime Clinics home"
                onClick={() => setMobileMenuOpen(false)}
              >
                <img
                  src={LogoPrimary}
                  alt="Prime Clinics Logo"
                  className="block h-full w-auto select-none"
                  draggable={false}
                />
              </Link>
              <SheetClose asChild>
                <button
                  type="button"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-white hover:bg-white/10"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </SheetClose>
            </div>

            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((item) =>
                item.label === "Services" ? (
                  <div key={item.label} className="flex flex-col gap-1">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-lg px-2 py-3 text-[16px] font-medium leading-6 text-white hover:bg-white/10"
                      onClick={() => setMobileServicesOpen((open) => !open)}
                    >
                      <span>Services</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          mobileServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileServicesOpen && (
                      <div className="mt-1 flex flex-col gap-1 rounded-lg bg-slate-800/80 px-2 py-2">
                        {SERVICE_LINKS.map((service) => (
                          <SheetClose asChild key={service.label}>
                            <Link
                              to={service.href}
                              className="block rounded-md px-2 py-2 text-sm text-slate-100 hover:bg-slate-700"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {service.label}
                            </Link>
                          </SheetClose>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <SheetClose asChild key={item.label}>
                    <Link
                      to={item.href}
                      className="block rounded-lg px-2 py-3 text-[16px] font-medium leading-6 text-white hover:bg-white/10"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ),
              )}
              <SheetClose asChild>
                <Link
                  to="/free-dexa-scan"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-[#2463D8] px-6 py-3 text-[16px] font-bold leading-[24px] text-white hover:bg-[#1a4fa8]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Join Waitlist
                </Link>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Sheet handles mobile menu; no extra panel needed */}
    </header>
  );
}

export default LandingPageHeader;

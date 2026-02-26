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
  Store,
  BadgeCheck,
} from "lucide-react";
import Logo from "@/assets/icons/Prime_Logo.svg";

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
  {
    label: "Instagram",
    href: "#",
    Icon: Instagram,
    hoverClass: "hover:bg-[#2463D8] hover:border-[#2463D8]",
  },
  {
    label: "Facebook",
    href: "#",
    Icon: Facebook,
    hoverClass: "hover:bg-[#2463D8] hover:border-[#2463D8]",
  },
  {
    label: "LinkedIn",
    href: "#",
    Icon: Linkedin,
    hoverClass: "hover:bg-[#2463D8] hover:border-[#2463D8]",
  },
  {
    label: "Google Business",
    href: "#",
    Icon: Store,
    hoverClass: "hover:bg-[#2463D8] hover:border-[#2463D8]",
  },
];

function LandingPageFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) setSubscribed(true);
  };

  return (
    <footer className="w-full bg-white">
      <div className="bg-[#07142b] rounded-b-2xl">
        <div className="mx-auto max-w-[1280px] px-4 md:px-8 pt-10 pb-8 ">
          {/* Main: columns */}
          <div className="flex flex-col gap-12 mb-12 md:flex-row md:justify-between md:items-start md:gap-10">
            {/* Column 1: Logo, Newsletter, Social */}
            <div className="flex flex-col gap-6 max-w-[388px] w-full h-full">
              <div className="flex flex-col gap-6">
                <Link to="/" className="block h-18 w-auto">
                  <img
                    src={Logo}
                    alt="Prime Clinics"
                    className="h-full w-auto block"
                  />
                </Link>
                <div className="flex flex-col gap-4">
                  {subscribed ? (
                    <div className="flex bg-white rounded-lg justify-center items-center text-center max-w-[300px] w-full px-4 py-4 gap-2">
                      <BadgeCheck
                        className="shrink-0 w-8 h-8 text-green-600"
                        aria-hidden
                      />
                      <p className="text-[16px] leading-[24px] font-normal text-black">
                        Thank you! Your submission has been received!
                      </p>
                    </div>
                  ) : (
                    <>
                      <p className="text-[16px] leading-[24px] font-normal text-white m-0">
                        Subscribe for our newsletter
                      </p>
                      <form
                        className="flex items-stretch max-w-[320px] w-full bg-white border border-slate-300 rounded-lg overflow-hidden"
                        onSubmit={handleNewsletterSubmit}
                      >
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email"
                          className="flex-1 min-w-0 py-3 px-4 max-w-[320px] w-full text-base text-[#040a16] border-none bg-transparent outline-none placeholder:text-gray-400"
                          aria-label="Email for newsletter"
                        />
                        <button
                          type="submit"
                          className="flex items-center justify-center w-11 shrink-0 border-none text-white cursor-pointer transition-colors"
                          aria-label="Subscribe"
                        >
                          <ArrowRight
                            size={20}
                            className="text-[#000] transition-colors cursor-pointer hover:text-[#1a4fa8]"
                          />
                        </button>
                      </form>
                      <p className="text-[12px] leading-[18px] font-normal text-white/80 m-0">
                        Your information is never disclosed to third parties.
                      </p>
                    </>
                  )}
                </div>
              </div>
              <div className="flex gap-4 items-center">
                {SOCIAL_LINKS.map((item) => {
                  const SocialIcon = item.Icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className={`w-[44px] h-[44px] border border-white rounded-full flex items-center justify-center text-white no-underline transition-colors ${
                        item.hoverClass ??
                        "hover:bg-white/10 hover:border-white/60"
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
            <div className="flex flex-col gap-4 max-w-[260px] w-full h-full">
              <h4 className="text-[24px] font-[700] leading-[32px] text-white uppercase mb-1 m-0">
                Quick Links
              </h4>
              <ul className="list-none p-0 m-0 flex flex-col gap-[14px]">
                {QUICK_LINKS.map(({ label, to }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="text-[16px] leading-[20px] font-[300] text-white no-underline transition-colors hover:text-white/85"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Our Services */}
            <div className="flex flex-col gap-4 max-w-[260px] w-full h-full">
              <h3 className="text-2xl font-bold leading-8 text-white uppercase mb-1 m-0">
                Our Services
              </h3>
              <ul className="list-none p-0 m-0 flex flex-col gap-[14px]">
                {OUR_SERVICES.map(({ label, to }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="text-[16px] leading-[20px] font-[300] text-white no-underline transition-colors hover:text-white/85"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Get in touch */}
            <div className="flex flex-col gap-4 min-w-[230px] ">
              <h3 className="text-2xl font-bold leading-8 text-white uppercase mb-1 m-0">
                Get in touch
              </h3>
              <div className="flex flex-col gap-[14px]">
                <div className="flex gap-3 items-center">
                  <div className="w-10 h-10 bg-[#2463d8] rounded-full flex items-center justify-center text-white shrink-0">
                    <Phone size={20} />
                  </div>
                  <a
                    href="tel:8004567890"
                    className="text-[16px] leading-[20px] font-[300] text-white no-underline transition-colors hover:text-white/85"
                  >
                    (800) 456 7890
                  </a>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="w-10 h-10 bg-[#2463d8] rounded-full flex items-center justify-center text-white shrink-0">
                    <Mail size={20} />
                  </div>
                  <a
                    href="mailto:info@primeclinics.ca"
                    className="text-[16px] leading-[20px] font-[300] text-white underline transition-colors hover:text-white/85"
                  >
                    info@primeclinics.ca
                  </a>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="w-10 h-10 bg-[#2463d8] rounded-full flex items-center justify-center text-white shrink-0">
                    <MapPin size={20} />
                  </div>
                  <span className="text-[16px] leading-[20px] font-[300] text-white">
                    Opening Soon
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom: divider, copyright, legal */}
          <div className="flex flex-col gap-8 items-center">
            <div className="w-full h-px bg-white/20" />
            <div className="flex flex-col gap-4 items-center w-full text-sm text-white text-center md:flex-row md:justify-between md:text-left">
              <p className="m-0 text-[14px] leading-[20px] font-normal">
                ©2026 All rights reserved
              </p>
              <div className="flex gap-8 items-center">
                <div className="flex gap-2 items-center">
                  <div className="w-[6px] h-[6px] bg-[#fff] rounded-full flex items-center justify-center text-white shrink-0"></div>
                  <Link
                    to="/privacy-policy"
                    className="text-white no-underline transition-colors hover:text-white/85 text-[14px] leading-[20px] font-normal"
                  >
                    Privacy Policy
                  </Link>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="w-[6px] h-[6px] bg-[#fff] rounded-full flex items-center justify-center text-white shrink-0"></div>
                  <Link
                    to="/terms-and-conditions"
                    className="text-white no-underline transition-colors hover:text-white/85 text-[14px] leading-[20px] font-normal"
                  >
                    Term & Conditions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center py-4 px-6 bg-white">
        <p className="text-xs text-[#040a16] text-center m-0">
          This site is not intended for emergencies. If you need immediate help,
          please call <strong className="font-bold">911</strong>.
        </p>
      </div>
    </footer>
  );
}

export default LandingPageFooter;

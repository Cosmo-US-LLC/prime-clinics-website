import React from "react";
import { Link } from "react-router-dom";

const FOUNDER_IMAGE =
  "https://www.figma.com/api/mcp/asset/d866840d-b561-4524-8b6b-10ab48cb3391";

const TROPHY_ICON =
  "https://www.figma.com/api/mcp/asset/ad2e00d1-06c8-47c9-9ce2-c3db8ee5ab52";

function HomeFounder() {
  return (
    <section
      className="w-full bg-[#F9FAFB] px-4 md:px-[60px] py-12 md:py-20"
      aria-label="About the founder"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10 md:flex-row md:items-center md:gap-20">
        {/* Text side */}
        <div className="flex-1 flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <p className="font-sans text-[14px] md:text-[20px] font-bold leading-[20px] md:leading-[28px] tracking-widest text-[#2463D8] uppercase m-0">
                Advancing Modern Health &amp; Performance
              </p>
              <div className="flex flex-col gap-2 text-[#040A16]">
                <h2 className="font-display text-[32px] md:text-[48px] font-bold leading-[40px] md:leading-[56px] uppercase m-0">
                  Lina Heath
                </h2>
                <p className="font-sans text-[18px] leading-[26px] m-0">
                  Founder &amp; Clinic Director
                </p>
              </div>
            </div>

            <p className="font-sans text-[16px] leading-[24px] text-[#040A16] m-0 max-w-[640px]">
              True optimization requires visionary leadership. Under Lina&apos;s
              guidance, Prime Clinics is redefining the standard of proactive
              patient care. Her unwavering commitment to pioneering advanced
              regenerative medicine has established a new benchmark for how we
              approach long-term human performance.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <Link
              to="/about"
              className="inline-flex w-fit items-center justify-center rounded-lg bg-[#2463D8] px-6 py-4 font-sans text-[16px] font-bold leading-[24px] text-white hover:bg-[#1a4fa8] transition-colors"
            >
              Discover Our Mission
            </Link>

            <div className="flex items-center gap-4">
              <div className="h-12 w-12 overflow-hidden">
                <img
                  src={TROPHY_ICON}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-col gap-1 text-[#040A16]">
                <p className="font-display text-[16px] md:text-[20px] font-bold leading-[24px] md:leading-[28px] uppercase m-0">
                  Official Nominee Award Name
                </p>
                <p className="font-sans text-[14px] leading-[20px] text-[#111827] m-0">
                  34th Annual RBC Canadian Women Entrepreneur Awards
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image side */}
        <div className="flex-1 h-[420px] md:h-[650px] rounded-[16px] overflow-hidden">
          <img
            src={FOUNDER_IMAGE}
            alt="Lina Heath, Founder & Clinic Director"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default HomeFounder;

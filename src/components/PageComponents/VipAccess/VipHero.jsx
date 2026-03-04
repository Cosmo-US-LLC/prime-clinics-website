import React from "react";
import { Link } from "react-router-dom";
import VipHeroImageDesktop from "@/assets/images/vip_access/vip_hero/vip_hero_desktop.webp";
import VipHeroImageMobile from "@/assets/images/vip_access/vip_hero/vip_hero_desktop.webp";

function VipHero() {
  return (
    <section className="bg-[#fff] p-2 h-[100dvh]" aria-label="Hero">
      <div className="relative w-full h-full rounded-2xl overflow-hidden flex flex-col justify-end">
        <div className="hidden md:block absolute inset-0">
          <img
            src={VipHeroImageDesktop}
            alt="Prime Clinics"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="md:hidden absolute inset-0">
          <img
            src={VipHeroImageMobile}
            alt="Prime Clinics"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-[1280px] mx-auto w-full md:px-8 px-4 py-16 md:py-[80px] flex justify-start items-end">
          <div className="relative z-10 flex flex-col gap-6 max-w-full md:max-w-[545px]">
            <div className="flex flex-col gap-4">
              <h1 className="heading-1 text-white uppercase m-0 drop-shadow-[0px_0px_4px_rgba(0,0,0,0.25)]">
                Step Into Prime
              </h1>
              <p className="font-sans text-[18px] font-normal leading-[26px] text-white m-0 max-w-[495px]">
                Priority access. Bespoke programs. A VIP experience designed for
                those who demand the best.
              </p>
            </div>
            <div>
              <Link
                to="/free-dexa-scan"
                className="inline-flex btn-primary text-white w-fit"
              >
                Begin Your Journey
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VipHero;

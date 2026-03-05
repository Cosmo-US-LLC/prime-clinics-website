import React from "react";
import AboutHeroDesktop from "@/assets/images/AboutUs/About-desktop-hero.webp";
import AboutHeroMobile from "@/assets/images/AboutUs/About-mobile-hero.webp";

function AboutHero() {
  return (
    <section className="bg-[#fff] p-2 h-[100dvh]" aria-label="Hero">
      <div className="relative w-full h-full rounded-2xl overflow-hidden flex flex-col justify-end">
        <div className="hidden md:block absolute inset-0">
          <img
            src={AboutHeroDesktop}
            alt="Prime Clinics"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="md:hidden absolute inset-0">
          <img
            src={AboutHeroMobile}
            alt="Prime Clinics"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-[1280px] mx-auto w-full md:px-8 px-4 py-16 md:py-[80px] flex justify-start items-end">
          <div className="relative z-10 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h1 className="heading-1 text-white md:max-w-[605px] max-w-[305px] uppercase m-0 drop-shadow-[0px_0px_4px_rgba(0,0,0,0.25)]">
                BRIDGING MEDICINE & PERFORMANCE
              </h1>
              <p className="font-sans text-[16px] md:text-[18px] max-w-full md:max-w-[495px] font-normal leading-[26px] text-white m-0 ">
                We are an elite medical collective focused entirely on proactive
                health, advanced regenerative therapies, and complete biological
                optimization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;

import React from "react";
import { Link } from "react-router-dom";
import HomeHeroImageDesktop from "@/assets/images/home/home_hero/home_hero_desktop.webp";
import HomeHeroImageMobile from "@/assets/images/home/home_hero/home_hero_mobile.webp";

function HomeHero() {
  return (
    <section className="bg-[#fff] p-2 h-[100dvh]" aria-label="Hero">
      <div className="relative w-full h-full rounded-2xl overflow-hidden flex flex-col justify-end">
        <div className="hidden md:block absolute inset-0">
          <img
            src={HomeHeroImageDesktop}
            alt="Prime Clinics"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="md:hidden absolute inset-0">
          <img
            src={HomeHeroImageMobile}
            alt="Prime Clinics"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-[1280px] mx-auto w-full md:px-8 px-4 py-16 md:py-[80px] flex justify-start items-end">
          <div className="relative z-10 flex flex-col gap-6 max-w-full md:max-w-[575px]">
            <div className="flex flex-col gap-4">
              <h1 className=" text-white uppercase m-0 heading-1 md:max-w-[575px] max-w-[305px]">
                A New Standard of{" "}
                <span className="bg-linear-to-r from-[#2463D8] via-[#60A5FA] to-[#BFDBFE] bg-clip-text text-transparent">
                  Performance
                </span>
              </h1>
              <p className="body_text_1 text-white m-0 max-w-[495px]">
                Precision performance science designed to elevate strength,
                clarity, vitality, and longevity.
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

export default HomeHero;

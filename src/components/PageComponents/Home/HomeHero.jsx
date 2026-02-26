import React from "react";
import { Link } from "react-router-dom";

function HomeHero() {
  return (
    <section
      className="relative w-full flex overflow-hidden home_hero"
      aria-label="Hero"
    >
      <div className="max-w-[1280px] mx-auto w-full md:px-8 px-4 py-16 md:py-[80px] flex justify-start items-end">
        <div className="relative z-10 flex flex-col gap-6 max-w-full md:max-w-[545px]">
          <div className="flex flex-col gap-4">
            <h1 className="font-display text-[42px] md:text-[64px] font-bold leading-[72px] text-white uppercase m-0 drop-shadow-[0px_0px_4px_rgba(0,0,0,0.25)] tracking-normal">
              A New Standard of{" "}
              <span className="bg-linear-to-r from-[#2463D8] via-[#60A5FA] to-[#BFDBFE] bg-clip-text text-transparent">
                Performance
              </span>
            </h1>
            <p className="font-sans text-[18px] font-normal leading-[26px] text-white m-0 max-w-[495px]">
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
    </section>
  );
}

export default HomeHero;

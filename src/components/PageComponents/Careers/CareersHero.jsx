import React from "react";
import { Link } from "react-router-dom";
import HomeHeroImageDesktop from "@/assets/images/medical_prescriptions/career_hero_section.webp";
import HomeHeroImageMobile from "@/assets/images/medical_prescriptions/career_hero_section.webp";
import CareerCard1 from "@/assets/images/medical_prescriptions/career_hero_card_1.webp";
import CareerCard2 from "@/assets/images/medical_prescriptions/career_hero_card_2.webp";

function CareersHero() {
  return (
    <section className="bg-[#fff] p-2 h-[100dvh]" aria-label="Hero">
      <div className="relative w-full h-full rounded-2xl overflow-hidden flex flex-col justify-center">
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
        <div className="relative z-10 max-w-[1280px] mx-auto w-full md:px-8 px-4 py-22 md:py-[80px] h-full flex justify-start md:items-center items-start">
          <div className="relative z-10 flex flex-col gap-6 max-w-full md:max-w-[575px] h-full justify-start md:justify-center">
            <div className="flex flex-col gap-4 text-center md:text-left">
              <h1 className="heading-1 text-[#040A16] uppercase m-0 ">
                Join PRIME Clinics
              </h1>
              <p className="font-sans text-[18px] font-normal leading-[26px] text-[#040A16] m-0 max-w-[495px]">
                Join a team that is redefining healthcare through data,
                technology, and personalized performance protocols.
              </p>
            </div>
            <div>
              <Link
                to="/free-dexa-scan"
                className="inline-flex btn-primary text-white w-fit mx-auto md:mx-0"
              >
                Browse Positions
              </Link>
            </div>
          </div>
          <div className="absolute md:top-[30%] top-[64%] md:right-[20%] right-[40%] z-20">
            <img
              src={CareerCard1}
              alt="Career Hero Card"
              className="w-full h-[200px] md:h-[300px] object-cover"
            />
          </div>
          <div className="absolute md:top-[42%] top-[68%] md:right-[9%] right-[14%] z-10">
            <img
              src={CareerCard2}
              alt="Career Hero Card"
              className="w-full h-[190px] md:h-[280px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareersHero;

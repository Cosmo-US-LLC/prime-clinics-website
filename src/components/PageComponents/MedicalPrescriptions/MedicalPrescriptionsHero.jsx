import React from "react";
import { Link } from "react-router-dom";
import MedicalPrescriptionsHeroDesktop from "@/assets/images/medical_prescriptions/medical_prescriptions_desktop.webp";
import MedicalPrescriptionsHeroMobile from "@/assets/images/medical_prescriptions/medical_prescriptions_mobile.webp";

function MedicalPrescriptionsHero() {
  return (
    <section className="bg-[#fff] p-2 h-[100dvh]" aria-label="Hero">
      <div className="relative w-full h-full rounded-2xl overflow-hidden flex flex-col justify-end">
        <div className="hidden md:block absolute inset-0">
          <img
            src={MedicalPrescriptionsHeroDesktop}
            alt="Prime Clinics"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="md:hidden absolute inset-0">
          <img
            src={MedicalPrescriptionsHeroMobile}
            alt="Prime Clinics"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-[1280px] mx-auto w-full md:px-8 px-4 py-16 md:py-[60px] flex justify-start items-end">
          <div className="relative z-10 flex flex-col gap-6 max-w-full md:max-w-[545px]">
            <div className="flex flex-col gap-4">
              <h1 className="heading-1 text-white uppercase m-0">
                Private Sexual Wellness Prescriptions
              </h1>
              <p className="font-sans text-[18px] font-normal leading-[26px] text-white m-0 max-w-[495px]">
                Discreet professional online prescriptions for men's sexual
                health. Perform better, feel confident, and reclaim control
                without judgment.
              </p>
            </div>
            <div>
              <Link to="#" className="inline-flex btn-primary text-white w-fit">
                Start Your Private Consultation
              </Link>
            </div>
            <p className="font-sans text-[14px] font-normal leading-[20px] text-[#fff] m-0">
              Takes a few minutes • Private & Secure
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MedicalPrescriptionsHero;

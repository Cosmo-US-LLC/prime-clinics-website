import React from "react";
import { Link } from "react-router-dom";
import StepIntoPrimeBGDesktop from "@/assets/images/home/step_into_prime/step_into_prime_desktop.webp";
import StepIntoPrimeBGMobile from "@/assets/images/home/step_into_prime/step_into_prime_mobile.webp";

function StepIntoPrime() {
  return (
    <section
      className="w-full px-4 md:px-8 py-12 md:py-20"
      aria-label="Step into Prime"
    >
      <div className="relative w-full max-w-[1220px] mx-auto rounded-[16px] shadow-[0px_24px_32px_0px_rgba(0,0,0,0.08)] overflow-hidden">
        {/* Background images: desktop vs mobile using <picture> */}
        <div className="absolute inset-0 pointer-events-none">
          <picture>
            {/* Desktop image for md and up */}
            <source
              srcSet={StepIntoPrimeBGDesktop}
              media="(min-width: 768px)"
            />
            {/* Mobile default image */}
            <img
              src={StepIntoPrimeBGMobile}
              alt="Prime Clinics environment"
              className="h-full w-full object-cover"
            />
          </picture>
        </div>

        <div className="relative z-10 flex flex-col md:gap-6 gap-3 md:h-[500px] h-[600px] md:p-8 p-4 max-w-[660px] md:justify-center justify-start">
          <div className="flex flex-col md:gap-4 gap-2">
            <h2 className="heading-2 text-[#040A16] uppercase m-0">
              Step Into Prime
            </h2>
            <p className="font-sans text-[16px] md:text-[18px] font-normal leading-[24px] md:leading-[26px] text-[#030712] m-0">
              Take the first step toward your peak health and performance. Our
              specialists are ready to create your personalized assessment and
              plan.
            </p>
          </div>

          <div className="flex flex-col gap-[14px]">
            <Link to="/free-dexa-scan" className="btn-primary w-fit">
              Begin Your Journey
            </Link>
            <p className="font-sans text-[14px] font-normal leading-[20px] text-[#030712] m-0">
              Schedule your private consultation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StepIntoPrime;

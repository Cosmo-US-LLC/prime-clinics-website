import React from "react";
import AboutPrime from "@/assets/images/MeetTheTeam/AboutPrime.webp"

function AboutPrimeClinics() {
  return (
    <section className="w-full bg-[#f9fafb] py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col gap-20">

        {/* ROW 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* TEXT */}
          <div className="flex flex-col gap-4 max-w-[780px] mt-6">
            <h2 className="heading-2 text-[#040A16] uppercase m-0">
              ABOUT PRIME CLINICS
            </h2>
            <p className="font-sans text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] text-[#030712] m-0">
              Exceptional care demands exceptional expertise. Our elite team of board certified specialists leads the field in proactive health. From hormone optimization to structural refinement, we design science backed protocols that deliver measurable, lasting results.
            </p>
          </div>

          {/* IMAGE */}
          <div className="w-full flex justify-center md:justify-end AboutPrime">
            <img
              src={AboutPrime}  
              alt="Prime Clinics"
              className="w-[350px] md:w-[480px] object-cover"
            />
          </div>
        </div>

        {/* ROW 2 */}
        <div className="flex flex-col gap-4 max-w-[580px] mt-6">
            <h2 className="heading-2 text-[#040A16] uppercase m-0">
              MEDICAL EXCELLENCE BEHIND EVERY TREATMENT
            </h2>
            <p className="font-sans text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] text-[#030712] m-0">
              You receive more than a single treatment; you gain access to an integrated medical network. Our experts combine endocrinology, biomechanics, aesthetics, and psychology to build comprehensive blueprints targeting the root causes of performance decline, not just surface symptoms.
            </p>
          </div>

      </div>
    </section>
  );
}

export default AboutPrimeClinics;
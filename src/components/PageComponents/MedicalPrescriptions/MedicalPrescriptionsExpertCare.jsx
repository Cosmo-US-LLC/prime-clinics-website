import React from "react";
import { Link } from "react-router-dom";
import ExpertCare1 from "@/assets/images/medical_prescriptions/expert_care_1.webp";
import ExpertCare2 from "@/assets/images/medical_prescriptions/expert_care_2.webp";
import ExpertCare3 from "@/assets/images/medical_prescriptions/expert_care_3.webp";
import ExpertCare4 from "@/assets/images/medical_prescriptions/expert_care_4.webp";

/**
 * "Expert Care, Zero Compromise" section — two-column layout per Figma 3187:13943.
 * Left: eyebrow, heading, description, CTA. Right: main image + 3 smaller images.
 */
function MedicalPrescriptionsExpertCare() {
  return (
    <section className="bg-white py-12 md:py-20" aria-label="Expert care">
      <div className="mx-auto flex w-full max-w-[1280px] px-4 md:px-8 flex-col gap-12 md:flex-row md:items-center md:gap-16">
        {/* Left: content */}
        <div className="flex min-w-0 flex-1 flex-col gap-8 md:gap-12">
          <div className="flex flex-col gap-4">
            <p className="font-sans m-0 text-[20px] font-bold uppercase leading-7 tracking-[1.4px] text-[#2463D8]">
              Medical Review for Sexual Health
            </p>
            <div className="flex flex-col gap-5">
              <h2 className="heading-2 m-0 uppercase text-[#040A16]">
                Expert Care, Zero Compromise
              </h2>
              <div className="font-sans text-[18px] font-normal leading-[26px] text-[#030712]">
                <p className="m-0">
                  Prime Clinics provides clinician-reviewed prescription care
                  for sexual health concerns. Every request is reviewed by a
                  licensed medical professional to ensure prescriptions are safe
                  and medically appropriate.
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  You get expert care from licensed clinicians, not automated
                  systems. Your privacy is guaranteed and your health is our
                  priority.
                </p>
              </div>
            </div>
          </div>
          <Link to="#" className="inline-flex btn-primary w-fit text-white">
            Start Your Private Consultation
          </Link>
        </div>

        {/* Right: image stack */}
        <div className="flex min-w-0 flex-1 flex-col gap-4">
          <div className="relative h-[280px] w-full overflow-hidden rounded-lg md:h-[372px]">
            <img
              src={ExpertCare1}
              alt="Expert care for your health"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex h-[120px] gap-4 md:h-[150px]">
            <div className="min-h-0 min-w-0 flex-1 overflow-hidden rounded-lg">
              <img
                src={ExpertCare2}
                alt=""
                className="h-full w-full object-cover"
                role="presentation"
              />
            </div>
            <div className="min-h-0 min-w-0 flex-1 overflow-hidden rounded-lg">
              <img
                src={ExpertCare3}
                alt=""
                className="h-full w-full object-cover"
                role="presentation"
              />
            </div>
            <div className="min-h-0 min-w-0 flex-1 overflow-hidden rounded-lg">
              <img
                src={ExpertCare4}
                alt=""
                className="h-full w-full object-cover"
                role="presentation"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MedicalPrescriptionsExpertCare;

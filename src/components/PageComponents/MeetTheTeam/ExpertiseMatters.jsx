import React from "react";
import {
  ExtendedAvailabilityIcon,
  DiscreetSchedulingIcon,
  EfficientCoordinationIcon,
  AdaptiveSchedulingIcon,
} from "@/utils/knowYourNumbersIcons";

const features = [
  {
    title: "UNMATCHED CLINICAL PRECISION",
    description: "We rely entirely on medical grade diagnostics and comprehensive bloodwork, not guesswork, to build your exact biological optimization blueprint.",
    Icon: ExtendedAvailabilityIcon,
  },
  {
    title: "MULTIDISCIPLINARY APPROACH",
    description:
      "Our specialists collaborate daily across hormones, biomechanics, and aesthetics to provide you with truly complete, fully integrated structural care.",
    Icon: DiscreetSchedulingIcon,
  },
  {
    title: "ADVANCED MEDICAL PROTOCOLS",
    description:
      "You gain immediate, direct access to the latest FDA cleared technologies, neurostimulation devices, and highly effective regenerative peptide therapies.",
    Icon: EfficientCoordinationIcon,
  },
  {
    title: "MEASURABLE ACCOUNTABILITY",
    description:
      "Our doctors rigorously track your biological data and symptom severity to ensure continuous, objective physical and cognitive progress every single month.",
    Icon: AdaptiveSchedulingIcon,
  },
];

function ExpertiseMatters() {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10 px-4 md:flex-row md:items-center md:gap-20 md:px-8">
        <div className="flex max-w-[510px] flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className="font-sans text-[14px] md:text-[20px] font-bold leading-[20px] md:leading-[28px] tracking-widest text-[#2463D8] uppercase m-0">
              Our Value Proposition
            </p>
            <div className="flex flex-col gap-3">
              <h2 className="heading-2 text-[#040a16] uppercase m-0">
                WHY OUR EXPERTISE MATTERS TO YOU
              </h2>
            </div>
          </div>

          <button type="button" className="inline-flex btn-primary w-fit">
            Request VIP Access
          </button>
        </div>

        <div className="grid flex-1 gap-4 md:grid-cols-2">
          {features.map((feature) => {
            const IconComponent = feature.Icon;

            return (
              <article
                key={feature.title}
                className="flex flex-col gap-6 rounded-[16px] bg-[#f9fafb] p-6"
              >
                <div className="flex h-8 w-8">
                  <IconComponent
                    className="h-full w-full text-[#2463D8]"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="heading-3 text-black uppercase m-0">
                    {feature.title}
                  </h3>
                  <p className="font-sans text-[16px] leading-[24px] text-[#0b0f19] m-0">
                    {feature.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ExpertiseMatters;

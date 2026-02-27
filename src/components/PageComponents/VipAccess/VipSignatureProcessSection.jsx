import React from "react";
import {
  ExtendedAvailabilityIcon,
  DiscreetSchedulingIcon,
  EfficientCoordinationIcon,
  AdaptiveSchedulingIcon,
} from "@/utils/knowYourNumbersIcons";

const features = [
  {
    title: "Extended Availability",
    description: "Access clinical sessions outside standard operating times.",
    Icon: ExtendedAvailabilityIcon,
  },
  {
    title: "Discreet Scheduling",
    description:
      "Appointments designed to ensure a private environment during your appointment.",
    Icon: DiscreetSchedulingIcon,
  },
  {
    title: "Efficient Coordination",
    description:
      "Priority management of your sessions to respect the value of your time.",
    Icon: EfficientCoordinationIcon,
  },
  {
    title: "Adaptive Scheduling",
    description:
      "Secure appointment times tailored to the requirements of a demanding lifestyle.",
    Icon: AdaptiveSchedulingIcon,
  },
];

function VipSignatureProcessSection() {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10 px-4 md:flex-row md:items-center md:gap-20 md:px-8">
        <div className="flex max-w-[510px] flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className="font-sans text-[14px] md:text-[20px] font-bold leading-[20px] md:leading-[28px] tracking-widest text-[#2463D8] uppercase m-0">
              Our Signature Process
            </p>
            <div className="flex flex-col gap-3">
              <h2 className="heading-2 text-[#040a16] uppercase m-0">
                Flexibility Without Compromise
              </h2>

              <p className="font-sans text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] text-[#030712] m-0">
                Your time is valuable. Prime VIP Access integrates health
                optimization into your life with absolute discretion and
                unmatched flexibility.
              </p>
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

export default VipSignatureProcessSection;

import React from "react";
import { Link } from "react-router-dom";
import PERFORMANCE_IMAGE from "@/assets/images/home/know_your_number/know_your_number_card1.webp";
import INTRO_IMAGE from "@/assets/images/home/know_your_number/know_your_number_card2.webp";
import {
  PhysicianIntakeIcon,
  DexaBodyCompositionIcon,
  PhysicalLongevityIcon,
  PhysicianConsultationIcon,
  BodyFatIcon,
  VisceralFatIcon,
  LeanMuscleIcon,
  BoneDensityIcon,
} from "@/utils/knowYourNumbersIcons";

const CARDS = [
  {
    id: "performance",
    title: "The Performance and Longevity Assessment",
    valueLabel: "A $300 Value",
    image: PERFORMANCE_IMAGE,
    headingMaxWidthClass: "max-w-[340px]",
    bulletColor: "#60A5FA",
    bullets: [
      { label: "Physician Intake", Icon: PhysicianIntakeIcon },
      { label: "DEXA Body Composition Scan", Icon: DexaBodyCompositionIcon },
      { label: "Physical Longevity Assessment", Icon: PhysicalLongevityIcon },
      { label: "Physician Consultation", Icon: PhysicianConsultationIcon },
    ],
    description:
      "A 2-hour physician-led session including a DEXA body scan, physical longevity testing, and personalized performance insights.",
  },
  {
    id: "intro",
    title: "The Introductory DEXA Scan",
    valueLabel: "A $145 Value",
    image: INTRO_IMAGE,
    headingMaxWidthClass: "max-w-[300px]",
    bulletColor: "#2463D8",
    bullets: [
      { label: "Body Fat Percentage", Icon: BodyFatIcon },
      { label: "Visceral Fat", Icon: VisceralFatIcon },
      { label: "Lean Muscle Mass", Icon: LeanMuscleIcon },
      { label: "Bone Density", Icon: BoneDensityIcon },
    ],
    description:
      "Understand your body composition with low-dose X-ray technology, the same method used by pro athletes.",
  },
];

function HomeKnowYourNumbers() {
  return (
    <section
      className="w-full bg-[#F9FAFB] py-12 md:py-20"
      aria-label="Know your numbers"
    >
      <div className="mx-auto flex max-w-[1100px] px-4 md:px-0 flex-col gap-10">
        {/* Heading */}
        <div className="flex flex-col items-center text-center gap-4 mx-auto">
          <h2 className="heading-2 uppercase max-w-[480px] m-0">
            <span className="text-[#2463D8]">Know Your Numbers.</span>{" "}
            <span className="text-[#040A16]">Own Your Results.</span>
          </h2>
          <p className="font-sans max-w-[780px] text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] text-[#030712] m-0">
            Start your journey to peak performance today. Our free assessment
            uncovers key insights about your body and health so you can make
            smarter choices and track real progress.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 md:[grid-auto-rows:minmax(0,1fr)]">
          {CARDS.map((card) => (
            <article
              key={card.id}
              className="group flex h-full flex-col overflow-hidden rounded-[8px] bg-white shadow-[0px_4px_24px_rgba(0,0,0,0.08),0px_0px_4px_rgba(0,0,0,0.1)]"
            >
              <div className="bg-white p-3 transition-colors duration-200 group-hover:bg-[#040A16]">
                <div className="relative h-[260px] md:h-[300px] w-full overflow-hidden rounded-[8px]">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover "
                  />
                </div>
                <div className="flex flex-col gap-6 px-2 pb-4 pt-3 md:pl-2 md:pr-4 md:py-3">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col md:flex-row flex-wrap justify-between items-baseline gap-2">
                      <h3
                        className={`font-display text-[24px] md:text-[32px] font-bold leading-[32px] md:leading-[40px] uppercase m-0 flex-1 text-[#040A16] group-hover:text-white ${card.headingMaxWidthClass}`}
                      >
                        {card.title}
                      </h3>
                      <p className="font-sans w-full text-[16px] md:text-[18px] max-w-[100px] font-bold leading-[24px] text-[#2463D8] m-0 whitespace-nowrap">
                        {card.valueLabel}
                      </p>
                    </div>
                    <p className="font-sans text-[16px] md:h-[60px] h-[90px] leading-[24px] m-0 text-[#030712] group-hover:text-white">
                      {card.description}
                    </p>
                  </div>

                  <div className="grid gap-3 md:grid-cols-2">
                    {card.bullets.map((item) => {
                      const label =
                        typeof item === "string" ? item : item.label;
                      const Icon =
                        typeof item === "object" && item.Icon
                          ? item.Icon
                          : null;
                      return (
                        <div key={label} className="flex items-center gap-2">
                          {Icon ? (
                            <Icon className="h-6 w-6 text-[#040A16] group-hover:text-white" />
                          ) : (
                            <span
                              className="h-1.5 w-1.5 rounded-full"
                              style={{ backgroundColor: card.bulletColor }}
                            />
                          )}
                          <span className="font-sans text-[14px] md:text-[14px] leading-[20px] md:leading-[20px] text-[#1F2937] group-hover:text-white">
                            {label}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <Link
                    to="/free-dexa-scan"
                    className="mt-2 w-full flex items-center justify-center gap-2 border border-[#2463D8] px-6 py-4 rounded-[8px] text-[16px] font-[700] leading-[24px] text-[#2463D8] group-hover:bg-[#2463D8] group-hover:text-white transition-all duration-200"
                  >
                    Join the VIP Waitlist
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeKnowYourNumbers;

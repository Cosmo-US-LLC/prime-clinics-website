import React from "react";
import { Link } from "react-router-dom";

const STEPS = [
  {
    number: 1,
    title: "Clinical Intake and Analysis",
    description:
      "Complete a brief health assessment and rapid blood test to receive preliminary results within fifteen minutes.",
  },
  {
    number: 2,
    title: "Expert Clinical Consultation",
    description:
      "Review findings with a specialist clinic director to receive a tailored evaluation of your metabolic and hormonal health.",
  },
  {
    number: 3,
    title: "Personalized Treatment Implementation",
    description:
      "Launch your customized, eligibility-based plan immediately to achieve your specific health and performance objectives.",
  },
];

function HomeSignatureProcess() {
  return (
    <section
      className="w-full bg-white py-12 md:py-16"
      aria-label="Our signature process"
    >
      <div className="mx-auto flex max-w-[1260px] px-4 md:px-8 flex-col items-center gap-3 md:gap-4">
        {/* Heading block */}
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="font-sans text-[14px] md:text-[20px] font-bold leading-[20px] md:leading-[28px] tracking-widest text-[#2463D8] uppercase m-0">
            How It Works
          </p>
          <div className="flex flex-col gap-2 ">
            <h2 className="heading-2 text-[#040A16] md:max-w-[780px] max-w-[300px] text-center uppercase m-0">
              Our Signature Process
            </h2>
            <p className="font-sans text-[16px] text-center md:text-[18px] leading-[24px] md:leading-[26px] text-[#030712] m-0">
              A streamlined path to clinical optimization.
            </p>
          </div>
        </div>

        {/* Steps row */}
        <div className="grid w-full gap-0 md:grid-cols-3 md:gap-2">
          {STEPS.map((step) => (
            <article
              key={step.number}
              className="flex flex-col items-center gap-8 bg-white px-3 py-8 md:px-6 md:py-12 text-center"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[8px] bg-[#2463D8]">
                <span className="font-display text-[40px] font-semibold leading-[56px] text-white">
                  {step.number}
                </span>
              </div>
              <div className="flex flex-col gap-3 justify-center items-center">
                <h3 className="heading-3 text-[#040A16] max-w-[300px] uppercase m-0">
                  {step.title}
                </h3>
                <p className="font-sans text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] text-[#020120] m-0">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <Link to="/free-dexa-scan" className="inline-flex btn-primary">
          Get Free Consultation
        </Link>
      </div>
    </section>
  );
}

export default HomeSignatureProcess;

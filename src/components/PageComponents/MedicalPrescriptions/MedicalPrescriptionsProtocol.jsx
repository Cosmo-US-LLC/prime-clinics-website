import React from "react";

/**
 * "The Protocol" / "How the Process Works" — three-step process section.
 * Matches Figma 3187:13959: eyebrow, heading, subtitle, three staggered cards.
 */
const STEPS = [
  {
    number: "1",
    title: "Complete a Medical Assessment",
    description:
      "Answer questions about your health history, symptoms, and current medications to ensure safe prescribing.",
  },
  {
    number: "2",
    title: "Clinician Review",
    description:
      "A licensed clinician reviews your responses to determine eligibility for treatment.",
  },
  {
    number: "3",
    title: "Prescription Delivered",
    description:
      "If approved, your prescription is sent securely to a licensed pharmacy.",
  },
];

function MedicalPrescriptionsProtocol() {
  return (
    <section
      className="flex flex-col items-center bg-white px-4 py-12 md:px-8 md:py-16"
      aria-label="The protocol"
    >
      <header className="flex flex-col items-center gap-2 text-center">
        <p className="font-sans m-0 text-[20px] font-bold uppercase leading-7 tracking-[1.4px] text-[#2463D8]">
          The Protocol
        </p>
        <div className="flex max-w-[780px] flex-col items-center gap-2">
          <h2 className="font-display m-0 text-[32px] font-bold uppercase leading-tight text-[#040A16] md:text-[48px] md:leading-[56px]">
            How the Process Works
          </h2>
          <p className="font-sans m-0 max-w-[686px] text-[18px] font-normal leading-[26px] text-[#030712]">
            Simple. Secure. Private.
          </p>
        </div>
      </header>

      <div className="mx-auto mt-8 flex w-full max-w-[1280px] flex-col gap-6  md:flex-row md:gap-6">
        {STEPS.map((step, index) => {
          const isLast = index === STEPS.length - 1;

          return (
            <div
              key={step.number}
              className={`flex min-w-0 flex-1 flex-col bg-white ${
                index === 1 ? "md:pt-[124px]" : ""
              } ${index === 2 ? "md:pt-[250px]" : ""}`}
            >
              <div
                className={`flex flex-col text-center md:text-left px-4 md:px-8 py-4 md:py-8 border-[#d1d5db] ${
                  !isLast ? "border-b md:border-b-0" : ""
                } ${index > 0 ? "md:border-l" : ""}`}
              >
                <div className="mb-8 flex size-16 mx-auto md:mx-0 items-center justify-center rounded-2xl bg-[#2463D8] md:size-20">
                  <span className="font-display text-[32px] font-semibold leading-[56px] text-white md:text-[40px]">
                    {step.number}
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-display m-0 text-[24px] font-bold uppercase leading-8 text-[#040A16]">
                    {step.title}
                  </h3>
                  <p className="font-sans m-0 text-[18px] font-normal leading-[26px] text-[#020120]">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default MedicalPrescriptionsProtocol;

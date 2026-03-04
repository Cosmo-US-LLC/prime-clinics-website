import React from "react";

const POSITIONS = [
  {
    title: "Nurse Practitioner",
    description:
      "We are seeking a skilled NP to join our hormone optimization team. Experience in endocrinology or functional medicine preferred.",
  },
  {
    title: "Licensed Practical Nurse",
    description:
      "Support our clinical team in patient care, IV therapy administration, and general clinic operations.",
  },
  {
    title: "Exercise Physiologist",
    description:
      "Lead our performance testing (VO2 Max, RMR) and design data-driven exercise protocols for clients.",
  },
  {
    title: "Performance Coach - Business Development",
    description:
      "Drive clinic growth by building partnerships and guiding clients through our high-performance programs.",
  },
  {
    title: "Administration",
    description:
      "The face of Prime Clinics. Manage patient scheduling, intake, and ensure a premium client experience.",
  },
];

function CareersOpenPositions() {
  return (
    <section
      className="w-full bg-white py-12 md:py-20"
      aria-label="Open positions"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10 px-4 md:px-8 md:flex-row md:items-start">
        {/* Left: heading + description */}
        <div className="flex w-full max-w-[590px] flex-col gap-5">
          <h2 className="font-display m-0 text-[32px] font-bold uppercase leading-tight text-[#040A16] md:text-[48px] md:leading-[56px]">
            Open Positions
          </h2>
          <p className="font-sans m-0 text-[16px] font-normal leading-[24px] text-[#030712]">
            Shape the future of human performance. Discover roles where your
            skills make an impact every day.
          </p>
        </div>

        {/* Right: positions list */}
        <div className="flex w-full flex-1 flex-col gap-6">
          {POSITIONS.map((role, index) => {
            const isLast = index === POSITIONS.length - 1;

            return (
              <div key={role.title} className="flex flex-col gap-4">
                <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-8">
                  <div className="flex-1">
                    <h3 className="font-display m-0 text-[20px] md:text-[24px] font-bold uppercase leading-[28px] md:leading-[32px] text-[#040A16]">
                      {role.title}
                    </h3>
                    <p className="font-sans m-0 mt-2 text-[16px] font-normal leading-[24px] text-[#030712]">
                      {role.description}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="inline-flex shrink-0 items-center justify-center rounded-[8px] bg-[#2463D8] px-6 py-3 font-sans text-[16px] font-bold leading-[24px] text-white transition-colors hover:bg-[#1a4fa8]"
                  >
                    Apply Now
                  </button>
                </div>
                {!isLast && (
                  <div className="h-px w-full bg-[#E5E7EB]" aria-hidden="true" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CareersOpenPositions;


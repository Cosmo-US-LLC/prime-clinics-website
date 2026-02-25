import React from "react";
import { Link } from "react-router-dom";

const PERFORMANCE_IMAGE =
  "https://www.figma.com/api/mcp/asset/30d1339f-4456-4fe1-8c2e-343fe909065c";
const INTRO_IMAGE =
  "https://www.figma.com/api/mcp/asset/db10cdce-e03b-4471-81dd-599adb430b22";

const performanceItems = [
  "Physician Intake",
  "DEXA Body Composition Scan",
  "Physical Longevity Assessment",
  "Physician Consultation",
];

const introItems = [
  "Body Fat Percentage",
  "Visceral Fat",
  "Lean Muscle Mass",
  "Bone Density",
];

function HomeKnowYourNumbers() {
  return (
    <section
      className="w-full bg-white px-4 md:px-[60px] py-12 md:py-20"
      aria-label="Know your numbers"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10">
        {/* Heading */}
        <div className="flex flex-col items-center text-center gap-4 max-w-[780px] mx-auto">
          <h2 className="font-display text-[32px] md:text-[48px] font-bold leading-[40px] md:leading-[56px] uppercase m-0">
            <span className="text-[#2463D8]">Know Your Numbers.</span>{" "}
            <span className="text-[#040A16]">Own Your Results.</span>
          </h2>
          <p className="font-sans text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] text-[#030712] m-0">
            Start your journey to peak performance today. Our free assessment
            uncovers key insights about your body and health so you can make
            smarter choices and track real progress.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Performance & Longevity Assessment (hover = dark card) */}
          <article className="group flex h-full flex-col overflow-hidden rounded-[8px] bg-white shadow-[0px_4px_24px_rgba(0,0,0,0.08),0px_0px_4px_rgba(0,0,0,0.1)] transition-colors">
            <div className="h-[260px] md:h-[300px] w-full overflow-hidden">
              <img
                src={PERFORMANCE_IMAGE}
                alt="Performance and longevity assessment"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-6 px-4 pb-4 pt-3 md:px-4 md:pb-6 md:pt-4 bg-[#040A16] group-hover:bg-[#040A16] text-white transition-colors">
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap items-baseline gap-2">
                  <h3 className="font-display text-[24px] md:text-[32px] font-bold leading-[32px] md:leading-[40px] uppercase m-0 flex-1">
                    The Performance and Longevity Assessment
                  </h3>
                  <p className="font-sans text-[16px] md:text-[18px] font-bold leading-[24px] text-[#2463D8] m-0 whitespace-nowrap">
                    A $300 Value
                  </p>
                </div>
                <p className="font-sans text-[16px] leading-[24px] m-0">
                  A 2-hour physician-led session including a DEXA body scan,
                  physical longevity testing, and personalized performance
                  insights.
                </p>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                {performanceItems.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#60A5FA]" />
                    <span className="font-sans text-[14px] md:text-[16px] leading-[20px] md:leading-[24px]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                to="/free-dexa-scan"
                className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-[#2463D8] px-6 py-4 font-sans text-[16px] font-bold leading-[24px] text-white hover:bg-[#1a4fa8] transition-colors"
              >
                Join the VIP Waitlist
              </Link>
            </div>
          </article>

          {/* Introductory DEXA Scan */}
          <article className="group flex h-full flex-col overflow-hidden rounded-[8px] bg-white shadow-[0px_4px_24px_rgba(0,0,0,0.08),0px_0px_4px_rgba(0,0,0,0.1)] transition-colors hover:bg-[#040A16] hover:text-white">
            <div className="h-[260px] md:h-[300px] w-full overflow-hidden">
              <img
                src={INTRO_IMAGE}
                alt="Introductory DEXA scan"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-6 px-4 pb-4 pt-3 md:px-4 md:pb-6 md:pt-4 transition-colors group-hover:bg-[#040A16]">
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap items-baseline gap-2">
                  <h3 className="font-display text-[24px] md:text-[32px] font-bold leading-[32px] md:leading-[40px] uppercase m-0 flex-1">
                    The Introductory DEXA Scan
                  </h3>
                  <p className="font-sans text-[16px] md:text-[18px] font-bold leading-[24px] text-[#2463D8] m-0 whitespace-nowrap">
                    A $145 Value
                  </p>
                </div>
                <p className="font-sans text-[16px] leading-[24px] m-0">
                  Understand your body composition with low-dose X-ray
                  technology, the same method used by pro athletes.
                </p>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                {introItems.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2463D8]" />
                    <span className="font-sans text-[14px] md:text-[16px] leading-[20px] md:leading-[24px]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                to="/free-dexa-scan"
                className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-[#2463D8] px-6 py-4 font-sans text-[16px] font-bold leading-[24px] text-white hover:bg-[#1a4fa8] transition-colors"
              >
                Join the VIP Waitlist
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default HomeKnowYourNumbers;


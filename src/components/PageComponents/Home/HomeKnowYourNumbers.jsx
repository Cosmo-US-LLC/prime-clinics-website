import React from "react";
import { Link } from "react-router-dom";
import PERFORMANCE_IMAGE from "@/assets/images/home/know_your_number/know_your_number_card1.webp";
import INTRO_IMAGE from "@/assets/images/home/know_your_number/know_your_number_card2.webp";

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
      className="w-full bg-[#F9FAFB] py-12 md:py-20"
      aria-label="Know your numbers"
    >
      <div className="mx-auto flex max-w-[1080px] px-4 md:px-0 flex-col gap-10">
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
        <div className="grid gap-6 md:grid-cols-2">
          {/* Performance & Longevity Assessment (hover = dark full card) */}
          <article className="group flex h-full flex-col overflow-hidden rounded-[8px] bg-white shadow-[0px_4px_24px_rgba(0,0,0,0.08),0px_0px_4px_rgba(0,0,0,0.1)]">
            <div className="bg-white p-3 transition-colors duration-200 group-hover:bg-[#040A16]">
              <div className="relative h-[260px] md:h-[300px] w-full overflow-hidden rounded-[8px]">
                <img
                  src={PERFORMANCE_IMAGE}
                  alt="Performance and longevity assessment"
                  className="h-full w-full object-cover "
                />
              </div>
              <div className="flex flex-col gap-6 px-4 pb-4 pt-3 md:px-4 md:py-3">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap justify-between items-baseline gap-2">
                    <h3 className="font-display text-[24px] md:text-[32px] max-w-[340px] font-bold leading-[32px] md:leading-[40px] uppercase m-0 flex-1 text-[#040A16] group-hover:text-white">
                      The Performance and Longevity Assessment
                    </h3>
                    <p className="font-sans text-[16px] md:text-[18px] max-w-[100px] font-bold leading-[24px] text-[#2463D8] m-0 whitespace-nowrap">
                      A $300 Value
                    </p>
                  </div>
                  <p className="font-sans text-[16px] leading-[24px] m-0 text-[#030712] group-hover:text-white">
                    A 2-hour physician-led session including a DEXA body scan,
                    physical longevity testing, and personalized performance
                    insights.
                  </p>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  {performanceItems.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#60A5FA]" />
                      <span className="font-sans text-[14px] md:text-[14px] leading-[20px] md:leading-[20px] text-[#1F2937] group-hover:text-white">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/free-dexa-scan"
                  className="mt-2 inline-flex w-full flex items-center justify-center gap-2 border border-[#2463D8] px-6 py-4 rounded-[8px] text-[16px] font-[700] leading-[24px] text-[#2463D8] group-hover:bg-[#2463D8] group-hover:text-white transition-all duration-200"
                >
                  Join the VIP Waitlist
                </Link>
              </div>
            </div>
          </article>

          {/* Introductory DEXA Scan */}
          <article className="group flex h-full flex-col overflow-hidden rounded-[8px] bg-white shadow-[0px_4px_24px_rgba(0,0,0,0.08),0px_0px_4px_rgba(0,0,0,0.1)]">
            <div className="bg-white p-3 transition-colors duration-200 group-hover:bg-[#040A16]">
              <div className="relative h-[260px] md:h-[300px] w-full overflow-hidden rounded-[8px]">
                <img
                  src={INTRO_IMAGE}
                  alt="Introductory DEXA scan"
                  className="h-full w-full object-cover "
                />
              </div>
              <div className="flex flex-col gap-6 px-4 pb-4 pt-3 md:px-4 md:py-3">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap justify-between items-baseline gap-2">
                    <h3 className="font-display text-[24px] md:text-[32px] max-w-[300px] font-bold leading-[32px] md:leading-[40px] uppercase m-0 flex-1 text-[#040A16] group-hover:text-white">
                      The Introductory DEXA Scan
                    </h3>
                    <p className="font-sans text-[16px] md:text-[18px] max-w-[100px] font-bold leading-[24px] text-[#2463D8] m-0 whitespace-nowrap">
                      A $145 Value
                    </p>
                  </div>
                  <p className="font-sans text-[16px] leading-[24px] m-0 text-[#030712] group-hover:text-white">
                    Understand your body composition with low-dose X-ray
                    technology, the same method used by pro athletes.
                  </p>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  {introItems.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#2463D8]" />
                      <span className="font-sans text-[14px] md:text-[14px] leading-[20px] md:leading-[20px] text-[#1F2937] group-hover:text-white">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/free-dexa-scan"
                  className="mt-2 inline-flex w-full flex items-center justify-center gap-2 border border-[#2463D8] px-6 py-4 rounded-[8px] text-[16px] font-[700] leading-[24px] text-[#2463D8] group-hover:bg-[#2463D8] group-hover:text-white transition-all duration-200"
                >
                  Join the VIP Waitlist
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default HomeKnowYourNumbers;

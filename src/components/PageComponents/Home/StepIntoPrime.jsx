import React from "react";
import { Link } from "react-router-dom";

// Background image taken from Figma export for this section.
// You can swap this to a local asset later if you prefer.
const STEP_INTO_PRIME_BG =
  "https://www.figma.com/api/mcp/asset/33901871-4100-4a5d-8a83-28dfccb035e1";

function StepIntoPrime() {
  return (
    <section
      className="w-full px-4 md:px-[60px] py-12 md:py-20"
      aria-label="Step into Prime"
    >
      <div className="relative w-full rounded-[16px] shadow-[0px_24px_32px_0px_rgba(0,0,0,0.08)] overflow-hidden">
        {/* Background image + light gradient to match Figma */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src={STEP_INTO_PRIME_BG}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-l from-[#dddfe0] via-[#dddfe0]/60 to-transparent" />
        </div>

        <div className="relative z-10 flex flex-col gap-6 px-6 py-12 md:px-12 md:py-[120px] max-w-[540px]">
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-[32px] md:text-[48px] font-bold leading-[40px] md:leading-[56px] text-[#040A16] uppercase m-0">
              Step Into Prime
            </h2>
            <p className="font-sans text-[16px] md:text-[18px] font-normal leading-[24px] md:leading-[26px] text-[#1F2937] m-0">
              Take the first step toward your peak health and performance. Our
              specialists are ready to create your personalized assessment and
              plan.
            </p>
          </div>

          <div className="flex flex-col gap-[14px]">
            <Link
              to="/free-dexa-scan"
              className="inline-flex items-center justify-center px-6 py-4 rounded-lg bg-[#2463D8] text-white font-sans text-base font-bold leading-6 hover:bg-[#1a4fa8] transition-colors w-fit"
            >
              Begin Your Journey
            </Link>
            <p className="font-sans text-[14px] font-normal leading-[20px] text-[#030712] m-0">
              Schedule your private consultation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StepIntoPrime;


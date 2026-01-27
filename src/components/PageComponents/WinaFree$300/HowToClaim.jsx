import React from "react";
import icon1 from "../../../assets/images/WinaFree$300/HowtoClaim/icons (3).svg";
import icon2 from "../../../assets/images/WinaFree$300/HowtoClaim/icons (1).svg";
import icon3 from "../../../assets/images/WinaFree$300/HowtoClaim/icons (4).svg";
import icon4 from "../../../assets/images/WinaFree$300/HowtoClaim/icons (2).svg";


// Data for the steps
export const howToClaimData = [
  {
    number: "01",
    title: "Enter Your Email",
    description: "Sign up to join the selection pool.",
    icon: icon1,
  },
  {
    number: "02",
    title: "Selection",
    description: "5 winners will be chosen and notified via email.",
    icon: icon2,
  },
  {
    number: "03",
    title: "Redemption",
    description: "Winners will receive a digital voucher 15 days before our official launch.",
    icon: icon3,
  },
  {
    number: "04",
    title: "Booking",
    description: "Use your voucher to schedule your priority scan once our calendar opens.",
    icon: icon4,
  },
];

function HowToClaim({ 
  stepsData = howToClaimData, 
  heading = "How to Claim Your",
  headingHighlight = "Free Assessment",
  buttonText = "Claim My Free DEXA Scan"
}) {
  return (
    <section className="bg-[#F9FAFB] flex gap-10 md:gap-20 items-center justify-center py-20 w-full">
      <div className="max-w-[1280px] w-full mx-auto px-4 md:px-8 flex items-center flex-col md:flex-row gap-10 md:gap-20">
        {/* Left Side - Heading and CTA */}
        <div className="flex flex-col gap-6 flex-1 min-w-0">
          <div className="flex flex-col gap-4 max-w-[500px]">
            <h2 className="font-[Oswald] text-[36px] md:text-[48px] font-bold leading-[44px] md:leading-[56px] text-[#040A16] uppercase">
              {heading}{" "}
              <span className="text-[#2463D8]">{headingHighlight}</span>
            </h2>
          </div>
          <button className="btn-primary w-full md:w-auto max-w-[258px]">
            {buttonText}
          </button>
        </div>

        {/* Right Side - Steps Timeline */}
        <div className="flex gap-6 !items-center flex-1 min-w-0">
          {/* Vertical Line with Numbers */}
          <div className="flex flex-col items-center justify-center h-full relative shrink-0">
            {/* Number Circles with Connecting Line */}
            <div className="relative flex flex-col items-center">
              {stepsData.map((step, index) => {
                const isLast = index === stepsData.length - 1;
                return (
                  <React.Fragment key={index}>
                    {/* Number Circle */}
                    <div className="relative z-10 bg-[#2463D8] rounded-full size-10 flex items-center justify-center shrink-0">
                      <span className="font-[Manrope] text-base font-bold leading-6 text-white">
                        {step.number}
                      </span>
                    </div>
                    {/* Connecting Line (except after last item) */}
                    {!isLast && (
                      <div className="h-[84px] w-0.5 border-l-2 border-dashed border-[#2463D8] opacity-30 my-2"></div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Steps Content */}
          <div className="flex flex-col gap-4 flex-1 min-w-0">
            {stepsData.map((step, index) => {
              return (
                <div
                  key={index}
                  className="bg-[#fff] rounded-2xl px-4 py-6 flex gap-5 items-start"
                >
                  {/* Icon */}
                  <div className="bg-[#E9EFFB] rounded-full size-16 flex items-center justify-center p-2 shrink-0">
                    <img src={step.icon} alt="" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-1 flex-1 min-w-0">
                    <h3 className="font-[Oswald] text-[20px] font-bold md:text-[24px] leading-[32px] md:leading-[32px] text-[#030712] uppercase">
                      {step.title}
                    </h3>
                    <p className="font-[Manrope] text-[14px] md:text-[16px] font-normal leading-[22px] md:leading-[24px] text-[#1F2937]">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowToClaim;

import React from "react";

function WhatWillHappenInYourScan() {
  const steps = [
    {
      title: "10-Minute Intake",
      description: "We collect your health history, lifestyle information, and goals.",
      isHighlighted: true,
    },
    {
      title: "15-Minute DEXA Scan",
      description: null,
      isHighlighted: false,
    },
    {
      title: "35-Minute Assessment Review",
      description: null,
      isHighlighted: false,
    },
  ];

  const scanImage = "https://www.figma.com/api/mcp/asset/84a7076d-8127-4dba-8ebe-f3194cbb5255";

  return (
    <section className="w-full bg-[#f9fafb] py-16 md:py-20">
      <div className="max-w-[1280px] w-full mx-auto px-4 md:px-8">
        <div className="flex flex-col gap-12">
          {/* Heading with Description */}
          <div className="flex flex-col gap-4 items-center text-center max-w-[800px] mx-auto">
            <h2 className="font-display text-[36px] md:text-[48px] font-bold leading-[44px] md:leading-[56px] text-[#040A16] uppercase">
              What Will Happen in{" "}
              <span className="text-[#2463D8]">Your Scan</span>
            </h2>
            <p className="font-sans text-[16px] md:text-[18px] font-normal leading-[24px] md:leading-[26px] text-[#030712]">
              Your Prime Clinics DEXA experience is simple, precise, and informative:
            </p>
          </div>

          {/* Main Content: Steps on Left, Image on Right */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">
            {/* Left Side - Process Steps */}
            <div className="flex flex-col gap-6 flex-1 min-w-0 w-full lg:w-auto">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col gap-6 w-full">
                  {/* Title and Description */}
                  <div className="flex flex-col gap-3">
                    <h3
                      className={`font-display text-[20px] md:text-[24px] font-bold leading-[28px] md:leading-[32px] uppercase ${
                        step.isHighlighted ? "text-[#2463D8]" : "text-[#030712]"
                      }`}
                    >
                      {step.title}
                    </h3>
                    {step.description && (
                      <p className="font-sans text-[14px] md:text-[16px] font-normal leading-[20px] md:leading-[24px] text-[#1F2937]">
                        {step.description}
                      </p>
                    )}
                  </div>

                  {/* Divider Line (except after last step) */}
                  {index < steps.length - 1 && (
                    <div className="w-full h-px border-t border-[#D1D5DB]"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side - Image Container */}
            <div className="relative w-full lg:w-[600px] h-[300px] md:h-[400px] rounded-lg overflow-hidden shrink-0">
              <img
                src={scanImage}
                alt="DEXA Scan Process"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWillHappenInYourScan;

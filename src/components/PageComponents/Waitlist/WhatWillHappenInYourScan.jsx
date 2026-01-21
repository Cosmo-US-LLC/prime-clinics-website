import React, { useState } from "react";
import ScanImage from "@/assets/images/waitlist/what_will_happen/what_will_happen.webp";

function WhatWillHappenInYourScan() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "10-Minute Intake",
      description: "We collect your health history, lifestyle information, and goals.",
      image: ScanImage,
    },
    {
      title: "15-Minute DEXA Scan",
      description: "Our advanced DEXA scanner provides precise body composition analysis.",
      image: ScanImage,
    },
    {
      title: "35-Minute Assessment Review",
      description: "We review your results and create a personalized optimization plan.",
      image: ScanImage,
    },
  ];

  return (
    <section className="w-full bg-[#f9fafb] py-16 md:py-20">
      <div className="max-w-[1280px] w-full mx-auto px-4 md:px-8">
        <div className="flex flex-col gap-12">
          {/* Heading with Description */}
          <div className="flex flex-col gap-4 items-center text-center max-w-[800px] mx-auto">
            <h2 className="font-display text-[32px] md:text-[48px] font-bold leading-[40px] md:leading-[56px] text-[#040A16] uppercase">
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
              {steps.map((step, index) => {
                const isActive = activeStep === index;
                return (
                  <div
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className="flex flex-col gap-6 w-full cursor-pointer transition-all hover:opacity-80"
                  >
                    {/* Title and Description */}
                    <div className="flex flex-col gap-3">
                      <h3
                        className={`font-display text-[20px] md:text-[24px] font-bold leading-[28px] md:leading-[32px] uppercase transition-colors ${
                          isActive ? "text-[#2463D8]" : "text-[#030712]"
                        }`}
                      >
                        {step.title}
                      </h3>
                      {isActive && step.description && (
                        <p className="font-sans text-[14px] md:text-[16px] font-normal leading-[20px] md:leading-[24px] text-[#1F2937] animate-in fade-in duration-300">
                          {step.description}
                        </p>
                      )}
                    </div>

                    {/* Divider Line (except after last step) */}
                    {index < steps.length - 1 && (
                      <div className="w-full h-px border-t border-[#D1D5DB]"></div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Side - Image Container */}
            <div className="relative w-full lg:w-[600px] h-[300px] md:h-[400px] rounded-lg overflow-hidden shrink-0">
              <img
                src={steps[activeStep].image}
                alt={steps[activeStep].title}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
                key={activeStep}
              />
              {/* Description overlay (optional - shown below image instead) */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWillHappenInYourScan;

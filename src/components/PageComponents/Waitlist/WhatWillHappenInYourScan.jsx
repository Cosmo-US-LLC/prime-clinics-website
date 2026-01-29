import React, { useState } from "react";
import ScanImage from "@/assets/images/waitlist/what_will_happen/what_will_happen.webp";
import min_15 from "@/assets/images/waitlist/what_will_happen/15_min.webp";
import min_35 from "@/assets/images/waitlist/what_will_happen/35_min.webp";

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
      description: "Lie comfortably as our advanced scanner measures your fat, muscle, and bone composition with precision.",
      image: min_15,
    },
    {
      title: "35-Minute Assessment Review",
      description: "Meet with our specialists to go over your results, understand your numbers, and receive actionable recommendations for improving your health, strength, and longevity.",
      image: min_35,
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
        {/* CTA Section */}
        <div className="flex flex-col gap-3.5 items-start justify-start -mt-[90px]">
            <button className="btn-primary">
                Enter to Win a Free Scan
            </button>
            <p className="font-sans text-sm font-normal leading-5 text-[#030712]">
                <span className="font-extrabold">Only</span>{" "}
                <span className="font-extrabold">50</span>{" "}
                <span className="font-normal">spots available</span>
            </p>
        </div>
    </div>
    </section>
  );8
}

export default WhatWillHappenInYourScan;

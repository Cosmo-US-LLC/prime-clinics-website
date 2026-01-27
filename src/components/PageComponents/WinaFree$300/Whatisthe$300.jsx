
import React from "react";
import what_icon1 from "@/assets/images/WinaFree$300/Whatisthe$300/what_icons (4).svg";
import what_icon2 from "@/assets/images/WinaFree$300/Whatisthe$300/what_icons (3).svg";
import what_icon3 from "@/assets/images/WinaFree$300/Whatisthe$300/what_icons (2).svg";
import what_icon4 from "@/assets/images/WinaFree$300/Whatisthe$300/what_icons (1).svg";

function Whatisthe$300() {
  const features = [
    {
      icon: what_icon1,
      title: "10-Minute Intake",
      description: "Meet our physician to review your health history, current fitness, and lifestyle to tailor the assessment to your goals.",
      bullets: null,
    },
    {
      icon: what_icon2,
      title: "15-Minute DEXA Scan",
      description: "Gold-standard body composition analysis measuring:",
      bullets: [
        "Lean muscle mass",
        "Body fat percentage",
        "Bone density",
      ],
    },
    {
      icon: what_icon3,
      title: "60-Minute Physical Longevity Assessment",
      description: "A comprehensive evaluation of your strength, mobility, and endurance, including:",
      bullets: [
        "VO₂ Max (cardiovascular endurance)",
        "Grip strength and muscle endurance",
        "Lower body strength",
        "Balance and stability",
        "Core strength",
        "Mobility and flexibility",
        "Functional movement patterns",
      ],
    },
     {
      icon: what_icon4,
      title: "35-Minute Assessment Review",
      description: "Review your results with a physician and receive a personalized roadmap for improving performance, strength, and overall longevity.",
      bullets: null,
    },
  ];

  return (
    <section className="w-full bg-[#F9FAFB] py-16 md:py-20">
      <div className="max-w-[1280px] w-full mx-auto px-4 md:px-8">
        <div className="flex flex-col gap-8 md:gap-10">
          {/* Heading with Description */}
          <div className="flex flex-col gap-4 items-center text-center max-w-[900px] mx-auto">
            <h2 className="font-[Oswald] text-[32px] md:text-[48px] font-bold leading-[40px] md:leading-[56px] text-[#040A16] uppercase">
              <span className="text-[#2463D8]"> What is the $300 DEXA </span>{" "}
            + Performance and Longevity Assessment?
            </h2>
            <p className="font-[Manrope] text-[16px] md:text-[18px] font-normal leading-[24px] md:leading-[26px] text-[#030712] max-w-[900px]">
             This 2-hour physician-led session gives you actionable insights into your body, strength, biomarker, and overall longevity. It provides a clear roadmap for improving performance, health, and vitality without taking up your whole day.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#fff] flex flex-col gap-12 items-start p-6 rounded-lg"
              >
                {/* Icon Container */}
                <div className="">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className=" object-contain"
                  />
                </div>

                {/* Title and Description */}
                <div className="flex flex-col gap-3 items-start text-start w-full">
                  <h3 className="font-[Oswald] text-left text-[20px] md:text-[24px] font-bold leading-[28px] md:leading-[32px] text-[#030712] uppercase">
                    {feature.title}
                  </h3>
                  <div className="font-[Manrope] text-left text-[14px] md:text-[16px] font-normal leading-[20px] md:leading-[24px] text-[#1F2937]">
                    <p>{feature.description}</p>
                    {feature.bullets && (
                      <ul className="mt-3 list-disc list-inside text-starts space-y-1">
                        {feature.bullets.map((bullet, idx) => (
                          <li key={idx}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center gap-4">
              <button className="btn-primary w-full md:w-auto whitespace-nowrap py-5 px-8 md:py-4 md:px-6">
              Claim My Assessment Spot
            </button>
            <p className="font-[Manrope] tetx-center font-[400] text-[14px] leading-[142.857%]">Limited to <span className="font-[600]">5 winners</span></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Whatisthe$300;

import React from "react";

function KnowingYourNumbers() {
  const features = [
    {
      icon: "https://www.figma.com/api/mcp/asset/c74848c5-14f0-4ddc-8d52-2d91be85331e",
      title: "Stop Guessing",
      description: "Know exactly how much muscle you need to gain and how much fat you need to lose.",
    },
    {
      icon: "https://www.figma.com/api/mcp/asset/f690fdc8-00de-473c-a275-c077aee5c836",
      title: "Track Real Progress",
      description: "Measure improvements in body composition, hormones, and performance.",
    },
    {
      icon: "https://www.figma.com/api/mcp/asset/323a13d0-10a4-4868-a420-6245682c3541",
      title: "Identify Health Risks",
      description: "Detect visceral fat, bone health issues, and other critical factors that scales or mirrors can't reveal.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-[1280px] w-full mx-auto px-4 md:px-8">
        <div className="flex flex-col gap-12">
          {/* Heading with Description */}
          <div className="flex flex-col gap-4 items-center text-center max-w-[800px] mx-auto">
            <h2 className="font-display text-[36px] md:text-[48px] font-bold leading-[44px] md:leading-[56px] text-[#040A16] uppercase">
              <span className="text-[#2463D8]">Knowing Your Numbers</span>{" "}
              Is{" "}
              the First Step to Changing Them
            </h2>
            <p className="font-sans text-[16px] md:text-[18px] font-normal leading-[24px] md:leading-[26px] text-[#030712] max-w-[664px]">
              A DEXA scan at Prime Clinics provides the baseline for real transformation:
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#f9fafb] flex flex-col gap-12 items-center p-6 rounded-lg"
              >
                {/* Icon Container */}
                <div className="bg-[#2463D8] flex items-center justify-center p-2 rounded-full w-16 h-16 shrink-0">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-[42px] h-[42px] object-contain"
                  />
                </div>

                {/* Title and Description */}
                <div className="flex flex-col gap-3 items-center text-center w-full">
                  <h3 className="font-display text-[20px] md:text-[24px] font-bold leading-[28px] md:leading-[32px] text-[#030712] uppercase">
                    {feature.title}
                  </h3>
                  <p className="font-sans text-[14px] md:text-[16px] font-normal leading-[20px] md:leading-[24px] text-[#1F2937]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default KnowingYourNumbers;

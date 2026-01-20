import React from "react";

function PrimeExperience() {
  const cards = [
    {
      title: "Real\nData",
      description: "Advanced diagnostics identify exactly what your body needs, from hormones to biomarkers.",
      image: "https://www.figma.com/api/mcp/asset/7a4144a0-9a0c-46b6-a72f-af5b810a52bc"
    },
    {
      title: "Track Your\nProgress",
      description: "Monitor your health, performance, and recovery through our integrated app.",
      image: "https://www.figma.com/api/mcp/asset/7a4144a0-9a0c-46b6-a72f-af5b810a52bc"
    },
    {
      title: "Integrative Therapy Pathways",
      description: "Evidence-based medical treatments, lifestyle strategies, and advanced technologies work together in synergy to target root causes, accelerate results, and optimize your body and mind.",
      image: "https://www.figma.com/api/mcp/asset/7a4144a0-9a0c-46b6-a72f-af5b810a52bc"
    },
    {
      title: "Total\nDiscretion",
      description: "Confidential consultations with VIP privacy options, ensuring your experience is completely private.",
      image: "https://www.figma.com/api/mcp/asset/7a4144a0-9a0c-46b6-a72f-af5b810a52bc"
    }
  ];

  return (
    <section className="w-full bg-[#f9fafb] py-16 md:py-20">
      <div className="max-w-[1280px] w-full mx-auto px-4 md:px-8">
        <div className="flex flex-col gap-12">
          {/* Heading with Description */}
          <div className="flex flex-col gap-4 items-center text-center max-w-[800px] mx-auto">
            <h2 className="font-display text-[36px] md:text-[48px] font-bold leading-[44px] md:leading-[56px] text-[#040A16] uppercase">
              The{" "}
              <span className="text-[#2463D8]">Prime Experience</span>
            </h2>
            <p className="font-sans text-[16px] md:text-[18px] font-normal leading-[24px] md:leading-[26px] text-[#030712]">
              Prime Clinics empowers you to boost performance, strength, vitality, and confidence while optimizing your body and mind. We combine data-driven insights with integrative therapy pathways for real results.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {cards.map((card, index) => (
              <div key={index} className="flex flex-col gap-4">
                {/* Image Container */}
                <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
                  <img 
                    src={card.image} 
                    alt={card.title.replace(/\n/g, " ")} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
                </div>

                {/* Title and Description */}
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-[20px] md:text-[24px] font-bold leading-[28px] md:leading-[32px] text-[#1F2937] uppercase whitespace-pre-line">
                    {card.title}
                  </h3>
                  <p className="font-sans text-[14px] md:text-[16px] font-normal leading-[20px] md:leading-[24px] text-[#1F2937]">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="flex flex-col gap-3.5 items-center justify-center">
            <button className="btn-primary">
              Claim My Free DEXA Scan
            </button>
            <p className="font-sans text-sm font-normal leading-5 text-[#030712]">
              <span className="font-extrabold">Only</span>{" "}
              <span className="font-extrabold">50</span>{" "}
              <span className="font-normal">spots available</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrimeExperience;

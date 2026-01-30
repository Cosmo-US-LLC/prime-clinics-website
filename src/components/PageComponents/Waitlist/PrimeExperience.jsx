import React from "react";
import realData from "../../../assets/images/waitlist/Prime_Experience/real_data.webp";
import trackyourprogress from "../../../assets/images/waitlist/Prime_Experience/track_your_progress.webp";
import therapypathways from "../../../assets/images/waitlist/Prime_Experience/therapy_pathways.webp";
import totaldiscretion from "../../../assets/images/waitlist/Prime_Experience/total_discretion.webp";

function PrimeExperience() {
  const cards = [
    {
      title: "Real\nData",
      description: "Advanced diagnostics identify exactly what your body needs, from hormones to biomarkers.",
      image: realData
    },
    {
      title: "Track Your\nProgress",
      description: "Monitor your health, performance, and recovery through our integrated app.",
      image: trackyourprogress
    },
    {
      title: "Integrative Therapy Pathways",
      description: "Evidence-based medical treatments, lifestyle strategies, and advanced technologies work together in synergy to target root causes, accelerate results, and optimize your body and mind.",
      image: therapypathways
    },
    {
      title: "Total\nDiscretion",
      description: "Confidential consultations with VIP privacy options, ensuring your experience is completely private.",
      image: totaldiscretion
    }
  ];

  return (
    <section className="w-full bg-[#f9fafb] py-16 md:py-20">
      <div className="max-w-[1280px] w-full mx-auto px-4 md:px-8">
        <div className="flex flex-col gap-12">
          {/* Heading with Description */}
          <div className="w-full flex flex-row">
            <div className="w-full">
               <div className="flex flex-col gap-4 md:items-start items-center md:justify-start justify-center mx-auto">
                  <h2 className="font-display text-[36px] md:text-[48px] font-bold
                   leading-[44px] md:leading-[56px] text-[#040A16] uppercase max-md:text-center">
                    The{" "}
                    <span className="text-[#2463D8]">Prime Experience</span>
                  </h2>
                  <p className="font-sans text-[16px] md:text-[18px]
                   font-normal leading-[24px] md:leading-[26px] max-md:text-center max-w-[800px] text-[#030712]">
                    Prime Clinics empowers you to boost performance, strength, vitality, and confidence while optimizing your body and mind. We combine data-driven insights with integrative therapy pathways for real results.
                  </p>
                </div>
            </div>
            <div className="w-[300px] pt-[30px] max-md:hidden">
              {/* CTA Section */}
              <div className="flex flex-col gap-3.5 items-end justify-end">
                <button className="btn-primary">
                  Enter to Win a Free Scan
                </button>
              </div>
              <div className="flex flex-col gap-3.5 items-center justify-center pt-[15px]">
                <p className="font-sans text-sm font-normal leading-5 text-[#030712]">
                  <span className="font-extrabold">Only</span>{" "}
                  <span className="font-extrabold">50</span>{" "}
                  <span className="font-normal">spots available</span>
                </p>
              </div>
              
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {cards.map((card, index) => (
              <div key={index} className="flex flex-col gap-4">
                {/* Image Container */}
                <div className="relative h-[248px] md:h-[400px] rounded-2xl overflow-hidden">
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
                  <h3 className="font-display text-[20px] md:text-[24px] 
                  font-bold leading-[28px] md:leading-[32px] text-[#1F2937] 
                  uppercase max-md:text-center">
                    <span className="md:hidden whitespace-normal">
                      {card.title.replace(/\n/g, " ")}
                    </span>
                    <span className="hidden md:inline whitespace-pre-line">
                      {card.title}
                    </span>
                  </h3>
                  <p className="font-sans text-[14px] md:text-[16px] font-normal
                   leading-[20px] md:leading-[24px] text-[#1F2937] max-md:text-center">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-[300px] md:hidden flex flex-col 
          items-center justify-center mx-auto">
              {/* CTA Section */}
              <div className="flex flex-col gap-3.5 items-center justify-center">
                <button className="btn-primary">
                  Enter to Win a Free Scan
                </button>
              </div>
              <div className="flex flex-col gap-3.5 items-center justify-center pt-[15px]">
                <p className="font-sans text-sm font-normal leading-5 text-[#030712]">
                  <span className="font-extrabold">Only</span>{" "}
                  <span className="font-extrabold">50</span>{" "}
                  <span className="font-normal">spots available</span>
                </p>
              </div>
              
            </div>

        </div>
      </div>
    </section>
  );
}

export default PrimeExperience;

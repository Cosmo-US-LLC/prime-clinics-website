import React from "react";
import Lina from "@/assets/images/MeetTheTeam/Lina.webp"
import James from "@/assets/images/MeetTheTeam/James.webp"
import Sarah from "@/assets/images/MeetTheTeam/Sarah.webp"
import Marcus from "@/assets/images/MeetTheTeam/Marcus.webp"
import Robert from "@/assets/images/MeetTheTeam/Robert.webp"
import Elena from "@/assets/images/MeetTheTeam/ELENA.webp"

const cards = [
  {
    name: "Lina Heath",
    designation: "Founder & Clinic Director",
    description: "Visionary leader driving the standard of proactive patient care. Her unwavering commitment to pioneering advanced regenerative medicine has established a new clinical benchmark for long term human performance.",
    image: Lina,
  },
  {
    name: "Dr. James Carter",
    designation: "Chief Medical Officer",
    description: "Board certified physician specializing in bio identical hormone replacement, advanced metabolic therapies, and precise biological optimization protocols to ensure peak systemic function.",
    image: James,
  },
  {
    name: "Dr. Sarah Jenkins",
    designation: "Head of Regenerative Aesthetics",
    description: "Leading clinical expert in structural volume replacement, cellular renewal, and advanced non surgical aesthetic refinement designed to completely preserve masculine architecture.",
    image: Sarah,
  },
  {
    name: "Marcus Thorne",
    designation: "Lead Performance Engineer",
    description: "Highly sought after specialist in biomechanical auditing, clinical nutrition, and advanced strength building technologies designed to safely accelerate recovery and hypertrophy.",
    image: Marcus,
  },
  {
    name: "Dr. Robert Chen",
    designation: "Director of Intimate Health",
    description: "Renowned authority in vascular rejuvenation, pelvic floor strengthening, and functional restorative protocols designed to safely eliminate age related intimate dysfunction entirely.",
    image: Robert,
  },
  {
    name: "Elena Rostova",
    designation: "Evolve Clinical Psychologist",
    description: "Dedicated specialist focusing strictly on cognitive enhancement, stress resilience, and evidence based behavioral optimization strategies for high performing executives and athletes.",
    image: Elena,
  },
];

const tags = [
"Board Certified",
"Performance Focused",
"Data Driven",
];

function MeetHeroSection() {
  return (
    <section className="w-full bg-[#ffff] py-16 md:py-20">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10 px-4 md:px-8 items-center">
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="flex flex-col gap-4 max-w-[780px] mt-6">
            <h2 className="heading-2 text-[#040A16] uppercase m-0">
              The Prime Standard
            </h2>
            <p className="font-sans text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] text-[#030712] m-0">
              At Prime Clinics, we believe that exceptional care requires exceptional people. Our team is not just a collection of practitioners; we are a cohesive unit of specialists who collaborate to design your optimization roadmap. From endocrinology to biomechanics, every aspect of your physiology is managed by an expert in that field.
            </p>
          </div>
            <div className="flex flex-wrap gap-3 justify-center mt-3">
                {tags.map((tag, index) => (
                    <span
                    key={index}
                    className="px-4 py-2 rounded-lg bg-[#f0f0f0]  font-sans text-[14px] leading-[20px]"
                    >
                    {tag}
                    </span>
                ))}
            </div>
        </div>

        <div className="grid w-full gap-4 md:gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.name}
              className="flex flex-col gap-6 rounded-[8px] bg-white px-4 pb-6 pt-4 shadow-[0_0_12px_rgba(0,0,0,0.05)]"
            >
              <div className="relative h-[240px] md:h-[260px] rounded-[8px] overflow-hidden">
                <img
                  src={card.image}
                  alt={card.name}
                  className="h-full w-full object-cover transition-transform duration-300 ease-out hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center items-center text-center gap-2">
                <h3 className="heading-3 text-black uppercase m-0">
                  {card.name}
                </h3>
                <p className="font-sans text-[14px] md:text-[16px] font-bold leading-[20px] md:leading-[28px] text-[#2463D8] mb-2">
                    {card.designation}
                </p>
                <p className="font-sans text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] text-[#020120] m-0">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MeetHeroSection;

import React from "react";
import ClinicalImg from "@/assets/images/AboutUs/CLINICAL_PRECISION.webp"
import EliteImg from "@/assets/images/AboutUs/ELITE_STANDARDS.webp"
import MeasurableImg from "@/assets/images/AboutUs/MEASURABLE-OPTIMIZATION.webp"


const cards = [
  {
    name: "CLINICAL PRECISION",
    description: "We rely entirely on medical grade diagnostics and evidence based protocols. Zero generic treatments, only exact biological blueprints.",
    image: ClinicalImg,
  },
  {
    name: "ELITE STANDARDS",
    description: "An exclusive, modern clinical environment engineered specifically for high performers who demand absolute privacy and prestige.",
    image: EliteImg,
  },
  {
    name: "MEASURABLE OPTIMIZATION",
    description: "We rigorously track your data to ensure objective progress. Experience rapid, undeniable shifts in your physical and cognitive baseline.",
    image: MeasurableImg,
  }
];


function OurCommitment() {
  return (
    <section className="w-full bg-[#F9FAFB] py-16 md:py-20">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10 px-4 md:px-8 items-center">
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="flex flex-col gap-4 max-w-[780px] mt-6">
            <h2 className="heading-2 text-[#040A16] uppercase m-0">
              Our Commitment to You
            </h2>
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
                <p className="font-sans text-[14px] md:text-[16px] leading-[24px] md:leading-[26px] text-[#020120] m-0">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
        <button type="button" className="inline-flex btn-primary w-fit">
            Request VIP Access
        </button>
      </div>
    </section>
  );
}

export default OurCommitment;

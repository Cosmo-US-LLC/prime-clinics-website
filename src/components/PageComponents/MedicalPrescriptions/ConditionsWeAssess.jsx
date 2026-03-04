import React from "react";
import ConditionsWe1 from "@/assets/images/medical_prescriptions/conditions_we_1.webp";
import ConditionsWe2 from "@/assets/images/medical_prescriptions/conditions_we_2.webp";
import ConditionsWe3 from "@/assets/images/medical_prescriptions/conditions_we_3.webp";
import ConditionsWe4 from "@/assets/images/medical_prescriptions/conditions_we_4.webp";

const cards = [
  {
    name: "Erectile Performance",
    description: "Clinically reviewed treatments for improved sexual function.",
    image: ConditionsWe1,
  },
  {
    name: "Premature Ejaculation",
    description: "Professional prescription options where appropriate.",
    image: ConditionsWe2,
  },
  {
    name: `Low Sexual Desire`,
    description:
      "Medical review for hormonal and psychological factors affecting libido.",
    image: ConditionsWe3,
  },
  {
    name: "Other Male Sexual Health Concerns",
    description:
      "Comprehensive assessment for various sexual health conditions.",
    image: ConditionsWe4,
  },
];

function ConditionsWeAssess() {
  return (
    <section className="w-full bg-[#F9FAFB] md:py-16 py-12">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10 px-4 md:px-8 items-center">
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="flex flex-col gap-4 max-w-[780px] mt-6">
            <h2 className="heading-2 text-[#040A16] uppercase m-0">
              Our Commitment to You
            </h2>
          </div>
        </div>

        <div className="grid w-full gap-4 md:gap-4 md:grid-cols-4">
          {cards.map((card) => (
            <article
              key={card.name}
              className="flex flex-col gap-6 rounded-[8px] bg-white px-3 pb-5 pt-3 shadow-[0_0_12px_rgba(0,0,0,0.05)]"
            >
              <div className="relative h-[240px] md:h-[260px] rounded-[8px] overflow-hidden">
                <img
                  src={card.image}
                  alt={card.name}
                  className="h-full w-full object-cover transition-transform duration-300 ease-out hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center items-center text-center gap-2">
                <h3 className="heading-3 text-black max-w-[210px] md:h-[80px] h-[50px] flex items-center justify-center uppercase m-0">
                  {card.name === "Low Sexual Desire" ? (
                    <>
                      Low Sexual
                      <br className="hidden md:block" />
                      Desire
                    </>
                  ) : (
                    card.name
                  )}
                </h3>
                <p className="font-sans text-[14px] md:text-[16px] leading-[24px] md:leading-[24px] text-[#020120] m-0">
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

export default ConditionsWeAssess;

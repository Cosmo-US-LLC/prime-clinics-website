import React from "react";
import FunctioImg from "@/assets/images/AboutUs/Function.webp"
import FormImg from "@/assets/images/AboutUs/Form.webp"
import PrecisionIcon from "@/assets/images/AboutUs/microscopeIcon.svg"
import CellularIcon from "@/assets/images/AboutUs/moleculeIcon.svg"
import EndocrineIcon from "@/assets/images/AboutUs/thyroidIcon.svg"
import MetabolicIcon from "@/assets/images/AboutUs/metabolismIcon.svg"
import StructuralIcon from "@/assets/images/AboutUs/puzzle-piecesIcon.svg"
import AcceleratedIcon from "@/assets/images/AboutUs/weightIcon.svg"
import JointIcon from "@/assets/images/AboutUs/jointsIcon.svg"
import AestheticIcon from "@/assets/images/AboutUs/measuring-tapeIcon.svg"

const cards = [
  {
    label: "Function",
    title: "Internal Engineering",
    description: "Your external performance depends entirely on internal efficiency. We systematically rebuild your cellular health, balance your hormones, and dramatically increase your systemic energy output.",
    image: FunctioImg,
    features: [
       {
            label: "Precision Diagnostics",
            icon: PrecisionIcon,
        },
        {
            label: "Cellular Regeneration",
            icon: CellularIcon ,
        },
        {
            label: "Endocrine Balance",
            icon: EndocrineIcon ,
        },
        {
            label: "Metabolic Control",
            icon: MetabolicIcon ,
        },
    ],
  },
  {
    label: "Form",
    title: "Physical Presence",
    description: "Structural resilience dictates how you move through the world. We focus entirely on repairing biomechanical weaknesses, actively building dense muscle, and preserving masculine aesthetics.",
    image: FormImg,
    features: [
         {
            label: "Structural Integrity",
            icon: StructuralIcon ,
        },
        {
            label: "Accelerated Hypertrophy",
            icon: AcceleratedIcon,
        },
        {
            label: "Joint Resilience",
            icon: JointIcon,
        },
        {
            label: "Aesthetic Refinement",
            icon: AestheticIcon,
        },
      
    ],
  }
];



function OurPhilosophy() {
  return (
    <section className="w-full bg-[#ffff] py-16 md:py-20">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10 px-4 md:px-8 items-center">
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="flex flex-col gap-4 max-w-[780px] mt-6">
            <h2 className="heading-2 text-[#040A16] uppercase m-0">
              Our Philosophy
            </h2>
            <p className="font-sans text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] text-[#030712] m-0">
                At Prime Clinics, optimizing health is not a luxury. It is a foundational standard.
            </p>
          </div>
        </div>

        <div className="grid w-full gap-4 md:gap-6 md:grid-cols-2">
          {cards.map((card) => (
            <article
              key={card.name}
              className="flex flex-col gap-6 rounded-[8px] bg-white px-4 pb-6 pt-4 shadow-[0_0_12px_rgba(0,0,0,0.05)]"
            >
              <div className="relative h-[300px] md:h-[300px] rounded-[8px] overflow-hidden">
                <img
                  src={card.image}
                  alt={card.name}
                  className="h-full w-full object-cover transition-transform duration-300 ease-out hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center items-start text-left gap-3 md:gap-4">
                <h3 className="heading-3 !text-[24px] md:!text-[32px] uppercase m-0">
                    <span className="text-[#2463D8]">
                        {card.label}:
                    </span>{" "}
                    <span className="text-black">
                        {card.title}
                    </span>
                </h3>
                <p className="font-sans text-[14px] md:text-[16px] leading-[24px] md:leading-[26px] text-[#040A16] m-0">
                  {card.description}
                </p>
              </div>
              <div className="mt-2 md:mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
                        {card.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <div className="text-[#030712]">
                            <img
                                src= {feature.icon}
                                alt="Icons"
                            />
                            </div>

                            <p className="font-sans text-[14px] font-semibold text-[#030712]">
                            {feature.label}
                            </p>

                        </div>
                        ))}
                    </div>
                </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurPhilosophy;

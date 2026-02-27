import React from "react";
import vipDiscretionCard1 from "@/assets/images/vip_access/vip_discretion/vip_discretion_card1.webp";
import vipDiscretionCard2 from "@/assets/images/vip_access/vip_discretion/vip_discretion_card2.webp";
import vipDiscretionCard3 from "@/assets/images/vip_access/vip_discretion/vip_discretion_card3.webp";

const cards = [
  {
    title: "Secure Digital Access",
    description: "End-to-end protection for all records and communications.",
    image: vipDiscretionCard1,
  },
  {
    title: "Exclusive Clinical Access",
    description:
      "Private sessions utilized to maintain complete individual confidentiality.",
    image: vipDiscretionCard2,
  },
  {
    title: "Trusted Experts",
    description: "Multidisciplinary team focused on results and discretion.",
    image: vipDiscretionCard3,
  },
];

function VipDiscretionSection() {
  return (
    <section className="w-full bg-[#f9fafb] py-16 md:py-20">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10 px-4 md:px-8 items-center">
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="font-sans text-[14px] md:text-[20px] font-bold leading-[20px] md:leading-[28px] tracking-widest text-[#2463D8] uppercase m-0">
            Wellness and Vitality
          </p>
          <div className="flex flex-col gap-2 max-w-[780px]">
            <h2 className="heading-2 text-[#040A16] uppercase m-0">
              Discretion at Every Step
            </h2>
            <p className="font-sans text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] text-[#030712] m-0">
              Certain treatments require elevated privacy. Every VIP
              consultation is managed through our most secure protocols to
              ensure confidentiality.
            </p>
          </div>
        </div>

        <div className="grid w-full gap-4 md:gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="flex flex-col gap-6 rounded-[8px] bg-white px-4 pb-6 pt-4 shadow-[0_0_12px_rgba(0,0,0,0.05)]"
            >
              <div className="relative h-[240px] md:h-[260px] rounded-[8px] overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover transition-transform duration-300 ease-out hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center items-center text-center gap-2">
                <h3 className="heading-3 text-black uppercase m-0">
                  {card.title}
                </h3>
                <p className="font-sans text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] text-[#020120] m-0">
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

export default VipDiscretionSection;

import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import OfferingCard1 from "@/assets/images/home/we_offering/offering_card1.webp";
import OfferingCard2 from "@/assets/images/home/we_offering/offering_card2.webp";
import OfferingCard3 from "@/assets/images/home/we_offering/offering_card3.webp";
import OfferingCard4 from "@/assets/images/home/we_offering/offering_card4.webp";
import OfferingCard5 from "@/assets/images/home/we_offering/offering_card5.webp";
import OfferingCard6 from "@/assets/images/home/we_offering/offering_card6.webp";
import OfferingCard7 from "@/assets/images/home/we_offering/offering_card7.webp";

const SPECIALTIES = [
  {
    title: "Physical Health",
    description:
      "Maximize strength, endurance, and recovery with data-driven programs",
    image: OfferingCard1,
    href: "/services/physical-health",
  },
  {
    title: "Hormone Health",
    description: "Restore energy, build muscle, and optimize sexual health.",
    image: OfferingCard2,
    href: "/services/hormone-health",
  },
  {
    title: "Intimate Health",
    description:
      "Address age-related intimate health challenges with advanced.",
    image: OfferingCard3,
    href: "/services/intimate-health",
  },
  {
    title: "Regenerative Aesthetics",
    description: "Refine your appearance to match your performance.",
    image: OfferingCard4,
    href: "/services/regenerative-aesthetics",
  },
  {
    title: "Weight Management",
    description:
      "Take control of your body composition and metabolism with personalized.",
    image: OfferingCard5,
    href: "/services/weight-management",
  },
  {
    title: "Mental Fitness",
    description: "Enhance focus, resilience, and decision-making.",
    image: OfferingCard6,
    href: "/services/mental-fitness",
  },
  {
    title: "Joint Rehabilitation",
    description:
      "Relieve pain, restore mobility, and strengthen muscles with targeted.",
    image: OfferingCard7,
    href: "/services/joint-rehabilitation",
  },
];

function SpecialtyCard({ title, description, image, href, isFirst }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white p-2 pb-6 pt-2 shadow-[0px_5.358px_53.582px_rgba(0,0,0,0.07)] md:p-2 md:pb-6 md:pt-2">
      {/* Image frame: overflow hidden so zoom stays contained */}
      <div className="relative h-[200px] w-full shrink-0 overflow-hidden rounded-lg">
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
        />
      </div>

      <div className="mt-5 flex flex-1 flex-col gap-4 px-2">
        <div className="flex flex-col gap-2">
          <h3 className="heading-3 text-[#030712] uppercase m-0">{title}</h3>
          <p className="font-sans text-[16px] leading-[24px] text-[#0b0f19] m-0">
            {description}
          </p>
        </div>

        <div className="mt-auto">
          <Link
            to={href}
            className={`inline-flex items-center gap-2 rounded-[8px] hover:bg-[#2463D8] hover:text-white text-[#2463D8] border border-[#2463D8] px-6 py-3 font-sans text-[14px] font-semibold leading-5 transition-colors `}
          >
            Learn More
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </article>
  );
}

function HomeOurSpecialties() {
  return (
    <section
      className="w-full bg-[#F9FAFB] py-12 md:py-16"
      aria-label="Our specialties"
    >
      <div className="mx-auto flex max-w-[1280px] px-4 md:px-4 flex-col items-center gap-10 md:gap-10">
        {/* Heading */}
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="font-sans text-[14px] md:text-[20px] font-bold leading-[20px] md:leading-[28px] tracking-widest text-[#2463D8] uppercase m-0">
            Our Specialties
          </p>
          <div className="flex flex-col gap-2 max-w-[780px]">
            <h2 className="heading-2 text-[#040A16] uppercase m-0">
              What We&apos;re Offering
            </h2>
            <p className="font-sans text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] text-[#030712] m-0">
              Personalized programs that optimize your health, performance, and
              confidence.
            </p>
          </div>
        </div>

        {/* Cards: flex wrap (4 up on desktop, 2 on tablet, 1 on mobile) */}
        <div className="flex w-full flex-wrap justify-center gap-3 md:gap-4">
          {SPECIALTIES.map((item) => (
            <div
              key={item.title}
              className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(25%-0.75rem)]"
            >
              <SpecialtyCard
                title={item.title}
                description={item.description}
                image={item.image}
                href={item.href}
                isFirst={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeOurSpecialties;

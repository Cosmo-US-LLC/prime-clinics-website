import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const SPECIALTIES = [
  {
    title: "Physical Health",
    description:
      "Maximize strength, endurance, and recovery with data-driven programs",
    image:
      "https://www.figma.com/api/mcp/asset/19a5bce3-e015-4b72-a1e1-bf0b39117dc4",
    href: "/services/physical-health",
  },
  {
    title: "Hormone Health",
    description:
      "Restore energy, build muscle, and optimize sexual health.",
    image:
      "https://www.figma.com/api/mcp/asset/6a1a7b26-d93f-46ac-b89e-efd75fd0f163",
    href: "/services/hormone-health",
  },
  {
    title: "Intimate Health",
    description:
      "Address age-related intimate health challenges with advanced.",
    image:
      "https://www.figma.com/api/mcp/asset/e9e116ac-eecd-4199-ba32-ec0d15b5250a",
    href: "/services/intimate-health",
  },
  {
    title: "Regenerative Aesthetics",
    description: "Refine your appearance to match your performance.",
    image:
      "https://www.figma.com/api/mcp/asset/fcfd09b4-64e8-4859-af58-adc7855faf44",
    href: "/services/regenerative-aesthetics",
  },
  {
    title: "Weight Management",
    description:
      "Take control of your body composition and metabolism with personalized.",
    image:
      "https://www.figma.com/api/mcp/asset/dcfd2f40-4be2-4caf-931f-c669dce88f44",
    href: "/services/weight-management",
  },
  {
    title: "Mental Fitness",
    description: "Enhance focus, resilience, and decision-making.",
    image:
      "https://www.figma.com/api/mcp/asset/d75e62c2-4ef3-42c1-bf4d-e9aa8f3bb4ba",
    href: "/services/mental-fitness",
  },
  {
    title: "Joint Rehabilitation",
    description:
      "Relieve pain, restore mobility, and strengthen muscles with targeted.",
    image:
      "https://www.figma.com/api/mcp/asset/658612b7-b943-4954-b7c8-86b85ec74455",
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
          <h3 className="font-display text-[20px] md:text-[24px] font-bold leading-[28px] md:leading-[32px] text-[#030712] uppercase m-0">
            {title}
          </h3>
          <p className="font-sans text-[16px] leading-[24px] text-[#0b0f19] m-0">
            {description}
          </p>
        </div>

        <div className="mt-auto">
          <Link
            to={href}
            className={`inline-flex items-center gap-2 rounded-lg border px-6 py-3 font-sans text-[14px] font-semibold leading-5 transition-colors ${
              isFirst
                ? "border-[#2463D8] bg-[#2463D8] text-white hover:bg-[#1a4fa8]"
                : "border-[#2463D8] text-[#2463D8] hover:bg-[#2463D8]/10"
            }`}
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
      className="w-full bg-[#F9FAFB] px-4 md:px-[60px] py-12 md:py-20"
      aria-label="Our specialties"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-10 md:gap-12">
        {/* Heading */}
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="font-sans text-[14px] md:text-[20px] font-bold leading-[20px] md:leading-[28px] tracking-widest text-[#2463D8] uppercase m-0">
            Our Specialties
          </p>
          <div className="flex flex-col gap-2 max-w-[780px]">
            <h2 className="font-display text-[32px] md:text-[48px] font-bold leading-[40px] md:leading-[56px] text-[#040A16] uppercase m-0">
              What We&apos;re Offering
            </h2>
            <p className="font-sans text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] text-[#030712] m-0">
              Personalized programs that optimize your health, performance, and
              confidence.
            </p>
          </div>
        </div>

        {/* Cards: row 1 = 4, row 2 = 3 */}
        <div className="flex w-full flex-col gap-4 md:gap-4">
          <div className="grid gap-4 md:grid-cols-4">
            {SPECIALTIES.slice(0, 4).map((item, index) => (
              <SpecialtyCard
                key={item.title}
                title={item.title}
                description={item.description}
                image={item.image}
                href={item.href}
                isFirst={index === 0}
              />
            ))}
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {SPECIALTIES.slice(4, 7).map((item) => (
              <SpecialtyCard
                key={item.title}
                title={item.title}
                description={item.description}
                image={item.image}
                href={item.href}
                isFirst={false}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeOurSpecialties;

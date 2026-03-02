import React from "react";
import {
  Activity,
  Shield,
  Zap,
  TrendingUp,
} from "lucide-react";

const BENEFIT_ICONS = {
  activity: Activity,
  shield: Shield,
  zap: Zap,
  "trending-up": TrendingUp,
};

/**
 * "Benefits of [Service]" section — row of cards with icon, title, description.
 * Matches Figma 3187:17218 layout. Same structure per service, content from config.
 * items[].icon: key of BENEFIT_ICONS (e.g. "activity", "shield", "zap", "trending-up").
 */
function ServicesBenefitsSection({ heading, items = [] }) {
  if (!items.length) return null;

  return (
    <section
      className="w-full bg-white py-12 md:py-20"
      aria-label={heading}
    >
      <div className="mx-auto flex max-w-[1280px] flex-col gap-12 px-4 md:px-8">
        <h2 className="font-display m-0 text-center text-[32px] font-bold uppercase leading-tight text-[#040A16] md:text-[48px] md:leading-[56px]">
          {heading}
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => {
            const IconComponent = BENEFIT_ICONS[item.icon] ?? Activity;
            return (
            <article
              key={index}
              className="flex flex-col gap-16 rounded-2xl bg-white p-6 shadow-[0px_5.358px_53.582px_0px_rgba(0,0,0,0.07)]"
            >
              <div className="flex flex-col gap-8">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center text-[#2463D8]">
                  <IconComponent className="h-12 w-12" aria-hidden />
                </div>
                <h3 className="font-display m-0 text-[24px] font-bold uppercase leading-10 text-[#040A16] md:text-[32px] md:leading-[40px]">
                  {item.title}
                </h3>
              </div>
              <p className="font-sans m-0 text-[16px] font-normal leading-6 text-[#040A16]">
                {item.description}
              </p>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesBenefitsSection;

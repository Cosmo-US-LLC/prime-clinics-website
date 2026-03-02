import React from "react";
import usePageMeta from "@/hooks/usePageMeta";
import ServicesHero from "@/components/PageComponents/Services/ServicesHero";
import ServicesIntroSection from "@/components/PageComponents/Services/ServicesIntroSection";
import ServicesSolutionsSection from "@/components/PageComponents/Services/ServicesSolutionsSection";
import config from "./config";

function HormoneHealth() {
  usePageMeta(config.seo.title, config.seo.description);

  return (
    <div>
      <ServicesHero
        {...config.hero}
        currentPath="/services/hormone-health"
      />
      <ServicesIntroSection {...config.intro} />
      {config.solutions && (
        <ServicesSolutionsSection
          heading={config.solutions.heading}
          cards={config.solutions.cards}
        />
      )}
    </div>
  );
}

export default HormoneHealth;

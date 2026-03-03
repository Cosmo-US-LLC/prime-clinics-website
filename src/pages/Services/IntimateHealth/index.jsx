import React from "react";
import usePageMeta from "@/hooks/usePageMeta";
import ServicesHero from "@/components/PageComponents/Services/ServicesHero";
import ServicesIntroSection from "@/components/PageComponents/Services/ServicesIntroSection";
import ServicesSolutionsSection from "@/components/PageComponents/Services/ServicesSolutionsSection";
import ServicesBenefitsSection from "@/components/PageComponents/Services/ServicesBenefitsSection";
import ServicesMembershipSection from "@/components/PageComponents/Services/ServicesMembershipSection";
import ServicesTestimonialsSection from "@/components/PageComponents/Services/ServicesTestimonialsSection";
import config from "./config";

function IntimateHealth() {
  usePageMeta(config.seo.title, config.seo.description);

  return (
    <div>
      <ServicesHero
        {...config.hero}
        currentPath="/services/intimate-health"
      />
      <ServicesIntroSection {...config.intro} />
      {config.solutions && (
        <ServicesSolutionsSection
          heading={config.solutions.heading}
          cards={config.solutions.cards}
        />
      )}
      {config.benefits && (
        <ServicesBenefitsSection
          heading={config.benefits.heading}
          items={config.benefits.items}
        />
      )}
      {config.membership && (
        <ServicesMembershipSection {...config.membership} />
      )}
      <ServicesTestimonialsSection />
    </div>
  );
}

export default IntimateHealth;

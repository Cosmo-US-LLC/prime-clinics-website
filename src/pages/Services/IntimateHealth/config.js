import desktop from "@/assets/images/services/services_health_hero/intimate_health_desktop.webp";
import mobile from "@/assets/images/services/services_health_hero/intimate_health_mobile.webp";
import solutionImg1 from "@/assets/images/home/services/service_card3.webp";
import solutionImg2 from "@/assets/images/home/services/service_card4.webp";
import solutionImg3 from "@/assets/images/home/services/service_card5.webp";

export default {
  seo: {
    title: "Intimate Health | Prime Clinics",
    description:
      "Comprehensive care for intimate wellness with discretion and medical expertise.",
  },
  hero: {
    images: { desktop, mobile },
    title: "Intimate",
    titleHighlight: "Health",
    description:
      "Comprehensive care for intimate wellness with discretion and medical expertise.",
  },
  solutions: {
    heading: "Solutions We Provide",
    cards: [
      {
        image: solutionImg1,
        title: "High-Intensity Focused Electromagnetic Therapy (HIFEM)",
        description:
          "High-Intensity Focused Electromagnetic technology induces thousands of supramaximal pelvic floor contractions in a single session. This protocol rebuilds the neuromuscular control and muscular strength required for peak functional health.",
        benefits: [
          "Restored Pelvic Control",
          "Enhanced Functional Readiness",
          "Non-Invasive Muscular Strengthening",
        ],
      },
      {
        image: solutionImg2,
        title: "Regenerative PRP Injections",
        description:
          "Utilizing Platelet-Rich Plasma (PRP) derived from your own blood to deliver concentrated growth factors directly to intimate tissues. This biological therapy stimulates cellular repair, nerve sensitivity, and tissue rejuvenation.",
        benefits: [
          "Tissue Regeneration",
          "Heightened Sensitivity",
          "Biological Neovascularization",
        ],
      },
      {
        image: solutionImg3,
        title: "Specialized Dermal Fillers",
        description:
          "Specialized hyaluronic acid fillers used to restore volume and hydration to intimate areas, improving both functional comfort and physical aesthetics.",
        benefits: [
          "Hydration Restoration",
          "Aesthetic Refinement",
          "Improved Physical Comfort",
        ],
      },
    ],
  },
  intro: {
    heading: "What is Intimate Health Restoration?",
    tagline: "Confidence is not left to chance.",
    description:
      "It is revitalized. Our membership model provides structured access to vascular diagnostics, regenerative therapies, advanced pelvic technologies, and discreet clinical guidance. With flexible credits, you can personalize your restorative pathway while maintaining complete privacy.",
    ctaLabel: "Book Your Assessment",
    ctaHref: "/free-dexa-scan",
    image: desktop,
    imageAlt: "Intimate health restoration",
  },
};

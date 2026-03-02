import desktop from "@/assets/images/services/services_health_hero/regenrative_health_desktop.webp";
import mobile from "@/assets/images/services/services_health_hero/regenrative_health_mobile.webp";
import solutionImg1 from "@/assets/images/home/services/service_card4.webp";
import solutionImg2 from "@/assets/images/home/services/service_card5.webp";
import solutionImg3 from "@/assets/images/home/services/service_card6.webp";
import solutionImg4 from "@/assets/images/home/services/service_card7.webp";

export default {
  seo: {
    title: "Regenerative Aesthetics | Prime Clinics",
    description:
      "Restore and rejuvenate with cutting-edge regenerative aesthetic treatments.",
  },
  hero: {
    images: { desktop, mobile },
    title: "Regenerative",
    titleHighlight: "Aesthetics",
    description:
      "Restore and rejuvenate with cutting-edge regenerative aesthetic treatments.",
  },
  solutions: {
    heading: "Solutions We Provide",
    cards: [
      {
        image: solutionImg1,
        title: "Dual-Action Body Contouring",
        description:
          "The first non-invasive procedure to combine radiofrequency heating for fat reduction and high-intensity focused electromagnetic energy (HIFEM) for muscle building in a single 30-minute session.",
        benefits: [
          "Simultaneous Fat Loss & Muscle Gain",
          "Core Structural Strengthening",
          "Visceral Fat Reduction",
        ],
      },
      {
        image: solutionImg2,
        title: "Emsculpt NEO & Dermal Fillers",
        description:
          "Advanced dual action body contouring designed to burn stubborn fat and build core muscle simultaneously. We pair this with strategic volume replacement to restore masculine facial architecture completely.",
        benefits: [
          "Precision Volume Replacement",
          "Structural Masculine Lift",
          "Natural Refinement",
        ],
      },
      {
        image: solutionImg3,
        title: "Hair Restoration (PRP and Exosomes)",
        description:
          "Concentrated growth factors and cellular exosomes injected deeply into the scalp to reactivate dormant follicles. This protocol stops active shedding and increases hair diameter and density at the root.",
        benefits: [
          "Follicular Reactivation",
          "Scalp Tissue Repair",
          "Increased Hair Density",
        ],
      },
      {
        image: solutionImg4,
        title: "Functional Pain Recovery Protocols",
        description:
          "Targeted clinical protocols designed to rapidly reduce tissue inflammation and manage discomfort. We focus on accelerating your natural biological healing to completely restore optimal physical function.",
        benefits: [
          "Accelerated Tissue Healing",
          "Reduced Inflammation",
          "Discomfort Management",
        ],
      },
    ],
  },
  intro: {
    heading: "What are Regenerative Aesthetics?",
    tagline: "Appearance is not static.",
    description:
      "It is systematically preserved. Our membership model provides structured access to cellular diagnostics, structural therapies, body contouring technologies, and expert aesthetic guidance. Membership credits allow you to completely customize your refinement journey.",
    ctaLabel: "Book Your Assessment",
    ctaHref: "/free-dexa-scan",
    image: desktop,
    imageAlt: "Regenerative aesthetics",
  },
};

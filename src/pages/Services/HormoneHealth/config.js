import desktop from "@/assets/images/services/services_health_hero/hormone_health_desktop.webp";
import mobile from "@/assets/images/services/services_health_hero/hormone_health_mobile.webp";
import solutionImg1 from "@/assets/images/home/services/service_card2.webp";
import solutionImg2 from "@/assets/images/home/services/service_card3.webp";
import solutionImg3 from "@/assets/images/home/services/service_card4.webp";
import solutionImg4 from "@/assets/images/home/services/service_card5.webp";

export default {
  seo: {
    title: "Hormone Health | Prime Clinics",
    description:
      "Optimize your hormonal balance with advanced diagnostics and personalized treatment plans.",
  },
  hero: {
    images: { desktop, mobile },
    title: "Hormone",
    titleHighlight: "Health",
    description:
      "Optimize your hormonal balance with advanced diagnostics and personalized treatment plans.",
  },
  solutions: {
    heading: "Solutions We Provide",
    cards: [
      {
        image: solutionImg1,
        title: "Hormone Replacement Therapy",
        description:
          "Precision-dosed, bioidentical hormone optimization designed to reverse the systemic symptoms of aging. We restore your testosterone and endocrine markers to youthful, physiological ranges to reclaim your prime vitality.",
        benefits: [
          "Restored Vitality & Drive",
          "Neurochemical Stability",
          "Enhanced Lean Mass Retention",
        ],
      },
      {
        image: solutionImg2,
        title: "Strength Building Devices",
        description:
          "Advanced electromagnetic stimulation utilized to rapidly accelerate muscle density and hypertrophy as your hormone levels optimize, ensuring your physical frame matches your internal chemistry.",
        benefits: [
          "Accelerated Muscle Density",
          "Hormonal Synergy",
          "Enhanced Metabolic Rate",
        ],
      },
      {
        image: solutionImg3,
        title: "Vascular & Shockwave Therapy",
        description:
          "Low-intensity extracorporeal shockwave therapy (Li-ESWT) used to stimulate angiogenesis—the growth of new blood vessels. This non-invasive protocol improves systemic blood flow and revitalizes tissue function.",
        benefits: [
          "Tissue Repair",
          "Enhanced Tissue Perfusion",
          "Improved Vascular Function",
        ],
      },
      {
        image: solutionImg4,
        title: "Aesthetic Structural Fillers",
        description:
          "High-viscosity dermal fillers strategically placed to restore lost facial volume and structural definition. We focus on masculine facial architecture to ensure your external appearance reflects your internal hormonal optimization.",
        benefits: [
          "Subtle Structural Refinement",
          "Masculine Jawline",
          "Facial Volume Restoration",
        ],
      },
    ],
  },
  intro: {
    heading: "What is Hormonal Restoration?",
    tagline: "Vitality is not accidental.",
    description:
      "It is engineered. Our membership model provides structured access to endocrine diagnostics, bioidentical therapies, vascular technologies, and continuous clinical oversight. By utilizing your membership credits, you can tailor your exact hormonal protocol while tracking measurable improvements in your daily energy and drive.",
    ctaLabel: "Book Your Assessment",
    ctaHref: "/free-dexa-scan",
    image: desktop,
    imageAlt: "Hormonal restoration",
  },
};

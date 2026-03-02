import desktop from "@/assets/images/services/services_health_hero/weight_health_desktop.webp";
import mobile from "@/assets/images/services/services_health_hero/weight_health_mobile.webp";
import solutionImg1 from "@/assets/images/home/services/service_card5.webp";
import solutionImg2 from "@/assets/images/home/services/service_card6.webp";
import solutionImg3 from "@/assets/images/home/services/service_card7.webp";

export default {
  seo: {
    title: "Weight Management | Prime Clinics",
    description:
      "Science-backed weight management programs tailored to your health goals.",
  },
  hero: {
    images: { desktop, mobile },
    title: "Weight",
    titleHighlight: "Management",
    description:
      "Science-backed weight management programs tailored to your health goals.",
  },
  solutions: {
    heading: "Solutions We Provide",
    cards: [
      {
        image: solutionImg1,
        title: "Metabolic Peptide Therapy",
        description:
          "Utilizing Semaglutide or Tirzepatide to mimic endogenous gut hormones. This protocol regulates blood sugar, improves insulin sensitivity, and effectively quiets the “food noise” that hinders long-term weight control.",
        benefits: [
          "Appetite Regulation",
          "Improved Insulin Signaling",
          "Sustainable Fat Loss",
        ],
      },
      {
        image: solutionImg2,
        title: "Hormone Optimization (TRT & Peptides)",
        description:
          "Precision dosed testosterone and advanced metabolic peptides formulated to effectively correct underlying hormonal imbalances. We focus on resetting your metabolic baseline to guarantee sustained energy and fat loss.",
        benefits: [
          "Metabolic Rate Support",
          "Fat Oxidation",
          "Energy Preservation",
        ],
      },
      {
        image: solutionImg3,
        title: "Emsculpt NEO & Body Contouring",
        description:
          "High-intensity focused electromagnetic technology utilized specifically during weight loss to ensure that your body preserves lean muscle mass while burning fat, preserving your lean mass entirely.",
        benefits: [
          "Muscle Mass Preservation",
          "Targeted Fat Reduction",
          "Enhanced Body Composition",
        ],
      },
    ],
  },
  intro: {
    heading: "What is Metabolic Weight Management?",
    tagline: "Transformation is not a fad.",
    description:
      "It is biological. Our membership model provides structured access to metabolic diagnostics, peptide therapies, body composition technologies, and nutritional guidance. Using your credits, you can build a highly customized fat loss pathway.",
    ctaLabel: "Book Your Assessment",
    ctaHref: "/free-dexa-scan",
    image: desktop,
    imageAlt: "Metabolic weight management",
  },
};


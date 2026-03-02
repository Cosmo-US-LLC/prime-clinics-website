import desktop from "@/assets/images/services/services_health_hero/mental_health_desktop.webp";
import mobile from "@/assets/images/services/services_health_hero/mental_health_mobile.webp";
import solutionImg1 from "@/assets/images/home/services/service_card6.webp";
import solutionImg2 from "@/assets/images/home/services/service_card7.webp";
import solutionImg3 from "@/assets/images/home/services/service_card1.webp";

export default {
  seo: {
    title: "Mental Fitness | Prime Clinics",
    description:
      "Strengthen your mind with evidence-based mental health and performance support.",
  },
  hero: {
    images: { desktop, mobile },
    title: "Mental",
    titleHighlight: "Fitness",
    description:
      "Strengthen your mind with evidence-based mental health and performance support.",
  },
  solutions: {
    heading: "Solutions We Provide",
    cards: [
      {
        image: solutionImg1,
        title: "Exomind Neurostimulation",
        description:
          "Transcranial Magnetic Stimulation (TMS) uses targeted magnetic pulses to activate specific neural circuits in the prefrontal cortex. This non-invasive therapy rewires pathways involved in mood regulation and deep focus.",
        benefits: [
          "Enhanced Executive Function",
          "Improved Mood Regulation",
          "Drug-Free Cognitive Rewiring",
        ],
      },
      {
        image: solutionImg2,
        title: "Hormonal Cognitive Support",
        description:
          "Optimizing vital neurosteroids like Testosterone and Estrogen to aggressively treat the biological root causes of brain fog and mental fatigue.",
        benefits: [
          "Elimination of Brain Fog",
          "Sustained Mental Stamina",
          "Cognitive Lucidity",
        ],
      },
      {
        image: solutionImg3,
        title: "Evolve Clinical Psychology",
        description:
          "Evidence-based cognitive protocols designed to build resilience and successfully break negative behavioral loops. We pair psychological strategy with biological optimization to build lasting mental resilience.",
        benefits: [
          "Stress Resilience",
          "Behavioral Loop Disruption",
          "Long-Term Mental Clarity",
        ],
      },
    ],
  },
  intro: {
    heading: "What does it mean to achieve total cognitive immersion?",
    tagline: "Clarity is not accidental.",
    description:
      "It is engineered. Our membership model provides structured access to neurological diagnostics, neurostimulation therapies, psychological strategies, and clinical guidance. Apply your credits to design a customized cognitive pathway.",
    ctaLabel: "Book Your Assessment",
    ctaHref: "/free-dexa-scan",
    image: desktop,
    imageAlt: "Mental fitness and cognitive immersion",
  },
};

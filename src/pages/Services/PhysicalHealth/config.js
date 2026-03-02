import desktop from "@/assets/images/services/services_health_hero/physical_health_desktop.webp";
import mobile from "@/assets/images/services/services_health_hero/physical_health_mobile.webp";
import solutionImg1 from "@/assets/images/home/services/service_card1.webp";
import solutionImg2 from "@/assets/images/home/services/service_card2.webp";
import solutionImg3 from "@/assets/images/home/services/service_card3.webp";

export default {
  seo: {
    title: "Physical Health | Prime Clinics",
    description:
      "Prime Clinics combines advanced diagnostics, precision training strategy, and medical-grade muscle technology to increase strength.",
  },
  hero: {
    images: { desktop, mobile },
    title: "PHYSICAL HEALTH",
    titleHighlight: "",
    description:
      "Prime Clinics combines advanced diagnostics, precision training strategy, and medical-grade muscle technology to increase strength.",
  },
  solutions: {
    heading: "Solutions We Provide",
    cards: [
      {
        image: solutionImg1,
        title: "Personal Training Consultation",
        description:
          "A strategic architectural review of your movement and posture. We analyze your structural reality to identify biomechanical inefficiencies and build a training plan that ensures maximum output with zero wasted effort.",
        benefits: [
          "Movement Efficiency",
          "Injury Risk Mitigation",
          "Personalized Structural Blueprint",
        ],
      },
      {
        image: solutionImg2,
        title: "Precision Nutrition",
        description:
          "Macronutrient protocols tailored precisely to your biological data. We eliminate the guesswork by aligning your caloric intake and nutrient timing with your metabolic rate and performance goals.",
        benefits: [
          "Metabolic Alignment",
          "Performance Fueling",
          "Sustainable Body Recomposition",
        ],
      },
      {
        image: solutionImg3,
        title: "Muscle & Strength Amplification",
        description:
          "Utilizing Whole-Body Electromyostimulation to recruit deep-tier muscle fibers that voluntary exercise cannot reach. This clinical-grade technology allows for rapid strength gains & muscle density enhancement without heavy joint loading.",
        benefits: [
          "Deep Fiber Activation",
          "Joint-Friendly Hypertrophy",
          "Time-Efficient Strength Gains",
        ],
      },
    ],
  },
  benefits: {
    heading: "Benefits of Physical Performance Optimization",
    items: [
      {
        icon: "activity",
        title: "Peak Performance",
        description:
          "Maximize output with data-driven training and recovery protocols. Align your efforts with your body's real capacity and goals.",
      },
      {
        icon: "shield",
        title: "Injury Resilience",
        description:
          "Reduce injury risk with biomechanical analysis and corrective programming. Build strength and mobility that protects your joints and tissues.",
      },
      {
        icon: "zap",
        title: "Sustainable Strength",
        description:
          "Build lean muscle and strength without heavy joint loading. Whole-body EMS and precision training deliver results efficiently.",
      },
      {
        icon: "trending-up",
        title: "Recovery & Longevity",
        description:
          "Optimize recovery and long-term performance with evidence-based protocols. Keep performing at your best for years to come.",
      },
    ],
  },
  intro: {
    heading: "What is Physical Performance Optimization?",
    tagline: "Performance is not seasonal. It is systematic.",
    description:
      "Our membership model provides structured access to diagnostics, therapies, performance technologies, and clinical guidance. Credits allow you to customize your pathway while maintaining measurable accountability and progress tracking.",
    ctaLabel: "Book Your Assessment",
    ctaHref: "/free-dexa-scan",
    image: desktop,
    imageAlt: "Physical performance optimization",
  },
  faq: {
    heading: "Frequently Asked Questions",
    description: "Detail FAQs regarding the service.",
    items: [
      {
        question: "I already exercise regularly. Why do I need a consultation?",
        answer:
          "Even experienced athletes often have biomechanical blind spots. Our consultation is a clinical audit of your movement to find inefficiencies that might be causing silent wear-and-tear or holding back your next PR.",
      },
      {
        question:
          "Is the nutrition plan just a generic eat less, move more approach?",
        answer:
          "Absolutely not. We base your plan on your Resting Metabolic Rate (RMR) and activity level. It is a mathematical blueprint of exactly what your body needs to burn fat or build muscle, not a cookie-cutter diet.",
      },
      {
        question:
          "What if I have an old injury? Can I still do the strength building?",
        answer:
          "Yes. In fact, our devices are perfect for rehab because they strengthen the muscle without putting heavy load on the joints, allowing you to build strength safely around an injury.",
      },
      {
        question: "How often do I need to update my plan?",
        answer:
          "We recommend a check-in every 6 to 8 weeks. As your body adapts and becomes fitter, your nutritional and training needs change, so your plan needs to evolve with you.",
      },
    ],
  },
};

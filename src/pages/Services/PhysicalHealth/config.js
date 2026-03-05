import desktop from "@/assets/images/services/services_health_hero/physical_health_desktop.webp";
import mobile from "@/assets/images/services/services_health_hero/physical_health_mobile.webp";
import introImg from "@/assets/images/services/services_intro/physical_intro.webp";
import whyChooseImg from "@/assets/images/services/whyChoose/why_choose.webp";
import membershipImg from "@/assets/images/services/prime_membership/prime_membership.webp";
import solutionImg1 from "@/assets/images/services/solutions_we/phy_card_1.webp";
import solutionImg2 from "@/assets/images/services/solutions_we/phy_card_2.webp";
import solutionImg3 from "@/assets/images/services/solutions_we/phy_card_3.webp";
import {
  PhyIcon1,
  PhyIcon2,
  PhyIcon3,
  PhyIcon4,
} from "@/utils/knowYourNumbersIcons";

export default {
  seo: {
    title: "Physical Performance Optimization & Strength | Prime Clinics",
    description:
      "Reach your physical peak. Precision nutrition, injury prevention, and performance protocols designed for high achievers at Prime Clinics.",
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
        iconComponent: PhyIcon1,
        title: "Strength & Endurance",
        description:
          "Break through plateaus with structured programs designed around your physiology, not assumptions.",
      },
      {
        iconComponent: PhyIcon2,
        title: "Accelerated Recovery",
        description:
          "Reduce muscle fatigue, enhance regeneration, and return stronger after every session.",
      },
      {
        iconComponent: PhyIcon3,
        title: "Injury Prevention",
        description:
          "Correct biomechanical imbalances and build structural resilience that protects your performance long term.",
      },
      {
        iconComponent: PhyIcon4,
        title: "Metabolic Optimization",
        description:
          "Improve body composition, increase lean mass, and regulate energy systems with precision.",
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
    image: introImg,
    imageAlt: "Physical performance optimization",
  },
  whyChoose: {
    heading: "Why Choose Prime",
    image: whyChooseImg,
    imageAlt: "Prime physical performance consultation",
    reasons: [
      {
        number: "1",
        title: "Clinical Precision",
        description:
          "We utilize medical-grade metrics to map your biology accurately.",
      },
      {
        number: "2",
        title: "Custom Engineering",
        description:
          "We use zero generic templates, providing only meticulously tailored blueprints.",
      },
      {
        number: "3",
        title: "Advanced Technologies",
        description:
          "You gain access to the latest muscle and strength amplification devices.",
      },
    ],
  },
  membership: {
    heading: "PRIME Membership",
    tagline: "Performance is not seasonal. It is systematic.",
    description:
      "Our membership model provides structured access to diagnostics, therapies, performance technologies, and clinical guidance. Credits allow you to customize your pathway while maintaining measurable accountability and progress tracking.",
    ctaLabel: "Book Your Assessment",
    ctaHref: "/free-dexa-scan",
    image: membershipImg,
    imageAlt: "Prime membership",
  },
  testimonials: {
    heading: "Proven Results. Real Stories",
    items: [
      {
        quote:
          "The biomechanical assessment completely changed my training. I finally fixed my squat depth and broke my plateau safely.",
        name: "Mark T.",
      },
      {
        quote:
          "The EMS devices are incredible. I am getting more strength gains in half the time, and my recovery is much faster.",
        name: "David L.",
      },
      {
        quote:
          "A true clinical approach to fitness. Eating based on my actual metabolic rate rather than a generic diet app changed everything.",
        name: "James R.",
      },
      {
        quote:
          "I feel 10 years younger. Getting my testosterone optimized brought my energy levels back to where they were in my twenties.",
        name: "Michael S.",
      },
    ],
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

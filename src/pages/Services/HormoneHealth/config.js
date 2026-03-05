import desktop from "@/assets/images/services/services_health_hero/hormone_health_desktop.webp";
import mobile from "@/assets/images/services/services_health_hero/hormone_health_mobile.webp";
import introImg from "@/assets/images/services/services_intro/harmone_intro.webp";
import whyChooseImg from "@/assets/images/services/whyChoose/why_choose.webp";
import membershipImg from "@/assets/images/services/prime_membership/prime_membership.webp";
import solutionImg1 from "@/assets/images/services/solutions_we/hor_card_1.webp";
import solutionImg2 from "@/assets/images/services/solutions_we/hor_card_2.webp";
import solutionImg3 from "@/assets/images/services/solutions_we/hor_card_3.webp";
import solutionImg4 from "@/assets/images/services/solutions_we/hor_card_4.webp";
import {
  HormoneIcon1,
  HormoneIcon2,
  HormoneIcon3,
  HormoneIcon4,
} from "@/utils/knowYourNumbersIcons";

export default {
  seo: {
    title: "Hormone Health & Hormonal Restoration | Prime Clinics",
    description:
      "Restore your vitality. Advanced hormone optimization focusing on body composition, mood stabilization, and restored drive at Prime Clinics.",
  },
  hero: {
    images: { desktop, mobile },
    title: "Hormone Health",
    titleHighlight: "",
    description:
      "Restore your edge. Hormonal balance is the foundation of drive, energy, and confidence.",
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
  benefits: {
    heading: "Benefits of Hormone Health Optimization",
    items: [
      {
        iconComponent: HormoneIcon1,
        title: "Renewed Vitality",
        description:
          "Eliminate daily lethargy and reclaim your morning-to-night stamina for peak daily performance.",
      },
      {
        iconComponent: HormoneIcon2,
        title: "Body Composition",
        description:
          "Support vital muscle retention and target stubborn abdominal fat to reveal your athletic baseline.",
      },
      {
        iconComponent: HormoneIcon3,
        title: "Mood Stabilization",
        description:
          "Regulate your neurochemistry to reduce irritability, improve patience, and sustain mental clarity.",
      },
      {
        iconComponent: HormoneIcon4,
        title: "Restored Drive",
        description:
          "Reawaken your natural libido and intimate confidence with precisely balanced physiological hormone ranges.",
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
    image: introImg,
    imageAlt: "Hormonal restoration",
  },
  whyChoose: {
    heading: "Why Choose Prime",
    image: whyChooseImg,
    imageAlt: "Prime hormone health consultation",
    reasons: [
      {
        number: "1",
        title: "Bioidentical Solutions",
        description:
          "We use naturally recognized hormones for optimal safety and absorption.",
      },
      {
        number: "2",
        title: "Physician Monitored",
        description:
          "Regular blood work ensures you stay strictly within safe, physiological ranges.",
      },
      {
        number: "3",
        title: "Holistic Approach",
        description:
          "We seamlessly combine HRT with structural and vascular therapies for complete care.",
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
          "I feel 10 years younger. Getting my testosterone optimized brought my energy levels back to where they were in my twenties.",
        name: "Michael S.",
      },
      {
        quote:
          "The combination of HRT and shockwave therapy has completely restored my confidence in the bedroom and the gym.",
        name: "Robert C.",
      },
      {
        quote:
          "Professional, closely monitored, and incredibly effective. Knowing a doctor is checking my bloodwork gives me total peace of mind.",
        name: "Thomas W.",
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
    ],
  },
  faq: {
    heading: "Frequently Asked Questions",
    description:
      "Answers to the most common questions men ask before starting hormone optimization.",
    items: [
      {
        question: "Will taking hormones make me aggressive or moody?",
        answer:
          "No. Roid rage is a myth associated with abusing supra-physiological doses. We aim for clinical optimization only. Restoring your levels to a healthy, youthful range typically stabilizes mood, reduces anxiety, and improves patience.",
      },
      {
        question:
          "Will starting therapy stop my body from making its own hormones naturally?",
        answer:
          "Exogenous hormones can suppress natural production. This is exactly why we design combination protocols utilizing specific peptides to maintain your body’s natural function and fertility alongside therapy.",
      },
      {
        question:
          "How long does it actually take to feel a difference from HRT?",
        answer:
          "Mental clarity, libido, and morning energy often improve within the first 2–3 weeks. Physical changes, like increased muscle hardness and abdominal fat loss, typically become noticeable around the 3‑month mark.",
      },
      {
        question: "Is this only for men over 50?",
        answer:
          "Not at all. Environmental factors, poor sleep, and high stress are causing severe hormonal decline in men in their early 30s. We treat your specific bloodwork and symptoms, not your birth year.",
      },
      {
        question:
          "What is the difference between bio-identical hormones and synthetic ones?",
        answer:
          "Bio‑identical hormones possess the exact same molecular structure as the hormones your body produces naturally. This leads to far better absorption and significantly reduces the risk of adverse side effects associated with synthetic variants.",
      },
      {
        question:
          "Do I have to come into the clinic every single week for treatments?",
        answer:
          "It depends on your specific protocol. While some initial therapies require in‑clinic visits, many of our hormone and peptide optimization plans are designed for safe, convenient at‑home administration once you are fully stabilized.",
      },
      {
        question: "Will my regular primary care doctor monitor this?",
        answer:
          "Traditional medicine typically only treats hormones when they fall into severe disease states. Our specialized physicians actively monitor your bloodwork specifically for peak optimization, working well beyond standard baseline care.",
      },
    ],
  },
};

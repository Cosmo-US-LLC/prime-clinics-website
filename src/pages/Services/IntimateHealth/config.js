import desktop from "@/assets/images/services/services_health_hero/intimate_health_desktop.webp";
import mobile from "@/assets/images/services/services_health_hero/intimate_health_mobile.webp";
import introImg from "@/assets/images/services/services_intro/intimate_intro.webp";
import introImg2 from "@/assets/images/services/services_intro/harmone_intro.webp";
import whyChooseImg from "@/assets/images/services/whyChoose/why_choose.webp";
import membershipImg from "@/assets/images/services/prime_membership/prime_membership.webp";
import solutionImg1 from "@/assets/images/services/solutions_we/inti_card_1.webp";
import solutionImg2 from "@/assets/images/services/solutions_we/inti_card_2.webp";
import solutionImg3 from "@/assets/images/services/solutions_we/inti_card_3.webp";

export default {
  seo: {
    title: "Intimate Health | Prime Clinics",
    description:
      "Comprehensive care for intimate wellness with discretion and medical expertise.",
  },
  hero: {
    images: { desktop, mobile },
    title: "Intimate Health",
    titleHighlight: "",
    description:
      "Address age-related intimate health challenges with advanced, non-invasive therapies designed to restore vitality and function.",
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
  benefits: {
    heading: "Benefits of Intimate Health Optimization",
    items: [
      {
        icon: "shield",
        title: "Restored Confidence",
        description:
          "Overcome performance anxiety with highly reliable physical function and spontaneous readiness.",
      },
      {
        icon: "leaf",
        title: "Enhanced Sensitivity",
        description:
          "Improve nerve response and stimulate healthier tissue regeneration for a profound physical connection.",
      },
      {
        icon: "bone",
        title: "Pelvic Strength",
        description:
          "Gain total muscular control over stress urinary incontinence and underlying pelvic floor weakness.",
      },
      {
        icon: "activity",
        title: "Vascular Rejuvenation",
        description:
          "Treat the root cause of dysfunction by actively building new blood vessels for lasting improvement.",
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
    image: introImg,
    imageAlt: "Intimate health restoration",
  },
  intro2: {
    heading: "What is Hormonal Restoration?",
    tagline: "Vitality is not accidental.",
    description:
      "It is engineered. Our membership model provides structured access to endocrine diagnostics, bioidentical therapies, vascular technologies, and continuous clinical oversight. By utilizing your membership credits, you can tailor your exact hormonal protocol while tracking measurable improvements in your daily energy and drive.",
    ctaLabel: "Book Your Assessment",
    ctaHref: "/free-dexa-scan",
    image: introImg2,
    imageAlt: "Hormonal restoration",
  },
  whyChoose: {
    heading: "Why Choose Prime",
    image: whyChooseImg,
    imageAlt: "Prime intimate health consultation",
    reasons: [
      {
        number: "1",
        title: "Total Discretion",
        description:
          "Your privacy is our absolute highest priority within our clinical setting.",
      },
      {
        number: "2",
        title: "Non-Invasive Focus",
        description:
          "We heavily prioritize advanced regenerative therapies over surgical intervention.",
      },
      {
        number: "3",
        title: "Root Cause Resolution",
        description:
          "We actively treat the underlying vascular and muscular issues causing the dysfunction.",
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
          "The HIFEM treatments strengthened my pelvic floor immensely. I finally have full control and confidence back.",
        name: "Steven P.",
      },
      {
        quote:
          "The clinical environment made a sensitive topic very easy to talk about. The PRP injection results are undeniable.",
        name: "Aaron K.",
      },
      {
        quote:
          "I wanted a solution that wasn't just taking a pill every time. The regenerative approach completely fixed the root issue.",
        name: "Greg H.",
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
      "Clear answers to the most common questions men have about intimate health treatments.",
    items: [
      {
        question: "Is the treatment awkward or embarrassing?",
        answer:
          "We understand the hesitation completely. Our medical staff is highly trained to make this clinical, fast, and comfortable. For treatments like the HIFEM chair, you actually remain fully clothed the entire time.",
      },
      {
        question: "Do PRP injections in that area hurt?",
        answer:
          "It is a very common fear, but the reality is much easier. We use a highly potent, medical‑grade numbing cream beforehand. Most patients describe it as a quick pinch followed by mild pressure, making it very manageable.",
      },
      {
        question: "Is my visit strictly confidential?",
        answer:
          "100%. We operate a highly discreet medical facility. Your privacy is legally protected by HIPAA regulations, and our scheduling ensures you have a private, uninterrupted experience.",
      },
      {
        question: "How fast does HIFEM or PRP take to work?",
        answer:
          "Many patients report a noticeable improvement in pelvic floor control after just one or two HIFEM sessions. For PRP, tissue regeneration and sensitivity improvements typically build up steadily over 3 to 4 weeks.",
      },
      {
        question:
          "How soon can I resume normal intimate activities after a treatment?",
        answer:
          "For the vast majority of our protocols, including HIFEM and PRP injections, there is zero mandatory downtime. You can safely resume all normal physical and intimate activities the very same day.",
      },
      {
        question:
          "Does the HIFEM chair cause any muscle soreness the next day?",
        answer:
          "You may experience mild pelvic floor fatigue or a sensation similar to having completed a strenuous core workout, but it rarely causes acute pain or prevents daily functional activities.",
      },
      {
        question: "Is this exclusively for treating severe dysfunction?",
        answer:
          "No. While we effectively treat severe cases, many high‑performing individuals utilize these therapies purely for proactive optimization to increase sensitivity, stamina, and overall tissue health before major issues arise.",
      },
    ],
  },
};

import desktop from "@/assets/images/services/services_health_hero/weight_health_desktop.webp";
import mobile from "@/assets/images/services/services_health_hero/weight_health_mobile.webp";
import introImg from "@/assets/images/services/services_intro/weight_intro.webp";
import whyChooseImg from "@/assets/images/services/whyChoose/why_choose.webp";
import membershipImg from "@/assets/images/services/prime_membership/prime_membership.webp";
import solutionImg1 from "@/assets/images/services/solutions_we/weight_card_1.webp";
import solutionImg2 from "@/assets/images/services/solutions_we/weight_card_2.webp";
import solutionImg3 from "@/assets/images/services/solutions_we/weight_card_3.webp";
import {
  WeightIcon1,
  WeightIcon2,
  WeightIcon3,
  WeightIcon4,
} from "@/utils/knowYourNumbersIcons";

export default {
  seo: {
    title: "Metabolic Weight Loss & Peptide Therapy | Prime Clinics",
    description:
      "Science-backed weight management. Achieve sustainable fat loss and appetite regulation with medical weight loss protocols at Prime Clinics.",
  },
  hero: {
    images: { desktop, mobile },
    title: "Weight Management",
    titleHighlight: "",
    description:
      "Take control of your body composition and metabolism with personalized, science-backed solutions.",
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
  benefits: {
    heading: "Benefits of Weight Management",
    items: [
      {
        iconComponent: WeightIcon1,
        title: "Sustainable Fat Loss",
        description:
          "Lower your metabolic set point permanently to efficiently burn fat and keep the weight off for good.",
      },
      {
        iconComponent: WeightIcon2,
        title: "Appetite Regulation",
        description:
          'Quiet constant "food noise" and eliminate daily cravings naturally without utilizing stimulants.',
      },
      {
        iconComponent: WeightIcon3,
        title: "Muscle Preservation",
        description:
          "Ensure the weight lost is purely fat so you fully preserve your structural athletic shape.",
      },
      {
        iconComponent: WeightIcon4,
        title: "Insulin Sensitivity",
        description:
          "Correct high fasting insulin levels to fundamentally reverse metabolic resistance and stabilize your energy.",
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
    image: introImg,
    imageAlt: "Metabolic weight management",
  },
  whyChoose: {
    heading: "Why Choose Prime",
    image: whyChooseImg,
    imageAlt: "Prime weight management consultation",
    reasons: [
      {
        number: "1",
        title: "Beyond The Scale",
        description:
          "We look past simple weight and focus entirely on body composition and fat to muscle ratios.",
      },
      {
        number: "2",
        title: "Hormonal Addressing",
        description:
          "We actively fix the root metabolic resistance, not just the daily calorie count.",
      },
      {
        number: "3",
        title: "Long-Term Strategy",
        description:
          "We rigorously equip you with the habits to maintain your new physique forever.",
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
          "The GLP-1 therapy quieted my cravings instantly. For the first time in my life, dropping body fat felt effortless.",
        name: "Daniel F.",
      },
      {
        quote:
          "I lost the weight but kept my shoulders and chest thanks to their Emsculpt protocols preserving my muscle mass.",
        name: "Kevin V.",
      },
      {
        quote:
          "They looked at my actual thyroid and metabolism instead of just handing me a generic diet plan. The science works.",
        name: "Brian M.",
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
      "Key questions men ask before starting metabolic peptide therapy and integrated weight management.",
    items: [
      {
        question:
          "Will I just gain all the weight back the second I stop the GLP-1 medication?",
        answer:
          "This is a common fear, but it is completely avoidable with our protocol. We use your time on the medication to reset your metabolic baseline, build muscle, and establish new habits. If you maintain the muscle mass, you can easily sustain the weight loss long-term.",
      },
      {
        question:
          'I am worried about getting "Ozempic face" or losing all my muscle. How do you prevent that?',
        answer:
          '"Ozempic face" is simply the result of rapid, unmanaged fat loss and muscle wasting. We prevent this by mandating high protein intake and utilizing Emsculpt NEO to keep your muscles full and dense while only the fat melts off.',
      },
      {
        question:
          "Do I still have to follow a strict diet while taking the peptides?",
        answer:
          'Yes, nutrition still matters, but it will no longer feel like a grueling struggle. The medication eliminates the constant "food noise" in your brain, making it incredibly easy to stick to the healthy metabolic plan we build for you.',
      },
      {
        question: "Are the weekly peptide injections painful?",
        answer:
          "Not at all. The medication is delivered using a microscopic insulin needle that is thinner than a human hair. Most patients report that they don't even feel the injection happen.",
      },
      {
        question: "What are the common side effects of GLP-1 peptide therapy?",
        answer:
          "The most common initial side effects are mild nausea or slight digestive changes as your body adapts to the delayed gastric emptying. Our physicians carefully titrate your dosage to actively minimize any discomfort.",
      },
      {
        question: "How fast can I realistically expect to drop body fat?",
        answer:
          "While individual metabolic rates vary, patients fully committed to the integrated peptide, nutrition, and Emsculpt protocols frequently see a safe, sustainable reduction of 10 to 15 percent of their total body weight within the first few months.",
      },
      {
        question: "Who is not a viable candidate for these metabolic peptides?",
        answer:
          "During your initial bloodwork and consultation, our physicians screen rigorously. Individuals with a personal or family history of specific thyroid carcinomas or severe gastrointestinal diseases are generally advised against GLP-1 therapy.",
      },
    ],
  },
};

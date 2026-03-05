import desktop from "@/assets/images/services/services_health_hero/regenrative_health_desktop.webp";
import mobile from "@/assets/images/services/services_health_hero/regenrative_health_mobile.webp";
import introImg from "@/assets/images/services/services_intro/regenerative_intro.webp";
import whyChooseImg from "@/assets/images/services/whyChoose/why_choose.webp";
import membershipImg from "@/assets/images/services/prime_membership/prime_membership.webp";
import solutionImg1 from "@/assets/images/services/solutions_we/rege_card_1.webp";
import solutionImg2 from "@/assets/images/services/solutions_we/rege_card_2.webp";
import solutionImg3 from "@/assets/images/services/solutions_we/rege_card_3.webp";
import solutionImg4 from "@/assets/images/services/solutions_we/rege_card_4.webp";
import {
  RegenerativeIcon1,
  RegenerativeIcon2,
  RegenerativeIcon3,
  RegenerativeIcon4,
} from "@/utils/knowYourNumbersIcons";

export default {
  seo: {
    title: "Regenerative Aesthetics | Prime Clinics",
    description:
      "Restore and rejuvenate with cutting-edge regenerative aesthetic treatments.",
  },
  hero: {
    images: { desktop, mobile },
    title: "Regenerative Aesthetics",
    titleHighlight: "",
    description:
      "Sophisticated aesthetic treatments that enhance your physical presence and structural refinement.",
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
  benefits: {
    heading: "Benefits of Regenerative Aesthetics",
    items: [
      {
        iconComponent: RegenerativeIcon1,
        title: "Structural Lift",
        description:
          "Restore lost facial volume to build masculine definition without looking plastic or overdone.",
      },
      {
        iconComponent: RegenerativeIcon2,
        title: "Hair Restoration",
        description:
          "Reactivate dormant follicles to aggressively combat thinning and rebuild a powerful, dense hairline.",
      },
      {
        iconComponent: RegenerativeIcon3,
        title: "Sculpted Physique",
        description:
          "Burn stubborn fat pockets while simultaneously building core muscle mass for a chiseled midsection.",
      },
      {
        iconComponent: RegenerativeIcon4,
        title: "Cellular Renewal",
        description:
          "Stimulate natural collagen production to reverse skin laxity and project a highly rested appearance.",
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
    image: introImg,
    imageAlt: "Regenerative aesthetics",
  },
  whyChoose: {
    heading: "Why Choose Prime",
    image: whyChooseImg,
    imageAlt: "Prime regenerative aesthetics consultation",
    reasons: [
      {
        number: "1",
        title: "Regenerative Philosophy",
        description:
          "We utilize your body's own growth factors to heal, lift, and restore naturally.",
      },
      {
        number: "2",
        title: "Dual-Action Technology",
        description:
          "We provide devices that build muscle while burning fat simultaneously.",
      },
      {
        number: "3",
        title: "Subtle Enhancements",
        description:
          "We focus purely on masculine and structural refinement, avoiding obvious over-treatment.",
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
          "TThe PRP and Exosome protocols saved my hairline. My shedding stopped fast, and the crown is visibly thicker.",
        name: "Jonathan E.",
      },
      {
        quote:
          "Emsculpt NEO completely changed my core. It burned the stubborn belly fat and gave me definition the gym couldn't.",
        name: "Marcus B.",
      },
      {
        quote:
          "I was worried about looking fake, but the jawline filler work was incredibly subtle. I just look sharper and more awake.",
        name: "Chris D.",
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
      "Common questions men have about regenerative aesthetic therapies, from subtle facial work to advanced body contouring.",
    items: [
      {
        question:
          "I am worried about looking frozen or like I have had work done. Will I?",
        answer:
          "No. Our entire philosophy for men is regenerative, not plastic. We strategically replace lost volume to restore your natural masculine structure so you look like a well-rested version of yourself, never overfilled.",
      },
      {
        question: "Does PRP hair restoration actually grow brand new hair?",
        answer:
          "It reactivates follicles that are dormant, shrinking, or damaged. It is highly effective for thickening thinning hair and stopping current shedding. However, if a follicle is completely dead (shiny bald skin), a surgical transplant is required.",
      },
      {
        question:
          "Is there any downtime for facial fillers or scalp injections?",
        answer:
          "There is virtually zero downtime. You might experience very minor redness or mild swelling for 24 hours, but nothing that prevents you from going back to work or hitting the gym the next day.",
      },
      {
        question:
          "Is Emsculpt NEO really better than just doing sit-ups and dieting?",
        answer:
          "Yes. One 30-minute session creates 20,000 supramaximal contractions, which is physically impossible to achieve on your own. It forces extreme muscle growth while the radiofrequency simultaneously melts the fat layer above it.",
      },
      {
        question:
          "How long do the results from your structural dermal fillers actually last?",
        answer:
          "Longevity depends heavily on your metabolism and the specific area treated. Generally, our premium structural fillers maintain their defining volume for 12 to 24 months before a minor touch-up is required.",
      },
      {
        question: "Is the PRP scalp injection process painful?",
        answer:
          "We prioritize your comfort entirely. We utilize clinical-grade topical numbing agents and specialized micro-needles, making the hair restoration process highly tolerable and virtually painless for most patients.",
      },
      {
        question: "Can I combine Emsculpt NEO with other aesthetic treatments?",
        answer:
          "Absolutely. In fact, we frequently stack our therapies. Combining core contouring with facial structural refinement provides a comprehensive, full-body aesthetic upgrade in a very short timeframe.",
      },
    ],
  },
};

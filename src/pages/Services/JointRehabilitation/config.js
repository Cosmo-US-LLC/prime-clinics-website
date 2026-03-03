import desktop from "@/assets/images/services/services_health_hero/joing_health_desktop.webp";
import mobile from "@/assets/images/services/services_health_hero/joing_health_mobile.webp";
import solutionImg1 from "@/assets/images/home/services/service_card7.webp";
import solutionImg2 from "@/assets/images/home/services/service_card1.webp";
import solutionImg3 from "@/assets/images/home/services/service_card2.webp";
import solutionImg4 from "@/assets/images/home/services/service_card3.webp";

export default {
  seo: {
    title: "Joint Rehabilitation | Prime Clinics",
    description:
      "Recover and rebuild with specialized joint rehabilitation and mobility programs.",
  },
  hero: {
    images: { desktop, mobile },
    title: "Joint",
    titleHighlight: "Rehabilitation",
    description:
      "Recover and rebuild with specialized joint rehabilitation and mobility programs.",
  },
  solutions: {
    heading: "Solutions We Provide",
    cards: [
      {
        image: solutionImg1,
        title: "PRP Joint Injections",
        description:
          "Platelet-Rich Plasma therapy designed to accelerate the healing of tendons, ligaments, and cartilage. By concentrating your body's natural healing cells, we trigger a powerful repair response within the joint capsule.",
        benefits: [
          "Accelerated Soft Tissue Repair",
          "Reduced Systemic Inflammation",
          "Avoidance of Surgical Intervention",
        ],
      },
      {
        image: solutionImg2,
        title: "Tech-Led Muscle Rehab",
        description:
          "Utilizing bio-feedback and electrical stimulation devices to quickly correct muscle imbalances that cause joint strain, ensuring you are loading muscles safely during all recovery phases.",
        benefits: [
          "Biomechanical Correction",
          "Safe Loading Protocols",
          "Corrective Strengthening",
        ],
      },
      {
        image: solutionImg3,
        title: "Topical Pain Relief Cream",
        description:
          "Custom-compounded transdermal creams applied to block pain signals effectively without systemic side effects. These target the site of injury directly for faster relief.",
        benefits: [
          "Localized Pain Relief",
          "Reduced Systemic Load",
          "Improved Sleep & Recovery",
        ],
      },
      {
        image: solutionImg4,
        title: "Systemic Healing Peptides",
        description:
          "Administration of specialized peptide sequences (like BPC-157) to systematically accelerate the healing of muscle, tendon, and ligament damage by increasing angiogenic repair.",
        benefits: [
          "Rapid Ligament Recovery",
          "Systemic Anti-Inflammatory Effects",
          "Enhanced Tissue Regeneration",
        ],
      },
    ],
  },
  benefits: {
    heading: "Benefits of Joint Rehabilitation",
    items: [
      {
        icon: "bandage",
        title: "Accelerated Healing",
        description:
          "Vastly speed up the biological repair of micro tears in heavily used tendons and ligaments.",
      },
      {
        icon: "heart",
        title: "Non Surgical Relief",
        description:
          "Alleviate chronic joint discomfort entirely without relying on systemic painkillers or invasive procedures.",
      },
      {
        icon: "move",
        title: "Restored Mobility",
        description:
          "Regain your full natural range of motion and eliminate frustrating joint clicking or morning stiffness.",
      },
      {
        icon: "bone",
        title: "Structural Integrity",
        description:
          "Correct the underlying muscular imbalances that cause joint strain to protect your long term biomechanics.",
      },
    ],
  },
  intro: {
    heading: "What is Regenerative Orthopedics?",
    tagline: "Recovery is not passive.",
    description:
      "It is active. Our membership model provides structured access to mobility diagnostics, tissue repair therapies, advanced rehab technologies, and orthopedic guidance. Your membership credits empower you to tailor your exact recovery timeline.",
    ctaLabel: "Book Your Assessment",
    ctaHref: "/free-dexa-scan",
    image: desktop,
    imageAlt: "Regenerative orthopedics",
  },
  membership: {
    heading: "PRIME Membership",
    tagline: "Performance is not seasonal. It is systematic.",
    description:
      "Our membership model provides structured access to diagnostics, therapies, performance technologies, and clinical guidance. Credits allow you to customize your pathway while maintaining measurable accountability and progress tracking.",
    ctaLabel: "Book Your Assessment",
    ctaHref: "/free-dexa-scan",
    image: desktop,
    imageAlt: "Prime membership",
  },
};

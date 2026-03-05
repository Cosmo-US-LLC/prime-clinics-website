import desktop from "@/assets/images/services/services_health_hero/joing_health_desktop.webp";
import mobile from "@/assets/images/services/services_health_hero/joing_health_mobile.webp";
import introImg from "@/assets/images/services/services_intro/joing_intro.webp";
import whyChooseImg from "@/assets/images/services/whyChoose/why_choose.webp";
import membershipImg from "@/assets/images/services/prime_membership/prime_membership.webp";
import solutionImg1 from "@/assets/images/services/solutions_we/joing_card_1.webp";
import solutionImg2 from "@/assets/images/services/solutions_we/joing_card_2.webp";
import solutionImg3 from "@/assets/images/services/solutions_we/joing_card_3.webp";
import solutionImg4 from "@/assets/images/services/solutions_we/joing_card_4.webp";
import {
  JointIcon1,
  JointIcon2,
  JointIcon3,
  JointIcon4,
} from "@/utils/knowYourNumbersIcons";

export default {
  seo: {
    title: "Regenerative Orthopedics & Joint Rehab | Prime Clinics",
    description:
      "Move without limits. Non-surgical joint rehabilitation and regenerative orthopedics to restore mobility and structural integrity at Prime Clinics.",
  },
  hero: {
    images: { desktop, mobile },
    title: "Joint Rehabilitation",
    titleHighlight: "",
    description:
      "Recover faster. Advanced therapies designed to repair tissue, reduce systemic inflammation, and improve joint mobility.",
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
        iconComponent: JointIcon1,
        title: "Accelerated Healing",
        description:
          "Vastly speed up the biological repair of micro tears in heavily used tendons and ligaments.",
      },
      {
        iconComponent: JointIcon2,
        title: "Non Surgical Relief",
        description:
          "Alleviate chronic joint discomfort entirely without relying on systemic painkillers or invasive procedures.",
      },
      {
        iconComponent: JointIcon3,
        title: "Restored Mobility",
        description:
          "Regain your full natural range of motion and eliminate frustrating joint clicking or morning stiffness.",
      },
      {
        iconComponent: JointIcon4,
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
    image: introImg,
    imageAlt: "Regenerative orthopedics",
  },
  whyChoose: {
    heading: "Why Choose Prime",
    image: whyChooseImg,
    imageAlt: "Prime joint rehabilitation consultation",
    reasons: [
      {
        number: "1",
        title: "Biological Repair",
        description:
          "WWe focus entirely on healing the actual tissue, not just masking the surface symptom.",
      },
      {
        number: "2",
        title: "Tech-Assisted Rehab",
        description:
          "We use strict data metrics to ensure you are loading muscles safely.",
      },
      {
        number: "3",
        title: "Surgery Alternative",
        description:
          "Our clinical protocols often significantly delay or avoid the need for surgery.",
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
          "The PRP injections saved my rotator cuff. I avoided surgery entirely and am back to lifting heavy pain-free.",
        name: "Anthony M.",
      },
      {
        quote:
          "The BPC-157 peptide is incredible. My chronic elbow tendonitis that bothered me for years cleared up in weeks.",
        name: "Justin W.",
      },
      {
        quote:
          "The tech-led rehab showed me exactly how my muscle imbalances were causing my knee pain. We fixed the root cause.",
        name: "Craig S.",
      },
    ],
  },
  faq: {
    heading: "Frequently Asked Questions",
    description:
      "Direct answers about regenerative orthopedics, PRP, peptides, and tech-led joint rehabilitation.",
    items: [
      {
        question:
          "My orthopedic doctor suggested surgery. Can these treatments fix my joint without going under the knife?",
        answer:
          "In many cases, yes. As long as the muscle or ligament tear isn't a total rupture, regenerative therapies like PRP and healing peptides can often stimulate the tissue enough to resolve the pain, restore function, and help you avoid surgery.",
      },
      {
        question:
          "Can I still lift weights or work out while I am undergoing these joint treatments?",
        answer:
          "We generally want you to keep moving to promote blood flow, but we will modify how you move. Our tech-led rehab ensures you can load the surrounding muscle to stay strong without grinding the healing joint.",
      },
      {
        question:
          "How is this approach different from just going to a regular Physical Therapy clinic?",
        answer:
          "Standard PT focuses almost entirely on movement exercises. We combine targeted exercise with biological acceleration (peptides and PRP). We don't just strengthen the surrounding muscle; we actively inject therapies to repair the damaged tissue itself.",
      },
      {
        question: "Do the PRP joint injections hurt?",
        answer:
          "There is some localized pressure during the injection, but we utilize local anesthetic to make the process very tolerable. Most patients say the profound long-term joint relief they get afterwards is more than worth the few seconds of mild discomfort.",
      },
      {
        question:
          "How soon can I return to heavy lifting after a PRP joint injection?",
        answer:
          "We strongly advise resting the injected joint from heavy, explosive loads for at least a few days to allow the biological matrix to set. We then guide you through a strategic, tech-led reloading phase over the next few weeks.",
      },
      {
        question:
          "Are BPC-157 healing peptides legal for drug-tested competitive athletes?",
        answer:
          "Regulations change constantly. While BPC-157 is widely used for rapid recovery, it is currently flagged by WADA and specific athletic commissions. We strictly review your competitive status before prescribing any peptide protocol.",
      },
      {
        question:
          "What specific joints or injuries respond best to these regenerative protocols?",
        answer:
          "We see exceptionally high success rates treating chronic rotator cuff tears, tennis elbow, patellar tendonitis, and mild to moderate osteoarthritis in the knees and hips where cartilage support is urgently needed.",
      },
    ],
  },
};

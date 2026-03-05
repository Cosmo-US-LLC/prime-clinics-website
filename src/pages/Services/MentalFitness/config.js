import desktop from "@/assets/images/services/services_health_hero/mental_health_desktop.webp";
import mobile from "@/assets/images/services/services_health_hero/mental_health_mobile.webp";
import introImg from "@/assets/images/services/services_intro/mental_intro.webp";
import whyChooseImg from "@/assets/images/services/whyChoose/why_choose.webp";
import membershipImg from "@/assets/images/services/prime_membership/prime_membership.webp";
import solutionImg1 from "@/assets/images/services/solutions_we/mental_card_1.webp";
import solutionImg2 from "@/assets/images/services/solutions_we/mental_card_2.webp";
import solutionImg3 from "@/assets/images/services/solutions_we/mental_card_3.webp";
import {
  MentalIcon1,
  MentalIcon2,
  MentalIcon3,
  MentalIcon4,
} from "@/utils/knowYourNumbersIcons";

export default {
  seo: {
    title: "Mental Fitness | Prime Clinics",
    description:
      "Strengthen your mind with evidence-based mental health and performance support.",
  },
  hero: {
    images: { desktop, mobile },
    title: "Mental Fitness",
    titleHighlight: "",
    description:
      "Sharpen your mind. Evidence-based protocols for focus, mood, and long-term brain health.",
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
  benefits: {
    heading: "Benefits of Mental Fitness",
    items: [
      {
        iconComponent: MentalIcon1,
        title: "Cognitive Clarity",
        description:
          "Eliminate brain fog completely and drastically improve your deep concentration on complex executive tasks.",
      },
      {
        iconComponent: MentalIcon2,
        title: "Stress Resilience",
        description:
          "Manage high stakes environments effortlessly without experiencing severe anxiety or long term burnout.",
      },
      {
        iconComponent: MentalIcon3,
        title: "Elevated Mood",
        description:
          "Regulate neural pathways for sustained daily motivation, positive drive, and stable emotional well-being.",
      },
      {
        iconComponent: MentalIcon4,
        title: "Neural Plasticity",
        description:
          "Rewire your brain for faster processing speed, improved memory retention, and heightened mental stamina.",
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
    image: introImg,
    imageAlt: "Mental fitness and cognitive immersion",
  },
  whyChoose: {
    heading: "Why Choose Prime",
    image: whyChooseImg,
    imageAlt: "Prime mental fitness consultation",
    reasons: [
      {
        number: "1",
        title: "Drug-Free Alternatives",
        description:
          "We utilize highly advanced magnetic stimulation to rewire the brain naturally and safely.",
      },
      {
        number: "2",
        title: "Integrated Psychology",
        description:
          "We pair biological treatments directly with advanced behavioral strategies.",
      },
      {
        number: "3",
        title: "Measurable Results",
        description:
          "We track symptom severity and cognitive metrics to prove objective improvement.",
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
          "The TMS therapy cleared the mental fog. My executive functioning and daily focus at work are sharper than ever.",
        name: "Richard G.",
      },
      {
        quote:
          "Balancing my testosterone completely changed my mental stamina. The afternoon crash is completely gone.",
        name: "Paul A.",
      },
      {
        quote:
          "The integrated psychology sessions gave me highly practical tools to handle severe executive burnout and stress.",
        name: "Stephen L.",
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
      "Straightforward answers about brain stimulation, neurostimulation, and hormone-driven cognitive optimization.",
    items: [
      {
        question: "Is the brain stimulation (TMS) similar to shock therapy?",
        answer:
          "Absolutely not. ECT (shock therapy) induces a seizure under anesthesia. TMS is completely non-invasive, using gentle, targeted magnetic pulses to wake up specific neurons. You remain awake, alert, and can drive yourself back to work immediately after.",
      },
      {
        question:
          "I am not clinically depressed, I just want to focus better at work. Is this for me?",
        answer:
          "Yes. While TMS is highly effective for depression, many high-level executives and athletes use these exact neural protocols purely for cognitive optimization to improve processing speed, memory, and mental stamina.",
      },
      {
        question: "Can optimizing my hormones really help my brain fog?",
        answer:
          "Yes. The brain is heavily populated with receptors for testosterone and estrogen. When these vital neurosteroid levels drop, cognitive processing physically slows down. Restoring them often lifts the brain fog better than caffeine or stimulants ever could.",
      },
      {
        question:
          "How do you actually measure if my brain function is improving?",
        answer:
          "We do not just go by feeling. We rigorously track symptom severity (sleep quality, anxiety levels, focus duration) and utilize clinical cognitive testing metrics to objectively show measurable improvements in your reaction time and working memory.",
      },
      {
        question:
          "Does the Exomind Neurostimulation treatment hurt or cause headaches?",
        answer:
          "TMS is a non-invasive procedure. You will hear a clicking sound and feel a tapping sensation on your scalp. While a mild tension headache can occasionally occur after the first session, it is temporary and highly manageable.",
      },
      {
        question:
          "How many TMS sessions are typically required to notice a cognitive shift?",
        answer:
          "Neuroplasticity takes consistency. While some patients feel increased mental clarity within the first week, a standard optimization protocol usually involves a structured series of brief sessions over 4 to 6 weeks for lasting results.",
      },
      {
        question:
          "Are my psychological assessments and cognitive data kept strictly private?",
        answer:
          "Absolutely. Your mental fitness data is protected under strict medical privacy laws. We maintain an elite level of discretion for all our executives, athletes, and high-profile clients.",
      },
    ],
  },
};

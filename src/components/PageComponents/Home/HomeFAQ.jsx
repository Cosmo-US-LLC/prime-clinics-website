import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

const FAQ_IMAGE =
  "https://www.figma.com/api/mcp/asset/257eb8ba-45fa-4495-83f6-df4b81d791e9";

const FAQ_ITEMS = [
  {
    question: "How can I get started with Prime Clinic?",
    answer:
      "Appointments are arranged to fit your professional schedule. Most sessions last 30–60 minutes.",
  },
  {
    question: "Is my privacy guaranteed?",
    answer:
      "Yes. All consultations and treatments are handled with strict clinical confidentiality.",
  },
  {
    question: "Are the treatments safe?",
    answer:
      "Absolutely. All protocols are physician-supervised and grounded in evidence-based medical practice.",
  },
  {
    question: "Can I combine multiple programs?",
    answer:
      "Yes. Our services are designed to be safely integrated to address multiple health and performance goals.",
  },
  {
    question: "How long before I see results?",
    answer:
      "Cognitive improvements can appear quickly, while physiological and performance changes typically evolve over 3–6 months.",
  },
  {
    question: "Are online consultations available?",
    answer:
      "Yes. Select sessions can be conducted via our secure telehealth platform for convenience and efficiency.",
  },
];

function HomeFAQ() {
  return (
    <section
      className="w-full bg-[#F9FAFB] px-4 py-12 md:px-12 md:py-20"
      aria-label="Frequently asked questions"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10 md:flex-row md:items-start md:gap-20">
        {/* Left: Heading + description + image */}
        <div className="flex flex-1 flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-[32px] md:text-[48px] font-bold leading-[40px] md:leading-[56px] text-[#040A16] uppercase m-0">
              Frequently Asked Questions
            </h2>
            <p className="font-sans text-[16px] leading-[24px] text-[#030712] m-0">
              Everything you need to know about our services, privacy, and how
              we support your transformation.
            </p>
          </div>
          <div className="relative h-[280px] w-full overflow-hidden rounded-2xl md:h-[400px]">
            <img
              src={FAQ_IMAGE}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Right: Accordion */}
        <div className="flex w-full flex-col gap-4 md:max-w-[640px] md:shrink-0">
          <Accordion
            type="single"
            collapsible
            defaultValue="item-0"
            className="w-full"
          >
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`item-${index}`}
                className="border border-[#F3F4F6] bg-white rounded-xl px-5 py-5 data-[state=open]:border-[#F3F4F6]"
              >
                <AccordionTrigger className="hover:no-underline [&>svg]:hidden group py-0">
                  <div className="flex w-full items-start justify-between gap-4">
                    <p className="font-sans text-[18px] md:text-[20px] font-bold leading-[26px] md:leading-[28px] text-[#2463D8] text-left flex-1">
                      {item.question}
                    </p>
                    <div className="shrink-0 mt-0.5 relative size-6 flex items-center justify-center">
                      <Plus className="absolute size-6 text-[#030712] [.group[data-state=open]_&]:hidden" />
                      <Minus className="absolute size-6 text-[#030712] hidden [.group[data-state=open]_&]:block" />
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-0">
                  <p className="font-sans text-[16px] leading-[24px] text-[#1F2937] m-0">
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default HomeFAQ;

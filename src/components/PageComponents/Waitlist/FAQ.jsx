import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

function FAQ({ 
  faqData = [], 
  defaultOpenIndex = 0, 
  heading = "Frequently Asked Questions", 
  headingHighlight = "Questions" 
}) {
  // Split heading to highlight a specific part
  const headingParts = heading.split(headingHighlight);
  const beforeHighlight = headingParts[0].trim();

  return (
    <section className="bg-[#F9FAFB] flex flex-col gap-12 items-center px-4 md:px-12 py-20 w-full">
      {/* Heading */}
      <h2 className="font-display text-[36px] md:text-[48px] font-bold leading-[44px] md:leading-[56px] text-[#040A16] text-center uppercase">
        {beforeHighlight}
        {beforeHighlight && " "}
        <span className="text-[#2463D8]">{headingHighlight}</span>
      </h2>

      {/* FAQ Accordion */}
      <div className="w-full max-w-[800px]">
        <Accordion
          type="single"
          collapsible
          defaultValue={faqData.length > 0 ? `item-${defaultOpenIndex}` : undefined}
          className="w-full flex flex-col gap-4"
        >
          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white border border-[#F3F4F6] rounded-xl px-5 py-5"
            >
              <AccordionTrigger className="hover:no-underline [&>svg]:hidden group">
                <div className="flex gap-6 items-start justify-between w-full">
                  <p
                    className={`font-sans text-lg md:text-xl font-bold leading-7 text-left flex-1 group-data-[state=open]:text-[#2463D8] ${
                      index === defaultOpenIndex ? "" : "text-[#030712]"
                    }`}
                  >
                    {faq.question}
                  </p>
                  <div className="shrink-0 mt-1 relative w-6 h-6 flex items-center justify-center">
                    <Plus className="absolute h-6 w-6 text-[#030712] [.group[data-state=open]_&]:hidden" />
                    <Minus className="absolute h-6 w-6 text-[#030712] hidden [.group[data-state=open]_&]:block" />
                  </div>
                </div>
              </AccordionTrigger>
              {faq.answer && (
                <AccordionContent className="pt-4 pb-0">
                  <p className="font-sans text-base font-normal leading-6 text-[#1F2937]">
                    {faq.answer}
                  </p>
                </AccordionContent>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default FAQ;

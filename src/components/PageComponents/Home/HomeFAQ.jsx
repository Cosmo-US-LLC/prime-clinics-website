import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { X, Minus } from "lucide-react";
import FAQ_IMAGE from "@/assets/images/home/faqs/faqs_image.webp";
import { generalFaqData } from "@/constants/generalFaqData";

function HomeFAQ({
  heading = "Frequently Asked Questions",
  description = "Everything you need to know about our services, privacy, and how we support your transformation.",
  items = generalFaqData,
}) {
  return (
    <section
      className="w-full bg-[#F9FAFB] py-12 md:py-20"
      aria-label="Frequently asked questions"
    >
      <div className="mx-auto flex max-w-[1280px] md:px-8 px-4 flex-col gap-10 md:flex-row md:items-start md:gap-20">
        {/* Left: Heading + description + image */}
        <div className="flex flex-1 flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h2 className="font-display heading-2 text-[#040A16] text-center md:text-left uppercase m-0">
              {heading}
            </h2>
            <p className="font-sans text-[16px] leading-[24px] text-[#030712] m-0 text-center md:text-left">
              {description}
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
        <div className="flex w-full flex-col gap-4 md:max-w-[520px] md:shrink-0">
          <Accordion
            type="single"
            collapsible
            defaultValue="item-0"
            className="w-full space-y-4"
          >
            {items.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`item-${index}`}
                className="border border-[#F3F4F6] bg-white rounded-xl  px-5 py-5 data-[state=open]:border-[#F3F4F6]"
              >
                <AccordionTrigger className="hover:no-underline [&>svg]:hidden group py-0">
                  <div className="flex w-full items-start justify-between gap-4">
                    <p className="font-sans text-[18px] md:text-[20px] font-bold leading-[26px] md:leading-[28px] text-[#2463D8] text-left flex-1">
                      {item.question}
                    </p>
                    <div className="shrink-0 mt-0.5 relative size-6 flex items-center justify-center">
                      <X className="absolute size-5 text-[#030712] [.group[data-state=open]_&]:hidden" />
                      <Minus className="absolute size-5 text-[#030712] hidden [.group[data-state=open]_&]:block" />
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-0">
                  <p className="font-sans text-[16px] font-normal leading-[24px] text-[#1F2937] m-0">
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

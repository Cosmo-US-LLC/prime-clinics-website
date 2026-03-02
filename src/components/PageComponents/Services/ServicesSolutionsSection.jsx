import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

/**
 * "Solutions We Provide" section — carousel of solution cards.
 * Each card: image, title, description, key benefits (tags).
 * Matches Figma 3187:16515. Same structure for all services, different content/images.
 */
function ServicesSolutionsSection({
  heading = "Solutions We Provide",
  cards = [],
}) {
  if (!cards.length) return null;

  return (
    <section
      className="w-full bg-[#F9FAFB] py-12 md:py-20"
      aria-label={heading}
    >
      <div className="mx-auto flex max-w-[1280px] flex-col gap-12 px-4 md:px-8">
        <div className="flex flex-col items-center justify-center">
          <h2 className="heading-2 m-0 max-w-[780px] uppercase text-center text-[#040A16]">
            {heading}
          </h2>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          className="relative w-full"
        >
          <CarouselContent className="-ml-4">
            {cards.map((card, index) => (
              <CarouselItem
                key={index}
                className="basis-full pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <article className="flex h-full flex-col gap-6 rounded-[8px] bg-white px-4 pb-4 pt-4 shadow-[0 0 12px 0 rgba(0, 0, 0, 0.05)]">
                  <div className="relative h-[280px] w-full shrink-0 overflow-hidden rounded-[8px]">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-4">
                    <div className="flex flex-col gap-3">
                      <h3 className="font-display m-0 text-[20px] font-bold uppercase leading-8 text-black md:text-[24px] md:leading-8">
                        {card.title}
                      </h3>
                      <p className="font-sans m-0 text-[16px] h-[150px] font-normal leading-6 text-[#0b0f19]">
                        {card.description}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="font-sans m-0 text-[16px] font-bold leading-6 text-[#2463D8]">
                        Key Benefits:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {card.benefits?.map((benefit, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center justify-center rounded-lg bg-[#F3F4F6] px-3 py-2 font-sans text-[14px] font-semibold leading-5 text-[#040A16]"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Desktop arrows (top-right), matching HomeTestimonials */}
          <CarouselPrevious className="hidden md:flex left-auto -top-16 right-16 translate-y-0 h-10 w-10 items-center justify-center rounded-full border border-[#D1D5DB] bg-white cursor-pointer text-[#4B5563] hover:text-white hover:bg-[#1a4fa8] hover:border-[#1a4fa8]" />
          <CarouselNext className="hidden md:flex right-4 -top-16 translate-y-0 h-10 w-10 items-center justify-center rounded-full border border-[#D1D5DB] bg-white cursor-pointer text-[#4B5563] hover:text-white hover:bg-[#1a4fa8] hover:border-[#1a4fa8]" />

          {/* Mobile arrows (below cards), matching HomeTestimonials */}
          <div className="mt-10 flex w-full items-center justify-center gap-4 md:hidden">
            <CarouselPrevious className="static h-10 w-10 items-center justify-center rounded-full border border-[#D1D5DB] bg-white cursor-pointer text-[#4B5563] hover:text-white hover:bg-[#1a4fa8] hover:border-[#1a4fa8]" />
            <CarouselNext className="static h-10 w-10 items-center justify-center rounded-full border border-[#D1D5DB] bg-white cursor-pointer text-[#4B5563] hover:text-white hover:bg-[#1a4fa8] hover:border-[#1a4fa8]" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export default ServicesSolutionsSection;

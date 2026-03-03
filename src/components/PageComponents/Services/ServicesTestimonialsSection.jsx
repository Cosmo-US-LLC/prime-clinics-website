import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

/**
 * "Proven Results. Real Stories" testimonials carousel for service pages.
 * Layout and arrows follow Figma 3187:16646 and HomeTestimonials/ServicesSolutionsSection.
 * Content is provided via per-service config.
 */
function ServicesTestimonialsSection({ heading, items = [] }) {
  if (!heading || !items.length) return null;

  return (
    <section
      className="w-full bg-white py-12 md:py-20"
      aria-label={heading}
    >
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8 px-4 md:gap-12 md:px-8">
        {/* Heading row */}
        <div className="flex items-center justify-between gap-4">
          <h2 className="heading-2 m-0 max-w-[800px] text-left uppercase text-[#040A16]">
            {heading}
          </h2>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          className="relative w-full"
        >
          <CarouselContent>
            {items.map((t, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <article className="flex h-full flex-col justify-between gap-10 rounded-[16px] bg-[#F9FAFB] p-6 shadow-[0px_0px_4px_rgba(255,255,255,0.15)]">
                  <div className="flex flex-col gap-4">
                    {/* Stars */}
                    <div className="flex gap-1 text-[#2463D8]">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <span style={{ fontSize: "24px" }} key={idx}>
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="font-sans m-0 text-[18px] md:text-[20px] font-normal leading-[28px] text-[#030712]">
                      “{t.quote}”
                    </p>
                  </div>
                  <p className="font-sans m-0 text-[18px] font-bold leading-[26px] text-[#040A16]">
                    {t.name}
                  </p>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Desktop arrows (top-right), matching HomeTestimonials / ServicesSolutionsSection */}
          <CarouselPrevious className="hidden md:flex left-auto -top-16 right-16 translate-y-0 h-10 w-10 items-center justify-center rounded-full border border-[#D1D5DB] bg-white cursor-pointer text-[#4B5563] hover:text-white hover:bg-[#1a4fa8] hover:border-[#1a4fa8]" />
          <CarouselNext className="hidden md:flex right-4 -top-16 translate-y-0 h-10 w-10 items-center justify-center rounded-full border border-[#D1D5DB] bg-white cursor-pointer text-[#4B5563] hover:text-white hover:bg-[#1a4fa8] hover:border-[#1a4fa8]" />

          {/* Mobile arrows (below cards) */}
          <div className="mt-10 flex w-full items-center justify-center gap-4 md:hidden">
            <CarouselPrevious className="static h-10 w-10 items-center justify-center rounded-full border border-[#D1D5DB] bg-white cursor-pointer text-[#4B5563] hover:text-white hover:bg-[#1a4fa8] hover:border-[#1a4fa8]" />
            <CarouselNext className="static h-10 w-10 items-center justify-center rounded-full border border-[#D1D5DB] bg-white cursor-pointer text-[#4B5563] hover:text-white hover:bg-[#1a4fa8] hover:border-[#1a4fa8]" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export default ServicesTestimonialsSection;


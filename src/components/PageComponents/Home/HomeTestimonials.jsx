import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote:
      "Prime Clinic provides a level of discretion and medical professionalism that is difficult to find elsewhere. The hormone optimization protocols have significantly improved my daily focus and energy levels.",
    name: "Legal Counsel",
    role: "Hormone Therapy",
    avatar:
      "https://www.figma.com/api/mcp/asset/dd9cb9c4-f621-49a9-8b66-573db1ad5b85",
  },
  {
    quote:
      "The diagnostic clarity provided by the DEXA scan changed how I approach my fitness. Seeing the actual data allowed me to stop guessing and start making measurable progress in my health.",
    name: "Financial Executive",
    role: "Performance Member",
    avatar:
      "https://www.figma.com/api/mcp/asset/f4ac81f4-2e97-4b33-af7a-65112dbbded1",
  },
  {
    quote:
      "The streamlined process and efficiency of the team respect the value of my time. Having a personalized roadmap based on my specific biomarkers has been an essential investment in my long-term vitality.",
    name: "Project Director",
    role: "Health Optimization",
    avatar:
      "https://www.figma.com/api/mcp/asset/762adb67-0c9f-4659-8f4c-5741094be086",
  },
];

function HomeTestimonials() {
  return (
    <section
      className="w-full bg-white px-4 md:px-[60px] py-12 md:py-20"
      aria-label="Testimonials"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8 md:gap-12">
        {/* Heading row */}
        <div className="flex flex-col gap-4 text-[#040A16]">
          <h2 className="font-display text-[32px] md:text-[48px] font-bold leading-[40px] md:leading-[56px] uppercase m-0">
            Real Stories from Prime Clinic Clients
          </h2>
          <p className="font-sans text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] text-[#4B5563] m-0">
            Hear from those who have transformed their health, performance, and
            confidence with us.
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{ align: "start", loop: true }}
          className="relative w-full"
        >
          <CarouselContent>
            {testimonials.map((t) => (
              <CarouselItem
                key={t.name + t.role}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <article className="flex h-full flex-col justify-between gap-8 rounded-[16px] bg-[#F9FAFB] p-6 shadow-[0px_0px_4px_rgba(255,255,255,0.15)]">
                  <div className="flex flex-col gap-4">
                    {/* Stars */}
                    <div className="flex gap-1 text-[#FBBF24]">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <span key={idx}>★</span>
                      ))}
                    </div>
                    <p className="font-sans text-[16px] md:text-[20px] leading-[24px] md:leading-[28px] text-[#030712] m-0">
                      “{t.quote}”
                    </p>
                  </div>

                  <div className="mt-2 flex items-center gap-4">
                    <div className="h-12 w-12 overflow-hidden rounded-full shadow-sm">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-sans text-[16px] font-semibold leading-[24px] text-[#040A16]">
                        {t.name}
                      </span>
                      <span className="font-sans text-[14px] leading-[20px] text-[#6B7280]">
                        {t.role}
                      </span>
                    </div>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* shadcn carousel arrows */}
          <CarouselPrevious className="hidden md:flex -left-6 md:-left-10 border-none bg-transparent text-[#9CA3AF] hover:bg-transparent hover:text-[#4B5563]" />
          <CarouselNext className="hidden md:flex -right-6 md:-right-10 border-none bg-[#2463D8] text-white hover:bg-[#1a4fa8]" />
        </Carousel>
      </div>
    </section>
  );
}

export default HomeTestimonials;


import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Avatar1 from "@/assets/images/home/testimonials/client_1.svg";
import Avatar2 from "@/assets/images/home/testimonials/client_2.svg";
import Avatar3 from "@/assets/images/home/testimonials/client_3.svg";

const testimonials = [
  {
    quote:
      "Prime Clinic provides a level of discretion and medical professionalism that is difficult to find elsewhere. The hormone optimization protocols have significantly improved my daily focus and energy levels.",
    name: "Legal Counsel",
    role: "Hormone Therapy",
    avatar: Avatar1,
  },
  {
    quote:
      "The diagnostic clarity provided by the DEXA scan changed how I approach my fitness. Seeing the actual data allowed me to stop guessing and start making measurable progress in my health.",
    name: "Financial Executive",
    role: "Performance Member",
    avatar: Avatar2,
  },
  {
    quote:
      "The streamlined process and efficiency of the team respect the value of my time. Having a personalized roadmap based on my specific biomarkers has been an essential investment in my long-term vitality.",
    name: "Project Director",
    role: "Health Optimization",
    avatar: Avatar3,
  },
  {
    quote:
      "Prime Clinic provides a level of discretion and medical professionalism that is difficult to find elsewhere. The hormone optimization protocols have significantly improved my daily focus and energy levels.",
    name: "Legal Counsel",
    role: "Hormone Therapy",
    avatar: Avatar1,
  },
  {
    quote:
      "The diagnostic clarity provided by the DEXA scan changed how I approach my fitness. Seeing the actual data allowed me to stop guessing and start making measurable progress in my health.",
    name: "Financial Executive",
    role: "Performance Member",
    avatar: Avatar2,
  },
  {
    quote:
      "The streamlined process and efficiency of the team respect the value of my time. Having a personalized roadmap based on my specific biomarkers has been an essential investment in my long-term vitality.",
    name: "Project Director",
    role: "Health Optimization",
    avatar: Avatar3,
  },
];

function HomeTestimonials() {
  return (
    <section
      className="w-full bg-white pt-12 md:pt-20 pb-4 md:pb-20"
      aria-label="Testimonials"
    >
      <div className="mx-auto flex max-w-[1280px] px-4 md:px-8 flex-col gap-8 md:gap-12">
        {/* Heading row */}
        <div className="flex flex-col gap-4 text-[#040A16]">
          <h2 className="heading-2 uppercase text-center md:text-left m-0 max-w-[780px]">
            Real Stories from Prime Clinic Clients
          </h2>
          <p className="font-sans text-[14px] text-center md:text-left md:text-[16px] leading-[22px] md:leading-[24px] text-[#040A16] m-0">
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
                    <div className="flex gap-1 text-[#2463D8]">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <span style={{ fontSize: "24px" }} key={idx}>
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="font-sans text-[18px] md:text-[20px] font-[500] leading-[24px] md:leading-[26px] text-[#030712] m-0">
                      “{t.quote}”
                    </p>
                  </div>

                  <div className="mt-2 flex items-center gap-4">
                    <div className="h-14 w-14 overflow-hidden rounded-full">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-sans text-[18px] md:text-[18px] font-[700] leading-[24px] md:leading-[26px] text-[#040A16]">
                        {t.name}
                      </span>
                      <span className="font-sans text-[16px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#6B7280]">
                        {t.role}
                      </span>
                    </div>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Desktop arrows (top-right) */}
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

export default HomeTestimonials;

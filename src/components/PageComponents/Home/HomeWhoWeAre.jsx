import React, { useEffect, useRef, useState } from "react";
import Slide1 from "@/assets/images/home/who_we_are/who_we_are_slide1.webp";
import Slide2 from "@/assets/images/home/who_we_are/who_we_are_slide2.webp";
import Slide3 from "@/assets/images/home/who_we_are/who_we_are_slide3.webp";

const SLIDES = [
  {
    id: "performance",
    title: "Performance",
    description:
      "We engineer bespoke treatment plans designed to upgrade mobility, increase drive, and sharpen mental clarity for peak operation.",
    image: Slide1,
  },
  {
    id: "longevity",
    title: "Longevity",
    description:
      "Extend your healthspan with preventative care, DNA analysis, and cellular optimization.",
    image: Slide2,
  },
  {
    id: "aesthetics",
    title: "Aesthetics",
    description:
      "Enhance your appearance with safe, medical-grade treatments designed for the modern individual.",
    image: Slide3,
  },
];

function HomeWhoWeAre() {
  const [activeId, setActiveId] = useState("performance");
  const [textActivated, setTextActivated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTextActivated(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-full bg-white py-12 md:py-20 overflow-hidden"
      aria-label="Who we are"
      style={{
        background:
          "linear-gradient(180deg, #FFF 50%, rgba(142, 176, 239, 0.50) 100%, #FFF 0%)",
      }}
    >
      {/* Background vertical gradient similar to Figma */}
      {/* <div className="pointer-events-none absolute inset-x-0 top-1/3 h-[60%] bg-linear-to-b from-white via-[#8EB0EF80] to-white" /> */}

      <div className="relative z-10 mx-auto flex max-w-[1280px] px-4 md:px-8 flex-col gap-10">
        {/* Heading + description */}
        <div className="max-w-[800px] flex flex-col gap-4">
          <p className="font-sans text-[14px] md:text-[20px] font-bold leading-[20px] md:leading-[28px] tracking-widest text-[#2463D8] uppercase m-0">
            Who We Are
          </p>
          <p className="font-sans text-[20px] md:text-[32px] leading-[30px] md:leading-[40px] m-0">
            <span
              className={`inline-block transform transition-all duration-700 ease-out ${
                textActivated
                  ? "text-black/60 opacity-100 translate-y-0"
                  : "text-[#030712]  translate-y-2"
              }`}
            >
              Prime Clinics is a performance and longevity clinic dedicated to
              bridging the gap between standard medical care and elite
              performance science. We empower individuals to take their
              performance, strength, and vitality to the next level through
              evidence-based health optimization.
            </span>
          </p>
        </div>

        {/* Accordion slider row */}
        <div className="flex flex-col gap-4 md:flex-row md:items-stretch md:gap-4">
          {SLIDES.map((slide) => {
            const isActive = slide.id === activeId;
            return (
              <button
                key={slide.id}
                type="button"
                onMouseEnter={() => setActiveId(slide.id)}
                onFocus={() => setActiveId(slide.id)}
                onClick={() => setActiveId(slide.id)}
                className={`group relative flex h-[360px] md:h-[500px] cursor-pointer flex-col justify-end overflow-hidden rounded-2xl p-4 text-left transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2463D8] ${
                  isActive
                    ? "md:flex-2 shadow-[0_24px_40px_rgba(15,23,42,0.5)]"
                    : "md:flex-1"
                }`}
              >
                {/* Image + gradient overlay */}
                <div className="pointer-events-none absolute inset-0">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div
                    className={`absolute inset-0 bg-linear-to-b from-transparent to-black/80 rounded-2xl`}
                  />
                </div>

                <div
                  className={`relative z-10 flex flex-col gap-2 text-white transition-all duration-300 ${
                    isActive ? "max-w-[520px]" : "max-w-full"
                  }`}
                >
                  <h3 className="heading-3 text-white uppercase m-0">
                    {slide.title}
                  </h3>
                  {isActive && (
                    <p className="font-sans h-[60px] overflow-hidden text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] m-0">
                      {slide.description}
                    </p>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HomeWhoWeAre;

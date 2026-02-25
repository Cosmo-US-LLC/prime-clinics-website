import React, { useEffect, useRef, useState } from "react";

const SLIDES = [
  {
    id: "performance",
    title: "Performance",
    description:
      "We engineer bespoke treatment plans designed to upgrade mobility, increase drive, and sharpen mental clarity for peak operation.",
    image:
      "https://www.figma.com/api/mcp/asset/3258e42d-8618-4bb5-b4ef-71d3759b187e",
  },
  {
    id: "longevity",
    title: "Longevity",
    description:
      "Extend your healthspan with preventative care, DNA analysis, and cellular optimization.",
    image:
      "https://www.figma.com/api/mcp/asset/966a682d-ccb8-4500-b9d7-91c94fb8be34",
  },
  {
    id: "aesthetics",
    title: "Aesthetics",
    description:
      "Enhance your appearance with safe, medical-grade treatments designed for the modern individual.",
    image:
      "https://www.figma.com/api/mcp/asset/63985161-dc3f-4f3d-b201-2b45d09225ee",
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
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white px-4 md:px-[60px] py-12 md:py-20 overflow-hidden"
      aria-label="Who we are"
    >
      {/* Background vertical gradient similar to Figma */}
      <div className="pointer-events-none absolute inset-x-0 top-1/3 h-[60%] bg-linear-to-b from-white via-[#8EB0EF80] to-white" />

      <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col gap-10">
        {/* Heading + description */}
        <div className="max-w-[800px] flex flex-col gap-4">
          <p className="font-sans text-[14px] md:text-[20px] font-bold leading-[20px] md:leading-[28px] tracking-widest text-[#2463D8] uppercase m-0">
            Who We Are
          </p>
          <p className="font-sans text-[20px] md:text-[32px] leading-[30px] md:leading-[40px] m-0">
            <span
              className={`transition-colors duration-500 ${
                textActivated ? "text-[#030712]" : "text-black/30"
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
                  <p className="font-display text-[18px] md:text-[24px] font-bold leading-[24px] md:leading-[32px] uppercase m-0">
                    {slide.title}
                  </p>
                  {isActive && (
                    <p className="font-sans text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] m-0">
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


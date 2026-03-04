import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ClinicStandardDesktopImg1 from "@/assets/images/medical_prescriptions/clinic_standard_desktop_1.webp";
import ClinicStandardDesktopImg2 from "@/assets/images/medical_prescriptions/clinic_standard_desktop_2.webp";
import ClinicStandardDesktopImg3 from "@/assets/images/medical_prescriptions/clinic_standard_desktop_3.webp";
import ClinicStandardMobileImg1 from "@/assets/images/medical_prescriptions/clinic_standard_mobile_1.webp";
import ClinicStandardMobileImg2 from "@/assets/images/medical_prescriptions/clinic_standard_mobile_2.webp";
import ClinicStandardMobileImg3 from "@/assets/images/medical_prescriptions/clinic_standard_mobile_3.webp";

const TABS = [
  {
    key: "licensed_clinicians",
    label: "Licensed Clinicians",
    title: "Licensed Clinicians",
    desc: "All assessments and prescription reviews are conducted by licensed clinicians.",
  },
  {
    key: "clinical_justification",
    label: "Clinical Justification",
    title: "Clinical Justification",
    desc: "We do not offer automatic approvals; treatment is provided only when supported by clear medical necessity.",
  },
  {
    key: "objective_care",
    label: "Objective Care",
    title: "Objective Care",
    desc: "Clinical decisions are based strictly on individual health factors, independent of external commercial interests.",
  },
];

const DESKTOP_IMAGES = {
  licensed_clinicians: ClinicStandardDesktopImg1,
  clinical_justification: ClinicStandardDesktopImg2,
  objective_care: ClinicStandardDesktopImg3,
};

const MOBILE_IMAGES = {
  licensed_clinicians: ClinicStandardMobileImg1,
  clinical_justification: ClinicStandardMobileImg2,
  objective_care: ClinicStandardMobileImg3,
};

function ClinicStandard() {
  const scrollToHero = () => {
    const heroSection = document.getElementById("hero-section");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [active, setActive] = useState(TABS[0]);
  const [api, setApi] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-rotate through cards every 3 seconds
  useEffect(() => {
    if (isHovered) return; // Pause on hover

    const autoRotate = setInterval(() => {
      setActive((current) => {
        const currentIndex = TABS.findIndex((tab) => tab.key === current.key);
        const nextIndex = (currentIndex + 1) % TABS.length;
        return TABS[nextIndex];
      });
    }, 3000); // Change every 3 seconds

    return () => clearInterval(autoRotate);
  }, [isHovered]);

  // Sync mobile carousel with active card
  useEffect(() => {
    if (api && !isHovered) {
      const currentIndex = TABS.findIndex((tab) => tab.key === active.key);
      api.scrollTo(currentIndex);
    }
  }, [active, api, isHovered]);
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1280px] w-full mx-auto px-4 md:px-8">
        <div className="flex flex-col gap-8 md:gap-10">
          {/* Heading with Description */}
          <div className="flex flex-col gap-4 items-center text-center max-w-[800px] mx-auto">
            <h2 className="heading-2 text-[#040A16] uppercase">
              Clinical Standards & Safety
            </h2>
            <p className="font-sans text-[16px] md:text-[18px] font-normal leading-[24px] md:leading-[26px] text-[#030712] max-w-[800px]">
              Your Safety is the Priority
            </p>
          </div>
        </div>

        <div className="relative py-[35px] overflow-hidden">
          <div className="relative w-full h-[420px] md:h-[500px] rounded-lg overflow-hidden">
            {/* Background image changes with active tab */}
            <div className="absolute inset-0 hidden md:block">
              <img
                src={DESKTOP_IMAGES[active.key]}
                alt="Clinical standards visual"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute inset-0 md:hidden">
              <img
                src={MOBILE_IMAGES[active.key]}
                alt="Clinical standards visual"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute bottom-0 left-0 w-full px-4 pb-3">
              {/* Desktop Layout - Flex Grid */}
              <div
                className="hidden md:flex gap-3"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {TABS.map((tab) => {
                  const isActive = active.key === tab.key;

                  return (
                    <div
                      key={tab.key}
                      onMouseEnter={() => setActive(tab)}
                      className="flex-1 cursor-pointer h-[120px] flex items-end"
                    >
                      {/* Card */}
                      <div
                        className={`
                                        w-full bg-white px-4 py-3 transition-all duration-100 ease-in-out
                                        shadow-[0_4px_14px_rgba(0,0,0,0.08)]
                                        border rounded-[4px] overflow-hidden
                                        ${isActive ? "h-[130px]" : "h-[65px] border-transparent"}
                                        `}
                      >
                        {/* Title */}
                        <h4
                          className={`font-display font-bold text-[24px] uppercase
                                            ${isActive ? "text-[#2463D8]" : "text-black"}
                                        `}
                        >
                          {tab.label}
                        </h4>

                        {/* Description (active only) */}
                        {isActive && (
                          <p className="font-sans text-[16px] text-black mt-1 leading-[20px]">
                            {tab.desc}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Mobile Layout - Carousel */}
              <div
                className="md:hidden"
                onTouchStart={() => setIsHovered(true)}
                onTouchEnd={() => setIsHovered(false)}
              >
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                    dragFree: true,
                  }}
                  setApi={setApi}
                  className="w-full"
                >
                  <CarouselContent className="-ml-2">
                    {TABS.map((tab, index) => {
                      const isActive = active.key === tab.key;

                      const handleClick = () => {
                        if (!isActive && api) {
                          api.scrollTo(index);
                        }
                        setActive(tab);
                      };

                      return (
                        <CarouselItem
                          key={tab.key}
                          className="pl-2 basis-[85%] sm:basis-[70%]"
                          onClick={handleClick}
                        >
                          <div className="cursor-pointer h-[140px] flex items-end">
                            {/* Card */}
                            <div
                              className={`
                                                    w-full bg-white px-4 py-3 transition-all duration-100 ease-in-out
                                                    shadow-[0_4px_14px_rgba(0,0,0,0.08)]
                                                    border rounded-[4px] overflow-hidden
                                                    ${isActive ? "h-[140px]" : "h-[65px] border-transparent"}
                                                    `}
                            >
                              {/* Title */}
                              <h4
                                className={`font-display font-bold text-[20px] sm:text-[24px] uppercase
                                                        ${isActive ? "text-[#2463D8]" : "text-black"}
                                                    `}
                              >
                                {tab.label}
                              </h4>

                              {/* Description (active only) */}
                              {isActive && (
                                <p className="font-sans text-[14px] sm:text-[16px] text-black mt-1 leading-[20px]">
                                  {tab.desc}
                                </p>
                              )}
                            </div>
                          </div>
                        </CarouselItem>
                      );
                    })}
                  </CarouselContent>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClinicStandard;

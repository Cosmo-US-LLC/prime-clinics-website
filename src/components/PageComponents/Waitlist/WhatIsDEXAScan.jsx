import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BodyFatPercentageImage from "@/assets/images/waitlist/dexa_scan/scan_image1.webp";
import LeanMuscleMassImage from "@/assets/images/waitlist/dexa_scan/scan_image2.webp";
import VisceralFatImage from "@/assets/images/waitlist/dexa_scan/scan_image3.webp";
// import BoneDensityImage from "@/assets/images/waitlist/dexa_scan/scan_image4.webp";

function WhatIsDEXAScan() {
  const cards = [
    {
      title: "Body Fat Percentage",
      description: "Total body fat and exactly where it is stored.",
      image: BodyFatPercentageImage,
    },
    {
      title: "Lean Muscle Mass",
      description: "Measurement of muscle in each arm, leg, and your torso.",
      image: LeanMuscleMassImage,
    },
    {
      title: "Visceral Fat",
      description: 'The dangerous "hidden" fat around your organs that impacts hormones.',
      image: VisceralFatImage,
    },
    {
      title: "Bone Density",
      description: "Critical data for long-term health and injury prevention.",
      image: null,
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-[1280px] w-full mx-auto px-4 md:px-8">
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full"
        >
          <div className="flex flex-col gap-8 md:gap-10">
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
            
              <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left max-w-[736px]">
                <h2 className="font-display text-[32px] md:text-[48px] font-bold leading-[40px] md:leading-[56px] text-[#040A16] uppercase">
                  What is a{" "}
                  <span className="text-[#2463D8]">DEXA Scan?</span>
                </h2>
                <p className="font-sans text-[16px] md:text-[18px] font-normal leading-[24px] md:leading-[26px] text-[#030712]">
                  A DEXA (Dual-Energy X-ray Absorptiometry) scan is the gold standard medical imaging test for measuring body composition and bone density using low-dose X-ray technology.
                </p>
              </div>

              {/* Right Side - Navigation Arrows */}
              <div className="flex gap-4 items-center shrink-0">
                <CarouselPrevious className="static top-auto left-auto right-auto rounded-full w-[65px] h-[65px] border-[#030712] hover:bg-[#f9fafb]" />
                <CarouselNext className="static top-auto left-auto right-auto rounded-full w-[65px] h-[65px] border-[#030712] hover:bg-[#f9fafb]" />
              </div>
            </div>

            {/* Cards Container */}
            <div className="flex flex-col gap-8">
              {/* Carousel Content */}
              <CarouselContent className="-ml-2 md:-ml-4">
                {cards.map((card, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-2 md:pl-4 basis-full md:basis-[calc(50%-1rem)] lg:basis-[calc(33.333%-1rem)] xl:basis-[380px]"
                  >
                    <div className="flex flex-col h-[500px] justify-end relative rounded-lg overflow-hidden">
                      {/* Background Image */}
                      <img
                        src={card.image}
                        alt={card.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />

                      {/* Content Card */}
                      <div className="relative z-10 bg-white p-4 m-2 rounded">
                        <div className="flex flex-col gap-1">
                          <h3 className="font-display text-[20px] md:text-[24px] font-bold leading-[28px] md:leading-[32px] text-[#2463D8] uppercase">
                            {card.title}
                          </h3>
                          <p className="font-sans text-[14px] md:text-[16px] font-normal leading-[20px] md:leading-[22px] text-[#000]">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* CTA Section */}
              <div className="flex flex-col gap-3.5 items-center justify-center">
                <button className="btn-primary">
                  Claim My Free DEXA Scan
                </button>
                <p className="font-sans text-sm font-semibold leading-5 text-[#030712]">
                  <span className="font-semibold">Only 50</span>{" "}
                  <span className="font-normal">spots available</span>
                </p>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export default WhatIsDEXAScan;

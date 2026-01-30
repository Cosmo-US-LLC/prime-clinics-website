import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import physicianIntake from "@/assets/images/WinaFree$300/FeaturedCards/physician_intake.webp";
import dexaScan from "@/assets/images/WinaFree$300/FeaturedCards/dexa_scan.webp";
import physicalAssessment from "@/assets/images/WinaFree$300/FeaturedCards/physical_assessment.webp";
import resultsReview from "@/assets/images/WinaFree$300/FeaturedCards/results_review.webp";

function FeaturedCards() {
  const [api, setApi] = React.useState(null);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Auto-scroll functionality
  React.useEffect(() => {
    if (!api || isHovered) return;

    const autoScroll = setInterval(() => {
      const currentIndex = api.selectedScrollSnap();
      const lastIndex = api.scrollSnapList().length - 1;

      if (currentIndex === lastIndex) {
        // Go back to first slide
        api.scrollTo(0);
      } else {
        // Go to next slide
        api.scrollNext();
      }
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(autoScroll);
  }, [api, isHovered]);

  const features = [
    {
      image: physicianIntake,
      title: "10-Minute Physician Intake",
      description:
        "A focused conversation with a Prime physician to review your health history, lifestyle, and performance goals so the assessment is tailored specifically to your body and objectives.",
    },
    {
      image: dexaScan,
      title: "15-Minute DEXA Body Composition Scan",
      description:
        "A gold-standard scan that accurately measures muscle mass, body fat, and bone density to establish a true baseline and reveal risks or opportunities unseen by standard measurements.",
    },
    {
      image: physicalAssessment,
      title: "60-Minute Physical Longevity Assessment",
      description:
        "A comprehensive evaluation of strength, endurance, mobility, balance, and movement quality to identify performance limitations and early signs of physical decline.",
    },
    {
      image: resultsReview,
      title: "35-Minute Physician Results Review",
      description:
        "A detailed review of your results with a physician, translating your data into a personalized plan to improve performance, resilience, and long-term health.",
    },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-[1280px] w-full mx-auto px-4 md:px-8">
        <div className="flex flex-col gap-8 md:gap-10">
          {/* Heading with Description */}
          <div className="flex flex-col gap-4 items-center text-center max-w-[900px] mx-auto">
            <h2 className="font-[Oswald] text-[32px] md:text-[48px] font-bold leading-[40px] md:leading-[56px] text-[#040A16] uppercase">
              <span className="text-[#2463D8]">What is the $300 DEXA</span>
              {` + Performance and Longevity Assessment?`}
            </h2>
            <p className="font-[Manrope] text-[16px] md:text-[18px] font-normal leading-[24px] md:leading-[26px] text-[#1F2937] max-w-[900px]">
              This 2-hour physician-led session gives you actionable insights
              into your body, strength, biomarker, and overall longevity. It
              provides a clear roadmap for improving performance, health, and
              vitality without taking up your whole day.
            </p>
          </div>

          {/* Carousel Section - Both Mobile and Desktop */}
          <div className="flex flex-col gap-5 w-full">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: false,
              }}
              className="w-full"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {features.map((feature, index) => (
                  <CarouselItem 
                    key={index} 
                    className="pl-2 md:pl-4 basis-[85%] sm:basis-[70%] md:basis-[40%]"
                  >
                    <div className="bg-white flex flex-col gap-4 pb-6 pt-2 px-2 rounded-2xl shadow-[0 0 16px 0 rgba(0, 0, 0, 0.10)] border border-[#E5E7EB]">
                      <div className="h-[220px] w-full rounded-lg overflow-hidden">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col gap-2 px-2">
                        <h3 className="font-[Oswald] text-[20px] font-bold leading-[28px] text-[#040A16] uppercase">
                          {feature.title}
                        </h3>
                        <p className="font-[Manrope] text-[14px] font-normal leading-[20px] text-[#040A16]">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Progress Bar - All Screen Sizes */}
            <div className="w-full bg-[#E5E7EB] h-2 rounded-full overflow-hidden mt-6">
              <div
                className="bg-[#2463D8] h-full rounded-full transition-all duration-300"
                style={{
                  width: `${((current + 1) / count) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col items-center gap-4">
            <button className="btn-primary w-full md:w-auto whitespace-nowrap py-5 px-8 md:py-4 md:px-6">
              Claim My Assessment Spot
            </button>
            <p className="font-[Manrope] text-center font-normal text-[14px] leading-[20px]">
              Limited to <span className="font-semibold">5 winners</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedCards;

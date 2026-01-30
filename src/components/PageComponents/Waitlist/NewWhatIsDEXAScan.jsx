import React, {useState} from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

function NewWhatIsDEXAScan() {
    const TABS = [
        {
        key: "bodyfat",
        label: "BODY FAT PERCENTAGE",
        title: "Body Fat Percentage",
        desc: "Total body fat and exactly where it is stored.",
        },
        {
        key: "muscle",
        label: "LEAN MUSCLE MASS",
        title: "Lean Muscle Mass",
        desc: "Measurement of muscle in each arm, leg, and your torso.",
        },
        {
        key: "visceral",
        label: "VISCERAL FAT",
        title: "Visceral Fat",
        desc: "The dangerous hidden fat around your organs that impacts hormones.",
        },
        {
        key: "bone",
        label: "BONE DENSITY",
        title: "Bone Density",
        desc: "Critical data for long-term health and injury prevention.",
        },
    ];
    const [active, setActive] = useState(TABS[0]);
    const [api, setApi] = useState(null);
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-[1280px] w-full mx-auto px-4 md:px-8">
            <div className="flex flex-col gap-8 md:gap-10">
                {/* Heading with Description */}
                <div className="flex flex-col gap-4 items-center text-center max-w-[800px] mx-auto">
                    <h2 className="font-display text-[32px] md:text-[48px] font-bold leading-[40px] md:leading-[56px] text-[#040A16] uppercase">
                        <span className="text-[#2463D8]">Knowing Your Numbers</span>
                        {" "}
                        Is <br className="hidden md:block" />the First Step to Changing Them
                    </h2>
                    <p className="font-sans text-[16px] md:text-[18px] font-normal leading-[24px] md:leading-[26px] text-[#030712] max-w-[800px]">
                        A scale only tells you your weight. A DEXA scan reveals what you’re made of. Understand your body composition with low-dose X-ray technology, the same method used by pro athletes.
                    </p>
                </div>
            </div>

            <div className="relative py-[35px] overflow-hidden">
                <div className="relative w-full h-[420px] md:h-[600px] rounded-lg DEXA_scan_new object-cover">
                    <div className="absolute bottom-0 left-0 w-full px-4 pb-3">
                        {/* Desktop Layout - Flex Grid */}
                        <div className="hidden md:flex gap-3">
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
                                        ${isActive ? "h-[120px]" : "h-[65px] border-transparent"}
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
                                        <p className="font-sans text-[16px] text-[#000] mt-1 leading-[20px]">
                                            {tab.desc}
                                        </p>
                                        )}
                                    </div>
                                </div>
                            );
                            })}
                        </div>

                        {/* Mobile Layout - Carousel */}
                        <div className="md:hidden">
                            <Carousel
                                opts={{
                                    align: "start",
                                    loop: false,
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
                                            <div className="cursor-pointer h-[120px] flex items-end">
                                                {/* Card */}
                                                <div
                                                    className={`
                                                    w-full bg-white px-4 py-3 transition-all duration-100 ease-in-out
                                                    shadow-[0_4px_14px_rgba(0,0,0,0.08)]
                                                    border rounded-[4px] overflow-hidden
                                                    ${isActive ? "h-[120px]" : "h-[65px] border-transparent"}
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
                                                    <p className="font-sans text-[14px] sm:text-[16px] text-[#000] mt-1 leading-[20px]">
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
            

            {/* CTA Section */}
            <div className="flex flex-col gap-3.5 items-center justify-center">
                <button className="btn-primary">
                    Enter to Win a Free Scan
                </button>
                <p className="font-sans text-sm font-normal leading-5 text-[#030712]">
                    <span className="font-extrabold">Only</span>{" "}
                    <span className="font-extrabold">50</span>{" "}
                    <span className="font-normal">spots available</span>
                </p>
            </div>
        </div>
    </section>
  );
}

export default NewWhatIsDEXAScan;

import React from "react";

function HowItWorksWin() {
    const scrollToHero = () => {
        const heroSection = document.getElementById('hero-section');
        if (heroSection) {
            heroSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const steps = [
        {
            id: 1,
            title: "ENTER YOUR EMAIL",
            desc: "Submit your email below to secure your entry and gain priority access to our opening schedule.",
        },
        {
            id: 2,
            title: "THE LUCKY DRAW",
            desc: "Our system will randomly select 50 winners from the entry pool. Every person who signs up has an equal chance to win.",
        },
        {
            id: 3,
            title: "WINNER NOTIFICATION",
            desc: "Winners will receive a digital voucher 15 days before our official launch. Use it to book your priority scan as soon as our calendar opens.",
        },
    ];
    return (
        <section className="w-full bg-white md:bg-white py-16 md:py-20">
            <div className="max-w-[1280px] w-full mx-auto px-4 md:px-8">
                <div className="flex flex-col gap-8 md:gap-10">
                    {/* Heading with Description */}
                    <div className="flex flex-col gap-4 items-center text-center max-w-[800px] mx-auto">
                        <h2 className="font-display text-[32px] md:text-[48px] font-bold leading-[40px] md:leading-[56px] text-[#040A16] uppercase">
                            <span className="md:hidden">HOW IT{" "}<span className="text-[#2463D8]">WORKS</span></span>
                            <span className="hidden md:inline">How it{" "}<span className="text-[#2463D8]">Works</span></span>
                        </h2>
                    </div>
                </div>

                {/* Mobile: White Card Container */}
                <div className="md:hidden pt-12  px-4 rounded-lg">
                    <div className="bg-white rounded-lg">
                        <div className="relative flex flex-col gap-8">
                            {/* Dashed vertical connector line */}
                            <div className="absolute left-[20px] max-h-[270px] top-[40px] bottom-[40px] 
                            w-[2px] border-l-2 border-dashed border-[#000]" />

                            {steps.map((step, index) => (
                                <div key={step.id} className="relative flex flex-row items-start gap-4">
                                    {/* Number box */}
                                    <div className="relative z-10 flex-shrink-0 w-[40px]
                                     h-[40px] flex items-center justify-center rounded-md 
                                     border-2 border-[#000] bg-white md:text-[20px] text-[16px] 
                                     font-bold text-[#000]">
                                        {String(step.id).padStart(2, '0')}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 flex flex-col gap-3 pt-2">
                                        {/* Title */}
                                        <h3 className="font-display leading-[110%] text-[20px] 
                                        font-bold uppercase text-[#0B0F19]">
                                            {step.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="font-sans text-[14px] text-[#0E2856] leading-[22px]">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Section inside card */}
                        {/* <div className="flex flex-col max-w-[234px] mx-auto gap-3.5 items-center justify-center mt-8 pt-6
                         ">
                            <button className="btn-primary w-full">
                                Enter to Win a Free Scan
                            </button>
                            <p className="font-sans text-sm font-normal leading-5 text-[#030712]">
                                <span className="font-extrabold">Only</span>{" "}
                                <span className="font-extrabold">50</span>{" "}
                                <span className="font-normal">spots available</span>
                            </p>
                        </div> */}
                    </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:block relative py-20">
                    <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 items-start">
                        {/* Connector line (desktop) */}
                        <div className="hidden md:block absolute top-[40px] left-[15%] right-[15%] h-[2px] bg-[#2463D8]/20" />

                        {steps.map((step, index) => (
                            <div key={step.id} className="relative flex flex-col items-center text-center">
                                {/* Number box */}
                                <div
                                    className={`w-[80px] h-[80px] flex items-center justify-center rounded-md border text-[24px] font-bold mb-4
                                            ${step.id === 1 || step.id === 3
                                            ? "border-[#2463D8] text-[#2463D8] bg-white shadow-[0_10px_15px_-3px_rgba(36,99,216,0.20),0_4px_6px_-4px_rgba(36,99,216,0.20)]"
                                            : step.id === 2
                                                ? "border-[#E5E7EB] text-[#9CA3AF] bg-white shadow-[0_10px_15px_-3px_rgba(0,0,0,0.10),0_4px_6px_-4px_rgba(0,0,0,0.10)]"
                                                : "border-[#E5E7EB] text-[#9CA3AF]"
                                        }
                                    `}
                                >
                                    {step.id}
                                </div>

                                {/* Title */}
                                <h3 className="font-display text-[20px] pt-[4px] font-bold uppercase text-[#111827] mb-2">
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p className="font-sans text-[14px] md:text-[14px] text-[#4B5563] leading-[22px] max-w-[330px]">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Desktop CTA Section */}
                <div className="flex flex-col gap-3.5 items-center justify-center mt-12 md:mt-0">
                    <button className="btn-primary" onClick={scrollToHero}>
                    Claim My Assessment Spot
                    </button>
                    <p className="font-sans text-sm font-normal leading-5 text-[#030712]">
                    <span className="font-normal">Limited to</span> {" "}
                        <span className="font-extrabold">5</span>{" "}
                        <span className="font-extrabold">winners</span>{" "}
                       
                    </p>
                </div>
            </div>
        </section>
    );
}

export default HowItWorksWin;

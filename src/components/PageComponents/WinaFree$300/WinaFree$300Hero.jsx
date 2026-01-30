import React from "react";
import ZapIcon from "@/assets/images/waitlist/DEXA_hero/zap.svg";
import WinForm from "./WinForm";

function WinaFree$300Hero() {
  return (
    <section id="hero-section" className="relative w-full h-[1040px] md:h-[770px] Wina_Free_hero overflow-hidden flex items-end justify-start">
      <div className="relative z-20 w-full py-12 md:py-16 lg:py-20 px-4 md:px-8 max-w-[1280px] mx-auto">
        <div className="flex flex-col h-full lg:flex-row gap-8 lg:gap-6 items-start 
        md:items-center justify-between">
          {/* Left Content */}
          <div className="flex flex-col gap-6 w-full h-full max-w-full md:max-w-[590px]">
            <div className="flex flex-col gap-4">
              <h1 className="font-[Oswald] text-[42px] md:text-[56px] lg:text-[64px] font-bold leading-[50px] md:leading-[64px] text-white uppercase m-0 drop-shadow-[0px_0px_4px_rgba(0,0,0,0.25)] tracking-normal">
                <span className="bg-linear-to-r from-[#2463D8] via-[#60A5FA] to-[#BFDBFE] bg-clip-text text-transparent">
                  Win a Free $300{" "}
                </span>
                DEXA + Performance and Longevity Assessment
              </h1>
              <p className="font-[Manrope] text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[24px] md:leading-[26px] lg:leading-[28px] text-white m-0">
                A 2-hour physician-led session including a DEXA body scan, physical longevity testing, and personalized performance insights.
              </p>
            </div>
             
          </div>

          {/* Right Form */}
          <div className="w-full lg:w-auto lg:shrink-0 md:min-w-[500px]">
            <WinForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WinaFree$300Hero;

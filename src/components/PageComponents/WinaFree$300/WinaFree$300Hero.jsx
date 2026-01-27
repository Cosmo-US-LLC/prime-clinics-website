import React from "react";
import { Zap } from "lucide-react";
import ZapIcon from "@/assets/images/waitlist/DEXA_hero/zap.svg";

function WinaFree$300Hero() {
  return (
    <section className="relative w-full h-[640px] md:h-[700px] Wina_Free_hero overflow-hidden flex items-end justify-start">
      <div className="relative z-20 w-full py-12 md:py-20 px-4 md:px-8 max-w-[1280px] mx-auto">
        <div className="flex flex-col gap-6 max-w-full md:max-w-[610px]">
         
          <div className="flex flex-col gap-4">
            <h1 className="font-[Oswald] text-[42px] md:text-[64px] font-bold leading-[56px] md:leading-[72px] text-white uppercase m-0 max-w-[585px] drop-shadow-[0px_0px_4px_rgba(0,0,0,0.25)] tracking-normal">
              
              <span className="bg-gradient-to-r from-[#2463D8] via-[#60A5FA] to-[#BFDBFE] bg-clip-text text-transparent">
               Win a Free $300 {" "}
              </span>
              DEXA + Performance and Longevity Assessment
            </h1>
            <p className="font-[Manrope] text-[18px] md:text-[20px] font-normal leading-[26px] md:leading-[28px] text-[#fff] m-0">
              A 2-hour physician-led session including a DEXA body scan, physical longevity testing, and personalized performance insights.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-3 md:gap-6 items-stretch md:items-center">
            <button className="btn-primary w-full md:w-auto whitespace-nowrap py-5 px-8 md:py-4 md:px-6">
              Claim My Assessment Spot
            </button>
            
            <div className="flex gap-3 items-center py-2 px-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg w-full md:w-auto justify-center md:justify-start">
              <img src={ZapIcon} alt="Zap Icon" className="text-[#2463D8] shrink-0 drop-shadow-[0_0_2px_rgba(36,99,216,0.5)]"  />
              <div className="flex flex-col gap-0.5">
                <span className="font-[Manrope] text-xs md:text-sm font-bold md:font-semibold leading-4 md:leading-5 text-white">Limited Offers</span>
                <span className="font-[Manrope] text-[10px] md:text-xs font-normal leading-[18px] text-white">Only 50 spots available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WinaFree$300Hero;

import React from "react";
import { Zap } from "lucide-react";

function DEXAScanHero() {
  return (
    <section className="relative w-full h-[640px] md:h-[700px] DEXA_scan_hero overflow-hidden flex items-end justify-start">
      <div className="relative z-20 w-full py-12 md:py-20 px-4 md:px-8 max-w-[1280px] mx-auto">
        <div className="flex flex-col gap-6 max-w-full md:max-w-[680px]">
         
          <div className="flex flex-col gap-4">
            <h1 className="font-display text-[42px] md:text-[64px] font-bold leading-[56px] lg:leading-[72px] text-white uppercase m-0 drop-shadow-[0px_0px_4px_rgba(0,0,0,0.25)] tracking-[2px] md:tracking-normal">
              Get a{" "}
              <span className="bg-gradient-to-r from-[#2463D8] via-[#60A5FA] to-[#BFDBFE] bg-clip-text text-transparent">
                Free $145 {" "}
              </span>
              DEXA Body Scan
            </h1>
            <p className="font-sans text-[16px] md:text-[20px] font-normal leading-[26px] md:leading-7 text-[#fff] m-0">
              Join the Prime Clinics waitlist today and secure one of 50 
              complimentary DEXA scans. Gain gold-standard insights into your 
              body composition, biomarkers, and performance potential.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-6 items-stretch md:items-center">
            <button className="btn-primary w-full md:w-auto whitespace-nowrap py-5 px-8 md:py-4 md:px-6">
              Claim My Free DEXA Scan
            </button>
            
            {/* Limited Offer Badge */}
            <div className="flex gap-3 items-center py-2.5 px-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg w-full md:w-auto justify-center md:justify-start">
              <Zap className="text-[#2463D8] shrink-0 drop-shadow-[0_0_2px_rgba(36,99,216,0.5)]" size={16} />
              <div className="flex flex-col gap-0.5">
                <span className="font-sans text-xs md:text-sm font-bold md:font-semibold leading-4 md:leading-5 text-white">Limited Offers</span>
                <span className="font-sans text-[10px] md:text-xs font-normal leading-[18px] text-white">Only 50 spots available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DEXAScanHero;

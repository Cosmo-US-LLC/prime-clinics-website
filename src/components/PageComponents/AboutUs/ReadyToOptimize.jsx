import React from "react";
import ReadyToOptimizeDesktopBg from '@/assets/images/AboutUs/ReadyToOptimizeBg.webp'
import ReadyToOptimizeMobileBg from "@/assets/images/AboutUs/ReadyToOptimizeMobileBg.webp"
 
function ReadyToOptimize() {
  return (
    <section className="w-full py-2 md:py-2">
      <div className="max-w-[full] mx-auto px-4 md:px-2">
        
        <div className="relative rounded-[16px] w-full h-[530px] md:h-[550px] overflow-hidden">

          {/* Background Image */}
          <img
                src={ReadyToOptimizeMobileBg}
                alt="Join Prime Clinical Team"
                className="absolute inset-0 w-full h-full object-cover md:hidden"
            />

            <img
                src={ReadyToOptimizeDesktopBg}
                alt="Join Prime Clinical Team"
                className="hidden md:block absolute inset-0 w-full h-full object-cover"
            />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col max-w-[760px] mx-auto items-center justify-center text-center px-6 ">

            <h2 className="heading-2 text-[#ffff] uppercase mb-5">
                Ready to Optimize?
            </h2>

            <p className="font-sans text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] text-[#ffff] mb-7"> 
                Get The Ultimate Blueprint For Peak Health             
            </p>

            <button type="button" className="inline-flex btn-primary w-fit">
                Start Your Journey 
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ReadyToOptimize;
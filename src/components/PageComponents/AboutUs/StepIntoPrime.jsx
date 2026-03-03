import React from "react";
import StepIntoPrimeDesktop from "@/assets/images/AboutUs/StepIntoPrimeDesktop.webp"
import StepIntoPrimeMobile from "@/assets/images/AboutUs/StepIntoPrimeMobile.webp"
 
function StepIntoPrime() {
  return (
    <section className="w-full bg-[#ffff] py-16 md:py-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        
        <div className="relative rounded-[16px] w-full h-[630px] md:h-[500px] overflow-hidden">

          {/* Background Image */}
          <img
                src={StepIntoPrimeMobile}
                alt="Join Prime Clinical Team"
                className="absolute inset-0 w-full h-full object-cover md:hidden"
            />

            <img
                src={StepIntoPrimeDesktop}
                alt="Join Prime Clinical Team"
                className="hidden md:block absolute inset-0 w-full h-full object-cover"
            />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col w-full mx-auto items-start justify-items-start md:justify-center text-left pt-8 md:pt-0 px-6 md:px-10 ">

            <h2 className="heading-2 text-[#040A16] uppercase mb-5">
                Step Into Prime
            </h2>

            <p className="max-w-[580px] font-sans text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] text-[#1F2937] mb-7"> 
                READY TO ENGINEER YOUR OPTIMAL BIOLOGICAL STATE? Connect with our elite team to build your personalized blueprint and reclaim your peak.             
            </p>

            <button type="button" className="inline-flex btn-primary w-fit">
                Begin Assessment
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default StepIntoPrime;

import React from "react";

function ReadytoReclaim() {
  const scrollToHero = () => {
    const heroSection = document.getElementById('hero-section');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="relative w-full h-[600px] dont_train_in_the_dark_win overflow-hidden flex">
      <div className="relative z-10 max-w-[1280px] w-full mx-auto py-6 px-4 md:px-8 flex md:items-center items-end justify-start">
        <div className="bg-white max-w-[640px] rounded-lg shadow-[0px_0px_24px_0px_rgba(0,0,0,0.05)] p-8 flex flex-col gap-6">
          {/* Heading */}
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-[32px] text-center md:text-left md:text-[48px] font-bold leading-[44px] md:leading-[56px] text-[#040A16] uppercase">
             Ready to  <span className="text-[#2463D8]">Reclaim Your Prime?</span>
            </h2>
            <p className="font-[Manrope] text-[16px] text-center md:text-left md:text-[18px] font-normal leading-[24px] md:leading-[26px] text-[#030712]">Enter the Selection Pool to Win the <span className="font-[700]">$300</span> Assessment Package.</p>
          </div>

      
          <div className="flex flex-col gap-3.5 items-center md:items-start">
            <button className="btn-primary w-full md:w-auto max-w-[258px]" onClick={scrollToHero}>
            Claim My Assessment Spot
            </button>
            
            <p className="font-[Manrope] text-[14px] font-normal leading-5 text-[#030712]">
             Limited to <span className="font-semibold">5 winners</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReadytoReclaim;

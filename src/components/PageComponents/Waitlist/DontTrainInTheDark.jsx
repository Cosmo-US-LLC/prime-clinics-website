import React from "react";

function DontTrainInTheDark() {
  return (
    <section className="relative w-full h-[450px] bg-[#2463D8] overflow-hidden flex">
      <div className="relative z-10 max-w-[1280px] w-full mx-auto px-4 md:px-8 flex items-center justify-center">
        <div className=" max-w-[650px] p-8 flex flex-col gap-6">
          {/* Heading */}
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-[36px] md:text-[48px] font-bold leading-[44px] md:leading-[56px] text-center text-[#FFF] uppercase">
              Don't Train in the Dark.Get Your Biomarker Insights.
            </h2>
          </div>

      
          <div className="flex flex-col gap-3.5 items-center justify-center pt-[8px]">
            <button className="btn-primary-2 w-full md:w-auto max-w-[300px]">
              Enter to Win a Free Scan
            </button>
            
            <p className="font-sans text-sm font-normal text-center leading-5 text-[#FFF]">
              <span className="font-semibold">Only 50 spots available.</span>
              {" "}Secure yours before they are gone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DontTrainInTheDark;

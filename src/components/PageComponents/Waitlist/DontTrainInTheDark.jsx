import React from "react";

function DontTrainInTheDark() {
  return (
    <section className="relative w-full h-[600px] dont_train_in_the_dark overflow-hidden flex">
      <div className="relative z-10 max-w-[1280px] w-full mx-auto px-4 md:px-8 flex items-center justify-start">
        <div className="bg-white max-w-[580px] rounded-lg shadow-[0px_0px_24px_0px_rgba(0,0,0,0.05)] p-8 flex flex-col gap-6">
          {/* Heading */}
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-[36px] md:text-[48px] font-bold leading-[44px] md:leading-[56px] text-[#040A16] uppercase">
              Don't Train in the Dark.{" "}
              <span className="text-[#2463D8]">Get Your Biomarker Insights.</span>
            </h2>
          </div>

      
          <div className="flex flex-col gap-3.5">
            <button className="btn-primary w-full md:w-auto max-w-[300px]">
              Claim My Free DEXA Scan
            </button>
            
            <p className="font-sans text-sm font-normal leading-5 text-[#030712]">
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

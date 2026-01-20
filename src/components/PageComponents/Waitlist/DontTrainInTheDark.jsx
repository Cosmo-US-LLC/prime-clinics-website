import React from "react";

function DontTrainInTheDark() {
  return (
    <section className="relative w-full h-[600px] overflow-hidden flex items-center justify-center">
      {/* Background Image/Video with Wave Effect */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
        {/* Placeholder for background image - replace with actual image */}
        {/* <img 
          src="/path/to/background.jpg" 
          alt="DEXA Scan Room" 
          className="w-full h-full object-cover"
        /> */}
        <div className="absolute inset-0 bg-[#f8f9fa]"></div>
      </div>

      {/* White Card Container */}
      <div className="relative z-10 max-w-[649px] w-full mx-auto px-4 md:px-0">
        <div className="bg-white rounded-lg shadow-[0px_0px_24px_0px_rgba(0,0,0,0.05)] p-8 flex flex-col gap-6">
          {/* Heading */}
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-[36px] md:text-[48px] font-bold leading-[44px] md:leading-[56px] text-[#040A16] uppercase">
              Don't Train in the Dark.{" "}
              <span className="text-[#2463D8]">Get Your Biomarker Insights.</span>
            </h2>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col gap-3.5">
            <button className="btn-primary w-full md:w-auto">
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

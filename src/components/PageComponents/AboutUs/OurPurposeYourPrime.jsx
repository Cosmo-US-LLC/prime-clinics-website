import React from "react";

function OurPurposeYourPrime() {
  const items = [
    {
      number: "01",
      title: "Our Mission",
      description:
      "To deliver the pinnacle of proactive care. We provide advanced medical intelligence and personalized regenerative blueprints to radically transform your health baseline."
    },
    {
      number: "02",
      title: "Our Vision",
      description:
      "To completely redefine modern healthcare. We aim to shift the global focus from merely treating disease to actively engineering extraordinary longevity and performance."
    },
    {
      number: "03",
      title: "Our Goal",
      description:
      "To ensure every single patient leaves our facility feeling stronger, sharper, and fully equipped with the biological advantages required to dominate their daily life."
    },
  ];

  return (
    <section className="w-full bg-[#F9FAFB] py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 text-center">

        {/* Heading */}
        <h2 className="heading-2 uppercase text-[#040A16] mb-4">
          Our Purpose, Your Prime
        </h2>

        <p className="max-w-[700px] mx-auto font-sans text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] text-[#030712] mb-12">
          We exist to push the boundaries of biological capability, ensuring our patients achieve and sustain their absolute peak state through clinical precision.
        </p>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">

          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center">

              {/* Gradient Number */}
              <span className="font-display text-[60px] md:text-[100px] font-bold leading-[108px] uppercase text-center bg-[linear-gradient(180deg,_#2463D8_21.53%,_#FFFFFF_100%)] bg-clip-text text-transparent mb-1 md:mb-6">
                {item.number}
              </span>

              {/* Title */}
              <h3 className="font-sans text-[20px] md:text-[24px] font-[700] text-[#030712] leading-[32px] mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-[16px] text-[#030712] leading-[24px] max-w-[320px]">
                {item.description}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default OurPurposeYourPrime;
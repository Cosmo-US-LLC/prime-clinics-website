import React from "react";

/**
 * "Why Choose Prime" section — numbered reasons (left) + image (right).
 * Matches Figma 3187:16601.
 * Content (heading, reasons, image) is provided via per-service config.
 */
function ServicesWhyChooseSection({
  heading,
  reasons = [],
  image,
  imageAlt = "Prime Clinics consultation",
}) {
  if (!heading || !image || !reasons.length) return null;

  return (
    <section className="w-full bg-white py-12 md:py-20" aria-label={heading}>
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10 px-4 md:flex-row md:items-center md:gap-20 md:px-8">
        <div className="flex-1">
          <h2 className="font-display m-0 mb-8 text-center text-[32px] font-bold uppercase leading-[40px] text-[#040A16] md:text-[48px] md:leading-[56px] md:text-left">
            {heading}
          </h2>
          <div className="flex flex-col gap-4">
            {reasons.map((reason) => (
              <div key={reason.number} className="flex flex-col gap-2 py-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-[#D3E0F7]">
                    <span className="font-display text-[18px] font-bold leading-[24px] text-[#2463D8]">
                      {reason.number}
                    </span>
                  </div>
                  <p className="font-sans m-0 text-[20px] font-bold leading-[28px] text-[#040A16]">
                    {reason.title}
                  </p>
                </div>
                <div className="flex items-stretch pl-4 pr-4">
                  <div className="border-l border-[#D1D5DB] pl-8">
                    <p className="font-sans m-0 text-[16px] h-[50px] font-normal leading-6 text-[#040A16]">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[260px] w-full overflow-hidden rounded-2xl md:h-[480px] md:max-w-[520px]">
          <img
            src={image}
            alt={imageAlt}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default ServicesWhyChooseSection;

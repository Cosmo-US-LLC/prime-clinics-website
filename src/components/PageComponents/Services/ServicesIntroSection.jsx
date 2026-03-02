import React from "react";
import { Link } from "react-router-dom";

/**
 * "What is [Service]?" intro block — two columns: heading + tagline + description + CTA (left), image (right).
 * Matches Figma sections 3187:16506, 3433:3645, 3187:17158, etc.
 */
function ServicesIntroSection({
  heading,
  tagline,
  description,
  ctaLabel = "Book Your Assessment",
  ctaHref = "/free-dexa-scan",
  image,
  imageAlt = "",
}) {
  return (
    <section className="w-full bg-white py-12 md:py-20" aria-label={heading}>
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10 px-4 md:flex-row md:items-center md:gap-20 md:px-8">
        <div className="flex flex-1 flex-col justify-between gap-6">
          <div className="flex flex-col gap-5">
            <h2 className="heading-2 m-0 uppercase text-[#040A16]">
              {heading}
            </h2>
            <div className="font-sans text-[18px] font-normal leading-[26px] text-[#030712]">
              <p className="m-0">{tagline}</p>
              <p className="m-0 mt-4">{description}</p>
            </div>
          </div>
          <Link to={ctaHref} className="inline-flex w-fit btn-primary">
            {ctaLabel}
          </Link>
        </div>
        <div className="relative h-[280px] w-full shrink-0 overflow-hidden rounded-2xl md:h-[450px] md:max-w-[40%]">
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

export default ServicesIntroSection;

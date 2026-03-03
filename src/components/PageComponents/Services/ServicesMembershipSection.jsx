import React from "react";
import { Link } from "react-router-dom";

/**
 * "PRIME Membership" section — two columns: image (left), heading + tagline + description + CTA (right).
 * Matches Figma 3187:16637.
 */
function ServicesMembershipSection({
  heading = "PRIME Membership",
  tagline = "Performance is not seasonal. It is systematic.",
  description = "Our membership model provides structured access to diagnostics, therapies, performance technologies, and clinical guidance. Credits allow you to customize your pathway while maintaining measurable accountability and progress tracking.",
  ctaLabel = "Book Your Assessment",
  ctaHref = "/free-dexa-scan",
  image,
  imageAlt = "Prime membership",
}) {
  if (!image) return null;

  return (
    <section
      className="w-full bg-white py-12 md:py-20"
      aria-label={heading}
    >
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10 px-4 md:flex-row md:items-center md:gap-16 md:px-8 lg:gap-20">
        <div className="relative h-[280px] w-full shrink-0 overflow-hidden rounded-2xl md:order-1 md:h-[450px] md:min-h-[450px] md:flex-1">
          <img
            src={image}
            alt={imageAlt}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col justify-between gap-8 md:order-2">
          <div className="flex flex-col gap-5">
            <h2 className="font-display m-0 text-[32px] font-bold uppercase leading-10 text-[#040A16] md:text-[48px] md:leading-[56px]">
              {heading}
            </h2>
            <div className="font-sans text-[16px] font-normal leading-6 text-[#030712] md:text-[18px] md:leading-[26px]">
              <p className="m-0">{tagline}</p>
              <p className="m-0 mt-4">{description}</p>
            </div>
          </div>
          <Link
            to={ctaHref}
            className="inline-flex w-fit items-center justify-center rounded-lg bg-[#2463D8] px-6 py-4 font-sans text-base font-bold leading-6 text-white transition-colors hover:bg-[#1d4fb5]"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServicesMembershipSection;

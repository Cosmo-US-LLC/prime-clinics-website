import React from "react";
import ServicesBar from "./ServicesBar";

function ServicesHero({
  images,
  title,
  titleHighlight,
  description,
  currentPath,
}) {
  return (
    <section className="bg-[#fff] p-2 h-[88dvh]">
      <div className="relative w-full h-full rounded-2xl overflow-hidden flex flex-col justify-end">
        <div className="hidden md:block absolute inset-0">
          <img
            src={images.desktop}
            alt="Prime Clinics"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="md:hidden absolute inset-0">
          <img
            src={images.mobile}
            alt="Prime Clinics"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-[1280px] mx-auto w-full md:px-8 px-4 py-16 md:py-[100px] flex justify-start items-end">
          <div className="relative z-10 flex flex-col gap-6 max-w-full md:max-w-[625px]">
            <h1 className="heading-1 text-white uppercase m-0 drop-shadow-[0px_0px_4px_rgba(0,0,0,0.25)]">
              {title}
              {titleHighlight ? (
                <>
                  {" "}
                  <span className="bg-linear-to-r from-[#2463D8] via-[#60A5FA] to-[#BFDBFE] bg-clip-text text-transparent">
                    {titleHighlight}
                  </span>
                </>
              ) : null}
            </h1>
            <p className="font-sans text-[18px] font-normal leading-[26px] text-white m-0 max-w-[625px]">
              {description}
            </p>
          </div>
        </div>

        <ServicesBar currentPath={currentPath} />
      </div>
    </section>
  );
}

export default ServicesHero;

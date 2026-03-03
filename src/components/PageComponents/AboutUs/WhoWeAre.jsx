import React from "react";
import WhoWeAreImage from "@/assets/images/AboutUs/WhoWeAre.webp"

function WhoWeAre() {
  return (
    <section className="w-full bg-[#ffff] py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col gap-20">

        {/* ROW 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* TEXT */}
          <div className="flex flex-col gap-4 max-w-[620px] m-0">
            <h2 className="heading-2 text-[#040A16] uppercase m-0">
              Who We Are
            </h2>
            <p className="font-sans text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] text-[#030712] m-0">
                Prime Clinics is a premium medical facility specializing entirely in proactive health and human performance. We reject the traditional model of reactive sick care. Instead, we utilize advanced biological metrics, regenerative medicine, and highly structured performance protocols to ensure our patients achieve their absolute peak state.
            </p>
            <p className="font-sans text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] text-[#030712] m-0">
                Our team consists of industry leading physicians, dedicated performance engineers, and specialists who understand that true health optimization requires a highly comprehensive, multidisciplinary approach.
            </p>
            <div className="w-full flex justify-center pt-5 md:pt-16">
                <div className="relative max-w-[620px] w-full h-[80px] md:h-[90px] bg-[#F9FAFB] rounded-[14px] px-6 py-5 md:py-4">

                    {/* SVG Quote Icon */}
                    <div className="absolute -top-4 left-6">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="23"
                            viewBox="0 0 25 23"
                            fill="none"
                        >
                            <path
                            d="M25 0.220457L24.3557 4.84755C23.0384 4.72891 21.9931 4.9662 21.2199 5.55941C20.4467 6.12297 19.917 6.93864 19.6306 8.00644C19.3729 9.04457 19.3299 10.231 19.5017 11.5657H25V23H14.39V11.1208C14.39 7.23525 15.2778 4.29883 17.0533 2.31155C18.8288 0.294609 21.4777 -0.402422 25 0.220457ZM10.61 0.220457L9.96564 4.84755C8.64834 4.72891 7.60309 4.9662 6.8299 5.55941C6.0567 6.12297 5.52692 6.93864 5.24055 8.00644C4.98282 9.04457 4.93986 10.231 5.11168 11.5657H10.61V23H0V11.1208C0 7.23525 0.887743 4.29883 2.66323 2.31155C4.43872 0.294609 7.08763 -0.402422 10.61 0.220457Z"
                            fill="#2463D8"
                            />
                        </svg>
                    </div>

                    <p className="font-sans text-[16px] md:text-[20px] font-semibold leading-[20px] md:leading-[28px] text-[#2463D8] m-0">
                        Enhancing movement, quality of life, and helping you live your absolute best life
                    </p>

                </div>
            </div>

          </div>

          {/* IMAGE */}
          <div className="w-full flex justify-center md:justify-end AboutPrime">
            <img
              src={WhoWeAreImage}  
              alt="Prime Clinics"
              className="w-full md:w-[620px] object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default WhoWeAre;
import React, { useEffect } from "react";
import { loadKlaviyoScript } from "@/lib/klaviyo";
// Custom form + Klaviyo tracking commented out — using Klaviyo Lead + Design embed form (klaviyo-form-SRMnSE)
// import { useForm } from "react-hook-form";
// import { submitFormResponse } from "@/lib/forms";
// import SuccessModal from "./SuccessModal";
// import { PhoneInput, defaultCountries, parseCountry } from "react-international-phone";
// import "react-international-phone/style.css";

// const canadaOnlyCountries = defaultCountries.filter((country) => {
//   const { iso2 } = parseCountry(country);
//   return iso2 === "ca";
// });

// Email validation constants
const popularProviders = [
  // Google
  "gmail.com",
  // Microsoft
  "outlook.com",
  "hotmail.com",
  "live.com",
  "msn.com",
  // Yahoo
  "yahoo.com",
  // Apple
  "icloud.com",
  "me.com",
  "mac.com",
  // AOL
  "aol.com",
  // Zoho
  "zoho.com",
  // Proton
  "protonmail.com",
  // GMX
  "gmx.com",
  // Yandex
  "yandex.com",
];

const blockedTlds = ["con", "comm", "cim", "cmo", "vom", "xom", "c"];

const _isValidEmail = (email) => {
  // Basic structure
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,24}$/;

  if (!regex.test(email)) return false;

  const domain = email.split("@")[1].toLowerCase();
  const tld = domain.split(".").pop();

  // Block typo TLDs everywhere
  if (blockedTlds.includes(tld)) return false;

  // Popular providers → only allow exact .com domains
  if (popularProviders.includes(domain)) return true;

  const providerRoot = domain.split(".").slice(-2).join(".");
  const popularRoots = popularProviders.map((p) => p.split(".")[0]);

  if (popularRoots.includes(providerRoot.split(".")[0])) {
    return false;
  }

  return true;
};

// function DEXAScanHero() {
//   return (
//     <section className="relative w-full h-[640px] md:h-[700px] DEXA_scan_hero overflow-hidden flex items-end justify-start">
//       <div className="relative z-20 w-full py-12 md:py-20 px-4 md:px-8 max-w-[1280px] mx-auto">
//         <div className="flex flex-col gap-6 max-w-full md:max-w-[680px]">

//           <div className="flex flex-col gap-4">
//             <h1 className="font-display text-[42px] md:text-[64px] font-bold leading-[56px] md:leading-[72px] text-white uppercase m-0 drop-shadow-[0px_0px_4px_rgba(0,0,0,0.25)] tracking-normal">
//               Get a{" "}
//               <span className="bg-gradient-to-r from-[#2463D8] via-[#60A5FA] to-[#BFDBFE] bg-clip-text text-transparent">
//                 Free $145 {" "}
//               </span>
//               DEXA Body Scan
//             </h1>
//             <p className="font-sans text-[18px] md:text-[20px] font-normal leading-[26px] md:leading-[28px] text-[#fff] m-0">
//               Join the Prime Clinics waitlist today and secure one of 50
//               complimentary DEXA scans. Gain gold-standard insights into your
//               body composition, biomarkers, and performance potential.
//             </p>
//           </div>

//           <div className="flex flex-col md:flex-row gap-3 md:gap-6 items-stretch md:items-center">
//             <button className="btn-primary w-full md:w-auto whitespace-nowrap py-5 px-8 md:py-4 md:px-6">
//               Enter to Win a Free Scan
//             </button>

//             <div className="flex gap-3 items-center py-2 px-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg w-full md:w-auto justify-center md:justify-start">
//               <img src={ZapIcon} alt="Zap Icon" className="text-[#2463D8] shrink-0 drop-shadow-[0_0_2px_rgba(36,99,216,0.5)]"  />
//               <div className="flex flex-col gap-0.5">
//                 <span className="font-sans text-xs md:text-sm font-bold md:font-semibold leading-4 md:leading-5 text-white">Limited Offers</span>
//                 <span className="font-sans text-[10px] md:text-xs font-normal leading-[18px] text-white">Only 50 spots available</span>
//               </div>
//             </div>
//           </div>
//         </div>
//           <div className="flex justify-center md:justify-end">
//             <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 w-full max-w-[420px]">

//               <h3 className="text-xl font-bold text-center mb-1">
//                 ENTER TO WIN
//               </h3>

//               <p className="text-sm text-center text-gray-500 mb-6">
//                 Join the pool for a free DEXA Scan
//               </p>

//               <form className="flex flex-col gap-4">

//                 <input
//                   type="text"
//                   placeholder="Full Name"
//                   className="border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />

//                 <input
//                   type="email"
//                   placeholder="Email Address"
//                   className="border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />

//                 <input
//                   type="tel"
//                   placeholder="Phone (Optional)"
//                   className="border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />

//                 <button
//                   type="submit"
//                   className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white py-3 rounded-lg font-semibold transition"
//                 >
//                   Enter to Win a Free Scan
//                 </button>

//                 <p className="text-[11px] text-gray-400 text-center mt-2">
//                   By entering, you agree to our Terms. We respect your privacy.
//                 </p>

//               </form>
//             </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// export default DEXAScanHero;

function DEXAScanHero() {
  useEffect(() => {
    loadKlaviyoScript().catch((err) => console.warn("Klaviyo script load:", err));
  }, []);

  return (
    <section
      id="hero-section"
      className="relative w-full pt-[35px] h-[1035px] md:h-[700px] DEXA_scan_hero overflow-hidden"
    >
      <div className="relative z-20 w-full h-full py-12 md:py-20 px-4 md:px-8 max-w-[1280px] mx-auto flex md:items-center items-end">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full items-center">
          {/* LEFT */}
          <div className="flex flex-col gap-6 max-w-full md:max-w-[680px]">
            <div className="flex flex-col gap-4">
              <h1 className="font-display text-[42px] md:text-[64px] font-bold leading-[119.048%] md:leading-[72px] text-white uppercase m-0 drop-shadow-[0px_0px_4px_rgba(0,0,0,0.25)] tracking-normal">
                Get a{" "}
                <span className="bg-linear-to-r from-[#2463D8] via-[#60A5FA] to-[#BFDBFE] bg-clip-text text-transparent">
                  Free $145 <br />
                </span>
                DEXA Body Scan
              </h1>

              <p className="font-sans text-[18px] md:text-[20px] font-normal leading-[26px] md:leading-[28px] text-white m-0">
                Join the Prime Clinics waitlist today and secure one of 50
                complimentary DEXA scans. Gain gold-standard insights into your
                body composition, biomarkers, and performance potential.
              </p>
            </div>

            {/* <div className="flex flex-col md:flex-row gap-3 md:gap-6 items-stretch md:items-center">
              <button className="btn-primary w-full md:w-auto whitespace-nowrap py-5 px-8 md:py-4 md:px-6">
                Enter to Win a Free Scan
              </button>

              <div className="flex gap-3 items-center py-2 px-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg w-full md:w-auto justify-center md:justify-start">
                <img src={ZapIcon} alt="Zap Icon" className="text-[#2463D8] shrink-0 drop-shadow-[0_0_2px_rgba(36,99,216,0.5)]" />
                <div className="flex flex-col gap-0.5">
                  <span className="font-sans text-xs md:text-sm font-bold md:font-semibold leading-4 md:leading-5 text-white">
                    Limited Offers
                  </span>
                  <span className="font-sans text-[10px] md:text-xs font-normal leading-[18px] text-white">
                    Only 50 spots available
                  </span>
                </div>
              </div>
            </div> */}
          </div>

          {/* RIGHT — Klaviyo Lead + Design embed form (klaviyo-form-SRMnSE) */}
          <div className="flex justify-center md:justify-end">
            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 w-full max-w-[500px] min-h-[510px] flex flex-col justify-center">
              <div className="klaviyo-form-SRMnSE" />



            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default DEXAScanHero;

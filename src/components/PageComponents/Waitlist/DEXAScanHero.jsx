import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SuccessModal from "./SuccessModal";

function DEXAScanHero() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const location = useLocation();

  // Show modal when Klaviyo form fires submit (same page, no redirect)
  useEffect(() => {
    const handleKlaviyoSubmit = (e) => {
      if (e?.detail?.type === "submit") {
        setShowSuccessModal(true);
      }
    };
    window.addEventListener("klaviyoForms", handleKlaviyoSubmit);
    return () =>
      window.removeEventListener("klaviyoForms", handleKlaviyoSubmit);
  }, []);

  // When Klaviyo redirects to /free-dexa-scan/thank-you or #thank-you, show modal (fixes blank page)
  useEffect(() => {
    const shouldShow =
      location.pathname === "/free-dexa-scan/thank-you" ||
      window.location.hash === "#thank-you";
    if (!shouldShow) return;
    const id = setTimeout(() => setShowSuccessModal(true), 0);
    return () => clearTimeout(id);
  }, [location.pathname]);

  const handleSuccessModalOpenChange = (open) => {
    setShowSuccessModal(open);
    if (!open) {
      window.location.href = "/";
    }
  };

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
          </div>

          {/* RIGHT */}
          <div className="flex justify-center md:justify-end md:mt-10 mt-0">
            <div className="bg-white rounded-2xl shadow-2xl py-6 md:p-8 w-full max-w-[500px] min-h-[510px] flex flex-col justify-center">
              <h3 className="font-display text-xl font-bold text-[24px] text-center mb-1">
                ENTER TO WIN
              </h3>

              <p className="font-sans text-sm text-center text-gray-500 md:mb-0 mb-2">
                Join the pool for a free DEXA Scan
              </p>

              <div className="klaviyo-form-SRMnSE" />
            </div>
          </div>
        </div>
      </div>

      <SuccessModal
        open={showSuccessModal}
        onOpenChange={handleSuccessModalOpenChange}
        titleHighlight="Thanks"
        titleRest=" for Entering the Pool!"
        description="You're on the list to win a free DEXA scan. Winners will receive a digital voucher 15 days before our official launch. Use it to book your priority scan as soon as our calendar opens and take the first step toward peak performance and longevity."
        buttonText="Back to Home Page"
        imageAlt="DEXA scan waitlist success"
        hashOnOpen="thank-you"
      />
    </section>
  );
}

export default DEXAScanHero;

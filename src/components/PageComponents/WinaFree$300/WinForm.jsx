import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SuccessModal from "../Waitlist/SuccessModal";
import dexaSuccessImage from "@/assets/images/success_modal/success_bg_free_dexa.webp";

const THANK_YOU_PATH = "/free-dexa-scan-and-longevity-assessment/thank-you";

function WinForm() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const location = useLocation();

  // On Klaviyo submit: redirect to our thank-you page so our modal shows
  useEffect(() => {
    const handleKlaviyoSubmit = (e) => {
      if (e?.detail?.type === "submit") {
        window.location.replace(window.location.origin + THANK_YOU_PATH);
      }
    };
    window.addEventListener("klaviyoForms", handleKlaviyoSubmit);
    return () =>
      window.removeEventListener("klaviyoForms", handleKlaviyoSubmit);
  }, []);

  // When landing on /free-dexa-scan-and-longevity-assessment/thank-you or #thank-you, show modal
  useEffect(() => {
    const shouldShow =
      location.pathname === THANK_YOU_PATH ||
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
    <div
      className="bg-white border border-[#f1f5f9] rounded-2xl 
    shadow-[0px_25px_50px_-12px_rgba(30,58,138,0.1)] md:p-8 py-4 w-full! max-w-[500px]! min-h-[510px]! "
    >
      {/* Header */}
      <div className="flex flex-col items-center gap-1">
        <h3 className="font-[Oswald] text-[24px] font-bold leading-[32px] text-[#0f172a] uppercase text-center">
          Enter to Win
        </h3>
        <p className="font-[Manrope] text-[14px] font-normal leading-[20px] text-[#64748b] text-center">
          Join the pool for a free DEXA Scan
        </p>
      </div>

      {/* Klaviyo embedded form */}
      <div className="klaviyo-form-Szc2zf" />

      {/* Success Modal */}
      <SuccessModal
        open={showSuccessModal}
        onOpenChange={handleSuccessModalOpenChange}
        image={dexaSuccessImage}
        titleHighlight="Thanks"
        titleRest=" for Entering the Pool!"
        description="You’re on the list to win a free DEXA + Performance and Longevity Assessment. Winners will receive a digital voucher 15 days before our official launch. Use it to book your priority session as soon as our calendar opens."
        buttonText="Back to Home Page"
        imageAlt="Win a free $300 success"
        hashOnOpen="thank-you"
      />
    </div>
  );
}

export default WinForm;

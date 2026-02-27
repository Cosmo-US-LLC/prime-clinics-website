import React from "react";

function VipPathwayForm() {
  return (
    <div className="w-full rounded-[8px] bg-white px-6 py-6 md:px-8 md:py-8 shadow-[0_25px_50px_-12px_rgba(30,58,138,0.35)] border border-[#f1f5f9] backdrop-blur">
      <div className="flex flex-col gap-4 mb-4 text-center">
        <h2 className="heading-3 text-[#040a16] uppercase m-0">
          Your VIP Pathway
        </h2>
        <p className="font-sans text-[15px] md:text-[16px] leading-[24px] text-[#030712] m-0">
          Priority booking is a premium service, ensuring immediate availability
          and focused attention. Provide your contact information and our
          concierge team will personally coordinate your private schedule.
        </p>
      </div>

      <form className="flex flex-col gap-3">
        <div className="flex flex-col gap-1.5">
          <input
            id="vip-full-name"
            type="text"
            className="h-11 rounded-[8px] border border-[#cbd5e1] bg-white px-3 text-sm text-[#020617] outline-none focus:ring-2 focus:ring-[#2463d8] focus:border-[#2463d8]"
            placeholder="Enter your full name"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <input
            id="vip-contact"
            type="text"
            className="h-11 rounded-[8px] border border-[#cbd5e1] bg-white px-3 text-sm text-[#020617] outline-none focus:ring-2 focus:ring-[#2463d8] focus:border-[#2463d8]"
            placeholder="Best number or email for our team"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <select
            id="vip-communication"
            className="h-11 rounded-[8px] border border-[#cbd5e1] bg-white px-3 text-sm text-[#020617] outline-none focus:ring-2 focus:ring-[#2463d8] focus:border-[#2463d8]"
            defaultValue=""
          >
            <option value="" disabled>
              Select a preference
            </option>
            <option value="phone">Phone</option>
            <option value="email">Email</option>
            <option value="either">Either</option>
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <select
            id="vip-interest"
            className="h-11 rounded-[8px] border border-[#cbd5e1] bg-white px-3 text-sm text-[#020617] outline-none focus:ring-2 focus:ring-[#2463d8] focus:border-[#2463d8]"
            defaultValue=""
          >
            <option value="" disabled>
              Select an area of interest
            </option>
            <option value="performance">Peak performance</option>
            <option value="longevity">Longevity & vitality</option>
            <option value="aesthetics">Aesthetics</option>
            <option value="comprehensive">Comprehensive optimization</option>
          </select>
        </div>

        <button
          type="submit"
          className="mt-3 inline-flex h-11 w-full btn-primary"
        >
          Request VIP Access
        </button>

        <p className="font-sans text-[11px] leading-[16px] text-[#4b5563] text-center md:text-left m-0">
          By submitting, you agree to our{" "}
          <span className="underline underline-offset-2 text-[#2463d8]">
            Terms &amp; Conditions
          </span>
          . We respect your privacy.
        </p>
      </form>
    </div>
  );
}

export default VipPathwayForm;

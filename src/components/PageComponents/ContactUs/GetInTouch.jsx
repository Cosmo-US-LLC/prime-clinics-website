import React from "react";
import ContactDesktopImg from "@/assets/images/ContactUs/ContactDesktopImg.webp"
import { Link } from "react-router-dom";

const services = [
    "Physical Health",
    "Hormone Health",
    "Intimate Health",
    "Regenerative Aesthetics",
    "Weight Management",
    "Mental Fitness",
    "Joint Rehabilitation",
    ];

function GetInTouch() {
  return (
    <section className="w-full bg-[#FFFF] pt-30 pb-15 md:pt-40 md:pb-20">
      <div className="max-w-[1200px] mx-auto px-4 md:px-0 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT FORM CARD */}
        <div className="h-[700px] md:h-[710px] bg-[#FFFF] rounded-[12px] text-center md:text-left border border-[#F1F5F9] shadow-[0_25px_50px_-12px_rgba(30,58,138,0.10)] p-6 md:p-8">

          <span className="font-sans text-[18px] md:text-[20px] font-bold leading-[20px] md:leading-[28px] text-[#2463D8]  mb-2 tracking-[1.4px] uppercase">
            Contact Us
          </span>

          <h2 className="heading-3 !text-[32px] text-[#040A16] uppercase mt-4">
            Get In Touch
          </h2>

          <p className="font-sans text-[14px] md:text-[16px] leading-[24px] md:leading-[26px] text-[#040A16] mt-4">
            Let us know how we can assist you! Our team is ready to respond and help with any inquiries you may have.
          </p>

          {/* FORM */}
          <form className="mt-6 flex flex-col gap-4">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-[#CBD5E1] rounded-[6px] px-4 py-3 text-[14px] md:text-[16px] text-[#040A16] focus:outline-none focus:border-[#2463D8]"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-[#CBD5E1] rounded-[6px] px-4 py-3 text-[14px] md:text-[16px] text-[#040A16] focus:outline-none focus:border-[#2463D8]"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-[#CBD5E1] rounded-[6px] px-4 py-3 text-[14px] md:text-[16px] text-[#040A16] focus:outline-none focus:border-[#2463D8]"
            />

            <select
              className="w-full border border-[#CBD5E1] rounded-[6px] px-3 py-3 text-[14px] md:text-[16px] text-[#040A16] focus:outline-none focus:border-[#2463D8]"
            >
              <option value="" disabled selected className="text-[#9CA3AF]">
                Select service
                </option>
                {services.map((service, index) => (
                    <option key={index} value={service}>
                    {service}
                    </option>
                ))}
            </select>

            <textarea
              placeholder="Type your message..."
              rows="4"
              className="w-full border border-[#CBD5E1] rounded-[6px] px-4 py-2 text-[14px] md:text-[16px] text-[#040A16] focus:outline-none focus:border-[#2463D8]"
            />

            <button type="submit" className="inline-flex btn-primary w-full">
                Submit Inquiry
            </button>

            <p className="font-sans text-[12px] md:text-[12px] leading-[18px] md:leading-[18px] text-[#4B5563] text-center m-0">
              By submitting, you agree to our{" "}
              <Link to="/terms-and-conditions" className="underline cursor-pointer text-[#2463D8] ">Terms & Conditions</Link>. We respect your privacy.
            </p>

          </form>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full h-[320px] md:h-[700px] overflow-hidden rounded-[6px]">
          <img
            src={ContactDesktopImg}
            alt="Contact Prime Clinics"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}

export default GetInTouch;
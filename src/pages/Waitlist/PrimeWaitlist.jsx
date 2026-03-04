import { useState } from "react";
import { Link } from "react-router-dom";
import usePageMeta from "@/hooks/usePageMeta";

/**
 * Waitlist page — "Claim Your Spot in PRIME".
 * Matches Figma 3187:14467: centered card, heading, description, form, CTA, disclaimer.
 */
function PrimeWaitlist() {
  usePageMeta(
    "Join the Waitlist | Prime Clinics",
    "Be among the first to experience Edmonton's premier Performance and Longevity Clinic. Join the PRIME waitlist.",
  );

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    // TODO: wire to your waitlist API
    setTimeout(() => setStatus("success"), 800);
  }

  if (status === "success") {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center bg-white px-4 py-20 md:px-[60px] md:py-[80px]">
        <div className="w-full max-w-[620px] rounded-2xl border border-[#f1f5f9] bg-white p-8 text-center shadow-[0px_25px_50px_-12px_rgba(30,58,138,0.1)]">
          <h1 className="font-display text-[32px] font-bold uppercase leading-10 text-[#040A16]">
            You're on the list
          </h1>
          <p className="font-sans mt-4 text-base font-normal leading-6 text-[#030712]">
            We'll be in touch when PRIME is ready for you.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-[60vh] flex-col items-center bg-white px-4 pt-32 pb-12 md:px-8 md:pt-44 md:pb-20">
      <div className="w-full max-w-[620px] overflow-hidden rounded-2xl border border-[#f1f5f9] bg-white p-8 shadow-[0px_25px_50px_-12px_rgba(30,58,138,0.1)] md:p-[32px]">
        <div className="flex flex-col items-center gap-6">
          <header className="flex w-full flex-col items-center gap-5 text-center">
            <h1 className="font-display m-0 w-full text-[32px] font-bold uppercase leading-10 text-[#040A16]">
              Claim Your Spot in PRIME
            </h1>
            <p className="font-sans m-0 w-full text-base font-normal leading-6 text-[#030712]">
              Be among the first to experience Edmonton's premier Performance
              and Longevity Clinic.
            </p>
          </header>

          <form
            onSubmit={handleSubmit}
            className="flex w-full flex-col gap-4"
            noValidate
          >
            <div className="flex w-full flex-col gap-4 sm:flex-row sm:gap-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="font-sans min-h-[48px] flex-1 rounded-lg border border-[#cbd5e1] bg-white px-[17px] py-3 text-base font-normal leading-6 text-[#030712] placeholder:text-[#9ca3af] focus:border-[#2463D8] focus:outline-none focus:ring-1 focus:ring-[#2463D8]"
                aria-label="First Name"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="font-sans min-h-[48px] flex-1 rounded-lg border border-[#cbd5e1] bg-white px-[17px] py-3 text-base font-normal leading-6 text-[#030712] placeholder:text-[#9ca3af] focus:border-[#2463D8] focus:outline-none focus:ring-1 focus:ring-[#2463D8]"
                aria-label="Last Name"
              />
            </div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="font-sans min-h-[48px] w-full rounded-lg border border-[#cbd5e1] bg-white px-[17px] py-3 text-base font-normal leading-6 text-[#030712] placeholder:text-[#9ca3af] focus:border-[#2463D8] focus:outline-none focus:ring-1 focus:ring-[#2463D8]"
              aria-label="Phone Number"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="font-sans min-h-[48px] w-full rounded-lg border border-[#cbd5e1] bg-white px-[17px] py-3 text-base font-normal leading-6 text-[#030712] placeholder:text-[#9ca3af] focus:border-[#2463D8] focus:outline-none focus:ring-1 focus:ring-[#2463D8]"
              aria-label="Email Address"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="flex w-full btn-primary"
            >
              {status === "loading" ? "Joining…" : "Join the Waitlist"}
            </button>
          </form>

          <p className="font-sans text-center text-xs font-normal leading-[18px] text-[#4b5563]">
            By submitting, you agree to our{" "}
            <Link
              to="/terms-and-conditions"
              className="text-[#2463D8] underline decoration-solid underline-offset-2 hover:opacity-90"
            >
              Terms &amp; Conditions
            </Link>
            . We respect your privacy.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrimeWaitlist;

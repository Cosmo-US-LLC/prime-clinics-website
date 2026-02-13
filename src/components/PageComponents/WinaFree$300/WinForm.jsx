import React from "react";
import { useForm } from "react-hook-form";
import { submitFormResponse } from "@/lib/forms";
import { klaviyoIdentifyAndTrack } from "@/lib/klaviyo";
import SuccessModal from "../Waitlist/SuccessModal";
import {
  PhoneInput,
  defaultCountries,
  parseCountry,
} from "react-international-phone";
import "react-international-phone/style.css";

const canadaOnlyCountries = defaultCountries.filter((country) => {
  const { iso2 } = parseCountry(country);
  return iso2 === "ca";
});
import dexaSuccessImage from "@/assets/images/success_modal/success_bg_free_dexa.webp";

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

const isValidEmail = (email) => {
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

function WinForm() {
  const [status, setStatus] = React.useState({ state: "idle", message: "" });
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);
  const [phone, setPhone] = React.useState("");
  const [phoneError, setPhoneError] = React.useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = async (data) => {
    setPhoneError("");
    setStatus({ state: "loading", message: "" });

    if (!phone || phone.replace(/\D/g, "").length < 10) {
      setPhoneError("Phone number is required.");
      setStatus({ state: "idle", message: "" });
      return;
    }

    console.log("Win form submit payload:", {
      ...data,
      phone,
    });

    try {
      await submitFormResponse({
        formKey: "win-form",
        data: {
          ...data,
          phone: phone, // Use international phone value
        },
      });
      klaviyoIdentifyAndTrack({
        Email: data.email,
        $phone_number_region: phone,
        firstName: data.fullName,
        eventName: "Assessment Form Submitted",
        properties: {
          formKey: "Assessment",
        },
      }).catch((error) => {
        console.error("Klaviyo tracking failed:", error);
      });
      setStatus({
        state: "success",
        message: "Thanks! You're entered to win.",
      });
      setShowSuccessModal(true);
      reset();
      setPhone(""); // Reset phone number
    } catch (error) {
      setStatus({
        state: "error",
        message:
          error?.message || "We couldn't submit the form. Please try again.",
      });
    }
  };

  return (
    <div
      className="bg-white border border-[#f1f5f9] rounded-2xl 
    shadow-[0px_25px_50px_-12px_rgba(30,58,138,0.1)] p-8 w-full! max-w-[500px]! min-h-[510px]!"
    >
      {/* Header */}
      <div className="flex flex-col items-center gap-1 mb-6">
        <h3 className="font-[Oswald] text-[24px] font-bold leading-[32px] text-[#0f172a] uppercase text-center">
          Enter to Win
        </h3>
        <p className="font-[Manrope] text-[14px] font-normal leading-[20px] text-[#64748b] text-center">
          Join the pool for a free DEXA Scan
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        {/* Full Name Field */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="fullName"
            className="font-[Manrope] text-[14px] font-semibold leading-[20px] text-[#334155]"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="John Doe"
            aria-invalid={errors.fullName ? "true" : "false"}
            {...register("fullName", {
              required: "Full name is required.",
              minLength: {
                value: 2,
                message: "Please enter at least 2 characters.",
              },
            })}
            className="bg-white border border-[#cbd5e1] rounded-lg px-[17px] py-[13px] font-[Manrope] text-[16px] font-normal leading-[24px] text-[#1f2937] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#2463D8] focus:border-transparent transition-all"
          />
          {errors.fullName ? (
            <p className="text-[12px] text-red-500">
              {errors.fullName.message}
            </p>
          ) : null}
        </div>

        {/* Email Address Field */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="email"
            className="font-[Manrope] text-[14px] font-semibold leading-[20px] text-[#334155]"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="john@example.com"
            aria-invalid={errors.email ? "true" : "false"}
            {...register("email", {
              required: "Email address is required.",
              validate: (value) =>
                isValidEmail(value) || "Please enter a valid email address.",
            })}
            className="bg-white border border-[#cbd5e1] rounded-lg px-[17px] py-[13px] font-[Manrope] text-[16px] font-normal leading-[24px] text-[#1f2937] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#2463D8] focus:border-transparent transition-all"
          />
          {errors.email ? (
            <p className="text-[12px] text-red-500">{errors.email.message}</p>
          ) : null}
        </div>

        {/* Phone Field (Required) */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="phone"
            className="font-[Manrope] text-[14px] font-semibold leading-[20px] text-[#334155]"
          >
            Phone
          </label>
          <PhoneInput
            defaultCountry="ca"
            countries={canadaOnlyCountries}
            hideDropdown
            forceDialCode
            value={phone}
            onChange={(phone) => {
              setPhone(phone);
              if (phoneError) setPhoneError("");
            }}
            className="react-international-phone-input"
            inputClassName="!bg-white !border !border-[#cbd5e1] !rounded-r-lg !px-[17px] !py-[24px] !font-[Manrope] !text-[16px] !font-normal !leading-[24px] !text-[#1f2937] placeholder:!text-[#9ca3af] focus:!outline-none focus:!ring-2 focus:!ring-[#2463D8] focus:!border-transparent !transition-all !w-full"
            countrySelectorStyleProps={{
              buttonClassName:
                "!border-[#cbd5e1] !rounded-l-lg !px-3 !py-[24px]",
            }}
          />
          {phoneError ? (
            <p className="text-[12px] text-red-500">{phoneError}</p>
          ) : null}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn-primary w-full md:w-auto whitespace-nowrap py-5 px-8 md:py-4 md:px-6 disabled:opacity-70"
          disabled={status.state === "loading" || isSubmitting}
        >
          {status.state === "loading" || isSubmitting
            ? "Submitting..."
            : "Claim My Assessment Spot"}
        </button>

        {status.message ? (
          <p
            className={`font-[Manrope] text-[12px] text-center ${
              status.state === "error" ? "text-red-500" : "text-green-600"
            }`}
          >
            {status.message}
          </p>
        ) : null}
      </form>

      {/* Footer Text */}
      <p className="font-[Manrope] text-[12px] font-normal leading-[18px] text-[#94a3b8] text-center mt-6">
        By entering, you agree to our Terms. We respect your privacy.
      </p>

      {/* Success Modal */}
      <SuccessModal
        open={showSuccessModal}
        onOpenChange={setShowSuccessModal}
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

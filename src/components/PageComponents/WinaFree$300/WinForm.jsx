import React from "react";
import { useForm } from "react-hook-form";
import { submitFormResponse } from "@/lib/forms";

function WinForm() {
  const [status, setStatus] = React.useState({ state: "idle", message: "" });

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
    setStatus({ state: "loading", message: "" });

    try {
      await submitFormResponse({
        formKey: "win-form",
        data,
      });
      setStatus({
        state: "success",
        message: "Thanks! You're entered to win.",
      });
      reset();
    } catch (error) {
      setStatus({
        state: "error",
        message:
          error?.message || "We couldn't submit the form. Please try again.",
      });
    }
  };

  return (
    <div className="bg-white border border-[#f1f5f9] rounded-2xl 
    shadow-[0px_25px_50px_-12px_rgba(30,58,138,0.1)] p-8 !w-full !max-w-[500px] !min-h-[510px]">
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
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address.",
              },
            })}
            className="bg-white border border-[#cbd5e1] rounded-lg px-[17px] py-[13px] font-[Manrope] text-[16px] font-normal leading-[24px] text-[#1f2937] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#2463D8] focus:border-transparent transition-all"
          />
          {errors.email ? (
            <p className="text-[12px] text-red-500">
              {errors.email.message}
            </p>
          ) : null}
        </div>

        {/* Phone Field (Optional) */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="phone"
            className="font-[Manrope] text-[14px] font-semibold leading-[20px] text-[#334155]"
          >
            Phone (Optional)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="(555) 123-4567"
            aria-invalid={errors.phone ? "true" : "false"}
            {...register("phone", {
              pattern: {
                value: /^[0-9()+\-\s]{7,20}$/,
                message: "Enter a valid phone number.",
              },
            })}
            className="bg-white border border-[#cbd5e1] rounded-lg px-[17px] py-[13px] font-[Manrope] text-[16px] font-normal leading-[24px] text-[#1f2937] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#2463D8] focus:border-transparent transition-all"
          />
          {errors.phone ? (
            <p className="text-[12px] text-red-500">
              {errors.phone.message}
            </p>
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
    </div>
  );
}

export default WinForm;

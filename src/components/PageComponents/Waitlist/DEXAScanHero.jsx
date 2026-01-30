import React from "react";
import { useForm } from "react-hook-form";
import { submitFormResponse } from "@/lib/forms";

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
        formKey: "dexa-scan-hero",
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
    <section className="relative w-full pt-[35px] h-[1035px] md:h-[700px] DEXA_scan_hero overflow-hidden">

      <div className="relative z-20 w-full h-full py-12 md:py-20 px-4 md:px-8 max-w-[1280px] mx-auto flex md:items-center items-end">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full items-center">

          {/* LEFT */}
          <div className="flex flex-col gap-6 max-w-full md:max-w-[680px]">

            <div className="flex flex-col gap-4">
              <h1 className="font-display text-[42px] md:text-[64px] font-bold leading-[119.048%] md:leading-[72px] text-white uppercase m-0 drop-shadow-[0px_0px_4px_rgba(0,0,0,0.25)] tracking-normal">
                Get a{" "}
                <span className="bg-gradient-to-r from-[#2463D8] via-[#60A5FA] to-[#BFDBFE] bg-clip-text text-transparent">
                  Free $145{" "} <br />
                </span>
                DEXA Body Scan
              </h1>

              <p className="font-sans text-[18px] md:text-[20px] font-normal leading-[26px] md:leading-[28px] text-[#fff] m-0">
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

          {/* RIGHT */}
          <div className="flex justify-center md:justify-end">
            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 w-full max-w-[500px] min-h-[510px] flex flex-col justify-center">

              <h3 className="font-display text-xl font-bold text-[24px] text-center mb-1">
                ENTER TO WIN
              </h3>

              <p className="font-sans text-sm text-center text-gray-500 mb-6">
                Join the pool for a free DEXA Scan
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label className="font-sans text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
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
                    className="border rounded-lg px-4 py-3 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.fullName ? (
                    <p className="text-[12px] text-red-500">
                      {errors.fullName.message}
                    </p>
                  ) : null}
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-sans text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
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
                    className="border rounded-lg px-4 py-3 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.email ? (
                    <p className="text-[12px] text-red-500">
                      {errors.email.message}
                    </p>
                  ) : null}
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-sans text-sm font-medium text-gray-700">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="(555) 123-4567"
                    aria-invalid={errors.phone ? "true" : "false"}
                    {...register("phone", {
                      pattern: {
                        value: /^[0-9()+\-\s]{7,20}$/,
                        message: "Enter a valid phone number.",
                      },
                    })}
                    className="border rounded-lg px-4 py-3 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.phone ? (
                    <p className="text-[12px] text-red-500">
                      {errors.phone.message}
                    </p>
                  ) : null}
                </div>

                <button
                  type="submit"
                  className="bg-[#2563EB] hover:bg-[#1D4ED8] text-[18px] text-white py-3 rounded-lg font-sans font-semibold transition mt-2 disabled:opacity-70"
                  disabled={status.state === "loading" || isSubmitting}
                >
                  {status.state === "loading" || isSubmitting
                    ? "Submitting..."
                    : "Enter to Win a Free Scan"}
                </button>

                {status.message ? (
                  <p
                    className={`font-sans text-[12px] text-center ${
                      status.state === "error"
                        ? "text-red-500"
                        : "text-green-600"
                    }`}
                  >
                    {status.message}
                  </p>
                ) : null}

                <p className="font-sans text-[12px] text-[#94A3B8] text-center mt-2">
                  By entering, you agree to our Terms. We respect your privacy.
                </p>

              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default DEXAScanHero;

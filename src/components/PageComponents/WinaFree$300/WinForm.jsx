import React from "react";

function WinForm() {
  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-white border border-[#f1f5f9] rounded-2xl shadow-[0px_25px_50px_-12px_rgba(30,58,138,0.1)] p-8 w-full max-w-[450px]">
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
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
            value={formData.fullName}
            onChange={handleChange}
            placeholder="John Doe"
            required
            className="bg-white border border-[#cbd5e1] rounded-lg px-[17px] py-[13px] font-[Manrope] text-[16px] font-normal leading-[24px] text-[#1f2937] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#2463D8] focus:border-transparent transition-all"
          />
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
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            required
            className="bg-white border border-[#cbd5e1] rounded-lg px-[17px] py-[13px] font-[Manrope] text-[16px] font-normal leading-[24px] text-[#1f2937] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#2463D8] focus:border-transparent transition-all"
          />
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
            value={formData.phone}
            onChange={handleChange}
            placeholder="(555) 123-4567"
            className="bg-white border border-[#cbd5e1] rounded-lg px-[17px] py-[13px] font-[Manrope] text-[16px] font-normal leading-[24px] text-[#1f2937] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#2463D8] focus:border-transparent transition-all"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn-primary w-full md:w-auto whitespace-nowrap py-5 px-8 md:py-4 md:px-6"
        >
          Claim My Assessment Spot
        </button>
      </form>

      {/* Footer Text */}
      <p className="font-[Manrope] text-[12px] font-normal leading-[18px] text-[#94a3b8] text-center mt-6">
        By entering, you agree to our Terms. We respect your privacy.
      </p>
    </div>
  );
}

export default WinForm;

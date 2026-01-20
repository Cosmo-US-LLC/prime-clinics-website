import React from "react";
import { Mail, Users, Gift, Calendar } from "lucide-react";

const iconMap = {
  email: Mail,
  users: Users,
  gift: Gift,
  calendar: Calendar,
};

// Data for the steps
export const howToClaimData = [
  {
    number: "01",
    title: "Enter Your Email",
    description: "Sign up to join the selection pool.",
    icon: "email",
  },
  {
    number: "02",
    title: "Selection",
    description: "10 winners will be chosen and notified via email.",
    icon: "users",
  },
  {
    number: "03",
    title: "Redemption",
    description: "Winners will receive a digital voucher 15 days before our official launch.",
    icon: "gift",
  },
  {
    number: "04",
    title: "Booking",
    description: "Use your voucher to schedule your priority scan once our calendar opens.",
    icon: "calendar",
  },
];

function HowToClaim({ 
  stepsData = howToClaimData, 
  heading = "How to Claim Your",
  headingHighlight = "Free Scan",
  buttonText = "Claim My Free DEXA Scan"
}) {
  return (
    <section className="bg-white flex gap-10 md:gap-20 items-center justify-center px-4 md:px-15 py-20 w-full">
      <div className="max-w-[1280px] w-full mx-auto flex flex-col md:flex-row gap-10 md:gap-20">
        {/* Left Side - Heading and CTA */}
        <div className="flex flex-col gap-6 flex-1 min-w-0">
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-[36px] md:text-[48px] font-bold leading-[44px] md:leading-[56px] text-[#040A16] uppercase">
              {heading}{" "}
              <span className="text-[#2463D8]">{headingHighlight}</span>
            </h2>
          </div>
          <button className="btn-primary w-full md:w-auto">
            {buttonText}
          </button>
        </div>

        {/* Right Side - Steps Timeline */}
        <div className="flex gap-6 items-start flex-1 min-w-0">
          {/* Vertical Line with Numbers */}
          <div className="flex flex-col items-center relative shrink-0">
            {/* Number Circles with Connecting Line */}
            <div className="relative flex flex-col items-center">
              {stepsData.map((step, index) => {
                const isLast = index === stepsData.length - 1;
                return (
                  <React.Fragment key={index}>
                    {/* Number Circle */}
                    <div className="relative z-10 bg-[#2463D8] rounded-full size-10 flex items-center justify-center shrink-0">
                      <span className="font-sans text-base font-bold leading-6 text-white">
                        {step.number}
                      </span>
                    </div>
                    {/* Connecting Line (except after last item) */}
                    {!isLast && (
                      <div className="h-[127px] w-0.5 border-l-2 border-dashed border-[#2463D8] opacity-30 my-2"></div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Steps Content */}
          <div className="flex flex-col gap-4 flex-1 min-w-0">
            {stepsData.map((step, index) => {
              const IconComponent = iconMap[step.icon] || Mail;
              return (
                <div
                  key={index}
                  className="bg-[#F9FAFB] rounded-2xl px-4 py-6 flex gap-5 items-start"
                >
                  {/* Icon */}
                  <div className="bg-[#E9EFFB] rounded-full size-16 flex items-center justify-center p-2 shrink-0">
                    <IconComponent className="size-[42px] text-[#2463D8]" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-2 flex-1 min-w-0">
                    <h3 className="font-display text-2xl font-bold leading-8 text-[#030712] uppercase">
                      {step.title}
                    </h3>
                    <p className="font-sans text-base font-normal leading-6 text-[#1F2937]">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowToClaim;

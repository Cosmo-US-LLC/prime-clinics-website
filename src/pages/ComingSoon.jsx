import React, { useState } from "react";

import card1 from "@/assets/images/home/services/service_card1.webp";
import card2 from "@/assets/images/home/services/service_card2.webp";
import card3 from "@/assets/images/home/services/service_card3.webp";
import card4 from "@/assets/images/home/services/service_card4.webp";
import card5 from "@/assets/images/home/services/service_card5.webp";
import card6 from "@/assets/images/home/services/service_card6.webp";
import card7 from "@/assets/images/home/services/service_card7.webp";

const SERVICE_CARDS = [
  { label: "Physical Health", image: card1 },
  { label: "Hormone Health", image: card2 },
  { label: "Intimate Health", image: card3 },
  { label: "Regenerative Aesthetics", image: card4 },
  { label: "Weight Management", image: card5 },
  { label: "Mental Fitness", image: card6 },
  { label: "Joint Rehabilitation", image: card7 },
];

function ComingSoon() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setErrorMsg("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("loading");

    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setErrorMsg("");
    }, 800);
  };

  return (
    <main className="h-dvh p-2">
      <div className="relative w-full h-full rounded-2xl overflow-hidden flex flex-col coming_soon_hero">
        <div className="absolute inset-0 bg-black/40" />
        {/* <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/30 to-transparent hidden md:block" /> */}

        <div className="relative z-10 flex-1 flex flex-col px-4 md:px-[60px] pb-6 md:pb-8">
          <div className="flex-2" />

          <div className="max-w-[1300px] w-full">
            <div className="text-white mb-2 md:mb-4">
              <p className="font-oswald font-bold uppercase text-[20px] md:text-[24px] leading-[28px] md:leading-[32px]">
                Step into your prime
              </p>
              <h1 className="font-oswald font-bold uppercase text-[48px] md:text-[64px] leading-[56px] md:leading-[72px]">
                Opening This Spring
              </h1>
            </div>

            <p className="text-white font-bold md:font-semibold text-[16px] md:text-[20px] leading-[24px] md:leading-[28px] mb-4 md:mb-6 max-w-[335px] md:max-w-none">
              Be the first to know! Enter your email for the latest updates on
              our opening.
            </p>

            <form onSubmit={handleSubmit} className="mb-4 md:mb-6">
              {status === "success" ? (
                <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg px-6 py-4 max-w-[382px]">
                  <p className="text-white font-semibold text-[16px]">
                    Thanks! We&apos;ll notify you when we open.
                  </p>
                </div>
              ) : (
                <div className="bg-white border border-white rounded-lg p-[6px] md:p-2 flex items-center max-w-[335px] md:max-w-[382px]">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === "error") setStatus("idle");
                    }}
                    placeholder="Enter your email"
                    className="flex-1 px-2 text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#050505] placeholder:opacity-50 outline-none bg-transparent min-w-0"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="bg-[#2463D8] text-white font-semibold md:font-bold text-[14px] md:text-[16px] px-6 py-3 rounded-lg hover:bg-[#1a4fa8] transition-colors whitespace-nowrap disabled:opacity-60"
                  >
                    {status === "loading" ? "..." : "Notify Me"}
                  </button>
                </div>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm mt-2">{errorMsg}</p>
              )}
            </form>
          </div>

          <div className="flex-3" />

          <div className="max-w-[1300px] w-full shrink-0">
            <p className="text-white text-[14px] md:text-[18px] leading-[20px] md:leading-[26px] font-semibold md:font-normal mb-2 max-w-[335px] md:max-w-none">
              Solutions designed around you because confidence starts from
              within.
            </p>

            <div className="flex gap-2 md:gap-3 overflow-x-auto hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0 pb-1">
              {SERVICE_CARDS.map((card) => (
                <div
                  key={card.label}
                  className="shrink-0 w-[160px] sm:w-[180px] md:flex-1 md:min-w-0 h-[108px] rounded-xl border border-[#959595]/70 backdrop-blur-[15px] bg-white/1 shadow-[0_4px_40px_rgba(0,0,0,0.07)] p-[6px] flex flex-col gap-2 justify-center cursor-pointer hover:border-white/50 transition-colors"
                >
                  <div className="relative h-[71px] w-full rounded-md overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.label}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-white font-bold text-[12px] leading-[18px] px-[6px] truncate">
                    {card.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ComingSoon;

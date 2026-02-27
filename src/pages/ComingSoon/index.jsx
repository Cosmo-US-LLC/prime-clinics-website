import { useEffect, useState } from "react";

const SERVICE_CARDS = [
  { label: "Physical Health", image: "/images/coming-soon/card-physical-health.jpg" },
  { label: "Hormone Health", image: "/images/coming-soon/card-hormone-health.jpg" },
  { label: "Intimate Health", image: "/images/coming-soon/card-intimate-health.jpg" },
  { label: "Regenerative Aesthetics", image: "/images/coming-soon/card-regenerative.png" },
  { label: "Weight Management", image: "/images/coming-soon/card-weight.png" },
  { label: "Mental Fitness", image: "/images/coming-soon/card-mental.png" },
  { label: "Joint Rehabilitation", image: "/images/coming-soon/card-joint.png" },
];

function EmailForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setErrorMsg("Please enter a valid email address.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch(
        "https://a.klaviyo.com/client/subscriptions/?company_id=Wnsp3Z",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            revision: "2024-10-15",
          },
          body: JSON.stringify({
            data: {
              type: "subscription",
              attributes: {
                custom_source: "Coming Soon Page",
                profile: {
                  data: {
                    type: "profile",
                    attributes: { email: email.trim().toLowerCase() },
                  },
                },
              },
              relationships: {
                list: {
                  data: { type: "list", id: "YqVRYU" },
                },
              },
            },
          }),
        }
      );
      if (!res.ok && res.status !== 202) {
        throw new Error("Subscription failed");
      }
      setStatus("success");
      setEmail("");
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mb-4 md:mb-6 max-w-[382px]">
        <div
          className="rounded-lg px-6 py-4"
          style={{
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.3)",
          }}
        >
          <p className="text-white font-semibold text-[16px] font-sans">
            Thanks! We&apos;ll notify you when we open.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-4 md:mb-6">
      <form onSubmit={handleSubmit}>
        <div
          className="flex items-center rounded-lg max-w-[335px] md:max-w-[382px]"
          style={{
            background: "#FFFFFF",
            border: "1px solid #FFFFFF",
            padding: "8px",
          }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === "error") setStatus("idle");
            }}
            placeholder="Enter your email"
            className="flex-1 min-w-0 bg-transparent outline-none font-sans"
            style={{
              padding: "0 8px",
              fontSize: "16px",
              lineHeight: "24px",
              color: "#050505",
            }}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="shrink-0 font-sans font-bold cursor-pointer disabled:opacity-60"
            style={{
              background: "#2463D8",
              color: "#FFFFFF",
              fontSize: "16px",
              lineHeight: "24px",
              padding: "10px 24px",
              borderRadius: "8px",
              border: "none",
              whiteSpace: "nowrap",
            }}
          >
            {status === "loading" ? "..." : "Notify Me"}
          </button>
        </div>
        {status === "error" && (
          <p className="text-red-400 text-sm mt-2">{errorMsg}</p>
        )}
      </form>
      {/* Hidden Klaviyo form for tracking/automation */}
      <div className="klaviyo-form-XFgySn" style={{ display: "none" }}></div>
    </div>
  );
}

function ComingSoon() {
  useEffect(() => {
    // Set page title and meta for this route
    document.title = "Prime Clinics | Opening This Spring";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Step into your prime. Prime Clinics offers personalized solutions for physical health, hormone health, intimate health, regenerative aesthetics, weight management, mental fitness, and joint rehabilitation. Opening this spring — sign up to be the first to know."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Step into your prime. Prime Clinics offers personalized solutions for physical health, hormone health, intimate health, regenerative aesthetics, weight management, mental fitness, and joint rehabilitation. Opening this spring — sign up to be the first to know.";
      document.head.appendChild(meta);
    }

    // Set favicon
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
      favicon.setAttribute("href", "/fav.svg");
      favicon.setAttribute("type", "image/svg+xml");
    }
  }, []);

  return (
    <main className="h-[100dvh] p-2">
      <div className="relative w-full h-full rounded-2xl overflow-hidden flex flex-col">
        {/* Background Image — Desktop */}
        <div className="hidden md:block absolute inset-0">
          <img
            src="/images/coming-soon/hero-bg.png"
            alt="Prime Clinics billboard"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0">
            <img
              src="/images/coming-soon/hero-billboard.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Background Image — Mobile */}
        <div className="md:hidden absolute inset-0">
          <img
            src="/images/coming-soon/hero-mobile.png"
            alt="Prime Clinics"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent hidden md:block" />

        {/* Logo — top left */}
        <div className="relative z-20 px-4 md:px-[60px] py-4 shrink-0">
          <img
            src="/images/coming-soon/logo.svg"
            alt="Prime Clinics"
            className="hidden md:block w-[112px] h-[56px] object-contain"
          />
          <img
            src="/images/coming-soon/logo-mobile.svg"
            alt="Prime Clinics"
            className="md:hidden w-[80px] h-[40px] object-contain"
          />
        </div>

        {/* Content area — fills remaining space */}
        <div className="relative z-10 flex-1 flex flex-col px-4 md:px-[60px] pb-6 md:pb-8">
          {/* Spacer — pushes content to ~40% from top */}
          <div className="flex-[2]" />

          {/* Main content block */}
          <div className="max-w-[1300px] w-full">
            {/* Heading */}
            <div className="text-white mb-2 md:mb-4">
              <p className="font-display font-bold uppercase text-[20px] md:text-[24px] leading-[28px] md:leading-[32px]">
                Step into your prime
              </p>
              <h1 className="font-display font-bold uppercase text-[48px] md:text-[64px] leading-[56px] md:leading-[72px]">
                Opening This Spring
              </h1>
            </div>

            {/* Description */}
            <p className="text-white font-bold md:font-semibold text-[16px] md:text-[20px] leading-[24px] md:leading-[28px] mb-4 md:mb-6 max-w-[335px] md:max-w-none">
              Be the first to know! Enter your email for the latest updates on
              our opening.
            </p>

            {/* Email Signup Form → Klaviyo */}
            <EmailForm />
          </div>

          {/* Bottom spacer */}
          <div className="flex-[3]" />

          {/* Service Cards — pinned to bottom of hero */}
          <div className="max-w-[1300px] w-full shrink-0">
            <p className="text-white text-[14px] md:text-[18px] leading-[20px] md:leading-[26px] font-semibold md:font-normal mb-2 max-w-[335px] md:max-w-none">
              Solutions designed around you because confidence starts from
              within.
            </p>

            <div className="flex gap-2 md:gap-3 overflow-x-auto hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0 pb-1">
              {SERVICE_CARDS.map((card) => (
                <div
                  key={card.label}
                  className="flex-shrink-0 w-[160px] sm:w-[180px] md:flex-1 md:min-w-0 h-[108px] rounded-xl border border-[#959595]/70 backdrop-blur-[15px] bg-white/[0.01] shadow-[0_4px_40px_rgba(0,0,0,0.07)] p-[6px] flex flex-col gap-2 justify-center cursor-pointer hover:border-white/50 transition-colors"
                >
                  <div className="relative h-[71px] w-full rounded-md overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.label}
                      className="w-full h-full object-cover"
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

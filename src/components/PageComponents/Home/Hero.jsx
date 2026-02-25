export const Hero = () => {
  return (
    <div>
      {/* ================= HERO ================= */}
      <section className="relative w-full overflow-hidden hero_banner"  id="hero-section">
        {/* Hero Background */}
        <div  className="relative h-80 sm:h-96 md:h-[500px] lg:h-[600px] w-full">
          {/* <img
            src="/hero/Hero-Banner.webp"
            alt="Hero Banner"
            className="w-full h-full object-cover"
          /> */}
          {/* Subtle overlay - lighter than current */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-3xl w-full">
            {/* Main Heading with Blue "PERFORMANCE" */}
            <div className="mb-4 md:mb-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-white">
                A NEW STANDARD OF <br />
                <span className="text-blue-500">PERFORMANCE</span>
              </h1>
            </div>

            {/* Subheading - Updated text */}
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 md:mb-10 max-w-2xl leading-relaxed">
              Precision performance science designed to elevate strength, clarity, vitality, and longevity.
            </p>

            {/* Single CTA Button */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 sm:px-10 py-3 rounded-lg transition-colors duration-200 w-full sm:w-auto">
              Begin Your Journey
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
export const CTA = () => {
  return (
    <div>
      {/* ================= CALL TO ACTION SECTION ================= */}
      <section className="relative">
        <div className="h-[300px] md:h-[350px] w-full">
          <img
            src="/cta.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center">
          <div className="text-white px-4">
            <h2 className="text-2xl md:text-4xl font-display font-bold">
              STEP INTO PRIME
            </h2>

            <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200">
              Book Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
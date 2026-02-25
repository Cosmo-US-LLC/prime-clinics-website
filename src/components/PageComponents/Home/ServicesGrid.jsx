export const ServiceGrid = () => {
  const services = [
    {
      title: "Performance Optimization",
      description:
        "Hormone therapy, cryotherapy, IV therapy, and infrared sauna designed to help you perform at your best.",
      image: "/performance-optimization.jpg",
      icon: "💪",
    },
    {
      title: "Longevity Optimization",
      description:
        "DNA testing, nutrition plans, and preventative health protocols to extend your healthspan.",
      image: "/longevity-optimization.jpg",
      icon: "🧬",
    },
    {
      title: "Aesthetic Treatments",
      description:
        "Skincare treatments, body contouring, and other services to enhance your appearance.",
      image: "/aesthetic-treatments.jpg",
      icon: "✨",
    },
  ];

  return (
    <div>
      {/* ================= SERVICES SECTION ================= */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-gray-900 mb-2">
              Our Services
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              Customized services for optimal performance, recovery, and longevity.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="rounded-xl overflow-hidden shadow-md bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-200"
              >
                {/* Service Image Container */}
                <div className="relative h-48 md:h-56 bg-gray-200 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.parent.innerHTML = `<div class="w-full h-full flex items-center justify-center text-4xl">${service.icon}</div>`;
                    }}
                  />
                  {/* Fallback color background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center text-5xl opacity-0 hover:opacity-100 transition-opacity duration-200">
                    {service.icon}
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-5 md:p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-2xl">{service.icon}</div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 md:px-10 py-3 rounded-lg transition-colors duration-200">
              Explore All Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
export const FeatureCard = () => {
  const services = [
    {
      id: 1,
      title: "Performance Testing",
      description: "Advanced diagnostics to optimise your health and fitness.",
      icon: "🏃",
      image: "/service-1.jpg",
    },
    {
      id: 2,
      title: "Health Optimization",
      description: "Personalized wellness programs tailored to your needs.",
      icon: "💚",
      image: "/service-2.jpg",
    },
    {
      id: 3,
      title: "Recovery Solutions",
      description: "Cutting-edge treatments for faster recovery.",
      icon: "⚡",
      image: "/service-3.jpg",
    },
    {
      id: 4,
      title: "Fitness Coaching",
      description: "Expert guidance to achieve your fitness goals.",
      icon: "💪",
      image: "/service-4.jpg",
    },
    {
      id: 5,
      title: "Nutrition Plans",
      description: "Science-based nutrition strategies for your body.",
      icon: "🥗",
      image: "/service-5.jpg",
    },
    {
      id: 6,
      title: "Mental Wellness",
      description: "Holistic approach to mental health and stress relief.",
      icon: "🧠",
      image: "/service-6.jpg",
    },
    {
      id: 7,
      title: "Sleep Optimization",
      description: "Improve your sleep quality for better recovery.",
      icon: "😴",
      image: "/service-7.jpg",
    },
    {
      id: 8,
      title: "Advanced Testing",
      description: "Comprehensive biomarker and genetic testing.",
      icon: "🔬",
      image: "/service-8.jpg",
    },
  ];

  return (
    <div>
      {/* ================= WHAT YOU'RE GETTING ================= */}
      <section className="bg-gray-50 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-gray-900">
              WHAT YOU'RE GETTING
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
              >
                {/* Image */}
                <div className="w-full h-40 md:h-48 bg-gray-200 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-4 md:p-5">
                  <div className="text-2xl mb-2">{service.icon}</div>
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export const BenefitBar = () => {
  const benefits = [
    {
      title: "About Us",
      description: "Learn more about our mission, values, and the expert team.",
    },
    {
      title: "Careers",
      description: "Join our passionate team of professionals dedicated to optimizing health.",
    },
    {
      title: "Treatments",
      description: "Explore our personalized, evidence-based therapies.",
    },
    {
      title: "Services",
      description: "Discover the wide range of services we offer to help you.",
    },
    {
      title: "Contact Us",
      description: "Get in touch to book a consultation or learn more.",
    },
  ];

  return (
    <section className="bg-blue-50 py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Grid (3 items, 2 items, 1 item) */}
        <div className="hidden md:grid md:grid-cols-5 gap-6">
          {benefits.map((benefit, idx) => (
            <button
              key={idx}
              className="text-left p-6 rounded-lg bg-white hover:shadow-md transition-shadow duration-200 group"
              aria-label={benefit.title}
            >
              <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-blue-600">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                {benefit.description}
              </p>
            </button>
          ))}
        </div>

        {/* Mobile Grid (stacked) */}
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
          {benefits.map((benefit, idx) => (
            <button
              key={idx}
              className="text-left p-5 rounded-lg bg-white hover:shadow-md transition-shadow duration-200 group"
              aria-label={benefit.title}
            >
              <h3 className="font-semibold text-base text-gray-900 mb-2 group-hover:text-blue-600">
                {benefit.title}
              </h3>
              <p className="text-xs text-gray-600 group-hover:text-gray-900 transition-colors">
                {benefit.description}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

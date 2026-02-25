export const FoundingMember = () => {
  const benefits = [
    {
      title: "Priority Booking",
      description: "First access to appointments.",
      icon: "📅",
    },
    {
      title: "Exclusive Pricing",
      description: "Special rates for our founding members.",
      icon: "💰",
    },
    {
      title: "Free Consultation",
      description: "Personalized plan tailored to your needs.",
      icon: "🎯",
    },
    {
      title: "Limited Availability",
      description: "Only 150 spots available.",
      icon: "⭐",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Become a Founding Member Today!
          </h2>
          <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto">
            Get exclusive access to Prime Clinic's services, VIP benefits, and founding member pricing. Limited spots available — join now to secure your place.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="bg-white rounded-2xl p-6 md:p-10 mb-8 md:mb-10 border-2 border-blue-200">
          <h3 className="text-center text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-10">
            Key Benefits for Founding Members
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-blue-100">
                    <span className="text-xl">{benefit.icon}</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-base">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 md:px-12 py-3 rounded-lg transition-colors duration-200 mb-4">
            Claim Your Spot Today
          </button>
          <p className="text-white text-sm md:text-base font-medium">
            Only 150 founding member spots available
          </p>
        </div>
      </div>
    </section>
  );
};

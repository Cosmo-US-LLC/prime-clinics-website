export const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Amazing experience. Highly recommended.",
      author: "John Smith",
      rating: 5,
    },
    {
      quote:
        "The service quality is exceptional. Very satisfied.",
      author: "Sarah Johnson",
      rating: 5,
    },
    {
      quote:
        "Outstanding results. Will definitely come back.",
      author: "Mike Davis",
      rating: 5,
    },
  ];

  return (
    <div>
      {/* ================= RESULTS / BLOG ================= */}
      <section className="bg-gray-50 py-14">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-center mb-10">
            GIVE YOUR NERVOUS SYSTEM RESULTS
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-xl shadow overflow-hidden">
                <img
                  src={`/blog-${item}.jpg`}
                  alt=""
                  className="w-full h-48 object-cover"
                />

                <div className="p-5">
                  <h4 className="font-semibold">
                    Performance Insights
                  </h4>
                  <p className="text-sm text-gray-600 mt-2">
                    Learn how to optimise your health data.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="container mx-auto px-4 md:px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-center mb-10">
          REAL STORIES FROM PRIME CLINIC
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-sm text-gray-600 mb-4">
                "{testimonial.quote}"
              </p>

              <div className="mt-4 font-semibold">
                {testimonial.author}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export const FAQ = () => {
  const faqs = [
    {
      question: "What services does Prime Clinic offer?",
      answer:
        "We offer a comprehensive range of services focused on performance, health, and wellness optimization.",
    },
    {
      question: "How do I book an appointment?",
      answer:
        "You can book an appointment through our website or call us directly for personalized assistance.",
    },
    {
      question: "What are your pricing options?",
      answer:
        "Pricing varies based on services. Contact us for a personalized quote tailored to your needs.",
    },
    {
      question: "Do you offer online consultations?",
      answer:
        "Yes, we offer flexible consultation options both in-person and online for your convenience.",
    },
    {
      question: "What qualifications do your staff have?",
      answer:
        "Our team consists of highly qualified health professionals with extensive experience in their fields.",
    },
    {
      question: "Is there a membership program?",
      answer:
        "Yes, we offer membership programs with exclusive benefits and discounted services for members.",
    },
  ];

  return (
    <section className="bg-gray-50 py-14">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-center mb-10">
          FREQUENTLY ASKED QUESTIONS
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="bg-white p-5 rounded-lg shadow cursor-pointer group"
            >
              <summary className="font-semibold text-gray-900 flex items-center justify-between select-none">
                <span>{faq.question}</span>
                <span className="group-open:rotate-180 transition-transform duration-200">▼</span>
              </summary>
              <p className="text-sm text-gray-600 mt-4">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
export const Process = () => {
  const steps = [
    {
      number: 1,
      title: "Step 1",
      description: "Explanation of the process step goes here.",
    },
    {
      number: 2,
      title: "Step 2",
      description: "Explanation of the process step goes here.",
    },
    {
      number: 3,
      title: "Step 3",
      description: "Explanation of the process step goes here.",
    },
  ];

  return (
    <div>
      {/* ================= PROCESS ================= */}
      <section className="container mx-auto px-4 md:px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-center mb-12">
          OUR SIGNATURE PROCESS
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg mb-4">
                {step.number}
              </div>

              <h4 className="mt-4 font-semibold text-lg text-gray-900">
                {step.title}
              </h4>

              <p className="text-sm text-gray-600 mt-2">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
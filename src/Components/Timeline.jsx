const Timeline = () => {
  const steps = [
    {
      date: "12/02/2025",
      title: "Calculate Your Payments",
      description:
        "Use our Payment Calculator to estimate your monthly mortgage payment. You can input a different home price, down payment, loan term and interest rate to see how your monthly payment changes.",
    },
    {
      date: "15/03/2025",
      title: "See If You Pre-Qualify",
      description:
        "Your pre-qualification request is just the first step in the home loan process, so you need to keep all of your other paperwork together and available for when you’re ready to buy.",
    },
    {
      date: "24/04/2025",
      title: "Buy Your Dream Home",
      description:
        "Use our Payment Calculator to estimate your monthly mortgage payment. You can input a different home price, down payment, loan term and interest rate to see how your monthly payment changes.",
    },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="relative flex flex-col md:flex-row md:justify-between gap-12 md:gap-6">
          {steps.map((step, index) => (
            <li
              key={index}
              className="relative flex flex-col md:flex-1 items-start md:items-center text-left md:text-center"
            >
              {/* Line Connector (Desktop only) */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-5 right-0 w-full h-0.5 bg-gray-200 z-0 translate-x-1/2"></div>
              )}

              {/* Step Number */}
              <div className="z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black text-white font-semibold text-sm mb-3 md:mb-4 hover:bg-green-600 transition-colors">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Step Info */}
              <div className="max-w-sm md:max-w-xs">
                <time className="text-xs font-medium text-gray-600 mb-1 block">
                  {step.date}
                </time>
                <h3 className="text-lg font-bold text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm text-gray-700">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* CTA Button */}
        <div className="mt-10 flex justify-center">
          <button className="px-6 py-3 bg-black text-white rounded-full font-medium text-base hover:bg-green-600 transition-colors duration-200">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timeline;

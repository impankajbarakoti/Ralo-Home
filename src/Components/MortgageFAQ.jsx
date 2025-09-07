import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Section from "./Section";

const faqData = [
  {
    question:
      "Can I refinance my mortgage, and when is it a good idea to do so?",
    answer:
      "Refinancing allows you to replace your current loan with a new one, often with better terms. It’s a good idea if interest rates have dropped or if you want to lower monthly payments, shorten your loan term, or access home equity.",
  },
  {
    question:
      "What is the difference between fixed-rate and adjustable-rate mortgage (ARM)?",
    answer:
      "A fixed-rate mortgage keeps the same interest rate throughout, ensuring predictable payments. An ARM starts with a lower rate but may change over time, depending on market conditions.",
  },
  {
    question:
      "What is the difference between a conventional loan and an FHA loan?",
    answer:
      "Conventional loans are not government-backed and often require stronger credit. FHA loans are government-backed, making them accessible with lower credit scores and smaller down payments.",
  },
  {
    question: "Can I pay off my mortgage early? Are there penalties?",
    answer:
      "Most modern mortgages allow early payoff without penalties. However, some older loans may include prepayment penalties. Always check your loan agreement or consult your lender.",
  },
  {
    question:
      "What is private mortgage insurance (PMI), and when is it required?",
    answer:
      "PMI is required if your down payment is under 20%. It protects the lender if you default. PMI can often be removed once you reach 20% home equity.",
  },
];

const MortgageFAQ = () => {
  const [openItems, setOpenItems] = useState([0]);

  const toggleItem = (index) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="relative bg-gradient-to-b from-green-50 via-white to-green-50 py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center lg:text-left text-gray-900 mb-12">
          Have questions about our{" "}
          <span className="text-green-700">mortgage services?</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* ✅ Image Section (Mobile first, Desktop left) */}
          <div className="order-1 lg:order-1 flex flex-col items-center lg:items-start">
            <div className="relative w-full max-w-md rounded-2xl shadow-2xl overflow-hidden">
              <img
                src="https://themes.envytheme.com/ralo/wp-content/uploads/2024/03/faq.jpg"
                alt="Happy elderly couple using smartphone together"
                className="w-full h-auto object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent rounded-2xl"></div>
            </div>

            <a href="/contact">
              <button className="mt-8 px-6 py-3 text-base font-semibold border-2 border-green-700 text-green-700 rounded-lg hover:bg-green-700 hover:text-white shadow-md transition-all duration-300">
                Contact With Us →
              </button>
            </a>
          </div>

          {/* ✅ FAQ Section (Mobile second, Desktop right) */}
          <div className="order-2 lg:order-2 w-full space-y-6">
            {faqData.map((item, index) => {
              const isOpen = openItems.includes(index);

              return (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-green-50 transition-colors"
                  >
                    <span className="text-gray-900 font-medium text-base sm:text-lg">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-6 h-6 text-green-600 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5">
                      <div className="pt-3 border-t border-gray-200">
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
          </div>
          
          <Section/>
    </section>
  );
};

export default MortgageFAQ;

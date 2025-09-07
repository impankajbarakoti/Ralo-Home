import React from "react";
import { Shield, DollarSign, Clock, Home } from "lucide-react";
import Timeline from "./Timeline";

const FeaturesSection = () => {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                You know the home you want. We make it happen for your need.
              </h2>
              <p className="text-gray-600 text-base sm:text-lg">
                Most people find that mortgage financing is complicated and
                confusing. We help you buy your dream home by simplifying the
                mortgage financing process with personalized loan options that
                save you time and money.
              </p>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {/* Feature 1 */}
                <FeatureCard
                  icon={<DollarSign className="w-4 h-4 text-white" />}
                  title="Competitive Rates"
                  desc="Get the best possible interest rates tailored to your financial profile."
                />

                {/* Feature 2 */}
                <FeatureCard
                  icon={<Shield className="w-4 h-4 text-white" />}
                  title="No Prepayment Fees"
                  desc="Pay off your loan early without worrying about extra charges."
                />

                {/* Feature 3 */}
                <FeatureCard
                  icon={<Clock className="w-4 h-4 text-white" />}
                  title="Simple Qualification"
                  desc="Our straightforward process ensures faster approval with less hassle."
                />

                {/* Feature 4 */}
                <FeatureCard
                  icon={<Home className="w-4 h-4 text-white" />}
                  title="Home Refinance"
                  desc="Easily refinance your current home loan to reduce monthly payments."
                />
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="https://themes.envytheme.com/ralo/wp-content/uploads/2024/03/why-us.jpg"
                alt="Happy couple reviewing documents"
                className="rounded-lg shadow-lg w-full max-w-md sm:max-w-lg h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
     <Timeline/>
    </>
  );
};

// Reusable FeatureCard Component
const FeatureCard = ({ icon, title, desc }) => (
  <div className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg">
    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  </div>
);

export default FeaturesSection;

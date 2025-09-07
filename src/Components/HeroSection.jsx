import React from "react";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br bg-[#F4FBE9] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-10 text-center lg:text-left">
            <div className="space-y-6">
              <h1 className="font-sans font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 leading-tight">
                Finance Your <br className="hidden sm:block" /> Awesome Home
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                At <strong>Ralo Mortgage</strong>, we understand that one size
                does not fit all. Let us help you find the best fit for your
                future home.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="flex items-center justify-center bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-md transition">
                Buy A Home
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="flex items-center justify-center border border-gray-300 text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold shadow-sm transition">
                Refinance
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Content - Mortgage Calculator */}
          <div className="bg-[#F4FBE9] rounded-2xl p-6 sm:p-8 shadow-xl w-full max-w-full mx-auto">
            <h3 className="font-bold text-2xl sm:text-3xl text-gray-900 mb-6 text-center lg:text-left">
              Calculate Your Mortgage
            </h3>
            <div className="space-y-5">
              <div>
                <label className="block text-base font-medium text-gray-700 mb-2">
                  Total Amount
                </label>
                <input
                  type="text"
                  placeholder="$0,000"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none text-base"
                />
              </div>
              <div>
                <label className="block text-base font-medium text-gray-700 mb-2">
                  Interest Rate
                </label>
                <input
                  type="text"
                  placeholder="0.00%"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none text-base"
                />
              </div>
              <div>
                <label className="block text-base font-medium text-gray-700 mb-2">
                  Down Payment
                </label>
                <input
                  type="text"
                  placeholder="$,000"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none text-base"
                />
              </div>
              <div>
                <label className="block text-base font-medium text-gray-700 mb-2">
                  Mortgage Period
                </label>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none text-base">
                  <option>Select Period</option>
                  <option>15 Years</option>
                  <option>30 Years</option>
                </select>
              </div>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 mt-6 rounded-lg text-lg font-semibold transition">
                Calculate Mortgage
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import React from "react";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
// 👉 Outline chahiye to '/outline' se import karo

const Section = () => {
  return (
    <div>
      <section className="relative z-10 mx-[5%] mt-20 mb-[-20px] bg-gradient-to-r from-lime-600 to-green-700 text-white rounded-xl p-10 md:p-14 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-8 shadow-lg">
        {/* Left: Heading and Description */}
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-snug mb-4">
            A team of industry pros to guide <br /> you each step of the way
          </h2>
          <p className="text-white text-opacity-90 leading-relaxed text-sm md:text-base">
            Most people find that mortgage financing is complicated and
            confusing. We help you buy your dream home by simplifying the
            mortgage financing process with personalized loan options that save
            you time and money.
          </p>
        </div>

        {/* Right: Contact Info and Button */}
        <div className="flex flex-col items-start md:items-end space-y-5 min-w-[220px]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <PhoneIcon className="w-5 h-5 text-white" />
              <span className="font-semibold text-lg">+1 3324 55 533</span>
            </div>
            <div className="flex items-center gap-3">
              <EnvelopeIcon className="w-5 h-5 text-white" />
              <span className="font-semibold text-lg">
                hellolakssupport@ralo.com
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section;

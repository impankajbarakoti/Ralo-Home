import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import FAQ from "./FAQ";
import SliderImages from "./SliderImages";
const AnimatedParagraph = ({ text }) => {
  return (
    <p className="max-w-3xl mx-auto text-center text-gray-900 tracking-wide leading-relaxed font-medium sm:font-semibold text-sm sm:text-base md:text-lg lg:text-xl px-2">
      {text}
    </p>
  );
};

const HomeSecondPart = () => {
  const [businessPercent, setBusinessPercent] = useState(0);
  const [verbalCommitment, setVerbalCommitment] = useState(0);

  // Intersection Observer hooks
  const { ref: topImageRef, inView: topImageInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: paraRef, inView: paraInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: leftRef, inView: leftInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: rightRef, inView: rightInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (leftInView) {
      let start = 0;
      const end = 78;
      const incrementTime = 40;

      const timer1 = setInterval(() => {
        start += 2;
        if (start >= end) {
          start = end;
          clearInterval(timer1);
        }
        setBusinessPercent(start);
      }, incrementTime);

      let start2 = 0;
      const end2 = 45;
      const timer2 = setInterval(() => {
        start2 += 1;
        if (start2 >= end2) {
          start2 = end2;
          clearInterval(timer2);
        }
        setVerbalCommitment(start2);
      }, incrementTime);

      return () => {
        clearInterval(timer1);
        clearInterval(timer2);
      };
    }
  }, [leftInView]);

  const images = [
    { url: "https://randomuser.me/api/portraits/women/65.jpg" },
    { url: "https://randomuser.me/api/portraits/women/44.jpg" },
    { url: "https://randomuser.me/api/portraits/men/35.jpg" },
    { url: "https://randomuser.me/api/portraits/men/64.jpg" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-[#F4FBE9] rounded-xl shadow-lg space-y-12 sm:space-y-16">
      {/* Top Image */}
      <div
        ref={topImageRef}
        className={`flex justify-center transition-all duration-700 ${
          topImageInView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <img
          src="https://themes.envytheme.com/ralo/wp-content/uploads/2024/02/banner-4.jpg"
          alt="Mortgage Banner"
          className="rounded-2xl sm:rounded-3xl w-full max-w-4xl object-cover shadow-xl"
          style={{ maxHeight: "420px" }}
        />
      </div>

      {/* Paragraph */}
      <div
        ref={paraRef}
        className={`transition-all duration-700 delay-200 ${
          paraInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <AnimatedParagraph text="We truly care about what is best for you! From pre-approval to closing, our goal is to provide you with the best service while saving you money. We provide a completely customized experience, and will find the right loan program and best terms for you. The most important part of our success is our clients and real estate agents who trust us every day to educate and advocate for them in the mortgage process." />
      </div>

      {/* Flex container */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 max-w-6xl mx-auto items-center lg:items-start">
        {/* Left side */}
        <div
          ref={leftRef}
          className={`flex-1 grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-6 text-center lg:text-left w-full px-2 sm:px-4 transition-all duration-700 delay-300 ${
            leftInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Business from referrals */}
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-green-900">
              {businessPercent}%
            </h1>
            <p className="text-gray-700 mt-2 sm:mt-3 tracking-wide font-medium text-base sm:text-lg lg:text-xl">
              Business from Referrals
            </p>
          </div>

          {/* Minute verbal commitment */}
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-green-900">
              {verbalCommitment}+
            </h1>
            <p className="text-gray-700 mt-2 sm:mt-3 tracking-wide font-medium text-base sm:text-lg lg:text-xl">
              Minute Verbal Commitment
            </p>
          </div>

          {/* Divider */}
          <hr className="col-span-full border-t border-green-300 my-6" />

          {/* Avatars + button */}
          <div className="col-span-full flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start items-center gap-4">
            <div className="flex -space-x-3 sm:-space-x-4 items-center">
              {images.map((item, index) => (
                <img
                  key={index}
                  src={item.url}
                  alt={`Client ${index + 1}`}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 sm:border-4 border-white shadow-md"
                  style={{ zIndex: images.length - index }}
                />
              ))}
              <span className="font-semibold text-gray-900 whitespace-nowrap text-base sm:text-lg lg:text-xl ml-4">
                8665+ Popular Clients
              </span>
            </div>

            <Link to="/about">
              <button
                type="button"
                className="bg-green-700 hover:bg-green-900 text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg font-semibold flex items-center space-x-2 shadow-md transition text-sm sm:text-base"
              >
                <span>Know More About Us</span>
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
            </Link>
          </div>
        </div>

        {/* Right side images */}
        <div
          ref={rightRef}
          className={`flex flex-1 gap-4 sm:gap-6 w-full max-w-sm sm:max-w-md lg:max-w-none px-2 sm:px-4 transition-all duration-700 delay-500 ${
            rightInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <img
            src="https://themes.envytheme.com/ralo/wp-content/uploads/2024/02/about-1.jpg"
            alt="About 1"
            className="flex-1 object-cover rounded-lg sm:rounded-xl shadow-md scale-x-[-1]"
            style={{
              height: "220px",
              minWidth: "120px",
            }}
          />
          <img
            src="https://themes.envytheme.com/ralo/wp-content/uploads/2024/02/about-2.jpg"
            alt="About 2"
            className="flex-1 object-cover rounded-lg sm:rounded-xl shadow-md scale-x-[-1]"
            style={{
              height: "220px",
              minWidth: "120px",
            }}
          />
        </div>
      </div>
      <FAQ />
      <SliderImages />
    </section>
  );
};

export default HomeSecondPart;

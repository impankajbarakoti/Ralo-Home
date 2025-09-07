import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
  },
};

const AboutHero = ({
  breadcrumb = [{ label: "Home", isActive: true }, { label: "Management" }],
  heading = (
    <>
      Invest Wisely, Live Lavishly:
      <br />A Real Estate Mortgage Oasis for Every Aspiring Homeowner
    </>
  ),
  paragraph = `We truly care about what is best for you! From pre-approval to closing, our goal is to provide you with the best service while saving you money.
  We provide a completely customized experience, and will find the right loan program and best terms for you.`,
  ctaText = "View All Program Loans",
  ctaOnClick = () => {},
  ctaIcon = <FiArrowRight className="mt-[2px]" />,
  topLeftShapeSrc = "https://themes.envytheme.com/ralo/wp-content/uploads/2024/02/shape-7.png",
  bottomRightShapeSrc = "https://themes.envytheme.com/ralo/wp-content/uploads/2024/02/shape-8.png",
  mainImageSrc = "https://themes.envytheme.com/ralo/wp-content/uploads/2024/02/banner-img-5.jpg",
}) => {
  return (
    <section className="bg-[#F7FBEF] relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-20">
      <motion.div
        className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10 sm:gap-14 md:gap-20 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* ==== LEFT CONTENT ==== */}
        <div className="w-full lg:w-1/2 max-w-xl text-center lg:text-left">
          {/* Breadcrumb */}
          <motion.div
            variants={fadeInUp}
            className="mb-4 text-xs sm:text-sm text-gray-500 flex justify-center lg:justify-start flex-wrap gap-x-1"
          >
            {breadcrumb.map((item, idx) => (
              <span key={idx}>
                <Link to="/">
                  <span
                    className={
                      item.isActive ? "text-green-700 font-semibold" : ""
                    }
                  >
                    {item.label}
                  </span>
                </Link>
                {idx < breadcrumb.length - 1 && (
                  <span className="mx-1 text-gray-400">/</span>
                )}
              </span>
            ))}
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeInUp}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug text-gray-900 mb-5"
          >
            {heading}
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            variants={fadeInUp}
            className="text-gray-700 text-sm sm:text-base md:text-lg mb-6 leading-relaxed max-w-lg mx-auto lg:mx-0"
          >
            {paragraph}
          </motion.p>

          {/* CTA Button */}
          <motion.button
            variants={fadeInUp}
            onClick={ctaOnClick}
            className="inline-flex cursor-pointer items-center gap-2 text-green-700 font-semibold hover:text-green-900 text-sm sm:text-base transition-all duration-200"
          >
            {ctaText} {ctaIcon}
          </motion.button>
        </div>

        {/* ==== RIGHT IMAGE ==== */}
        <motion.div
          variants={scaleIn}
          className="w-full lg:w-1/2 max-w-md sm:max-w-lg lg:max-w-[520px] mx-auto relative"
        >
          {/* Decorative Top Left Shape */}
          <motion.img
            src={topLeftShapeSrc}
            className="absolute top-0 left-0 w-12 sm:w-16 md:w-20 opacity-30 -translate-x-3 -translate-y-3 z-0 animate-pulse"
            alt="Top Left Decoration"
          />

          {/* House-shaped SVG Image */}
          <svg viewBox="0 0 512 512" className="w-full h-auto relative z-10">
            <defs>
              <clipPath id="house-clip" clipPathUnits="objectBoundingBox">
                <path
                  d="M0.5,0 L1,0.5 V1 H0 V0.5 Z"
                  transform="scale(1.02 1.05) translate(-0.01, -0.02)"
                />
              </clipPath>
            </defs>
            <image
              clipPath="url(#house-clip)"
              href={mainImageSrc}
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid slice"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Decorative Bottom Right Shape */}
      <motion.img
        src={bottomRightShapeSrc}
        className="absolute bottom-4 right-4 sm:bottom-6 md:bottom-8 lg:bottom-12 w-16 sm:w-24 md:w-28 lg:w-36 opacity-70 z-0 animate-float"
        alt="Bottom Right Decoration"
        initial={{ y: 0 }}
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </section>
  );
};

export default AboutHero;

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const [businessPercent, setBusinessPercent] = useState(0);
  const [verbalCommitment, setVerbalCommitment] = useState(0);

  // Animation controls for counters
  const businessControls = useAnimation();
  const verbalControls = useAnimation();

  useEffect(() => {
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
  }, []);

  // Trigger pop animation on businessPercent update
  useEffect(() => {
    businessControls.start({
      scale: [1, 1.15, 1],
      transition: { duration: 0.4, ease: "easeInOut" },
    });
  }, [businessPercent, businessControls]);

  // Trigger pop animation on verbalCommitment update
  useEffect(() => {
    verbalControls.start({
      scale: [1, 1.15, 1],
      transition: { duration: 0.4, ease: "easeInOut" },
    });
  }, [verbalCommitment, verbalControls]);

  const images = [
    { url: "https://randomuser.me/api/portraits/women/1.jpg" },
    { url: "https://randomuser.me/api/portraits/men/2.jpg" },
    { url: "https://randomuser.me/api/portraits/women/3.jpg" },
    { url: "https://randomuser.me/api/portraits/men/4.jpg" },
  ];

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imgFade = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const buttonFadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 1, duration: 0.6 } },
  };

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 max-w-screen-xl mx-auto bg-white">
      {/* Heading */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="max-w-3xl mx-auto text-center mb-16 px-4 md:px-0"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
          We care about what’s best for you.
        </h2>
        <p className="text-gray-600 mt-6 text-lg md:text-xl max-w-3xl mx-auto">
          From pre-approval to closing, our goal is to provide top-tier service
          while saving you money. We customize your experience and find the
          right loan program and terms for your needs.
        </p>
      </motion.div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Images */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          {images.slice(0, 2).map((image, idx) => (
            <motion.img
              key={idx}
              src={`https://themes.envytheme.com/ralo/wp-content/uploads/2024/02/about-${
                idx + 1
              }.jpg`}
              alt={`About ${idx + 1}`}
              className="w-full max-w-xs md:max-w-sm rounded-[45%_45%_55%_55%/55%_45%_55%_45%] object-cover shadow-2xl cursor-pointer"
              variants={imgFade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          ))}
        </div>

        {/* Right: Stats + Button */}
        <div className="grid grid-cols-2 gap-12 text-center md:text-left">
          {/* Business from referrals */}
          <motion.div
            animate={businessControls}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-6xl font-extrabold text-green-700">
              {businessPercent}%
            </h3>
            <p className="mt-3 text-gray-700 font-semibold tracking-wide text-lg md:text-xl">
              Business from Referrals
            </p>
          </motion.div>

          {/* Verbal Commitment */}
          <motion.div
            animate={verbalControls}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-6xl font-extrabold text-green-700">
              {verbalCommitment}+
            </h3>
            <p className="mt-3 text-gray-700 font-semibold tracking-wide text-lg md:text-xl">
              Minute Verbal Commitment
            </p>
          </motion.div>

          {/* Avatars + Clients */}

          <motion.div
            className="col-span-2 flex flex-col md:flex-row items-center gap-6 mt-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <Link to="/blog">
              <div className="flex -space-x-4">
                {images.map((item, index) => (
                  <motion.img
                    key={index}
                    src={item.url}
                    alt={`Client ${index + 1}`}
                    className="w-14 h-14 rounded-full border-2 border-white shadow-md cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    style={{ zIndex: images.length - index }}
                  />
                ))}
              </div>
            </Link>
            <span className="text-gray-900 font-semibold text-lg md:text-xl">
              8,665+ Happy Clients
            </span>
          </motion.div>

      
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

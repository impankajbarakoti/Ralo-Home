import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "Renovation Mortgage",
    answer:
      "A renovation mortgage lets you finance the purchase and renovation of your home with a single loan.",
  },
  {
    question: "Private Mortgage Home Loans",
    answer:
      "Private mortgage loans are offered by private lenders and can be a flexible option for borrowers.",
  },
  {
    question: "Apartment & Commercial",
    answer:
      "We offer financing solutions for apartment buildings and commercial real estate investments.",
  },
  {
    question: "Conventional Mortgage",
    answer:
      "A conventional mortgage is a home loan not insured or guaranteed by the federal government.",
  },
];

// Animated Heading Component
const AnimatedHeading = ({ animate }) => {
  const text =
    "Buying a home can be overwhelming. There are so many financing options";
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

  return (
    <motion.h1
      className="text-2xl sm:text-3xl md:text-4xl font-extrabold max-w-3xl mx-auto md:mx-0 tracking-wide leading-tight text-white drop-shadow-lg"
      variants={container}
      initial="hidden"
      animate={animate ? "visible" : "hidden"}
    >
      {words.map((word, index) => (
        <motion.span key={index} variants={child} className="inline-block mr-2">
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [typedAnswer, setTypedAnswer] = useState("");
  const typingIntervalRef = useRef(null);

  const faqRef = useRef(null);
  const [inView, setInView] = useState(false);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (faqRef.current) observer.observe(faqRef.current);

    return () => {
      if (faqRef.current) observer.unobserve(faqRef.current);
    };
  }, []);

  // Clear interval
  useEffect(() => {
    return () => clearInterval(typingIntervalRef.current);
  }, []);

  // Typing effect
  useEffect(() => {
    if (openIndex === null) {
      setTypedAnswer("");
      clearInterval(typingIntervalRef.current);
      return;
    }

    const fullText = faqData[openIndex].answer;
    let currentIndex = 0;
    setTypedAnswer("");
    clearInterval(typingIntervalRef.current);

    typingIntervalRef.current = setInterval(() => {
      currentIndex++;
      setTypedAnswer(fullText.slice(0, currentIndex));
      if (currentIndex === fullText.length)
        clearInterval(typingIntervalRef.current);
    }, 25);

    return () => clearInterval(typingIntervalRef.current);
  }, [openIndex]);

  const anyOpen = openIndex !== null;

  return (
    <div
      ref={faqRef}
      className="min-h-screen bg-gradient-to-b from-black via-green-900 to-black px-4 sm:px-6 md:px-10 py-14 sm:py-20 max-w-7xl mx-auto rounded-xl"
    >
      {/* Heading */}
      <div className="mb-12 sm:mb-16 text-center md:text-left">
        <AnimatedHeading animate={inView} />
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 lg:gap-16">
        {/* Images */}
        <div className="flex gap-4 sm:gap-6 w-full md:w-1/2">
          <motion.img
            src="https://themes.envytheme.com/ralo/wp-content/uploads/2024/03/financing-1.jpg"
            alt="Happy woman"
            className="rounded-tl-[100px] sm:rounded-tl-[150px] rounded-br-[100px] sm:rounded-br-[150px] w-1/2 h-[220px] sm:h-[300px] md:h-[400px] object-cover shadow-2xl"
            loading="lazy"
            animate={
              inView
                ? { scale: anyOpen ? 1.1 : 1, rotate: anyOpen ? 2 : 0 }
                : { scale: 1, rotate: 0 }
            }
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            whileHover={{ scale: 1.12, rotate: 3 }}
          />
          <motion.img
            src="https://themes.envytheme.com/ralo/wp-content/uploads/2024/03/financing-2.jpg"
            alt="Business man"
            className="rounded-bl-[100px] sm:rounded-bl-[150px] rounded-tr-[100px] sm:rounded-tr-[150px] w-1/2 h-[220px] sm:h-[300px] md:h-[400px] object-cover shadow-2xl"
            loading="lazy"
            animate={
              inView
                ? { scale: anyOpen ? 1.1 : 1, rotate: anyOpen ? -2 : 0 }
                : { scale: 1, rotate: 0 }
            }
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            whileHover={{ scale: 1.12, rotate: -3 }}
          />
        </div>

        {/* FAQ List */}
        <div className="w-full md:w-1/2 space-y-6 sm:space-y-8">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="bg-green-900 bg-opacity-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl cursor-default"
              >
                {/* Question */}
                <div className="flex justify-between items-center">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                    {item.question}
                  </h3>

                  <motion.button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="text-3xl sm:text-4xl font-extrabold text-green-400"
                    aria-expanded={isOpen}
                    aria-label={isOpen ? "Collapse answer" : "Expand answer"}
                    initial={false}
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    →
                  </motion.button>
                </div>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0, y: 10 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={{ opacity: 0, height: 0, y: 10 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="mt-3 sm:mt-5 overflow-hidden text-green-200 text-sm sm:text-base md:text-lg leading-relaxed"
                    >
                      <p className="whitespace-pre-wrap">
                        {typedAnswer}
                        <motion.span
                          className="inline-block w-[8px] sm:w-[10px] h-[18px] sm:h-[24px] bg-green-400 ml-1 rounded-sm"
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ repeat: Infinity, duration: 1 }}
                        />
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

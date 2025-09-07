import React from "react";
import {
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Animation Variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

// Reusable Card Component
const TeamCard = ({ image, name, title, phone, address, email }) => (
  <motion.div
    variants={cardVariants}
    className="bg-white border border-green-100 rounded-xl shadow-sm p-6 text-center space-y-5 transition transform hover:shadow-lg hover:-translate-y-2 duration-300 "
  >
    <img
      src={image}
      alt={name}
      className="w-full h-48 md:h-56 object-cover rounded-md"
      loading="lazy"
      draggable={false}
    />
    <div>
      <p className="text-green-600 text-sm md:text-base font-semibold">
        {title}
      </p>
      <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-1">
        {name}
      </h3>
    </div>
    <hr className="border-t border-green-100" />
    <div className="text-left text-sm md:text-base text-gray-700 space-y-3">
      <div className="flex items-center gap-3">
        <PhoneIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
        <span>{phone}</span>
      </div>
      <div className="flex items-center gap-3">
        <MapPinIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
        <span>{address}</span>
      </div>
      <div className="flex items-center gap-3">
        <EnvelopeIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
        <span>{email}</span>
      </div>
    </div>
  </motion.div>
);

// Main Section Component
const HomeTeams = () => {
  const CardData = [
    {
      image:
        "https://themes.envytheme.com/ralo/wp-content/uploads/2024/03/team-6.jpg",
      name: "Sarah Davis",
      title: "Loan Officer",
      phone: "+1 3324 55 537",
      address: "Hilton Road, 90KY, NY, America",
      email: "sarahdavis@ralo.com",
    },
    {
      image:
        "https://themes.envytheme.com/ralo/wp-content/uploads/2024/03/team-5.jpg",
      name: "Elizabeth White",
      title: "Office Manager",
      phone: "+1 3324 55 538",
      address: "Hilton Road, 90KY, NY, America",
      email: "elizabethwhite@ralo.com",
    },
    {
      image:
        "https://themes.envytheme.com/ralo/wp-content/uploads/2024/03/team-4.jpg",
      name: "Richard Jackson",
      title: "CEO at Ralo",
      phone: "+1 3324 55 538",
      address: "Hilton Road, 90KY, NY, America",
      email: "richardjackson@ralo.com",
    },
    {
      image:
        "https://themes.envytheme.com/ralo/wp-content/uploads/2024/03/team-3.jpg",
      name: "Linda Carter",
      title: "Senior Loan Specialist",
      phone: "+1 3324 55 538",
      address: "Hilton Road, 90KY, NY, America",
      email: "lindacarter@ralo.com",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Team Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
        >
          {CardData.map((item, index) => (
            <TeamCard key={index} {...item} />
          ))}
        </motion.div>

        {/* Right: Description */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-8 text-center lg:text-left"
        >
          <motion.h2
            variants={textVariants}
            className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight"
          >
            Visit our professional team member for any help with your real
            estate mortgage
          </motion.h2>

          <motion.p
            variants={textVariants}
            className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0"
          >
            Most people find that mortgage financing is complicated and
            confusing. We help you buy your dream home by simplifying the
            mortgage financing process with personalized loan options that save
            you time and money.
          </motion.p>

          <Link to="/about">
            <motion.button className="inline-flex items-center cursor-pointer gap-2 text-green-700 font-semibold hover:text-green-900 transition text-lg md:text-xl group">
              View All Professional Members
              <motion.span className="text-2xl group-hover:translate-x-1 transition-transform duration-300">
                →
              </motion.span>
            </motion.button>
          </Link>

          <motion.img
            variants={imageVariants}
            src="https://themes.envytheme.com/ralo/wp-content/uploads/2024/03/team-img.png"
            alt="Team Illustration"
            className="mt-10 max-w-xs md:max-w-sm mx-auto lg:mx-0"
            loading="lazy"
            draggable={false}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HomeTeams;

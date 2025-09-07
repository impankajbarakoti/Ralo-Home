import React from "react";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { motion } from "framer-motion";

const ContactCard = ({
  title = "New York, USA",
  email = "hello@ralo.com",
  address = [
    "USA Address - 254 Chapman Rd,",
    "Ste 208 #13379 Newark,",
    "Delaware 19702",
  ],
  phone = "+202-9393-9393 99",
  className = "",
}) => {
  return (
    <motion.div
      className={`w-full max-w-md bg-green-50 rounded-xl p-6 sm:p-8 md:p-10 shadow-lg border border-green-200 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Title */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-green-900 mb-5 sm:mb-7">
        {title}
      </h2>
      <hr className="border-green-200 mb-6" />

      {/* Email */}
      <div className="flex items-center mb-6 text-green-700">
        <FiMail className="w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-5 flex-shrink-0" />
        <a
          href={`mailto:${email}`}
          className="hover:underline text-gray-800 text-sm sm:text-base md:text-lg break-words"
        >
          {email}
        </a>
      </div>

      {/* Address */}
      <div className="flex items-start mb-6 text-green-700">
        <FiMapPin className="w-5 h-5 sm:w-6 sm:h-6 mt-1 mr-3 sm:mr-5 flex-shrink-0" />
        <address className="not-italic text-gray-800 leading-relaxed text-sm sm:text-base md:text-lg">
          {address.map((line, idx) => (
            <span key={idx} className="block">
              {line}
            </span>
          ))}
        </address>
      </div>

      {/* Phone */}
      <div className="flex items-center text-green-700">
        <FiPhone className="w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-5 flex-shrink-0" />
        <a
          href={`tel:${phone.replace(/\s/g, "")}`}
          className="hover:underline text-gray-800 text-sm sm:text-base md:text-lg break-words"
        >
          {phone}
        </a>
      </div>
    </motion.div>
  );
};

export default ContactCard;

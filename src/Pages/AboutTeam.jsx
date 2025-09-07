import React from "react";
import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

const AboutTeams = () => {
  const Data = [
    {
      image:
        "https://themes.envytheme.com/ralo/wp-content/uploads/2024/03/team-6.jpg",
      name: "Sarah Davis",
      title: "Loan Officer",
      phone: "+1 3324 55 538",
      address: "Hilton Road, 90KY, NY, America",
      email: "sarahdavis@ralo.com",
    },
    {
      image:
        "https://themes.envytheme.com/ralo/wp-content/uploads/2024/03/team-5.jpg",
      name: "Elizabeth White",
      title: "Officer Manager",
      phone: "+1 3324 55 538",
      address: "Hilton Road, 90KY, NY, America",
      email: "elizabeth@ralo.com",
    },
    {
      image:
        "https://themes.envytheme.com/ralo/wp-content/uploads/2024/03/team-4.jpg",
      name: "Richard Jackson",
      title: "CEO at Ralo",
      phone: "+1 3324 55 538",
      address: "Hilton Road, 90KY, NY, America",
      email: "richard@ralo.com",
    },
    {
      image:
        "https://themes.envytheme.com/ralo/wp-content/uploads/2024/03/team-3.jpg",
      name: "Laura Martinez",
      title: "Business Manager",
      phone: "+1 3324 55 538",
      address: "Hilton Road, 90KY, NY, America",
      email: "laura@ralo.com",
    },
  ];

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // stagger animation by index
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const LoanOfficerCard = ({
    image,
    name,
    title,
    phone,
    address,
    email,
    index,
  }) => {
    return (
      <motion.div
        className="flex flex-col sm:flex-row bg-white border border-green-100 rounded-xl shadow-md p-6 gap-6 hover:shadow-lg transition-shadow duration-300"
        custom={index}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={cardVariants}
      >
        {/* Image */}
        <img
          src={image}
          alt={name}
          className="w-full sm:w-40 h-40 object-cover rounded-xl flex-shrink-0"
        />

        {/* Info Section */}
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-green-600 font-medium">{title}</p>
            <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
            <hr className="my-2 border-t border-gray-200 w-20" />
          </div>

          <div className="flex flex-col gap-3 mt-4 text-gray-700 text-sm">
            <div className="flex items-center gap-2">
              <FiPhone className="text-green-600" />
              <span>{phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiMapPin className="text-green-600" />
              <span>{address}</span>
            </div>
            <div className="flex items-center gap-2">
              <FiMail className="text-green-600" />
              <span>{email}</span>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="bg-[#F7FBEF] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Meet Our Team
          </h2>
          <p className="text-gray-600 text-lg">
            Our experienced professionals are here to guide you every step of
            the way.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
          {Data.map((item, index) => (
            <LoanOfficerCard
              key={index}
              index={index}
              image={item.image}
              name={item.name}
              title={item.title}
              phone={item.phone}
              address={item.address}
              email={item.email}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeams;

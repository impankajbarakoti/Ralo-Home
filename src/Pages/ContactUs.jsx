import ContactCard from "../Components/ContactCard";
import ContactFormWithMap from "../Components/ContactFormWithMap";
import AboutHero from "./AboutHero";

import { motion } from "framer-motion";


const ContactUs = () => {
  const contactData = [
    {
      title: "New York, USA",
      email: "hello@ralo.com",
      address: [
        "USA Address - 254 Chapman Rd,",
        "Ste 208 #13379 Newark,",
        "Delaware 19702",
      ],
      phone: "+202-9393-9393 99",
    },
    {
      title: "Lisbon, Portugal",
      email: "hello@ralo.com",
      address: [
        "Portugal Address - 125 Chapman Rd,",
        "Ste 564 #47859 Lisbon,",
        "Delaware 159756",
      ],
      phone: "+202-9393-9393 10",
    },
    {
      title: "Washington, USA",
      email: "hello@ralo.com",
      address: [
        "USA Address - 852 Chapman Rd,",
        "Ste 436 #87964 Newark,",
        "Delaware 78985",
      ],
      phone: "+202-9393-9393 01",
    },
  ];

  // Animation variants for cards and sections
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div>
      <AboutHero
        breadcrumb={[{ label: "Home", isActive: true }, { label: "About" }]}
        heading={
          <>
            Redefining Homeownership:
            <br /> Real Estate Mortgages
            <br /> Tailored to Your Ambitions
          </>
        }
        paragraph="We truly care about what is best for you! From pre-approval to closing, our goal is to provide you with the best service while saving you money. We provide a completely customized experience, and will find the right loan program and best terms for you."
        ctaText="Explore More"
        ctaOnClick={() => alert("CTA Clicked!")}
        mainImageSrc="https://themes.envytheme.com/ralo/wp-content/uploads/2024/02/banner-img-5.jpg"
        topLeftShapeSrc="https://themes.envytheme.com/ralo/wp-content/uploads/2024/02/shape-7.png"
        bottomRightShapeSrc="https://themes.envytheme.com/ralo/wp-content/uploads/2024/02/shape-8.png"
      />

      <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {contactData.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={index}
            className="transform transition-transform hover:scale-[1.03] hover:shadow-lg rounded-lg"
          >
            <ContactCard
              title={item.title}
              email={item.email}
              address={item.address}
              phone={item.phone}
              className="h-full"
            />
          </motion.div>
        ))}
      </section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="max-w-7xl mx-auto px-6 py-12"
      >
        <ContactFormWithMap />
      </motion.section>
    </div>
  );
};

export default ContactUs;

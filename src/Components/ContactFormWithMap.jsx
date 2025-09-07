import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactFormWithMap = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    website: "",
    zip: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("contactFormData", JSON.stringify(formData));
    alert("Your message has been saved locally!");
    setFormData({
      email: "",
      name: "",
      phone: "",
      website: "",
      zip: "",
      message: "",
    });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Left - Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 leading-tight text-gray-900">
            Contact with us for any help needed from our company
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-5 sm:space-y-6 max-w-lg"
          >
            {[
              { label: "Your email", type: "email", name: "email" },
              { label: "Your name", type: "text", name: "name" },
              { label: "Phone", type: "tel", name: "phone" },
              { label: "Website", type: "url", name: "website" },
              { label: "Zip Code", type: "text", name: "zip" },
            ].map(({ label, type, name }) => (
              <div key={name}>
                <label
                  htmlFor={name}
                  className="block mb-1 text-sm sm:text-base font-medium text-gray-700"
                >
                  {label}
                </label>
                <input
                  type={type}
                  name={name}
                  id={name}
                  placeholder={label}
                  value={formData[name]}
                  onChange={handleChange}
                  className="w-full rounded-md border border-green-200 bg-green-50 px-3 py-2 sm:px-4 sm:py-3 placeholder-green-300 text-gray-900 text-sm sm:text-base focus:border-green-500 focus:ring-2 focus:ring-green-300 focus:outline-none transition"
                  required={name === "email" || name === "name"}
                />
              </div>
            ))}

            <div>
              <label
                htmlFor="message"
                className="block mb-1 text-sm sm:text-base font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-md border border-green-200 bg-green-50 px-3 py-2 sm:px-4 sm:py-3 placeholder-green-300 text-gray-900 text-sm sm:text-base focus:border-green-500 focus:ring-2 focus:ring-green-300 focus:outline-none transition resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto inline-block cursor-pointer rounded-md bg-green-900 text-white px-6 py-3 text-sm sm:text-base font-semibold hover:bg-green-800 transition"
            >
              Submit Your Message
            </button>
          </form>
        </motion.div>

        {/* Right - Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="rounded-lg overflow-hidden shadow-md h-64 sm:h-80 md:h-[450px] lg:h-[550px] w-full"
        >
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3021.7492838579314!2d-75.9925647!3d43.0481222!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d34698a45c529f%3A0x51481e49b925dbd4!2sSyracuse%2C%20NY%2013201%2C%20USA!5e0!3m2!1sen!2sin!4v1693110191441!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactFormWithMap;

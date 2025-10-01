//

// import React from "react";
// import {
//   EnvelopeIcon,
//   PhoneIcon,
//   ClockIcon,
//   MapPinIcon,
//   ArrowUpIcon,
// } from "@heroicons/react/24/outline";

// import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <>
//       <footer className="bg-[#f4f8e5] text-gray-900 px-6 py-12 relative select-none">
//         {/* Top Section */}

//         {/* Email Subscribe Section */}
//         <div className="py-10 px-6 md:px-16 max-w-7xl mx-auto">
//           <form
//             onSubmit={(e) => e.preventDefault()}
//             className="flex flex-col md:flex-row items-center gap-4 max-w-4xl mx-auto"
//           >
//             <label
//               htmlFor="email"
//               className="text-gray-800 font-semibold min-w-[200px] cursor-pointer"
//             >
//               Enter your email here
//             </label>

//             <input
//               id="email"
//               type="email"
//               placeholder="Email"
//               className="
//               flex-1 px-5 py-3 rounded-lg border border-[#D3E4BE]
//               focus:outline-none focus:ring-2 focus:ring-green-400
//               transition duration-300
//             "
//               required
//             />

//             <button
//               type="submit"
//               className="
//               bg-green-950 text-white cursor-pointer font-semibold px-6 py-3 rounded-md
//               hover:bg-green-900 transition duration-300
//               whitespace-nowrap
//             "
//             >
//               Subscribe Now
//             </button>
//           </form>
//         </div>
//         <hr className="text-[#D3E4BE]" />

//         {/* Footer Grid */}
//         <div className="max-w-7xl mx-auto grid md:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-10 mt-14 px-6 md:px-0">
//           {/* Logo + About */}
//           <div className="space-y-4 md:col-span-1">
//             <div className="flex items-center">
//               <img
//                 src="https://themes.envytheme.com/ralo/wp-content/uploads/2024/02/ralo-black.png"
//                 alt="Ralo Logo"
//                 className="h-10 w-auto"
//               />
//             </div>
//             <p className="text-sm leading-relaxed">
//               With a rich history spanning decades, our club has become a symbol
//               of excellence in the golfing community. Offers a challenging yet
//               rewarding gameplay.
//             </p>
//             <div className="flex space-x-4 pt-2 text-green-700 text-xl">
//               <a
//                 href="#"
//                 aria-label="Facebook"
//                 className="hover:text-green-900"
//               >
//                 <FaFacebookF />
//               </a>
//               <a
//                 href="#"
//                 aria-label="LinkedIn"
//                 className="hover:text-green-900"
//               >
//                 <FaLinkedinIn />
//               </a>
//               <a
//                 href="#"
//                 aria-label="Instagram"
//                 className="hover:text-green-900"
//               >
//                 <FaInstagram />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <a href="/about" className="hover:text-green-600">
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a href="/contact" className="hover:text-green-600">
//                   Contact Us
//                 </a>
//               </li>
//               <li>
//                 <a href="/blog" className="hover:text-green-600">
//                   Blog
//                 </a>
//               </li>
//               <li>
//                 <a href="/" className="hover:text-green-600">
//                   FAQ's
//                 </a>
//               </li>
//               <li>
//                 <a href="/" className="hover:text-green-600">
//                   Career
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Services</h3>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <a href="/" className="hover:text-green-600">
//                   Apartment & Commercial
//                 </a>
//               </li>
//               <li>
//                 <a href="/" className="hover:text-green-600">
//                   Reverse Mortgage
//                 </a>
//               </li>
//               <li>
//                 <a href="/" className="hover:text-green-600">
//                   Home Buyer’s Guide
//                 </a>
//               </li>
//               <li>
//                 <a href="/" className="hover:text-green-600">
//                   Mortgage Home Loans
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Company */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Company</h3>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <a href="/" className="hover:text-green-600">
//                   Terms & Condition
//                 </a>
//               </li>
//               <li>
//                 <a href="/" className="hover:text-green-600">
//                   Privacy Policy
//                 </a>
//               </li>
//               <li>
//                 <a href="/" className="hover:text-green-600">
//                   Calculate Mortgage
//                 </a>
//               </li>
//               <li>
//                 <a href="/" className="hover:text-green-600">
//                   History & Fidelity
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Our Contact</h3>
//             <ul className="space-y-2 text-sm">
//               <li className="flex items-center">
//                 <EnvelopeIcon className="w-5 h-5 mr-2 text-green-600" />
//                 helloralo@gmail.com
//               </li>
//               <li className="flex items-center">
//                 <PhoneIcon className="w-5 h-5 mr-2 text-green-600" />
//                 +48 74326 02396
//               </li>
//               <li className="flex items-center">
//                 <PhoneIcon className="w-5 h-5 mr-2 text-green-600" />
//                 +48 64453 96533
//               </li>
//               <li className="flex items-center">
//                 <ClockIcon className="w-5 h-5 mr-2 text-green-600" />
//                 Mon - Fri 12:00 - 18:00
//               </li>
//               <li className="flex items-center">
//                 <MapPinIcon className="w-5 h-5 mr-2 text-green-600" />
//                 Hilton, TY56/90 NY, USA
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Footer Bottom */}
//         <div className="text-center text-sm pt-8 border-t mt-10 border-gray-300 select-text max-w-7xl mx-auto px-6 md:px-0">
//           © Ralo. All Rights Reserved by <strong>EnvyTheme</strong>
//         </div>

//         {/* Back to Top Button */}
//         <button
//           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//           className="fixed bottom-6 left-6 cursor-pointer bg-green-600 hover:bg-green-700 text-white p-3 rounded shadow-lg z-50"
//           aria-label="Back to top"
//         >
//           <ArrowUpIcon className="w-5 h-5" />
//         </button>
//       </footer>
//     </>
//   );
// };

// export default Footer;



import React from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  ClockIcon,
  MapPinIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";

import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#f4f8e5] text-gray-900 py-12 relative select-none">
        {/* Top Section */}

        {/* Email Subscribe Section */}
        <div className="py-10 px-6 md:px-16 max-w-7xl mx-auto">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col md:flex-row items-center gap-4 max-w-4xl mx-auto"
          >
            <label
              htmlFor="email"
              className="text-gray-800 font-semibold min-w-[200px] cursor-pointer"
            >
              Enter your email here
            </label>

            <input
              id="email"
              type="email"
              placeholder="Email"
              className="
              flex-1 px-5 py-3 rounded-lg border border-[#D3E4BE]
              focus:outline-none focus:ring-2 focus:ring-green-400
              transition duration-300
            "
              required
            />

            <button
              type="submit"
              className="
              bg-green-950 text-white cursor-pointer font-semibold px-6 py-3 rounded-md
              hover:bg-green-900 transition duration-300
              whitespace-nowrap
            "
            >
              Subscribe Now
            </button>
          </form>
        </div>
        <hr className="text-[#D3E4BE]" />

        {/* Footer Grid */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-10 mt-14 px-6 md:px-0">
          {/* Logo + About */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center">
              <img
                src="https://themes.envytheme.com/ralo/wp-content/uploads/2024/02/ralo-black.png"
                alt="Ralo Logo"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed">
              With a rich history spanning decades, our club has become a symbol
              of excellence in the golfing community. Offers a challenging yet
              rewarding gameplay.
            </p>
            <div className="flex space-x-4 pt-2 text-green-700 text-xl">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-green-900"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:text-green-900"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-green-900"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="hover:text-green-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-green-600">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-green-600">
                  Blog
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-green-600">
                  FAQ's
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-green-600">
                  Career
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-green-600">
                  Apartment & Commercial
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-green-600">
                  Reverse Mortgage
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-green-600">
                  Home Buyer’s Guide
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-green-600">
                  Mortgage Home Loans
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-green-600">
                  Terms & Condition
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-green-600">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-green-600">
                  Calculate Mortgage
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-green-600">
                  History & Fidelity
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <EnvelopeIcon className="w-5 h-5 mr-2 text-green-600" />
                helloralo@gmail.com
              </li>
              <li className="flex items-center">
                <PhoneIcon className="w-5 h-5 mr-2 text-green-600" />
                +48 74326 02396
              </li>
              <li className="flex items-center">
                <PhoneIcon className="w-5 h-5 mr-2 text-green-600" />
                +48 64453 96533
              </li>
              <li className="flex items-center">
                <ClockIcon className="w-5 h-5 mr-2 text-green-600" />
                Mon - Fri 12:00 - 18:00
              </li>
              <li className="flex items-center">
                <MapPinIcon className="w-5 h-5 mr-2 text-green-600" />
                Hilton, TY56/90 NY, USA
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-sm pt-8 border-t mt-10 border-gray-300 select-text max-w-7xl mx-auto px-6 md:px-0">
          © Ralo. All Rights Reserved by <strong>EnvyTheme</strong>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 left-6 cursor-pointer bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg z-50"
          aria-label="Back to top"
        >
          <ArrowUpIcon className="w-5 h-5" />
        </button>
      </footer>
    </>
  );
};

export default Footer;

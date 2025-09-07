
import { Mail, Phone, Clock, MapPin, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#F4FBE9] px-4 sm:px-6 lg:px-8 py-12 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Social Media */}
        <div className="text-center sm:text-left">
          <h3 className="text-footer-heading font-semibold text-lg mb-4">
            Follow Us
          </h3>
          <div className="flex justify-center sm:justify-start gap-3">
            {["f", "𝕏", "in", "@"].map((icon, i) => (
              <a
                key={i}
                href="#"
                className="w-4 h-9 bg-footer-heading rounded-full flex items-center justify-center hover:bg-footer-link-hover transition-colors sm:mr-10"
              >
                <span className="text-black text-sm font-bold">{icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-center sm:text-left">
          <h3 className="text-footer-heading font-semibold text-lg mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {["About Us", "Contact Us", "Blog", "FAQ's", "Career"].map(
              (link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-footer-text hover:text-footer-link-hover transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Company Info */}
        <div className="text-center sm:text-left">
          <h3 className="text-footer-heading font-semibold text-lg mb-4">
            Company
          </h3>
          <ul className="space-y-3">
            {[
              "Terms & Condition",
              "Privacy Policy",
              "Calculate Mortgage",
              "History & Fidelity",
            ].map((item, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="text-footer-text hover:text-footer-link-hover transition-colors text-sm"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="text-center sm:text-left">
          <h3 className="text-footer-heading font-semibold text-lg mb-4">
            Our Contact
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <Mail className="w-4 h-4 text-footer-brand" />
              <span className="text-footer-text">helloralo@gmail.com</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <Phone className="w-4 h-4 text-footer-brand" />
              <span className="text-footer-text">+48 74326 02396</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <Phone className="w-4 h-4 text-footer-brand" />
              <span className="text-footer-text">+48 64453 96533</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <Clock className="w-4 h-4 text-footer-brand" />
              <span className="text-footer-text">Mon - Fri 12:00 - 18:00</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <MapPin className="w-4 h-4 text-footer-brand" />
              <span className="text-footer-text">Hilton, TY56/90 NY, USA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-footer-border pt-6 text-center text-sm text-footer-text">
        © {new Date().getFullYear()} Ralo Mortgage. All rights reserved.
      </div>

      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-footer-heading text-black shadow-lg flex items-center justify-center hover:bg-footer-link-hover transition-colors"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </footer>
  );
};

export default Footer;

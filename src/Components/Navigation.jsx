// Navigation.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#F4FBE9] shadow-sm fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div>
            <img
              src="https://themes.envytheme.com/ralo/wp-content/uploads/2024/02/ralo-black.png"
              alt="Ralo Logo"
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="hover:text-green-600 transition-colors">
              Home
            </a>
            <a href="/about" className="hover:text-green-600 transition-colors">
              About
            </a>
            <a
              href="/contact"
              className="hover:text-green-600 transition-colors"
            >
              Contact
            </a>
            <a href="/blog" className="hover:text-green-600 transition-colors">
              Blog
            </a>
          </div>

          {/* Apply Now Button */}
          <div className="hidden md:block">
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
              Apply Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#F4FBE9] border-t">
              <a href="/" className="block px-3 py-2 hover:text-green-600">
                Home
              </a>
              <a href="/about" className="block px-3 py-2 hover:text-green-600">
                About
              </a>
              <a
                href="/contact"
                className="block px-3 py-2 hover:text-green-600"
              >
                Contact
              </a>
              <a href="/blog" className="block px-3 py-2 hover:text-green-600">
                Blog
              </a>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg mt-2">
                Apply Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

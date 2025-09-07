import BlogData from "./BlogData";

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";


const Blogs = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const prevCard = useRef(null);

  useEffect(() => {
    prevCard.current = hoveredCard;
  }, [hoveredCard]);

  return (
    <div className="bg-stone-100 py-16 px-4">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-4xl font-semibold mb-12 text-gray-900 text-center">
          Our Blog
        </h1>

        {/* Grid of blog cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {BlogData.map((blog, idx) => {
            // Only render if showAll is true or index < 6
            if (!showAll && idx >= 6) return null;

            return (
              <div
                key={blog.id}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`transition-all duration-500 ease-in-out transform 
                  ${hoveredCard === idx ? "scale-105 shadow-xl" : "scale-100"} 
                  relative p-6 bg-white rounded-xl border border-green-300 cursor-pointer shadow-md`}
              >
                {/* Image section */}
                <div
                  className="relative group cursor-pointer mb-4"
                  onClick={() => setModalImage(blog.image)}
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="object-cover w-full h-44 rounded-lg transition-transform duration-300 group-hover:opacity-75"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300">
                    <span className="text-white text-lg font-semibold">
                      Open Image
                    </span>
                  </div>
                </div>

                {/* Text content */}
                <div className="relative z-10">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                  <Link
                    to={`/blog/${blog.id}`}
                    state={blog}
                    className="text-green-500 hover:text-green-600 font-medium transition"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for image */}
        {modalImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
            <div className="relative bg-white p-4 rounded-lg max-w-3xl w-full mx-4">
              <button
                onClick={() => setModalImage(null)}
                className="absolute top-0 right-0 text-red-600 hover:text-red-500 text-2xl font-bold"
              >
                &times;
              </button>
              <img
                src={modalImage}
                alt="Modal Preview"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        )}

        {/* Show More / Show Less Button */}
        {BlogData.length > 6 && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-gradient-to-r from-red-600 to-orange-400 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform focus:outline-none focus:ring-0"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;

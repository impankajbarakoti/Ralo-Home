import BlogData from "./BlogData";


import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";


const BlogDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  const blog = location.state || BlogData.find((b) => b.id === Number(id));

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 p-4">
        Blog not found.
      </div>
    );
  }

  // Build a randomized list excluding the current blog
  const randomBlogs = [...BlogData]
    .filter((b) => b.id !== blog.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 6);

  // Safe guards to avoid accessing undefined indexes
  const hasLatest = randomBlogs.length > 0;
  const latestPost = hasLatest ? randomBlogs[0] : null;
  const moreBlogs = hasLatest ? randomBlogs.slice(0) : []; // show all picked ones in "More Blogs"

  return (
    <div className="min-h-screen bg-stone-100">
      {/* Header */}
      <section className="py-4 px-2 text-center text-black">
        <h1 className="text-2xl sm:text-3xl font-bold">Blog Details</h1>
      </section>

      <div className="py-6 px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Main Blog Content */}
          <article className="lg:col-span-3 bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 sm:h-56 md:h-64 object-contain rounded mb-4 sm:mb-6"
              loading="lazy"
            />
            <h1 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-3 sm:mb-4">
              {blog.title}
            </h1>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line text-sm sm:text-base break-words">
              {blog.content}
            </p>
          </article>

          {/* Random Blogs Sidebar (right) */}
          <aside className="space-y-3 sm:space-y-4 mt-10 lg:mt-0">
            <h2 className="text-lg sm:text-xl font-semibold text-blue-900">
              Random Blogs
            </h2>
            {randomBlogs.map((b) => (
              <div
                key={b.id}
                onClick={() => navigate(`/blog/${b.id}`, { state: b })}
                className="flex items-center bg-white rounded-lg shadow-sm cursor-pointer hover:shadow-lg hover:scale-[1.02] transition p-2"
              >
                <img
                  src={b.image}
                  alt={b.title}
                  className="w-16 h-12 sm:w-20 sm:h-14 object-contain rounded"
                  loading="lazy"
                />
                <div className="ml-2 sm:ml-3 overflow-hidden">
                  <h4 className="text-xs sm:text-sm font-semibold text-blue-900 truncate">
                    {b.title}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-gray-600 truncate">
                    {b.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </aside>
        </div>

        {/* Latest Post and More Blogs Section */}
        <div className="max-w-7xl mx-auto mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Latest Post */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-blue-900 mb-3 sm:mb-4">
              Latest Post
            </h2>
            {hasLatest ? (
              <div
                onClick={() =>
                  navigate(`/blog/${latestPost.id}`, { state: latestPost })
                }
                className="flex flex-col sm:flex-row items-start sm:items-center bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:scale-[1.03] transition p-4 sm:p-6"
              >
                <img
                  src={latestPost.image}
                  alt={latestPost.title}
                  className="w-full sm:w-36 h-32 sm:h-24 object-contain rounded mb-3 sm:mb-0"
                  loading="lazy"
                />
                <div className="sm:ml-5">
                  <h4 className="text-base sm:text-lg font-semibold text-blue-900 break-words">
                    {latestPost.title}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 break-words">
                    {latestPost.excerpt}
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow p-4 text-gray-600">
                No other posts found.
              </div>
            )}
          </div>

          {/* More Blogs */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-blue-900 mb-3 sm:mb-4">
              More Blogs
            </h2>
            {moreBlogs.length > 0 ? (
              moreBlogs.map((b) => (
                <div
                  key={b.id}
                  onClick={() => navigate(`/blog/${b.id}`, { state: b })}
                  className="flex items-center bg-white rounded-lg shadow-sm cursor-pointer hover:shadow-lg hover:scale-[1.02] transition p-2 mb-3 sm:mb-4"
                >
                  <img
                    src={b.image}
                    alt={b.title}
                    className="w-20 h-14 object-cover rounded"
                    loading="lazy"
                  />
                  <div className="ml-2 sm:ml-4 overflow-hidden">
                    <h4 className="text-sm sm:text-base font-semibold text-blue-900 truncate">
                      {b.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 truncate">
                      {b.excerpt}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white rounded-lg shadow p-4 text-gray-600">
                No more posts available.//{" "}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;

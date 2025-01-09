import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog, index }) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/blog/${index}`); // Navigate to the blog page with the index as the ID
  };

  return (
    <article className="bg-white rounded-[16px] shadow-lg overflow-hidden w-80 h-96 flex flex-col relative">
      {/* Blog Image */}
      <div className="h-40 overflow-hidden">
        <img
          src={blog.card_image}
          alt={blog.card_title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Blog Content */}
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {blog.card_title}
        </h3>
        <p className="text-gray-600 text-sm mb-4">{blog.card_date}</p>
        <p className="text-gray-700 text-base line-clamp-3">
          {blog.card_content}
        </p>
      </div>

      {/* Read More Button */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center">
        <button
          onClick={handleReadMore}
          className="bg-gray-50 rounded-xl border border-gray-200 py-2 px-4 text-sm text-gray-600 hover:bg-gray-100 transition-colors flex items-center gap-2"
          aria-label={`Read more about ${blog.card_title}`}
        >
          Read More →
        </button>
      </div>
    </article>
  );
};

export default BlogCard;

import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog, index }) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/blog/${index}`); // Navigate to the blog page with the index as the ID
  };

  // Function to replace *word* with <strong>word</strong>
  const formatContent = (content) => {
    return content.replace(/\*(.*?)\*/g, "<strong>$1</strong>");
  };

  return (
    <article className="bg-white rounded-[16px] shadow-lg overflow-hidden w-80 flex flex-col relative transform transition-transform duration-300 ease-in-out hover:scale-105">
      {/* Blog Image (Optional) */}
      {blog.card_image && (
        <div className="h-32 overflow-hidden"> {/* Reduced height for the image container */}
          <img
            src={blog.card_image}
            alt={blog.card_title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Blog Content */}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {blog.card_title}
        </h3>
        <p className="text-gray-600 text-sm mb-4">{blog.card_date}</p>
        <p
          className="text-gray-700 text-base line-clamp-3 flex-grow"
          dangerouslySetInnerHTML={{
            __html: formatContent(blog.card_content), // Render formatted content
          }}
        />
      </div>

      {/* Read More Button */}
      <div className="p-6">
        <button
          onClick={handleReadMore}
          className="w-full bg-gray-50 rounded-xl border border-gray-200 py-2 px-4 text-sm text-gray-600 hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
          aria-label={`Read more about ${blog.card_title}`}
        >
          Read More →
        </button>
      </div>
    </article>
  );
};

export default BlogCard;
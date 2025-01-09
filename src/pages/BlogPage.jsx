import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogPage = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/data/blogs.json"); // Fetch blog data
        if (!response.ok) {
          throw new Error("Failed to fetch blog");
        }
        const data = await response.json();
        const selectedBlog = data[id]; // Get the blog by ID
        if (!selectedBlog) {
          throw new Error("Blog not found");
        }
        setBlog(selectedBlog);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (isLoading) {
    return (
      <section className="w-full max-w-7xl mx-auto px-4 py-12">
        <div className="text-center">Loading blog...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="w-full max-w-7xl mx-auto px-4 py-12">
        <div className="text-center text-red-600">Error: {error}</div>
      </section>
    );
  }

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12">
      {/* Blog Image */}
      <div className="h-96 overflow-hidden rounded-lg mb-8">
        <img
          src={blog.page_image}
          alt={blog.card_title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Blog Content */}
      <div className="prose max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          {blog.card_title}
        </h1>
        <p className="text-gray-600 text-sm mb-8">{blog.card_date}</p>
        <p className="text-gray-700 whitespace-pre-line">{blog.page_content}</p>
      </div>
    </section>
  );
};

export default BlogPage;

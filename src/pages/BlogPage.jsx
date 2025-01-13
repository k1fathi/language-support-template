import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImagePane from "../components/ImagePane"; // Ensure the path is correct

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

  // Function to format text starting with a number and followed by \n\n
  const formatContent = (content) => {
    return content.replace(
      /\*\*(.*?)\*\*/g,
      "<h2 class='gradient-text-h2'>$1</h2>"
    );
  };

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
    <section>
      <div className="detail-page-container">
        {/* Blog Image */}
        <div className="h-192 overflow-hidden rounded-lg mb-8">
          <ImagePane
            imageUrl={blog.page_image}
            alt={blog.card_title}
            isLoading={isLoading}
            className="aspect-[48/9] object-cover object-[15%] w-full h-[30rem]"
          />
        </div>

        {/* Blog Content */}
        <h1 className="gradient-text">{blog.card_title}</h1>
        <p className="text-gray-600 text-sm mb-8">{blog.card_date}</p>
        <div
          className="text-justify"
          dangerouslySetInnerHTML={{
            __html: formatContent(blog.page_content), // Render formatted content
          }}
        />
      </div>
    </section>
  );
};

export default BlogPage;

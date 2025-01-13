import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImagePane from "../components/ImagePane";

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
    return null; // Render nothing while loading
  }

  if (error) {
    return (
      <section>
        <div className="text-center text-red-600">Error: {error}</div>
      </section>
    );
  }

  return (
    <section>
      <div className="detail-page-container">
        {/* Blog Image */}
        <ImagePane
          imageUrl={blog.page_image}
          alt={blog.card_title}
          isLoading={isLoading}
          className="header-image"
        />

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

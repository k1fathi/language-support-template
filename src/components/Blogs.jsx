import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/data/blogs.json"); // Fetch blog data
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();
        setBlogs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (isLoading) {
    return <div>Loading blogs...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section>
      {/* Header Section */}
      <div className="text-center mb-8 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">Explore Our Blogs</span>
        </h2>
        <p className="text-gray-800 text-base md:text-lg">
          Discover insights, tips, and strategies to grow your business.
        </p>
      </div>

      {/* Blogs Grid */}
      <div className="flex flex-wrap justify-center gap-8">
        {blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Blogs;
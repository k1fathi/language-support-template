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
    return (
      <div className="dot-loading">
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </div>
    );
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
      <div className="flex flex-wrap justify-center gap-8 w-full md:max-w-[66%] mx-auto md:grid md:grid-cols-3 md:justify-items-center">
        {blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Blogs;
// src/Page.js
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import DOMPurify from "dompurify";

const Page = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Initialize useNavigate
  const [pageContent, setPageContent] = useState("<p>Loading...</p>");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the external JSON file
    fetch("/data/extended-pages.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        // Find the page with the matching ID
        const pageData = data.find((page) => page.id === parseInt(id));
        if (pageData) {
          // Sanitize and set the content
          setPageContent(DOMPurify.sanitize(pageData.content));
        } else {
          // Redirect to the Not Found page
          navigate("/not-found");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Redirect to the Not Found page on error
        navigate("/not-found");
        setLoading(false);
      });
  }, [id, navigate]); // Add navigate to the dependency array

  if (loading) {
    return (
      <div className="dot-loading">
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  return <div dangerouslySetInnerHTML={{ __html: pageContent }} />;
};

export default Page;

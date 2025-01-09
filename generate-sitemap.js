// scripts/generate-sitemap.js
const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");

// Define your website's base URL
const baseUrl = "https://www.yourwebsite.com";

// Define the routes for your sitemap
const routes = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/features", changefreq: "monthly", priority: 0.8 },
  { url: "/blog", changefreq: "weekly", priority: 0.9 },
  { url: "/contact", changefreq: "monthly", priority: 0.8 },
  { url: "/case-studies", changefreq: "monthly", priority: 0.7 },
];

// Create a sitemap stream
const sitemap = new SitemapStream({ hostname: baseUrl });

// Add routes to the sitemap
routes.forEach((route) => {
  sitemap.write(route);
});

// End the stream
sitemap.end();

// Write the sitemap to a file
streamToPromise(sitemap)
  .then((data) => {
    const writeStream = createWriteStream("./public/sitemap.xml");
    writeStream.write(data);
    writeStream.end();
    console.log("Sitemap generated successfully!");
  })
  .catch((error) => {
    console.error("Error generating sitemap:", error);
  });

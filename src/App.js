// src/App.js
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageLoader from "./components/PageLoader"; // Import the loader
// Use lazy loading for pages
const Contact = lazy(() => import("./pages/Contact"));
// Lazy load other pages similarly:
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
// ... other pages

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {/* Wrap Routes with Suspense and PageLoader */}
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} /> {/* Example route */}
              <Route path="/about" element={<About />} />
              {/* Example route */}
              <Route path="/contact" element={<Contact />} />
              {/* Add other routes... */}
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoaderProvider } from "./contexts/LoaderContext";
import RouteLoader from "./components/RouteLoader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ZButton } from "./components/ZButton";
import "./styles/App.css";
import Loader from "./components/Loader";

// Lazy-loaded components
const Contact = lazy(() => import("./pages/Contact"));
const Home = lazy(() => import("./pages/Home"));
const Blog = lazy(() => import("./pages/Blog"));
const FeaturesPage = lazy(() => import("./pages/Features"));
const CaseStudiesPage = lazy(() => import("./pages/CaseStudies"));
const CaseStudyDetail = lazy(() => import("./pages/CaseStudyDetail"));
const Testimonials = lazy(() => import("./components/Testimonials")); // Lazy-load Testimonials
const TestimonialPage = lazy(() => import("./pages/TestimonialPage")); // Lazy-load TestimonialPage

function App() {
  return (
    <LoaderProvider>
      <ZButton />
      <Router>
        <RouteLoader />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/features" element={<FeaturesPage />} />
                <Route path="/case-studies" element={<CaseStudiesPage />} />
                <Route path="/case-study/:id" element={<CaseStudyDetail />} />
                {/* Add Testimonials and TestimonialPage routes */}
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/testimonial/:index" element={<TestimonialPage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </LoaderProvider>
  );
}

export default App;

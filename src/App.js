import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoaderProvider } from "./contexts/LoaderContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import ErrorBoundary from "./components/ErrorBoundary";
import { ZButton } from "./components/ZButton"; // Import the ZButton component
import Page from "./pages/Page";

// Lazy-loaded components
const Contact = lazy(() => import("./pages/Contact"));
const Home = lazy(() => import("./pages/Home"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogDetail = lazy(() => import("./pages/BlogDetail")); // Lazy-loaded BlogDetail
const FeaturesPage = lazy(() => import("./pages/Features"));
const CaseStudiesPage = lazy(() => import("./pages/CaseStudies"));
const CaseStudyDetail = lazy(() => import("./pages/CaseStudyDetail"));
const Testimonials = lazy(() => import("./components/TestimonialCard"));
const TestimonialDetail = lazy(() => import("./pages/TestimonialDetail"));
const NotFound = lazy(() => import("./pages/NotFound")); // Lazy-loaded NotFound
const EventsPage = lazy(() => import("./pages/EventsPage")); // Lazy-loaded EventsPage

function App() {
  console.log(`App is running in ${process.env.NODE_ENV} mode`);
  return (
    <LoaderProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <ErrorBoundary>
              <Suspense fallback={<Loader />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/page/:id" element={<Page />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:id" element={<BlogDetail />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/features" element={<FeaturesPage />} />
                  <Route path="/case-studies" element={<CaseStudiesPage />} />
                  <Route path="/case-study/:id" element={<CaseStudyDetail />} />
                  <Route path="/testimonials" element={<Testimonials />} />
                  <Route
                    path="/testimonial/:index"
                    element={<TestimonialDetail />}
                  />
                  <Route path="/events" element={<EventsPage />} />{" "}
                  {/* New route for EventsPage */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </ErrorBoundary>
          </main>
          <Suspense fallback={<Loader />}>
            <Footer />
          </Suspense>
          <ZButton /> {/* ZButton is included only here */}
        </div>
      </Router>
    </LoaderProvider>
  );
}

export default App;

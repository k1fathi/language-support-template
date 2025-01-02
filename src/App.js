import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoaderProvider } from "./contexts/LoaderContext";
import RouteLoader from "./components/RouteLoader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/App.css";

// Lazy-loaded components
const Contact = lazy(() => import("./pages/Contact"));
const Home = lazy(() => import("./pages/Home"));
const Blog = lazy(() => import("./pages/Blog"));
const CaseStudiesPage = lazy(() => import("./pages/CaseStudiesPage"));
const CaseStudyDetail = lazy(() => import("./pages/CaseStudyDetail"));

function App() {
  return (
    <LoaderProvider>
      <Router>
        <RouteLoader />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/case-studies" element={<CaseStudiesPage />} />
                <Route path="/case-study/:id" element={<CaseStudyDetail />} />
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

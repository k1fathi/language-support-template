import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoaderProvider } from "./contexts/LoaderContext";
import RouteLoader from "./components/RouteLoader";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Lazy-loaded components
const Contact = lazy(() => import("./pages/Contact"));
const Home = lazy(() => import("./pages/Home"));
const Blog = lazy(() => import("./pages/Blog"));
const CaseStudy = lazy(() => import("./pages/CaseStudyPage"));

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
                <Route path="/case-study" element={<CaseStudy />} />
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

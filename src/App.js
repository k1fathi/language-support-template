// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
// Import other pages...

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/contact" element={<Contact />} />
            {/* Add other routes... */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// src/pages/Contact.js
import React from "react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <section className="contact-section py-12 px-4 max-w-5xl mx-auto">
      <div className="page-title text-center mb-12">
        <h1 className="gradient-text text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#29d7ff] via-[#7083ff] to-[#e000ff] text-transparent bg-clip-text">
          Got a Question?
        </h1>
        <p className="text-gray-700 mt-4 text-lg">
          Ask a question or make an appointment
          <br />
          for more information. We will contact you quickly.
        </p>
      </div>

      <div className="contact-form bg-white rounded-xl shadow-lg p-8">
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;

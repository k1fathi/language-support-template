import React from "react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <section className="py-12 detail-page-container">
      <div className="text-center mb-12">
         <span className="gradient-text">
          Got a Question?
        </span>
        <p className="text-gray-700 mt-4 text-lg">
          Ask a question or make an appointment
          <br />
          for more information. We will contact you quickly.
        </p>
      </div>

      <div className="bg-white rounded-xl p-8">
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;

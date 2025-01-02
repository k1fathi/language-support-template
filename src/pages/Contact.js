import React from "react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <section className="py-12 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="gradient-text text-4xl md:text-5xl font-bold">
          Got a Question?
        </h1>
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

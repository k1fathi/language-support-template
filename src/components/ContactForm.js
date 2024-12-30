// src/components/ContactForm.js
import React, { useState } from "react";
import Button from "../components/Button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    contactReason: "General",
    message: "",
  });

  const [validationMessages, setValidationMessages] = useState({
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id.replace("input_customer_", "")]: value,
    }));
  };

  const handleRadioChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      contactReason: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <form className="form-row" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {/* First Name */}
        <div className="form-group">
          <label
            htmlFor="input_customer_firstName"
            className="text-gray-500 block mb-2"
          >
            First Name<span className="text-pink-500">*</span>
          </label>
          <input
            type="text"
            className="w-full border-b border-gray-300 focus:border-gray-900 outline-none py-2 transition-colors"
            id="input_customer_firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Last Name */}
        <div className="form-group">
          <label
            htmlFor="input_customer_lastName"
            className="text-gray-500 block mb-2"
          >
            Last Name<span className="text-pink-500">*</span>
          </label>
          <input
            type="text"
            className="w-full border-b border-gray-300 focus:border-gray-900 outline-none py-2 transition-colors"
            id="input_customer_lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <label
            htmlFor="input_customer_email"
            className="text-gray-500 block mb-2"
          >
            Email Address<span className="text-pink-500">*</span>
          </label>
          <input
            type="email"
            className="w-full border-b border-gray-300 focus:border-gray-900 outline-none py-2 transition-colors"
            id="input_customer_email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {validationMessages.email && (
            <span className="text-red-500 text-sm mt-1">
              {validationMessages.email}
            </span>
          )}
        </div>

        {/* Phone */}
        <div className="form-group">
          <label
            htmlFor="input_customer_phone"
            className="text-gray-500 block mb-2"
          >
            Phone Number<span className="text-pink-500">*</span>
          </label>
          <input
            type="tel"
            className="w-full border-b border-gray-300 focus:border-gray-900 outline-none py-2 transition-colors"
            id="input_customer_phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          {validationMessages.phone && (
            <span className="text-red-500 text-sm mt-1">
              {validationMessages.phone}
            </span>
          )}
        </div>
      </div>

      {/* Contact Reason */}
      <div className="form-group full-width mt-6">
        <h2 className="text-black font-semibold text-lg mb-4">
          Reason for Contact
        </h2>
        <div className="flex flex-wrap gap-6">
          {["General", "Purchase", "Product Information"].map((reason) => (
            <div key={reason} className="flex items-center">
              <input
                type="radio"
                id={`contact_${reason.toLowerCase().replace(" ", "_")}`}
                name="contactreason_radiobutton"
                value={reason}
                checked={formData.contactReason === reason}
                onChange={handleRadioChange}
                className="option-input radio"
              />
              <label
                className="ml-2 text-black"
                htmlFor={`contact_${reason.toLowerCase().replace(" ", "_")}`}
              >
                {reason}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Message */}
      <div className="form-group full-width mt-6">
        <label
          htmlFor="input_customer_message"
          className="text-gray-500 block mb-2"
        >
          Your Message<span className="text-pink-500">*</span>
        </label>
        <textarea
          className="w-full border-b border-gray-300 focus:border-gray-900 outline-none py-2 transition-colors"
          id="input_customer_message"
          rows="3"
          placeholder="Please write your message."
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      {/* Submit Button */}
      <div className="form-group full-width mt-6 flex items-center">
        <Button type="submit" onClick={() => console.log("clicked")}>
          Send Message
        </Button>
        <span className="contact-response-message ml-4 hidden"></span>
      </div>
    </form>
  );
};

export default ContactForm;

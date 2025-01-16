import React, { useState } from "react";
import Button from "./Button";
import config from "../config"; // Import the configuration file

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    reasonForContact: "General",
    message: "",
  });

  const [validationMessages, setValidationMessages] = useState({
    email: "",
    phoneNumber: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isMessageVisible, setIsMessageVisible] = useState(false); // Track message visibility

  const validateEmail = (email) => {
    if (!email) {
      return "Email is required.";
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return "Email is invalid.";
    }
    return "";
  };

  const validatePhoneNumber = (phoneNumber) => {
    if (!phoneNumber) {
      return "Phone number is required.";
    }
    if (!/^\+\d{1,3}\d{10}$/.test(phoneNumber)) {
      return "Phone number must start with a '+' followed by a country code and 10 digits.";
    }
    return "";
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id.replace("input_customer_", "")]: value,
    }));
  };

  const handleBlur = (e) => {
    const { id, value } = e.target;

    if (id === "input_customer_email") {
      setValidationMessages((prev) => ({
        ...prev,
        email: validateEmail(value),
      }));
    }

    if (id === "input_customer_phoneNumber") {
      // Automatically add a '+' if missing
      let formattedPhoneNumber = value;
      if (!formattedPhoneNumber.startsWith("+")) {
        formattedPhoneNumber = `+${formattedPhoneNumber}`;
        setFormData((prev) => ({
          ...prev,
          phoneNumber: formattedPhoneNumber,
        }));
      }

      setValidationMessages((prev) => ({
        ...prev,
        phoneNumber: validatePhoneNumber(formattedPhoneNumber),
      }));
    }
  };

  const handleRadioChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      reasonForContact: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields before submission
    const emailMessage = validateEmail(formData.email);
    const phoneMessage = validatePhoneNumber(formData.phoneNumber);

    setValidationMessages({
      email: emailMessage,
      phoneNumber: phoneMessage,
    });

    // Proceed with submission if there are no validation errors
    if (!emailMessage && !phoneMessage) {
      setIsLoading(true);
      setResponseMessage("");
      setIsMessageVisible(true); // Show the message

      try {
        // Step 1: Fetch CSRF Token
        const csrfResponse = await fetch(`${config.apiBaseUrl}/csrf-token`, {
          method: "GET",
          credentials: "include", // Include cookies
          headers: {
            Origin: window.location.origin, // Dynamically set the origin
          },
        });

        // Check if the response is JSON
        const contentType = csrfResponse.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          const text = await csrfResponse.text();
          console.error("Non-JSON Response:", text);
          throw new Error("Invalid response from server");
        }

        const csrfData = await csrfResponse.json();
        const csrfToken = csrfData.data.token;

        // Step 2: Send Contact Form Data
        const contactResponse = await fetch(
          `${config.apiBaseUrl}/contact`, // Ensure the URL is correct
          {
            method: "POST",
            credentials: "include", // Include cookies
            headers: {
              "Content-Type": "application/json",
              Origin: window.location.origin, // Dynamically set the origin
              "X-CSRF-Token": csrfToken,
            },
            body: JSON.stringify({
              firstName: formData.firstName,
              lastName: formData.lastName,
              email: formData.email,
              phoneNumber: formData.phoneNumber,
              reasonForContact: formData.reasonForContact,
              message: formData.message,
            }),
          }
        );

        // Check if the response is JSON
        const contactContentType = contactResponse.headers.get("content-type");
        if (
          !contactContentType ||
          !contactContentType.includes("application/json")
        ) {
          const text = await contactResponse.text();
          console.error("Non-JSON Response:", text);
          throw new Error("Invalid response from server");
        }

        const contactData = await contactResponse.json();

        // Step 3: Display Response Message and Clear Form on Success
        if (contactData.success) {
          setResponseMessage(
            contactData.message || "Thank you for contacting us!"
          );
          // Clear the form
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            reasonForContact: "General",
            message: "",
          });

          // Hide the success message after 500ms with a fade-out effect
          setTimeout(() => {
            setIsMessageVisible(false);
          }, 1500);
        } else {
          setResponseMessage("Submission failed. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
        setResponseMessage("An error occurred. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }
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
            onBlur={handleBlur}
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
            htmlFor="input_customer_phoneNumber"
            className="text-gray-500 block mb-2"
          >
            Phone Number<span className="text-pink-500">*</span>
          </label>
          <input
            type="tel"
            className="w-full border-b border-gray-300 focus:border-gray-900 outline-none py-2 transition-colors"
            id="input_customer_phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {validationMessages.phoneNumber && (
            <span className="text-red-500 text-sm mt-1">
              {validationMessages.phoneNumber}
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
                checked={formData.reasonForContact === reason}
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
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Sending..." : "Send Message"}
        </Button>
        {isMessageVisible && (
          <span
            className={`ml-4 text-sm md:text-base transition-opacity duration-500 ${
              responseMessage.includes("Thank you") ||
              responseMessage.includes("success")
                ? "text-green-500"
                : "text-red-500"
            }`}
            style={{ opacity: isMessageVisible ? 1 : 0 }}
          >
            {responseMessage}
          </span>
        )}
      </div>
    </form>
  );
};

export default ContactForm;

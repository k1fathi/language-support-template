import React, { useState } from "react";
import config from "../config";

const Subscription = () => {
  const [email, setEmail] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    if (!email) {
      return "Email is required.";
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return "Please enter a valid email address.";
    }
    return "";
  };

  const clearMessages = () => {
    setIsMessageVisible(false);
    setEmailError("");
    setResponseMessage("");
  };

  const handleSubscribe = async () => {
    const emailValidationMessage = validateEmail(email);

    if (emailValidationMessage) {
      setEmailError(emailValidationMessage);
      setIsMessageVisible(true);
      setEmail(""); // Clear textbox on error

      // Clear error message after 2000ms
      setTimeout(() => {
        clearMessages();
      }, 2000);

      return;
    }

    setIsLoading(true);
    setResponseMessage("");
    setIsMessageVisible(true);

    try {
      const csrfResponse = await fetch(`${config.apiBaseUrl}/csrf-token`, {
        method: "GET",
        credentials: "include",
        headers: {
          Origin: window.location.origin,
        },
      });

      console.log("CSRF Response:", csrfResponse);

      const contentType = csrfResponse.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const text = await csrfResponse.text();
        console.error("Non-JSON Response:", text);
        throw new Error("Invalid response from server");
      }

      const csrfData = await csrfResponse.json();
      const csrfToken = csrfData.data.token;

      const subscribeResponse = await fetch(`${config.apiBaseUrl}/subscribe`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Origin: window.location.origin,
          "X-CSRF-Token": csrfToken,
        },
        body: JSON.stringify({ email }),
      });

      console.log("Subscribe Response:", subscribeResponse);

      const subscribeContentType =
        subscribeResponse.headers.get("content-type");
      if (
        !subscribeContentType ||
        !subscribeContentType.includes("application/json")
      ) {
        const text = await subscribeResponse.text();
        console.error("Non-JSON Response:", text);
        throw new Error("Invalid response from server");
      }

      const subscribeData = await subscribeResponse.json();

      if (subscribeData.success) {
        setResponseMessage(
          subscribeData.message || "Thank you for subscribing!"
        );
        setEmail("");
      } else {
        setResponseMessage("Subscription failed. Please try again.");
        setEmail(""); // Clear textbox on error
      }
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("An error occurred. Please try again.");
      setEmail(""); // Clear textbox on error
    } finally {
      setIsLoading(false);

      // Hide the message after 2000ms
      setTimeout(() => {
        clearMessages();
      }, 2000);
    }
  };

  return (
    <section id="subscribe_us_for_more" className="bg-[#f6fbf8]">
      <div className="text-center">
        <span className="gradient-text">Subscribe us for more</span>
        <p className="text-gray-700 text-base md:text-lg mb-8">
          Subscribe to stay up to date with new developments and news.
        </p>
      </div>

      <div
        className="rounded-xl p-4 md:p-8 lg:p-12 flex flex-col md:flex-row items-center gap-6 sm:gap-4 md:gap-8 h-auto lg:h-64 w-full"
        style={{ background: "var(--zuzzuu-pink-rainbow-color)" }}
      >
        <div
          className="w-full md:w-1/3 lg:w-1/4 relative"
          style={{ height: "0", transform: "translateY(-20%)" }}
        >
          <div className="absolute left-0 w-full" style={{ bottom: "-8rem" }}>
            <img
              src="images/subscribe_phone.png"
              alt="Subscribe"
              className="hidden md:block rounded-lg w-full max-w-[280px] mx-auto"
              style={{
                transform: "scale(1.2)",
                marginTop: "-3rem",
              }}
            />
          </div>
        </div>

        <div className="text-white text-xl md:text-2xl lg:text-3xl font-bold text-center md:text-left md:w-1/4 md:ml-32">
          Stay up to date!
        </div>

        <div className="w-full md:w-2/5 lg:w-1/2">
          <div className="bg-white rounded-lg overflow-hidden flex flex-col sm:flex-row shadow-lg">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError("");
              }}
              className="w-full px-4 py-3 outline-none text-gray-700 text-base"
              required
            />
            <button
              type="button"
              onClick={handleSubscribe}
              disabled={isLoading}
              className="w-full sm:w-auto px-6 py-3 bg-black text-white font-semibold hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
              {!isLoading && (
                <i className="fa-solid fa-chevron-right text-sm"></i>
              )}
            </button>
          </div>

          {/* All error messages in white */}
          {emailError && (
            <div className="mt-2 text-white text-sm md:text-base text-center sm:text-left">
              {emailError}
            </div>
          )}

          {/* Response message also in white */}
          {isMessageVisible && !emailError && (
            <div
              className="mt-2 text-white text-sm md:text-base text-center sm:text-left transition-opacity duration-500"
              style={{ opacity: isMessageVisible ? 1 : 0 }}
            >
              {responseMessage}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Subscription;

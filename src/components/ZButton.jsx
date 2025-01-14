import React, { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";

export const ZButton = () => {
  const lottieRef = useRef(null);
  const iframeRef = useRef(null);
  const [isIframeVisible, setIsIframeVisible] = useState(false);
  const animationRef = useRef(null); // Ref to store the Lottie animation instance

  const loadLottieAnimation = () => {
    // Define the path to the JSON file relative to the public directory
    const animationPath = "data/z_button.json";

    // Use fetch to load the JSON file
    fetch(animationPath)
      .then((response) => response.json())
      .then((animationData) => {
        // Destroy any existing animation before loading a new one
        if (animationRef.current) {
          animationRef.current.destroy();
        }

        // Load the new animation and store it in the ref
        animationRef.current = lottie.loadAnimation({
          container: lottieRef.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: animationData, // Use the loaded animation data
        });
      })
      .catch((error) => {
        console.error("Failed to load Lottie animation:", error);
      });
  };

  const toggleIframe = () => {
    const status = sessionStorage.getItem("zButtonStatus");

    if (status === "1") {
      // Set status to 0, show the original content, and refresh the page
      sessionStorage.setItem("zButtonStatus", "0");
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      setIsIframeVisible(false);
      window.location.reload();
    } else {
      // Set status to 1, hide the original content, and show iframe
      sessionStorage.setItem("zButtonStatus", "1");
      setIsIframeVisible(true);
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    }
  };

  useEffect(() => {
    // Initialize animation
    loadLottieAnimation();

    // Check initial state from session storage
    const status = sessionStorage.getItem("zButtonStatus");
    if (status === "1") {
      setIsIframeVisible(true);
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    }

    // Cleanup on unmount
    return () => {
      if (animationRef.current) {
        animationRef.current.destroy();
      }
    };
  }, []);

  return (
    <React.Fragment>
      {/* Z-Logo Button */}
      <div
        className="fixed bottom-6 right-6 z-[1001] bg-transparent rounded-full p-3 
                          cursor-pointer flex justify-center items-center w-[7rem] h-[7rem] overflow-hidden"
        onClick={toggleIframe}
      >
        {/* Lottie Container */}
        <div
          ref={lottieRef}
          className="w-full h-full transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>

      {/* Games Iframe */}
      <iframe
        ref={iframeRef}
        src="https://games.zuzzuu.com/catalog"
        className={`fixed top-0 left-0 w-full h-screen border-none z-[1000] overflow-hidden
                           ${isIframeVisible ? "block" : "hidden"}`}
        title="Games Catalog"
      />
    </React.Fragment>
  );
};

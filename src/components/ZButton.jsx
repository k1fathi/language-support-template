import React, { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";

export const ZButton = () => {
  const lottieRef = useRef(null);
  const iframeRef = useRef(null);
  const [isIframeVisible, setIsIframeVisible] = useState(false);

  const loadLottieAnimation = () => {
    // Define the path to the JSON file relative to the public directory
    const animationPath = 'data/z_button.json';

    const animation = lottie.loadAnimation({
      container: lottieRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: animationPath,
    });

    return animation;
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
    const animation = loadLottieAnimation();

    // Check initial state from session storage
    const status = sessionStorage.getItem("zButtonStatus");
    if (status === "1") {
      setIsIframeVisible(true);
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    }

    // Cleanup on unmount
    return () => {
      animation.destroy();
    };
  }, []);

  return (
    <React.Fragment>
      {/* Z-Logo Button */}
      <div
        className="fixed bottom-4 right-4 z-[1001] bg-transparent rounded-full p-2 
                          cursor-pointer flex justify-center items-center w-[5.3rem] h-[5.3rem] overflow-hidden"
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

// Usage Example:
// import { ZButton } from './components/ZButton';
//
// const App = () => {
//     return (
//         <div>
//             <ZButton />
//             {/* Your other content */}
//         </div>
//     );
// };

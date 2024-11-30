import React, { useState, useEffect } from "react";

const WindowSizeDisplay: React.FC = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0, // Default initial values (you can also set it to null or something else)
    height: 0,
  });

  useEffect(() => {
    // Check if we're on the client-side (window is defined)
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      // Set the initial window size when the component mounts
      handleResize();

      // Add event listener for resize event
      window.addEventListener("resize", handleResize);

      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []); // Empty dependency array ensures this only runs once when the component mounts

  return (
    <div className="fixed top-0 left-0 p-4 bg-white text-black z-50">
      <div>
        <strong>Window Size:</strong>
      </div>
      <div>Width: {windowSize.width}px</div>
      <div>Height: {windowSize.height}px</div>
    </div>
  );
};

export default WindowSizeDisplay;

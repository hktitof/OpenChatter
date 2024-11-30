import React, { useEffect, useState } from "react";
export default function ChatBoxContainer({
  windowHeight,
  setWindowHeight,
  isOpen,
  children,
}: {
  windowHeight: number;
  setWindowHeight: React.Dispatch<React.SetStateAction<number>>;
  isOpen: boolean;
  children: React.ReactNode;
}) {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  useEffect(() => {
    const checkMobileScreen = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobileScreen();

    if (typeof window !== "undefined") {
      setWindowHeight(window.innerHeight);

      const handleResize = () => {
        checkMobileScreen();
        setWindowHeight(window.innerHeight);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [setWindowHeight]);

  const toggleChatBox = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div
      className={` rounded-xl shadow-2xl w-full flex-grow transform transition-all duration-500 ease-in-out ${
        isOpen ? "scale-100 opacity-100" : "scale-95 opacity-90 "
      } border-black`}
      style={{
        height: isMobile ? `calc(${windowHeight}px - 100px)` : "75vh", // Adjust for mobile
        maxHeight: "90vh", // Set max height for larger screens
        minHeight: "400px", // Minimum height
        transformOrigin: "center bottom",
        willChange: "transform, opacity",
      }}
    >
      <div className="w-full h-full overflow-hidden rounded-xl">
        <div className="sm:hidden absolute top-4 left-4 z-10">
          <button
            className={`text-gray-600 hover:text-gray-900 transition-all duration-300 ${isOpen ? "rotate-180" : ""}`}
            onClick={toggleChatBox}
          >
            {isOpen ? "← Back" : "→ Open"}
          </button>
        </div>

        <div
          className={`h-full flex flex-col transition-all duration-500 ease-in-out transform ${
            isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

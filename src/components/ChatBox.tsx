import React, { useState, useEffect } from "react";
import DefaultIcon from "./DefaultIcon";
import ChatBoxContainer from "./ChatBoxContainer";
import ChatBoxContent from "./ChatBoxContent";
import CloseIcon from "./CloseIcon";

const ChatBox: React.FC = ({}) => {
  const [windowHeight, setWindowHeight] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    // Set the window height on mount and on resize
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowHeight(window.innerHeight); // Dynamically set window height
      };

      handleResize(); // Set initial height on load

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div className="fixed inset-0 z-50  pointer-events p-4 h-full">
      <div
        className="absolute bottom-4 right-4 left-4 w-auto sm:right-5 sm:left-auto sm:w-full sm:max-w-md"
        // force this div to be at be on the top of all the elements exist in the page
      >
        <div className={`relative h-full  ${isOpen ? "flex-col space-y-2 " : ""}`}>
          {/* Chat Box */}
          {isOpen && (
            <ChatBoxContainer windowHeight={windowHeight} setWindowHeight={setWindowHeight} isOpen={isOpen}>
              <ChatBoxContent />
            </ChatBoxContainer>
          )}

          {/* Chatbox Component Circle Button */}
          <div className="flex justify-end pointer-events-auto">
            <div
              onClick={() => setIsOpen(prev => !prev)}
              className="bg-blue-400 text-white rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center hover:cursor-pointer bounce-animation"
              style={{
                animation: "bounce 1s ease-out 3", // Always triggers 3 bounces
              }}
            >
              {isOpen ? <CloseIcon /> : <DefaultIcon />}
            </div>

            {/* Define the bounce animation */}
            <style jsx>{`
              @keyframes bounce {
                0% {
                  transform: translateY(0);
                }
                50% {
                  transform: translateY(-30px); /* Increased bounce height */
                }
                100% {
                  transform: translateY(0);
                }
              }

              /* Mobile-specific styles */
              @media (max-width: 640px) {
                .chatbox-height {
                  height: calc(${windowHeight}px - 100px);
                }
              }

              /* Laptop or larger screen styles */
              @media (min-width: 641px) {
                .chatbox-height {
                  height: 75vh; /* 75% of viewport height */
                  max-height: 90vh; /* Or set a max-height for larger screens */
                }
              }
            `}</style>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;

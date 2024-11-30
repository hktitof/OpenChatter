import React, { useEffect, useState } from "react";
import ChatBox from "../components/ChatBox";
import WindowSizeDisplay from "../components/WindowSizeDisplay";
export default function Home() {
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    // Update window height on load and resize
    setWindowHeight(window.innerHeight);

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="bg-white" style={{ minHeight: windowHeight }}>
        <WindowSizeDisplay />
        <ChatBox />
      </div>
    </>
  );
}

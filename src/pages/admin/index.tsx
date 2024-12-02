import LeftPanel from "@/components/AdminDashboard/LeftPanel";
import { useState } from "react";

export default function Index() {
  // State to track the active conversation
  const [activeConversation, setActiveConversation] = useState(null);

  // create 15 conversation objects with just simple numbers
  const conversations = Array.from({ length: 15 }, (_, i) => i + 1);

  return (
    <div className="h-screen w-full overflow-hidden bg-gray-100 flex ">
      <LeftPanel conversations={conversations} />

      {/* Middle Panel: Chat Area */}
      <div className="w-1/2 p-4  flex flex-col relative">
        <h2 className="font-bold text-lg text-black">Chat</h2>

        {/* The content of the chat area */}
        <div className="flex-1 overflow-y-auto">{/* Chat messages will go here */}</div>

        {/* The container you want to stick to the bottom */}
        <div className="absolute bottom-0 left-0 w-full pb-2">
          <div className="w-full ">
            <input
              type="textarea"
              placeholder="Type your message..."
              className="w-full h-20 p-3 bg-gray-50 text-black rounded-xl border border-gray-300 hover:cursor-text focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Right Panel: User Information (Visible when a conversation is selected) */}
      {activeConversation && (
        <div className="w-1/4 bg-gray-50 p-4">
          <h2 className="font-bold text-lg">User Information</h2>
          <div className="mt-4 space-y-2">
            <p>
              <strong>IP Address:</strong> 82.1.171.254
            </p>
            <p>
              <strong>City:</strong> Watford
            </p>
            <p>
              <strong>Region:</strong> England
            </p>
            <p>
              <strong>Country:</strong> United Kingdom
            </p>
            <p>
              <strong>Current Date/Time:</strong> 12/2/2024, 9:58:08 PM
            </p>
            <p>
              <strong>Browser:</strong> Chrome
            </p>
            <p>
              <strong>OS:</strong> Mac OS
            </p>
            {/* Add more user details */}
          </div>
        </div>
      )}
    </div>
  );
}

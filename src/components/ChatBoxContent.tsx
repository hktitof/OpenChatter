import React from "react";

export default function ChatBoxContent() {
  return (
    <div className="h-full flex flex-col">
      {/* Content Area */}
      <div className="flex-grow p-4 space-y-4 overflow-auto">
        {/* Messages will go here */}
        <div className="space-y-2">
          <div className="bg-gray-200 p-3 rounded-lg max-w-xs">
            <p className="text-sm">Hello, how can I assist you today?</p>
          </div>
          <div className="bg-blue-200 p-3 rounded-lg self-end max-w-xs">
            <p className="text-sm">I need help with my order.</p>
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className=" border-t-2 border-gray-200 p-4 flex items-center space-x-2 mb-2">
        {/* Text Input */}
        <input
          type="text"
          placeholder="Type your message..."
          className="pl-5 w-full p-3 bg-gray-50 text-black rounded-3xl border border-gray-300 hover:cursor-text focus:outline-none "
        />

        {/* Send Button */}
        <button className=" pl-1 rounded-full border-black">
          <svg
            className="w-8 h-8 text-gray-500"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            viewBox="0 0 28 28"
          >
            <path d="M22 2l-7 20-4-9-9-4zM22 2L11 13" />
          </svg>
        </button>
      </div>
    </div>
  );
}

"use client";
import LeftPanel from "@/components/AdminDashboard/LeftPanel";
import { useState } from "react";

export default function Index() {
  // State to track the active conversation
  const [activeConversation, setActiveConversation] = useState(true);

  // create 15 conversation objects with just simple numbers
  const conversations = Array.from({ length: 15 }, (_, i) => i + 1);

  return (
    <div className="h-screen w-full overflow-hidden bg-gray-100 flex ">
      <LeftPanel conversations={conversations} />

      {/* Middle Panel: Chat Area */}
      <div className="relative w-1/2 p-4  flex flex-col border-r-2 border-gray-200">
        <div className="pb-5 flex  items-center space-x-2 border-b-2 border-gray-200">
          <div className="text-gray-500 w-5 h-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
              <path d="M0 2a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4.414a1 1 0 00-.707.293L.854 15.146A.5.5 0 010 14.793V2zm3.5 1a.5.5 0 000 1h9a.5.5 0 000-1h-9zm0 2.5a.5.5 0 000 1h9a.5.5 0 000-1h-9zm0 2.5a.5.5 0 000 1h5a.5.5 0 000-1h-5z" />
            </svg>
          </div>

          <h2 className="font-bold text-xl text-black">Chat</h2>
        </div>

        {/* The content of the chat area */}
        <div className="relative flex-1 overflow-y-auto pt-5">{/* Chat messages will go here */}</div>
        <div className="h-full w-full">
          {/* // ? Message from Sender */}
          <div className="sticky top-0 pr-4 w-full flex justify-end">
            <div
              className="bg-blue-500 text-white p-4 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl break-words inline-block ml-auto relative"
              style={{ maxWidth: "66.666667%" }}
            >
              <p className="text-sm text-white text-right">
                Hello, how are you doing! Hello, how are you doing! Hello, how are you doing! Hello, how are you doing!
              </p>
              {/* Tail for the message bubble */}
              <div className="absolute bottom-0 right-0 w-0 h-0 border-t-8 border-l-8 border-t-blue-500 border-l-transparent"></div>
            </div>
          </div>
          {/* // ! Message from agent */}
          <div className="pl-4 font  w-full pt-3">
            <div
              className="bg-gray-200 p-4 rounded-br-3xl rounded-tl-3xl rounded-tr-xl break-words inline-block"
              style={{ maxWidth: "66.666667%" }}
            >
              <p className="text-sm text-black">
                Hello, how are you doing! Hello, how are you doing! Hello, how are you doing! Hello, how are you doing!
              </p>
            </div>
          </div>
        </div>

        {/* The container you want to stick to the bottom */}
        <div className="absolute bottom-0 left-0 w-full pb-2 px-4">
          <div className="w-full relative">
            <textarea
              placeholder="Type your message..."
              className="w-full h-28 p-3 bg-gray-50 text-black rounded-xl border-2 border-gray-300 hover:cursor-text focus:outline-none resize-none"
            ></textarea>
            {/* Send Icon */}
            <div className="absolute bottom-3 right-4 text-blue-500 hover:cursor-pointer">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="1em"
                width="1em"
                className="w-6 h-6 text-gray-500" // Example: Change size and color with Tailwind CSS
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel: User Information (Visible when a conversation is selected) */}
      {activeConversation && (
        <div className="w-1/4 p-4 text-black">
          <h2 className="font-bold text-lg">User Information</h2>
          <div className="mt-4 space-y-2">
            {/* Country flag and name */}
            <div className="flex items-center space-x-2">
              <div
                className="w-10 h-6 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png)",
                }}
              ></div>
              <p className="font-medium">
                <strong>Country:</strong> United Kingdom
              </p>
            </div>

            <p>
              <strong>IP Address:</strong> 82.1.171.254
            </p>
            <p>
              <strong>City:</strong> Watford
            </p>
            <p>
              <strong>Region:</strong> England
            </p>

            {/* Time Difference */}
            <p>
              <strong>Time Difference (UTC):</strong> UTC +0 hours
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

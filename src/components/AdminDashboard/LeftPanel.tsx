import React from "react";
type Conversation = number[];

export default function LeftPanel({ conversations }: { conversations: Conversation }) {
  return (
    <>
      {/* Left Panel: Conversation List */}
      <div className="h-full w-1/4 pl-12 pt-12  p-4 border border-l-1 border-gray-300 border-r-1 border-gray-400">
        <div className="flex items-center space-x-2">
          <svg className="text-gray-500 w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
            <path d="M17 11v3l-3-3H8a2 2 0 01-2-2V2c0-1.1.9-2 2-2h10a2 2 0 012 2v7a2 2 0 01-2 2h-1zm-3 2v2a2 2 0 01-2 2H6l-3 3v-3H2a2 2 0 01-2-2V8c0-1.1.9-2 2-2h2v3a4 4 0 004 4h6z" />
          </svg>

          <h2 className="font-light text-2xl text-gray-500">Conversations</h2>
        </div>

        <div className="flex flex-col space-y-4 pt-4 overflow-y-auto h-full pb-8 ">
          {/* Conversation list */}

          {conversations.map(conversation => (
            <div
              key={conversation}
              className="flex items-center space-x-4 p-4 rounded-lg border border-b-2 border-gray-300 relative hover:cursor-pointer bg-white"
            >
              {/* Unread message count */}
              <div className="absolute top-1 right-2 bg-green-500 text-white text-xs font-semibold rounded-full px-2 py-1">
                3 {/* Number of unread messages */}
              </div>

              {/* Flag */}
              <div
                className="w-14 h-9 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png)",
                }}
              ></div>

              {/* Country Details */}
              <div className="flex flex-col">
                <span className="font-semibold text-lg text-black">United Kingdom</span> {/* Country Name */}
                <span className="text-sm text-gray-500">England</span> {/* Region */}
                <span className="text-xs text-gray-400">
                  {new Date().toLocaleString()} {/* Current Time */}
                </span>
              </div>

              {/* Last Message and Time */}
              <div className="absolute bottom-2 right-4 text-xs text-gray-600">
                Visited 10 min ago {/* Last message time */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

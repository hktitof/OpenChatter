import React from "react";
export default function ChatBoxContent() {
  return (
    <div className="h-full flex flex-col">
      {/* Content Area */}
      <div className="flex-grow space-y-4 overflow-auto">
        {/* // create a color div with bg-blue-400 */}
        <div className=" border pb-4 rounded-t flex-col">
          <div className="w-full pl-5 pt-5 flex flex-row">
            <div className="w-10 h-110 bg-white rounded-full flex items-center justify-center  flex-col relative">
              <div className="w-3 h-3 bg-green-500 rounded-full absolute bottom-0 right-0 z-10 "></div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden flex-col ">
                {/* // add a green circle with bg-green-400 and it should be rounded-full and above the image on the top right corner */}
                <img
                  src="https://www.anaflous.com/img/Portfolio-portrait-3.jpg"
                  alt="My Image Not Found"
                  className="object-contain rounded-lg translate-y-[2px]"
                />
              </div>
            </div>
            <div className="flex-col pl-3 text-sm">
              <p className="text-gray-500">Abdellatif Anaflous</p>
              <p className="text-gray-400">Online</p>
            </div>
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

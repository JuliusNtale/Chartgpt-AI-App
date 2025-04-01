import React from "react";

const DashboardPage = () => {
  return (
    <div className="flex flex-col justify-between items-center bg-gray-100 p-6 min-h-screen">
      {/* Options Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {[
          { src: "/chat.png", label: "Create a New Chat" },
          { src: "/image.png", label: "Analyze Image" },
          { src: "/code.png", label: "Help Me with My Code" },
        ].map((option, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-black text-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 transform hover:scale-105"
          >
            <img src={option.src} alt={option.label} className="w-16 h-16 mb-4" />
            <span className="text-lg font-semibold text-center">{option.label}</span>
          </div>
        ))}
      </div>

      {/* Form Section */}
      <div className="w-full max-w-lg mt-8">
        <form className="flex items-center bg-white shadow-lg rounded-lg space-x-2 p-2">
          <input
            type="text"
            placeholder="Ask me anything..."
            className="flex-1 px-4 py-2 text-gray-700 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-600 w-10 h-10 flex items-center justify-center rounded-full text-white hover:bg-orange-500 transition duration-300"
          >
            <img src="/arrow.png" alt="Send" className="w-6 h-6" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default DashboardPage;

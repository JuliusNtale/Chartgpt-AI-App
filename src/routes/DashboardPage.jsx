import React from 'react';

const DashboardPage = () => {
  return (
    <div className="dashboard flex flex-col items-center bg-gray-100 min-h-screen">
     

      {/* Options Section */}
      <div className="options grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 w-full max-w-4xl">
        {[
          { src: "/chat.png", label: "Create a New Chat" },
          { src: "/image.png", label: "Analyze Image" },
          { src: "/code.png", label: "Help Me with My Code" },
        ].map((option, index) => (
          <div
            key={index}
            className="option flex flex-col items-center bg-black shadow-lg rounded-lg p-4 hover:shadow-xl transition duration-300"
          >
            <img
              src={option.src}
              alt={option.label}
              className="w-12 h-12 mb-2"
            />
            <span className="text-center text-lg font-semibold">
              {option.label}
            </span>
          </div>
        ))}
      </div>

      {/* Form Section */}
      <div className="form-container w-full px-4 sm:px-0 max-w-xl mt-6">
        <form
          className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden"
          onSubmit={(e) => e.preventDefault()} // Prevents form submission for now
        >
          <input
            type="text"
            placeholder="Ask me anything..."
            className="flex-1 px-4 py-2 text-gray-700 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition duration-300"
          >
            <img src="/arrow.png" alt="Send" className="w-6 h-6" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default DashboardPage;

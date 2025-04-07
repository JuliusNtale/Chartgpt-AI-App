import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const DashboardPage = () => {
  const options = [
    { src: "/chat.png", label: "Create a New Chat", color: "from-blue-500 to-blue-600" },
    { src: "/image.png", label: "Analyze Image", color: "from-purple-500 to-purple-600" },
    { src: "/code.png", label: "Help Me with My Code", color: "from-green-500 to-green-600" },
  ];

  return (
    <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-900 p-6 min-h-[calc(100vh-3rem)] transition-colors duration-300">
      {/* Options Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {options.map((option, index) => (
          <OptionCard 
            key={index}
            src={option.src}
            label={option.label}
            color={option.color}
            index={index}
          />
        ))}
      </div>

      {/* Form Section */}
      <motion.div 
        className="w-full max-w-lg mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <SearchForm />
      </motion.div>
    </div>
  );
};

const OptionCard = ({ src, label, color, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="flex flex-col items-center bg-gradient-to-br ${color} text-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.03] cursor-pointer"
    whileHover={{ y: -5 }}
  >
    <img 
      src={src} 
      alt={label} 
      className="w-16 h-16 mb-4 object-contain" 
      loading="lazy"
    />
    <span className="text-lg font-semibold text-center">{label}</span>
  </motion.div>
);

OptionCard.propTypes = {
  src: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
};

const SearchForm = () => (
  <form className="flex items-center bg-white dark:bg-gray-800 shadow-lg rounded-lg space-x-2 p-2 transition-colors duration-300">
    <input
      type="text"
      placeholder="Ask me anything..."
      className="flex-1 px-4 py-2 text-gray-700 dark:text-gray-200 bg-transparent focus:outline-none"
    />
    <button
      type="submit"
      className="bg-blue-600 w-10 h-10 flex items-center justify-center rounded-full text-white hover:bg-orange-500 transition-all duration-300"
    >
      <img src="/arrow.png" alt="Send" className="w-6 h-6" loading="lazy" />
    </button>
  </form>
);

export default DashboardPage;
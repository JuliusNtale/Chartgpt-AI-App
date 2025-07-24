import { memo, useMemo, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDebounce } from '@/hooks/useOptimization';

// Memoized OptionCard component
const OptionCard = memo(({ src, label, color, to, index }) => (
  <motion.div
    className={`relative group cursor-pointer overflow-hidden rounded-xl bg-gradient-to-r ${color} p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -5 }}
    whileTap={{ scale: 0.98 }}
  >
    <Link to={to} className="block h-full">
      <div className="flex flex-col items-center text-center h-full justify-center">
        <motion.img
          src={src}
          alt={label}
          className="w-16 h-16 mb-4 filter brightness-0 invert"
          loading="lazy"
          whileHover={{ rotate: 5 }}
        />
        <h3 className="text-white font-semibold text-lg group-hover:text-opacity-90">
          {label}
        </h3>
      </div>
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
    </Link>
  </motion.div>
));

OptionCard.displayName = 'OptionCard';
OptionCard.propTypes = {
  src: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

const DashboardPage = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedInput = useDebounce(inputValue, 300);

  // Memoized options to prevent unnecessary re-renders
  const options = useMemo(() => [
    { 
      src: "/chat.png", 
      label: "Create a New Chat", 
      color: "from-blue-500 to-blue-600",
      to: "/dashboard/chat"
    },
    { 
      src: "/image.png", 
      label: "Analyze Image", 
      color: "from-purple-500 to-purple-600",
      to: "/dashboard/image-analysis"
    },
    { 
      src: "/code.png", 
      label: "Help Me with My Code", 
      color: "from-green-500 to-green-600",
      to: "/dashboard/code-help"
    },
  ], []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (debouncedInput.trim()) {
      console.log('Submitting:', debouncedInput);
      // Handle form submission with debounced value
    }
  }, [debouncedInput]);

  const handleInputChange = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  return (
    <div className="w-full">
      {/* Options Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {options.map((option, index) => (
          <OptionCard 
            key={option.to} // Use stable key
            src={option.src}
            label={option.label}
            color={option.color}
            to={option.to}
            index={index}
          />
        ))}
      </div>

      {/* Form Section */}
      <motion.div 
        className="w-full max-w-lg mx-auto mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="relative flex items-center">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="What would you like to create today?"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 pr-14"
              autoComplete="off"
            />
            <motion.button
              type="submit"
              disabled={!debouncedInput.trim()}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 shadow-sm"
              whileHover={{ scale: !debouncedInput.trim() ? 1 : 1.05 }}
              whileTap={{ scale: !debouncedInput.trim() ? 1 : 0.95 }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default DashboardPage;
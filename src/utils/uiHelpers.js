// Micro-interactions and accessibility improvements
import { motion, useReducedMotion } from 'framer-motion';
import { useRef, useCallback } from 'react';

export const useAccessibleAnimation = () => {
  const shouldReduceMotion = useReducedMotion();
  
  return {
    initial: shouldReduceMotion ? {} : { opacity: 0, y: 20 },
    animate: shouldReduceMotion ? {} : { opacity: 1, y: 0 },
    transition: shouldReduceMotion ? {} : { duration: 0.3 }
  };
};

export const ChartTooltip = ({ data, position, visible }) => {
  if (!visible || !data) return null;
  
  return (
    <motion.div
      className="absolute z-10 bg-gray-900 text-white p-2 rounded shadow-lg pointer-events-none"
      style={{ left: position.x, top: position.y }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.1 }}
    >
      <div className="text-sm">
        <div className="font-semibold">{data.label}</div>
        <div>Value: {data.value}</div>
      </div>
    </motion.div>
  );
};

// Focus management for accessibility
export const useFocusManagement = () => {
  const focusRef = useRef(null);
  
  const setFocus = useCallback(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  }, []);
  
  return { focusRef, setFocus };
};

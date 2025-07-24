// Security middleware for data sanitization
import DOMPurify from 'isomorphic-dompurify';

export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  return DOMPurify.sanitize(input, { 
    ALLOWED_TAGS: [], 
    ALLOWED_ATTR: [] 
  });
};

export const sanitizeChartData = (chartData) => {
  return {
    ...chartData,
    name: sanitizeInput(chartData.name),
    data: chartData.data.map(point => ({
      ...point,
      label: typeof point.label === 'string' ? sanitizeInput(point.label) : point.label
    }))
  };
};

// CORS configuration
let nodeEnv = 'development';
if (typeof window === 'undefined') {
  // Only set nodeEnv from process.env.NODE_ENV in Node.js environment
  if (typeof globalThis.process !== 'undefined' && globalThis.process.env && globalThis.process.env.NODE_ENV) {
    nodeEnv = globalThis.process.env.NODE_ENV;
  }
}

export const corsOptions = {
  origin: nodeEnv === 'production' 
    ? ['https://yourdomain.com'] 
    : ['http://localhost:5173', 'http://localhost:5174'],
  credentials: true,
  optionsSuccessStatus: 200
};

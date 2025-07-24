// Heavy chart libraries - load only when needed
import { lazy } from 'react';

// Dynamic chart component imports
export const RechartsComponent = lazy(() => 
  import('recharts').then(module => ({ 
    default: ({ children, ...props }) => children(module) 
  }))
);

export const ChartJSComponent = lazy(() => 
  import('chart.js/auto').then(module => ({ 
    default: module.default 
  }))
);

export const D3Component = lazy(() => 
  import('d3').then(module => ({ 
    default: module 
  }))
);

// Lightweight chart alternative - consider using this instead
export const LightweightCharts = lazy(() => 
  import('lightweight-charts').then(module => ({ 
    default: module 
  }))
);

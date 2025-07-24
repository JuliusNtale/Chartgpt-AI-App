import React, { memo } from 'react';

// Optimized loading spinner with reduced re-renders
export const LoadingSpinner = memo(() => (
  <div className="grid h-screen place-items-center">
    <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
  </div>
));

// Skeleton loader for charts
export const ChartSkeleton = memo(() => (
  <div className="animate-pulse">
    <div className="bg-gray-200 h-64 rounded-lg mb-4"></div>
    <div className="space-y-2">
      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
    </div>
  </div>
));

// Card skeleton for dashboard
export const CardSkeleton = memo(() => (
  <div className="animate-pulse p-6 bg-white rounded-lg shadow">
    <div className="h-16 bg-gray-200 rounded mb-4"></div>
    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
  </div>
));

LoadingSpinner.displayName = 'LoadingSpinner';
ChartSkeleton.displayName = 'ChartSkeleton';
CardSkeleton.displayName = 'CardSkeleton';

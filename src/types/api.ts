// API response types
export interface ApiResponse<T = any> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

export interface ChartData {
  id: string;
  name: string;
  type: 'line' | 'bar' | 'pie' | 'scatter' | 'area';
  data: Array<{
    x: string | number;
    y: number;
    [key: string]: any;
  }>;
  metadata: {
    createdAt: Date;
    updatedAt: Date;
    userId: string;
  };
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

// Error handling utilities
export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public code?: string
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export const handleApiError = (error: unknown): ApiError => {
  if (error instanceof ApiError) {
    return error;
  }
  
  if (error instanceof Error) {
    return new ApiError(error.message, 500);
  }
  
  return new ApiError('An unexpected error occurred', 500);
};

// Async wrapper with error handling
export const withErrorHandling = async <T>(
  operation: () => Promise<T>,
  fallback?: T
): Promise<T> => {
  try {
    return await operation();
  } catch (error) {
    console.error('Operation failed:', error);
    if (fallback !== undefined) {
      return fallback;
    }
    throw handleApiError(error);
  }
};

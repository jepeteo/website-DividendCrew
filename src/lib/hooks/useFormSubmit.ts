/**
 * useFormSubmit Hook
 * Handle form submissions with validation and tracking
 */

'use client';

import { useState } from 'react';
import { GTM_EVENTS } from '@/lib/constants';

interface FormState {
  isSubmitting: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: string;
}

interface UseFormSubmitOptions {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
  trackingEvent?: string;
}

/**
 * Hook for handling form submissions with state management
 */
export function useFormSubmit(options: UseFormSubmitOptions = {}) {
  const [state, setState] = useState<FormState>({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    message: '',
  });

  const submitForm = async (formData: Record<string, unknown>) => {
    setState({
      isSubmitting: true,
      isSuccess: false,
      isError: false,
      message: '',
    });

    try {
      // Simulate API call - replace with actual endpoint
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      // Track success
      if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
          event: options.trackingEvent || GTM_EVENTS.NEWSLETTER_SUBMIT,
          formData,
        });
      }

      setState({
        isSubmitting: false,
        isSuccess: true,
        isError: false,
        message: 'Success! Thank you for subscribing.',
      });

      options.onSuccess?.();
    } catch (error) {
      setState({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: 'Something went wrong. Please try again.',
      });

      options.onError?.(error as Error);
    }
  };

  const resetForm = () => {
    setState({
      isSubmitting: false,
      isSuccess: false,
      isError: false,
      message: '',
    });
  };

  return {
    ...state,
    submitForm,
    resetForm,
  };
}

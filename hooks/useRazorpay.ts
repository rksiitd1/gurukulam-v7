import { useEffect, useState, useCallback } from 'react';

// This makes the Razorpay object available on the window
declare global {
  interface Window {
    Razorpay: any;
  }
}

const useRazorpay = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const loadRazorpay = useCallback(async () => {
    // If already loaded, return immediately
    if (window.Razorpay) {
      setIsLoaded(true);
      return true;
    }

    // If already loading, wait for it
    if (isLoading) {
      return new Promise<boolean>((resolve) => {
        const checkLoaded = () => {
          if (window.Razorpay) {
            setIsLoaded(true);
            resolve(true);
          } else if (!isLoading) {
            resolve(false);
          } else {
            setTimeout(checkLoaded, 100);
          }
        };
        checkLoaded();
      });
    }

    setIsLoading(true);

    return new Promise<boolean>((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      script.onload = () => {
        setIsLoaded(true);
        setIsLoading(false);
        resolve(true);
      };
      script.onerror = () => {
        console.error('Razorpay SDK could not be loaded.');
        setIsLoaded(false);
        setIsLoading(false);
        resolve(false);
      };

      document.body.appendChild(script);
    });
  }, [isLoading]);

  // Only load when explicitly requested
  useEffect(() => {
    // Don't auto-load on mount - wait for user interaction
  }, []);

  return { isLoaded, loadRazorpay };
};

export default useRazorpay;
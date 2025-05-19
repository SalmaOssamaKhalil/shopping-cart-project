import { useState, useEffect } from 'react';

/**
 * Custom React hook that tracks the online/offline status of the browser.
 * 
 * Listens to the `online` and `offline` window events to update the
 * `isOnline` state accordingly.
 * 
 * @returns {boolean} `true` if the browser is online, `false` otherwise.
 */
export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const updateStatus = () => setIsOnline(navigator.onLine);

    window.addEventListener('online', updateStatus);
    window.addEventListener('offline', updateStatus);

    updateStatus();

    return () => {
      window.removeEventListener('online', updateStatus);
      window.removeEventListener('offline', updateStatus);
    };
  }, []);

  return isOnline;
}

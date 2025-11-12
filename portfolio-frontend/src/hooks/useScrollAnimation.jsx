import { useState, useEffect, useRef } from 'react';

// Throttle function untuk optimasi
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

export function useScrollAnimation(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Gunakan Intersection Observer untuk performa lebih baik
    observerRef.current = new IntersectionObserver(
      throttle((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            // Disconnect setelah visible untuk menghemat resource
            if (observerRef.current) {
              observerRef.current.disconnect();
            }
          }
        });
      }, 100), // Throttle 100ms
      {
        threshold: threshold,
        rootMargin: '50px' // Load sedikit lebih awal
      }
    );

    observerRef.current.observe(element);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [threshold, isVisible]);

  return [ref, isVisible];
}
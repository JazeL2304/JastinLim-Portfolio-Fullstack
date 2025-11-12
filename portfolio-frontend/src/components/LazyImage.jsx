import { useState, useEffect, useRef } from 'react';

function LazyImage({ src, alt, className, style, objectPosition = 'center center' }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '100px' // Load 100px sebelum masuk viewport
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className="relative w-full h-full">
      {/* Placeholder blur saat loading */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 animate-pulse" />
      )}
      
      {/* Image actual */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
          style={{ ...style, objectPosition }}
          loading="lazy"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
        />
      )}
    </div>
  );
}

export default LazyImage;
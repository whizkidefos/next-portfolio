'use client';

import { useEffect, useRef, useState } from 'react';

export function useImageLazyLoad(options = {}) {
  const imgRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (imgRef.current) {
          imgRef.current.onload = () => setIsLoaded(true);
        }
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0,
      rootMargin: '50px',
      ...options
    });

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [options]);

  return { imgRef, isLoaded, isInView };
}

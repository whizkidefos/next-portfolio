'use client';

import Image from 'next/image';
import { useImageLazyLoad } from '@/hooks/useImageLazyLoad';
import { memo } from 'react';

function OptimizedImage({ src, alt, width, height, className = '', priority = false }) {
  const { imgRef, isLoaded, isInView } = useImageLazyLoad();

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className} ${
        isLoaded ? 'animate-none' : 'animate-pulse'
      }`}
      style={{
        aspectRatio: width / height,
      }}
    >
      {(isInView || priority) && (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          quality={90}
          priority={priority}
          loading={priority ? 'eager' : 'lazy'}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      )}
    </div>
  );
}

// Memoize the component to prevent unnecessary re-renders
export default memo(OptimizedImage);

'use client';

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface SafeImageProps extends ImageProps {
  fallbackClassName?: string;
}

export const SafeImage = ({ 
  src, 
  alt, 
  className, 
  fallbackClassName, 
  ...props 
}: SafeImageProps) => {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div 
        className={`flex items-center justify-center bg-surface border border-border rounded-xl text-muted text-xs p-4 text-center ${className} ${fallbackClassName}`}
      >
        {alt || 'Image not available'}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      {...props}
    />
  );
};

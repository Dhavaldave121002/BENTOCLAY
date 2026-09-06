import { useState, useRef, useEffect } from 'react';

export default function ImageWithSkeleton({
  src,
  alt,
  className = '',
  containerClassName = '',
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);

  // If already cached or immediately ready, don't show skeleton
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setIsLoaded(true);
    }
  }, [src]);

  return (
    <div className={`img-skeleton-container ${containerClassName} ${isLoaded ? 'loaded' : 'loading'}`}>
      {!isLoaded && (
        <div className="skeleton-shimmer img-skeleton-placeholder" aria-hidden="true" />
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`fade-in-img ${className} ${isLoaded ? 'is-visible' : 'is-hidden'}`}
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
    </div>
  );
}

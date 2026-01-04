import React, { useState } from 'react';
import Skeleton from '../ui/Skeleton';

const LazyImage = ({ src, alt, className, ...props }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <Skeleton className={className} />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${loaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setLoaded(true)}
        loading="lazy"
        {...props}
      />
    </>
  );
};

export default LazyImage;
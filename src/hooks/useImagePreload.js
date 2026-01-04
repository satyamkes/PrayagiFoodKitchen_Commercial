import { useState, useEffect } from 'react';

const useImagePreload = (src) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!src) {
      setError(true);
      return;
    }

    const img = new Image();
    img.src = src;

    const onLoad = () => {
      setLoaded(true);
      setError(false);
    };

    const onError = () => {
      setError(true);
      setLoaded(false);
    };

    img.addEventListener('load', onLoad);
    img.addEventListener('error', onError);

    return () => {
      img.removeEventListener('load', onLoad);
      img.removeEventListener('error', onError);
    };
  }, [src]);

  return { loaded, error };
};

export default useImagePreload;
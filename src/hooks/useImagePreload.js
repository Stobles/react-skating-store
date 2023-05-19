import { useEffect, useState } from 'react';

export const useImagePreload = (src) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;

    const handleLoad = () => {
      setImageLoaded(true);
    };

    img.addEventListener('load', handleLoad);

    return () => img.removeEventListener('load', handleLoad);
  }, [src]);
  return imageLoaded;
};

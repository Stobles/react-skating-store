/* eslint-disable react/jsx-no-useless-fragment */
import { useImagePreload } from '@hooks/useImagePreload';
import { ClipLoader } from 'react-spinners';
import styles from './Image.module.scss';

const Image = ({ className, src, alt }) => {
  const imageLoaded = useImagePreload(src);
  return (
    <>
      {imageLoaded ? (
        <img draggable='false' className={className || styles.Image} src={src} alt={alt} />
      ) : (
        <div className={styles.Loader}>
          <ClipLoader />
        </div>
      )}
    </>
  );
};
export default Image;

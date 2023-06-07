import { useRef } from 'react';
import { ClipLoader } from 'react-spinners';
import { CSSTransition } from 'react-transition-group';
import styles from './Loader.module.scss';

const Loader = ({ color, size, speed, isLoading }) => {
  const nodeRef = useRef(null);
  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isLoading}
      unmountOnExit
      timeout={500}
      classNames={{
        enterActive: styles.LoaderEnter,
        enterDone: styles.LoaderEnterDone,
        exitDone: styles.LoaderExit,
        exitActive: styles.LoaderExitActive,
      }}
    >
      <div ref={nodeRef} className={styles.Loader}>
        <ClipLoader
          speedMultiplier={speed}
          color={color}
          size={size}
          aria-label='Loading Spinner'
        />
      </div>
    </CSSTransition>
  );
};
export default Loader;

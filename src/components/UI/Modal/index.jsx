import { AiOutlineClose } from 'react-icons/ai';

import styles from './Modal.module.scss';

const Modal = ({ children, title, isVisible, setIsVisible }) => (
  <div
    className={isVisible ? `${styles.Modal} ${styles.Active}` : styles.Modal}
    onClick={() => setIsVisible(false)}
  >
    <div className={styles.Content} onClick={(e) => e.stopPropagation()}>
      <div className={styles.Header}>
        <h3 className={styles.Title}>{title}</h3>
        <AiOutlineClose onClick={() => setIsVisible(false)} size={25} className={styles.Close} />
      </div>
      {children}
    </div>
  </div>
);
export default Modal;

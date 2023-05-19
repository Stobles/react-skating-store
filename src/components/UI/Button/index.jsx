import styles from './Button.module.scss';

const Button = ({ children, onClick, isFull, isSubmit, isReverse }) => (
  <button
    onClick={onClick}
    type={isSubmit ? 'submit' : 'button'}
    style={isFull && { width: '100%' }}
    className={isReverse ? `${styles.Button} ${styles.Reverse}` : styles.Button}
  >
    {children}
  </button>
);
export default Button;

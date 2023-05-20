import styles from './Button.module.scss';

const Button = ({ children, onClick, isFull, isSubmit, isReverse, isDisabled }) => (
  <button
    onClick={onClick}
    disabled={isDisabled}
    type={isSubmit ? 'submit' : 'button'}
    style={isFull && { width: '100%' }}
    className={isReverse ? `${styles.Button} ${styles.Reverse}` : styles.Button}
  >
    {children}
  </button>
);
export default Button;

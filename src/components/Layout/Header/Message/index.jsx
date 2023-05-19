import { Link } from 'react-router-dom';
import styles from './Message.module.scss';

const Message = () => {
  let me;
  return (
    <div className={styles.Section}>
      <div className={styles.Container}>
        <div className={styles.Inner}>
          <h3 className={styles.Title}>Добро пожаловать в магазин</h3>
          <div>
            <Link to='/auth' className={styles.Link}>Войти</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Message;

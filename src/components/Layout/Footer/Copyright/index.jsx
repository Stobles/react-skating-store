import { Link } from 'react-router-dom';
import styles from './Copyright.module.scss';

const Copyright = () => {
  let me;
  return (
    <div className={styles.Copyright}>
      <span>© 2023 Магазин - All rights reserved.</span>
      <ul className={styles.List}>
        <li>
          <Link to='/'>Приватность</Link>
        </li>
        <li>
          <Link to='/'>Безопасность</Link>
        </li>
        <li>
          <Link to='/'>Условия</Link>
        </li>
      </ul>
    </div>
  );
};
export default Copyright;

import { AiOutlineUser } from 'react-icons/ai';
import { BsBoxSeam } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import styles from './UserSidebar.module.scss';

const UserSidebar = () => (
  <div className={styles.Sidebar}>
    <Link className={styles.Link} to='/user'>
      <AiOutlineUser size={24} />
      <span>Профиль</span>
    </Link>
    <Link className={styles.Link} to='user/orders'>
      <BsBoxSeam size={24} />
      <span>Заказы</span>
    </Link>
  </div>
);
export default UserSidebar;

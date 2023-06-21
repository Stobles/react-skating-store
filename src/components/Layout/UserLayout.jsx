import UserSidebar from './UserSidebar';
import { Outlet } from 'react-router-dom';

import styles from './UserLayout.module.scss';
import SectionWrapper from '../HOC/SectionWrapper';

const UserLayout = () => (
  <div className={styles.Inner}>
    <UserSidebar />
    <Outlet />
  </div>
);
export default SectionWrapper(UserLayout);

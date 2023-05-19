import { NavLink } from 'react-router-dom';
import { barLinks } from '@assets/constants';
import styles from './Bar.module.scss';

const Bar = () => (
  <div className={styles.Bar}>
    <nav className={styles.Nav}>
      {barLinks.map((item) => (
        <NavLink key={item.name} to={item.to} className={styles.Link} end>
          <item.icon size={25} />
          <span className={styles.Text}>{item.name}</span>
        </NavLink>
      ))}
    </nav>
  </div>
);
export default Bar;

import { NavLink } from 'react-router-dom';
import { navLinks, categories } from '@assets/constants';
import styles from './Menu.module.scss';

const Menu = ({ title, isMenuActive, setIsMenuActive }) => (
  <div
    className={isMenuActive ? `${styles.Menu} ${styles.Active}` : styles.Menu}
  >
    <div className={styles.Inner}>
      <button
        onClick={() => {
          setIsMenuActive(false);
        }}
        type='button'
        className={styles.Close}
      >
        <span className={styles.Stick} />
        <span className={styles.Stick} />
      </button>
      <h2 className={styles.Title}>{title}</h2>
      <ul className={styles.Links}>
        {navLinks.map(({ name, to, Icon }) => (
          <li key={name} className={styles.Item}>
            <NavLink
              to={to}
              className={({ isActive }) => (isActive ? `${styles.Link} ${styles.Active}` : styles.Link)}
              onClick={() => setIsMenuActive(false)}
              end
            >
              <Icon />
              <span>{name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
      <ul className={styles.Categories}>
        {categories.map(({ value, label }) => (
          <li key={label} className={styles.Item}>
            <NavLink
              to={`/store/${value}`}
              className={({ isActive }) => (isActive ? `${styles.Link} ${styles.Active}` : styles.Link)}
              onClick={() => setIsMenuActive(false)}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
export default Menu;

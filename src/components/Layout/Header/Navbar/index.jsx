import { VscListSelection } from 'react-icons/vsc';
import { NavLink } from 'react-router-dom';
import { navLinks } from '@assets/constants';
import { useState } from 'react';
import styles from './Navbar.module.scss';
import CategoryList from '../CategoryList';

const data = ['Все', 'Новые', 'Топ продаж', 'Коньки'];

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleClick = () => {
    setToggleMenu((prevToggle) => !prevToggle);
  };
  return (
    <div className={styles.Section}>
      <div className={styles.Container}>
        <div className={styles.Inner}>
          <div className={styles.MenuWrapper}>
            <button onClick={handleClick} type='button' className={styles.Decoration}>
              <VscListSelection size={25} />
              <span className={styles.Title}>ВСЕ ТОВАРЫ</span>
            </button>
            <div className={toggleMenu ? `${styles.Menu} ${styles.Active}` : styles.Menu}>
              <CategoryList data={data} />
            </div>
          </div>
          <nav className={styles.Navbar}>
            <ul className={styles.List}>
              {navLinks.map(({ name, to }) => (
                <li className={styles.Link} key={name}>
                  <NavLink to={to} end>
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default Navbar;

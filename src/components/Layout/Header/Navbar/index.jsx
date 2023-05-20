import { VscListSelection } from 'react-icons/vsc';
import { NavLink } from 'react-router-dom';
import { navLinks } from '@assets/constants';
import { useEffect, useRef, useState } from 'react';
import styles from './Navbar.module.scss';
import CategoryList from '../CategoryList';

const data = [{ filter: 'Blades', name: 'Лезвия' }];

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const onClick = (e) => (buttonRef.current.contains(e.target)
      ? setToggleMenu((prev) => !prev)
      : setToggleMenu(false));
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);
  return (
    <div className={styles.Section}>
      <div className={styles.Container}>
        <div className={styles.Inner}>
          <div ref={buttonRef} className={styles.MenuWrapper}>
            <button type='button' className={styles.Decoration}>
              <VscListSelection size={25} />
              <span className={styles.Title}>ВСЕ ТОВАРЫ</span>
            </button>
            <div
              className={
                toggleMenu ? `${styles.Menu} ${styles.Active}` : styles.Menu
              }
            >
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

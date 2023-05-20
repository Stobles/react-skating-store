import { Link } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import { FiShoppingBag } from 'react-icons/fi';
import { VscListSelection } from 'react-icons/vsc';
import { useSelector } from 'react-redux';
import Logo from '@comp/UI/Logo';
import styles from './Header.module.scss';
import Searchbar from './Searchbar';
import Navbar from './Navbar';

// TODO: Не рендерить компоненты в адаптивной верстке

const options = [{ value: 'all', label: 'Все' }];

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <header className={styles.Header}>
      <div className={styles.Container}>
        <div className={styles.Inner}>
          <div className={styles.Logo}>
            <Logo />
          </div>
          {/* <div className={styles.Searchbar}>
            <Searchbar options={options} />
          </div> */}
          <div className={styles.Buttons}>
            {user && (
              <Link to='/cart' className={styles.Link}>
                <FiShoppingBag size={25} />
              </Link>
            )}
            <Link to={user ? '/user' : '/auth'} className={styles.Link}>
              <AiOutlineUser size={25} />
            </Link>
            <button className={styles.Burger} type='button'>
              <VscListSelection size={25} />
            </button>
          </div>
        </div>
      </div>
      <Navbar />
    </header>
  );
};
export default Header;

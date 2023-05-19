import { Link } from 'react-router-dom';
import { logo } from '@assets';
import Image from '../Image';
import styles from './Logo.module.scss';

const Logo = () => (
  <Link to='/' className={styles.Logo}>
    <Image className={styles.LogoImg} src={logo} alt='logo' />
    <span className={styles.LogoText}>Магазин</span>
  </Link>
);
export default Logo;

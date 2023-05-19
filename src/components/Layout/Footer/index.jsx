import { Link } from 'react-router-dom';
import {
  helpFooterLinks,
  shopFooterLinks,
  supportFooterLinks,
} from '@assets/constants';
import Logo from '@comp/UI/Logo';
import styles from './Footer.module.scss';
import Copyright from './Copyright';

const FooterLinks = ({ title, links }) => (
  <li className={styles.Item}>
    <h5 className={styles.Title}>{title}</h5>
    <ul className={styles.Sublist}>
      {links.map(({ name, to }) => (
        <li className={styles.Link} key={name}>
          <Link to={to}>{name}</Link>
        </li>
      ))}
    </ul>
  </li>
);

const Footer = () => {
  let me;
  return (
    <footer className={styles.Footer}>
      <div className={styles.Container}>
        <div className={styles.Inner}>
          <div className={styles.Info}>
            <Logo />
            <p className={styles.Paragraph}>
              Наш Магазин предоставляет наибольший ассортимент товаров для
              занятий фигурным катанием по лучшим ценам.
            </p>
          </div>
          <ul className={styles.List}>
            <FooterLinks title='Помощь' links={helpFooterLinks} />
            <FooterLinks title='Магазин' links={shopFooterLinks} />
            <FooterLinks title='Поддержка' links={supportFooterLinks} />
          </ul>
        </div>
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;

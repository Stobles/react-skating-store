/* eslint-disable import/no-unresolved */
import Image from '@comp/UI/Image';
import SectionWrapper from '@comp/HOC/SectionWrapper';
import { serviceCards } from '@assets/constants';
import styles from './Services.module.scss';

const ServiceCard = ({ icon, title, text }) => (
  <li className={styles.Card}>
    <Image className={styles.Image} src={icon} alt='service_img' />
    <h4 className={styles.Title}>{title}</h4>
    <p className={styles.Text}>{text}</p>
  </li>
);

const Services = () => (
  <div className={styles.Inner}>
    <ul className={styles.Cards}>
      {serviceCards.map(({ title, icon, text }) => (
        <ServiceCard key={title} icon={icon} title={title} text={text} />
      ))}
    </ul>
  </div>
);

export default SectionWrapper(Services);

import { Link } from 'react-router-dom';
import styles from './CategoryList.module.scss';

const CategoryList = ({ data }) => (
  <ul className={styles.List}>
    {data?.map(({ value, label }) => (
      <li key={value} className={styles.Paragraph}>
        <Link to={`/store/${value}`} className={styles.Link}>
          {label}
        </Link>
      </li>
    ))}
  </ul>
);
export default CategoryList;

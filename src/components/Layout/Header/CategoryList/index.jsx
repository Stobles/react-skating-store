import { Link } from 'react-router-dom';
import styles from './CategoryList.module.scss';

const CategoryList = ({ data }) => (
  <ul className={styles.List}>
    {data?.map(({ name, filter }) => (
      <li key={name} className={styles.Paragraph}>
        <Link to={`/store/${filter}`} className={styles.Link}>
          {name}
        </Link>
      </li>
    ))}
  </ul>
);
export default CategoryList;

import { Link } from 'react-router-dom';
import styles from './CategoryList.module.scss';

const CategoryList = ({ data }) => {
  let me;
  return (
    <ul className={styles.List}>
      {data?.map((name) => (
        <li key={name} className={styles.Paragraph}>
          <Link to='/product/12' className={styles.Link}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default CategoryList;

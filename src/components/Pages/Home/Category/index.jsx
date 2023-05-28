import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import SectionWrapper from '@comp/HOC/SectionWrapper';
import Image from '@comp/UI/Image';
import { category1, category2, category3 } from '@assets';
import styles from './Category.module.scss';

const CategoryCard = ({ title, text, isFull, src }) => (
  <div
    className={
      isFull ? `${styles.Category} ${styles.CategoryFull}` : styles.Category
    }
  >
    <div className={styles.Content}>
      <h3 className={styles.Title}>{title}</h3>
      <p className={styles.Text}>{text}</p>
      <Link to='/store' className={styles.Link}>
        Подробнее <BsArrowRight />
      </Link>
    </div>
    <div className={styles.ImageWrapper}>
      <Image className={styles.Image} src={src} alt='category_bg' />
    </div>
  </div>
);

const Category = () => {
  let me;
  return (
    <div className={styles.Categoryes}>
      <CategoryCard
        title='Коньки, ботинки, лезвия. Коллекция 2023'
        text='От 9000 руб.'
        src={category3}
        isFull
      />
      <CategoryCard
        title='Акссесуары и другое'
        text='Скидки до 40% по карте'
        src={category2}
      />
      <CategoryCard
        title='Одежда для тренировки'
        text='Скидки до 20%'
        src={category1}
      />
    </div>
  );
};
export default SectionWrapper(Category);

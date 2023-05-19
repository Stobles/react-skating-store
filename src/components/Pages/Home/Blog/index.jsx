import SectionWrapper from '@comp/HOC/SectionWrapper';
import { Link, useNavigate } from 'react-router-dom';
import { BsTag } from 'react-icons/bs';
import Image from '@comp/UI/Image';
import { skates, skatesCare, skatesSize, costume } from '@assets';
import styles from './Blog.module.scss';

const BlogCard = ({ src, category, date, blogId, title }) => {
  const navigate = useNavigate();
  return (
    <li>
      <Link className={styles.Card} to={`/blog/${blogId}`}>
        <div className={styles.ImageWrapper}>
          <Image className={styles.Image} src={src} alt='blog_img' />
        </div>
        <div className={styles.Content}>
          <div className={styles.Attributes}>
            <div className={styles.Category}>
              <BsTag size={16} />
              <span className={styles.CategoryName}>{category}</span>
            </div>
            <time className={styles.DateTime} dateTime=''>
              23 September 2022
            </time>
          </div>
          <h3 className={styles.Title}>{title}</h3>
          <div>Read more</div>
        </div>
      </Link>
    </li>
  );
};

const Blog = () => (
  <div className={styles.Inner}>
    <ul className={styles.Cards}>
      <BlogCard
        src={skatesCare}
        category='Коньки'
        title='Коньки фигурные – советы по уходу'
        blogId='12'
      />
      <BlogCard
        src={skatesSize}
        category='Коньки'
        title='Как подобрать размер фигурных коньков'
        blogId='12'
      />
      <BlogCard
        src={skates}
        category='Коньки'
        title='Где изобрели коньки'
        blogId='12'
      />
      <BlogCard
        src={costume}
        category='Костюмы'
        title='Женские костюмы для фигурного катания'
        blogId='12'
      />
    </ul>
  </div>
);
export default SectionWrapper(Blog, 'Наш блог');

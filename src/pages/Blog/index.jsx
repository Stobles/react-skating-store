import SectionWrapper from '@comp/HOC/SectionWrapper';
import { skates, skatesCare, skatesSize, costume } from '@assets';
import BlogList from '@comp/Shared/BlogList';
import styles from './Blog.module.scss';

const blogs = [
  {
    id: 1,
    img: costume,
    title: 'Женские костюмы для фигурного катания',
    category: 'Костюмы',
    date: '12',
  },
  {
    id: 2,
    img: skatesSize,
    title: 'Титул',
    category: 'Буба',
    date: '12 12 12',
  },
  {
    id: 3,
    img: skatesCare,
    title: 'Титул',
    category: 'Буба',
    date: '12 12 12',
  },
  { id: 4, img: skates, title: 'Титул', category: 'Буба', date: '12 12 12' },
];

const Blog = () => (
  <div className={styles.Inner}>
    <h1 className={styles.Title}>Наш блог</h1>
    <div className={styles.Subtitle}>Всего статей - 4</div>
    <BlogList blogs={blogs} isList />
  </div>
);
export default SectionWrapper(Blog);

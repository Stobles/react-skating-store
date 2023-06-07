import SectionWrapper from '@comp/HOC/SectionWrapper';
import { skates, skatesCare, skatesSize, costume } from '@assets';
import BlogList from '@comp/Shared/BlogList';

const blogs = [
  { id: 1, img: costume, title: 'Женские костюмы для фигурного катания', category: 'Костюмы', date: '12' },
  { id: 2, img: skatesSize, title: 'Титул', category: 'Буба', date: '12 12 12' },
  { id: 3, img: skatesCare, title: 'Титул', category: 'Буба', date: '12 12 12' },
  { id: 4, img: skates, title: 'Титул', category: 'Буба', date: '12 12 12' },
];

const Blog = () => (
  <div>
    <BlogList blogs={blogs} />
  </div>
);

export default SectionWrapper(Blog, 'Наш блог');

import SectionWrapper from '@comp/HOC/SectionWrapper';
import BlogList from '@comp/Shared/BlogList';
import { useEffect, useState } from 'react';
import { useFetching } from '@hooks/useFetching';
import styles from './Blog.module.scss';
import BlogService from '../../services/BlogService';



const Blog = () => {
  const [count, setCount] = useState(0);
  const [blogs, setBlogs] = useState([]);
  const [fetchBlogs, isBlogsLoading, blogsError] = useFetching(async () => {
    const response = await BlogService.getAll();
    console.log(response.blogs.length);
    if (!response.blogs.length) {
      setBlogs([]);
    } else {
      setBlogs([...response.blogs]);
      console.log(response.blogs);
    }
    setCount(response.count);
  });

  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <div className={styles.Inner}>
      <h1 className={styles.Title}>Наш блог</h1>
      <div className={styles.Subtitle}>Всего статей - {count}</div>
      <BlogList blogs={blogs} isLoading={isBlogsLoading} isList />
    </div>
  );
};

export default SectionWrapper(Blog);

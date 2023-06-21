import SectionWrapper from '@comp/HOC/SectionWrapper';
import { skates, skatesCare, skatesSize } from '@assets';
import BlogList from '@comp/Shared/BlogList';
import BlogService from '../../../../services/BlogService';
import { useFetching } from '@hooks/useFetching';
import { useEffect, useState } from 'react';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [fetchBlogs, isBlogsLoading, blogsError] = useFetching(async () => {
    const response = await BlogService.getAll();
    console.log(response.blogs.length);
    if (!response.blogs.length) {
      setBlogs([]);
    } else {
      setBlogs([...response.blogs]);
    }
  });

  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <div>
      <BlogList blogs={blogs} />
    </div>
  );
};

export default SectionWrapper(Blog, 'Наш блог');

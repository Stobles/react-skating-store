import { Link } from 'react-router-dom';
import { BsTag } from 'react-icons/bs';
import Image from '@comp/UI/Image';
import styles from './BlogList.module.scss';

const BlogCard = ({ src, isList, category, description, blogId, date, title }) => (
  <li>
    <Link className={isList ? `${styles.Card} ${styles.List}` : styles.Card} to='/'>
      <div className={isList ? `${styles.ImageWrapper} ${styles.List}` : styles.ImageWrapper}>
        <Image className={styles.Image} src={`./assets/images/blog/${blogId}/${src}`} alt='blog_img' />
      </div>
      <div className={isList ? `${styles.Content} ${styles.List}` : styles.Content}>
        <div className={styles.Attributes}>
          <div className={styles.Category}>
            <BsTag size={16} />
            <span className={styles.CategoryName}>{category}</span>
          </div>
          <time className={styles.DateTime} dateTime=''>
            {date}
          </time>
        </div>
        <h3 className={styles.Title}>{title}</h3>
        {isList && (
          <div className={styles.Description}>
            {description}
          </div>
        )}
        <Link to={`/blog/${blogId}`} className={styles.Link}>Читать дальше...</Link>
      </div>
    </Link>
  </li>
);

const BlogList = ({ blogs, isLoading, isList }) => (
  <ul className={isList ? `${styles.Cards} ${styles.List}` : styles.Cards}>
    {/* <Loader isLoading={isLoading} /> */}
    {blogs?.map(({ id, image, title, category, description, date }) => (
      <BlogCard
        key={id}
        blogId={id}
        isList={isList}
        src={image}
        title={title}
        category={category}
        description={description}
        date={date}
      />
    ))}
  </ul>
);

export default BlogList;
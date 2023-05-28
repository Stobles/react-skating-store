import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import styles from './Pagination.module.scss';

const Pagination = ({
  fetchProducts,
  isLoading,
  products,
  page,
  totalPages,
}) => {
  const isFirstPage = page === 1;
  const isLastPage = page === totalPages;
  const handleClick = (item, type) => {
    fetchProducts(4, item, type);
  };

  return (
    <div className={styles.Pagination}>
      <div>
        Страница {page} из {totalPages}
      </div>
      <div className={styles.Buttons}>
        <button
          onClick={() => handleClick(products[0], 'prev')}
          type='button'
          disabled={isFirstPage || isLoading}
          className={
            isFirstPage || isLoading
              ? `${styles.Button} ${styles.Disabled}`
              : styles.Button
          }
        >
          <AiOutlineArrowLeft size={18} />
        </button>
        <button
          onClick={() => handleClick(products[products.length - 1], 'next')}
          type='button'
          disabled={isLastPage || isLoading}
          className={
            isLastPage || isLoading
              ? `${styles.Button} ${styles.Disabled}`
              : styles.Button
          }
        >
          <AiOutlineArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;

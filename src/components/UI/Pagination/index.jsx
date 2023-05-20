import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import styles from './Pagination.module.scss';

const Pagination = ({ fetchProducts, products, page, totalPages }) => {
  const isFirstPage = page === 1;
  const isLastPage = page === totalPages;
  const handleNextClick = (item) => {
    fetchProducts(4, item, 'next');
  };

  const handlePrevClick = (item) => {
    fetchProducts(4, item, 'prev');
  };
  return (
    <div className={styles.Pagination}>
      <div>Страница {page} из 100</div>
      <div className={styles.Buttons}>
        <button
          onClick={() => handlePrevClick(products[0])}
          type='button'
          disabled={isFirstPage}
          className={isFirstPage ? `${styles.Button} ${styles.Disabled}` : styles.Button}
        >
          <AiOutlineArrowLeft size={18} />
        </button>
        <button
          onClick={() => handleNextClick(products[products.length - 1])}
          type='button'
          disabled={isLastPage}
          className={isLastPage ? `${styles.Button} ${styles.Disabled}` : styles.Button}
        >
          <AiOutlineArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;

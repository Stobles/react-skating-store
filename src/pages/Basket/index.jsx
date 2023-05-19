import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Basket.module.scss';

const Basket = () => {
  const dispatch = useDispatch();
  const { basket } = useSelector((state) => state.auth);

  return (
    <div className={styles.Container}>
      <div className={styles.Inner}>
        <div className={styles.TitleWrapper}>
          <h1 className={styles.Title}>Корзина</h1>
          <span className={styles.Quantity}>{basket.length} Товара</span>
        </div>
        <div className={styles.Content}>
          <div className={styles.ProductsWrapper}>
            <ul className={styles.Header}>
              <li className={styles.Name}>Товар</li>
              <li className={styles.Price}>Цена</li>
              <li className={styles.Quantity}>Количество</li>
              <li className={styles.Total}>Всего</li>
            </ul>
            <div className={styles.Products}>
              
            </div>
          </div>
          <div className={styles.Info}></div>
        </div>
      </div>
    </div>
  );
};
export default Basket;

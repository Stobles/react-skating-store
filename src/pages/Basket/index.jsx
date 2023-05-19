import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Basket.module.scss';
import Image from '../../components/UI/Image';

const BasketProduct = ({ product }) => (
  <div className={styles.Product}>
    <div className={styles.ImageWrapper}>
      <Image className={styles.Image} alt='basket_product_image' />
    </div>
    <div>
      <span className={styles.Category}>БОТИНКИ</span>
      <h3 className={styles.Name}>Коньки Jackson Freestyle Белые</h3>
    </div>
    <div className={styles.Size}>36</div>
    <div className={styles.Price}>2000 руб.</div>
    <div className={styles.Quantity}>1 шт.</div>
    <div className={styles.Price}>2000 руб.</div>
  </div>
);

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
            <BasketProduct />
            <BasketProduct />
            <BasketProduct />
          </div>
          <div className={styles.Info} />
        </div>
      </div>
    </div>
  );
};
export default Basket;

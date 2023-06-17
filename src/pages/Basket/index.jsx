import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Image from '@comp/UI/Image';
import Form from '@comp/Pages/Basket/Form';
import Button from '@comp/UI/Button';
import styles from './Basket.module.scss';
import { fetchClearBasket } from '../../redux/thunks/fetchBasket';

const BasketProduct = ({ product }) => (
  <div className={styles.Product}>
    <div className={styles.ImageWrapper}>
      <Image
        className={styles.Image}
        src={`./assets/images/products/${product.picture}`}
        alt='basket_product_image'
      />
    </div>
    <div>
      <span className={styles.Category}>{product.category}</span>
      <Link to={`/product/${product.id}`}>
        <h3 className={styles.Name}>{product.name}</h3>
      </Link>
    </div>
    <div className={styles.Size}>{product.size}</div>
    <div className={styles.Price}>{product.price} руб.</div>
    <div className={styles.Quantity}>{product.amount} шт.</div>
    <div className={styles.Price}>{product.price * product.amount} руб.</div>
  </div>
);

const Basket = () => {
  const dispatch = useDispatch();
  const { user, basket } = useSelector((state) => state.auth);

  const handleClearClick = () => {
    dispatch(fetchClearBasket(user.id));
  };

  return (
    <div className={styles.Container}>
      <div className={styles.Inner}>
        <div className={styles.HeaderWrapper}>
          <div className={styles.TitleWrapper}>
            <h1 className={styles.Title}>Корзина</h1>
            <span className={styles.Quantity}>Товаров - {basket.length}</span>
          </div>
          {basket.length !== 0 && (
            <div className={styles.Button}>
              <Button isFull onClick={handleClearClick}>
                Очистить
              </Button>
            </div>
          )}
        </div>
        {basket.length ? (
          <div className={styles.Content}>
            <div className={styles.ProductsWrapper}>
              <ul className={styles.Header}>
                <li className={styles.Name}>Товар</li>
                <li className={styles.Price}>Цена</li>
                <li className={styles.Quantity}>Количество</li>
                <li className={styles.Total}>Всего</li>
              </ul>
              <div className={styles.Products}>
                {basket.map((product) => (
                  <BasketProduct
                    key={`${product.id}${product.size}`}
                    product={product}
                  />
                ))}
              </div>
            </div>
            <div className={styles.Info}>
              <Form />
            </div>
          </div>
        ) : (
          <div className={styles.ContentEmpty}>
            <h3 className={styles.Empty}>В корзине нет товаров !</h3>
          </div>
        )}
      </div>
    </div>
  );
};
export default Basket;

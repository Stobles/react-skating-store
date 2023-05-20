import { useParams } from 'react-router-dom';
import { useFetching } from '@hooks/useFetching';
import ProductService from '@services/ProductService';
import { useEffect, useState } from 'react';
import Image from '@comp/UI/Image';
import Button from '@comp/UI/Button';
import Select from 'react-select';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAddToBasket } from '@thunks/fetchBasket';

import styles from './Product.module.scss';

const sizeStylesSelect = {
  control: (style) => ({
    ...style,
    width: '220px',
    cursor: 'pointer',
    outline: 'none',
  }),
};

const Product = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { user } = useSelector((state) => state.auth);
  const [product, setProduct] = useState('');
  const [amount, setAmount] = useState(1);
  const [size, setSize] = useState('');
  const [sizeOptions, setSizeOptions] = useState([]);
  const [fetchProduct, isLoading, error] = useFetching(async (uid) => {
    const response = await ProductService.getById(uid);
    setProduct(response);
    setSizeOptions([...response.sizes]);
    console.log(sizeOptions);
  });

  useEffect(() => {
    fetchProduct(id);
  }, []);

  const handleClick = () => {
    if (size) {
      const { date, features, ...productBasket } = product;
      productBasket.id = id;
      productBasket.size = size;
      productBasket.amount = amount;
      dispatch(fetchAddToBasket(productBasket, user.id));
    } else {
      toast.warning('Выберите размер');
    }
  };

  if (error) {
    toast.error(error);
  }

  return (
    <div className={styles.Container}>
      <div className={styles.Inner}>
        <div className={styles.ImageWrapper}>
          <Image
            className={styles.Image}
            src={`../src/assets/images/products/${product?.picture}`}
          />
        </div>
        <div className={styles.Content}>
          <h1
            className={
              !isLoading ? styles.Title : `${styles.Title} ${styles.Plug}`
            }
          >
            {product?.name}
          </h1>
          <p
            className={
              !isLoading ? styles.Category : `${styles.Category} ${styles.Plug}`
            }
          >
            {product?.category}
          </p>
          <div className={styles.Select}>
            <Select
              placeholder='Выбрать размер...'
              styles={sizeStylesSelect}
              options={sizeOptions}
              onChange={(choice) => setSize(choice.value)}
            />
          </div>
          <div className={styles.Prices}>
            <span
              className={
                !isLoading ? styles.New : `${styles.New} ${styles.Plug}`
              }
            >
              {product?.price} &#8381;
            </span>
            {product?.oldPrice !== 0 && (
              <span
                className={
                  !isLoading ? styles.Old : `${styles.Old} ${styles.Plug}`
                }
              >
                {product?.oldPrice} &#8381;
              </span>
            )}
          </div>
          <Button onClick={handleClick}>Добавить в корзину</Button>
        </div>
      </div>
    </div>
  );
};
export default Product;

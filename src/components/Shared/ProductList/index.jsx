import { BsBagPlus } from 'react-icons/bs';
import { AiOutlineEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import Image from '@comp/UI/Image';
import Loader from '@comp/UI/Loader';
import Modal from '@comp/UI/Modal';
import Button from '@comp/UI/Button';
import { toast } from 'react-toastify';
import styles from './ProductList.module.scss';
import { dateDifference } from '../../../utils/date';

const ProductCard = ({
  product,
  setIsVisible,
  setCurrentProduct,
  addToBasket,
}) => (
  <article className={styles.Card}>
    <div className={styles.ImageWrapper}>
      {(product.sale || dateDifference(product.date) < 30) && (
        <span
          className={
            product.sale
              ? `${styles.Pin} ${styles.Sale}`
              : `${styles.Pin} ${styles.New}`
          }
        >
          {product.sale ? `-${product.sale}%` : 'New'}
        </span>
      )}
      <Image
        className={styles.Image}
        src={`/src/assets/images/products/${product.picture}`}
      />
      <div className={styles.Buttons}>
        <button
          type='button'
          className={styles.Button}
          onClick={() => {
            setCurrentProduct(product);
            if (!product?.sizes) {
              addToBasket(product);
              toast.success('Товар успешно добавлен в корзину');
            } else {
              setIsVisible(true);
            }
          }}
        >
          <BsBagPlus size={17} />
        </button>
        <Link className={styles.Button} to={`/product/${product.id}`}>
          <AiOutlineEye size={20} />
        </Link>
      </div>
    </div>
    <div>
      <p className={styles.Category}>{product.category}</p>
      <h4 className={styles.Title}>
        <Link to={`/product/${product.id}`}>{product.name}</Link>
      </h4>
      <p className={styles.Price}>
        <span className={styles.New}>
          {product.sale
            ? product.price - product.price * (product.sale / 100)
            : product.price}{' '}
          &#8381;
        </span>
        {product.sale && (
          <span className={styles.Old}>{product.price} &#8381;</span>
        )}
      </p>
    </div>
  </article>
);

const ProductList = ({
  isVisible,
  setIsVisible,
  products,
  isLoading,
  currentProduct,
  setCurrentProduct,
  currentSize,
  setCurrentSize,
  addToBasket,
}) => (
  <div className={styles.Cards}>
    <Modal
      title='Выберите размер'
      isVisible={isVisible}
      setIsVisible={setIsVisible}
    >
      <div className={styles.ModalInner}>
        <div className={styles.ModalSelect}>
          <Select
            options={currentProduct?.sizes}
            onChange={(choice) => setCurrentSize(choice.value)}
          />
        </div>
        <Button
          onClick={() => {
            if (currentSize) {
              addToBasket(currentProduct, currentSize);
              toast.success('Товар добавлен в корзину');
            } else {
              toast.warning('Выберите размер');
            }
          }}
        >
          Купить
        </Button>
      </div>
    </Modal>
    <Loader isLoading={isLoading} />
    {!products.length && <h4 className={styles.Empty}>Товары не найдены!</h4>}
    {products?.map((product) => (
      <ProductCard
        key={product.id}
        product={product}
        setIsVisible={setIsVisible}
        setCurrentProduct={setCurrentProduct}
        addToBasket={addToBasket}
      />
    ))}
  </div>
);
export default ProductList;

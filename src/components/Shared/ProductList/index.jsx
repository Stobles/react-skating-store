import { BsBagPlus } from 'react-icons/bs';
import { AiOutlineEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Image from '@comp/UI/Image';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAddToBasket } from '@thunks/fetchBasket';
import styles from './ProductList.module.scss';
import { dateDifference } from '../../../utils/date';

{
  /* <p className={styles.Price}>
  {features?.map((feature) => (
    <span>{`${Object.keys(feature)[0]} ${Object.values(feature)[0]}`}</span>
  ))}
</p> */
}

const ProductCard = ({ product }) => (
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
        src={`src/assets/images/products/${product.picture}`}
      />
      <div className={styles.Buttons}>
        <button
          type='button'
          className={styles.Button}
          onClick={() => handleClick()}
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
        <span className={styles.New}>{product.price} &#8381;</span>
        {product.oldPrice !== 0 && (
        <span className={styles.Old}>{product.oldPrice}&#8381;</span>
        )}
      </p>
    </div>
  </article>
);

const ProductList = ({ products }) => (
  <div className={styles.Cards}>
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);
export default ProductList;

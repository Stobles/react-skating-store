import SectionWrapper from '@comp/HOC/SectionWrapper';
import ProductList from '@comp/Shared/ProductList';
import { useFetching } from '@hooks/useFetching';
import { useEffect, useState } from 'react';
import ProductService from '@services/ProductService';
import { fetchAddToBasket } from '@thunks/fetchBasket';
import Loader from '@comp/UI/Loader';
import { toast } from 'react-toastify';

import { useDispatch, useSelector } from 'react-redux';
import styles from './Products.module.scss';

const Products = () => {
  const productsLimit = 8;
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState();
  const [currentSize, setCurrentSize] = useState();
  const [fetchProducts, isLoading, error] = useFetching(async (limit) => {
    const response = await ProductService.getAll(limit);
    setProducts([...response.products]);
  });
  const [isModalVisible, setIsModalVisible] = useState(false);

  const addToBasket = (product, size = null) => {
    const { date, features, sizes, ...productBasket } = product;
    if (size) productBasket.size = size;
    productBasket.amount = 1;
    dispatch(fetchAddToBasket(productBasket, user.id));
  };

  useEffect(() => {
    fetchProducts(productsLimit);
  }, []);

  if (error) {
    toast.error(error);
  }
  return (
    <div className={styles.Products}>
      <ProductList
        products={products}
        isLoading={isLoading}
        isVisible={isModalVisible}
        setIsVisible={setIsModalVisible}
        currentProduct={currentProduct}
        setCurrentProduct={setCurrentProduct}
        currentSize={currentSize}
        setCurrentSize={setCurrentSize}
        addToBasket={addToBasket}
      />
    </div>
  );
};
export default SectionWrapper(Products, 'Наши товары');

import SectionWrapper from '@comp/HOC/SectionWrapper';
import ProductList from '@comp/Shared/ProductList';
import { useFetching } from '@hooks/useFetching';
import { useEffect, useState } from 'react';
import ProductService from '@services/ProductService';
import Loader from '@comp/UI/Loader';
import { toast } from 'react-toastify';

import styles from './Products.module.scss';

const Products = () => {
  const productsLimit = 8;
  const [products, setProducts] = useState([]);
  const [fetchProducts, isLoading, error] = useFetching(async (limit) => {
    const response = await ProductService.getAll(limit);
    setProducts([...response.products]);
  });

  useEffect(() => {
    fetchProducts(productsLimit);
  }, []);

  if (error) {
    toast.error(error);
  }
  return (
    <div className={styles.Products}>
      <Loader isLoading={isLoading} />
      <ProductList products={products} />
    </div>
  );
};
export default SectionWrapper(Products, 'Наши товары');

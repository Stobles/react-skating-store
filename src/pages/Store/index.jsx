/* eslint-disable no-shadow */
import ProductList from '@comp/Shared/ProductList';
import { useState, useEffect } from 'react';
import { useFetching } from '@hooks/useFetching';
import ProductService from '@services/ProductService';
import { toast } from 'react-toastify';
import ProductsFilter from '@comp/Shared/ProductFilter';
import Pagination from '@comp/UI/Pagination';
import { categories } from '@assets/constants';
import styles from './Store.module.scss';
import { useSortedPosts } from '../../hooks/usePosts';

const Store = () => {
  // const { filterProp } = useParams();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState({ category: '', sort: '' });

  const [fetchProducts, isProductsLoading, productsError] = useFetching(
    async (limit) => {
      let response = await ProductService.getAll(limit, filter.category);
      if (!response.products.length) {
        response = await ProductService.getAll(limit);
        setFilter((prev) => ({ ...prev, category: '' }));
      }
      setProducts([...response.products]);
      setTotalPages(Math.ceil(response.count / limit));
    },
  );

  const [fetchProductsPagination, isPaginationLoading, paginationError] = useFetching(async (limit, item, type = '') => {
    let response;
    if (type === 'next') {
      response = await ProductService.getNext(limit, item, filter.category);
      if (response.length) {
        setProducts([...response]);
        setPage((prev) => prev + 1);
      }
    } else {
      response = await ProductService.getPrev(limit, item, filter.category);
      if (response.length) {
        setProducts([...response]);
        setPage((prev) => prev - 1);
      }
    }
  });

  const sortedProducts = useSortedPosts(products, filter.sort);

  useEffect(() => {
    fetchProducts(4);
  }, [filter.category]);

  useEffect(() => {
    fetchProducts(4);
  }, []);

  if (productsError || paginationError) {
    toast.error(productsError || paginationError);
  }

  return (
    <div className={styles.Section}>
      <div className={styles.Container}>
        <div className={styles.Inner}>
          <div className={styles.Filter}>
            <ProductsFilter
              options={categories}
              filter={filter}
              setFilter={setFilter}
            />
          </div>
          <div className={styles.Products}>
            <ProductList
              products={sortedProducts}
              isLoading={isProductsLoading || isPaginationLoading}
            />
          </div>
          <div className={styles.Pagination}>
            <Pagination
              fetchProducts={fetchProductsPagination}
              isLoading={isProductsLoading || isPaginationLoading}
              products={products}
              page={page}
              setPage={setPage}
              totalPages={totalPages}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;

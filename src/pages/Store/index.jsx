/* eslint-disable no-shadow */
import ProductList from '@comp/Shared/ProductList';
import { useState, useEffect } from 'react';
import { useFetching } from '@hooks/useFetching';
import ProductService from '@services/ProductService';
import { toast } from 'react-toastify';
import Loader from '@comp/UI/Loader';
import ProductsFilter from '@comp/Shared/ProductFilter';
import { useParams } from 'react-router-dom';
import { usePosts } from '@hooks/usePosts';
import Pagination from '@comp/UI/Pagination';
import styles from './Store.module.scss';

const options = [
  { value: '', label: 'Все' },
  { value: 'Blades', label: 'Лезвия' },
  { value: 'Skates', label: 'Коньки' },
  { value: 'Tights', label: 'Тайтсы' },
  { value: 'Cloth', label: 'Одежда' },
];

const Store = () => {
  const { filterProp } = useParams();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState({ category: '', sort: '' });
  const [fetchProducts, isLoading, error] = useFetching(
    async (limit, item, type = '') => {
      let response;
      switch (type) {
        case 'next':
          response = await ProductService.getNext(limit, item);
          if (response.length) {
            setProducts([...response]);
            setPage((prev) => prev + 1);
          }
          break;
        case 'prev':
          response = await ProductService.getPrev(limit, item);
          if (response.length) {
            setProducts([...response]);
            setPage((prev) => prev - 1);
          }
          break;
        default:
          response = await ProductService.getAll(limit);
          setProducts([...response.products]);
          setTotalPages(Math.ceil(response.count / limit));
          break;
      }
    },
  );
  const sortedAndFilteredProducts = usePosts(
    products,
    filter.category,
    filter.sort,
  );

  useEffect(() => {
    fetchProducts(4);
    if (filterProp) setFilter({ ...filter, category: filterProp });
  }, []);

  if (error) {
    toast.error(error);
  }

  return (
    <div className={styles.Section}>
      <div className={styles.Container}>
        <div className={styles.Inner}>
          <div className={styles.Filter}>
            <ProductsFilter
              options={options}
              filter={filter}
              setFilter={setFilter}
            />
          </div>
          <Loader isLoading={isLoading} />
          <ProductList products={sortedAndFilteredProducts} />
          <div className={styles.Pagination}>
            <Pagination
              fetchProducts={fetchProducts}
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

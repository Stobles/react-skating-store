import ProductList from '@comp/Shared/ProductList';
import { useState, useEffect } from 'react';
import { useFetching } from '@hooks/useFetching';
import ProductService from '@services/ProductService';
import { toast } from 'react-toastify';
import Loader from '@comp/UI/Loader';
import ProductsFilter from '@comp/Shared/ProductFilter';
import { useParams } from 'react-router-dom';
import styles from './Store.module.scss';
import { usePosts } from '@hooks/usePosts';
import Pagination from '@comp/UI/Pagination';

const options = [
  { value: '', label: 'Все' },
  { value: 'Blades', label: 'Лезвия' },
  { value: 'Skates', label: 'Коньки' },
  { value: 'Tights', label: 'Тайтсы' },
  { value: 'Cloth', label: 'Одежда' },
];

const Store = () => {
  const { filterProp } = useParams();
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState({ category: '', sort: '' });
  const [fetchProducts, isLoading, error] = useFetching(async () => {
    const response = await ProductService.getAllProducts();
    setProducts([...response]);
  });
  const sortedAndFilteredProducts = usePosts(
    products,
    filter.category,
    filter.sort,
  );

  useEffect(() => {
    fetchProducts();

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
            <Pagination  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;

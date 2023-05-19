import Select from 'react-select';
import styles from './ProductFilter.module.scss';

const categoryStylesSelect = {
  control: (style) => ({
    ...style,
    width: '220px',
    cursor: 'pointer',
    outline: 'none',
  }),
};
const filterStylesSelect = {
  control: (style) => ({
    ...style,
    width: '220px',
    cursor: 'pointer',
    outline: 'none',
  }),
};

const ProductsFilter = ({ options, filter, setFilter }) => (
  <div className={styles.Filters}>
    <Select
      placeholder='Категория'
      options={options}
      styles={categoryStylesSelect}
      onChange={(selectedOption) => setFilter({ ...filter, category: selectedOption.value })}
    />
    <Select
      placeholder='Сортировка'
      options={[
        { value: '', label: 'Без сортировки' },
        { value: 'category', label: 'По категории' },
        { value: 'name', label: 'По названию' },
      ]}
      styles={filterStylesSelect}
      onChange={(selectedOption) => setFilter({ ...filter, sort: selectedOption.value })}
    />
  </div>
);
export default ProductsFilter;

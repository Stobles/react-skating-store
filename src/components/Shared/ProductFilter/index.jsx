import Select from 'react-select';
import styles from './ProductFilter.module.scss';

const sorting = [
  { value: 'name', label: 'По названию' },
  { value: 'category', label: 'По категории' },
];

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
    height: '30px',
    cursor: 'pointer',
    outline: 'none',
  }),
};

const ProductsFilter = ({ options, setFilter }) => (
  <div className={styles.Filters}>
    <Select
      placeholder='Категория'
      options={options}
      styles={categoryStylesSelect}
      onChange={(e) => setFilter((filter) => ({ ...filter, category: e.value }))}
    />
    <Select
      placeholder='Сортировка'
      defaultValue={sorting[0] || 'Select'}
      options={sorting}
      styles={filterStylesSelect}
      onChange={(e) => setFilter((filter) => ({ ...filter, sort: e.value }))}
    />
  </div>
);
export default ProductsFilter;

import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import Select from 'react-select';
import { Navigate, useNavigate } from 'react-router-dom';
import styles from './Searchbar.module.scss';

const colourStylesRow = {
  container: (style) => ({
    ...style,
    '@media only screen and (max-width: 768px)': {
      ...styles['@media only screen and (max-width: 768px)'],
      display: 'none',
    },
  }),
  dropdownIndicator: (style) => ({
    ...style,
    width: '30px',
  }),
  indicatorSeparator: (style) => ({
    ...style,
    display: 'none',
  }),
  control: (style) => ({
    ...style,
    width: '120px',
    border: '0',
    borderRadius: '0',
    borderLeft: '1px solid #E3E3E3',
    cursor: 'pointer',
    outline: 'none',
  }),
};

const Searchbar = ({ options }) => {
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} autoComplete='off' className={styles.Form}>
      <input
        placeholder='Поиск'
        name='search'
        autoComplete='off'
        type='text'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.Input}
      />
      <Select
        placeholder='Категория'
        options={options}
        styles={colourStylesRow}
      />
      <button type='submit' className={styles.Submit}>
        <FiSearch className={styles.Icon} />
      </button>
    </form>
  );
};
export default Searchbar;

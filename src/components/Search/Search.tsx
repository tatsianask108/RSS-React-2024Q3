import styles from './Search.module.css';
import React from 'react';
import Button from '../shared/Button/Button';
import { ISearchProps } from './types';
import useLocalStorage from '../../hooks/useLocalStorage';

const SEARCH_VALUE = 'searchValueTS';

const Search: React.FC<ISearchProps> = ({ searchFunction }) => {
  const { setValueToLS, getValueFromLS } = useLocalStorage(SEARCH_VALUE);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    searchFunction(getValueFromLS());
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValueToLS(e.target.value);
  };

  return (
    <>
      <h2>Search planets:</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search..."
          className={styles.input}
          value={getValueFromLS()}
          onChange={handleInputChange}
        />
        <Button type={'submit'}>Search</Button>
      </form>
    </>
  );
};

export default Search;

import styles from './Search.module.css';
import React, { useState } from 'react';
import Button from '../shared/Button/Button';
// import { ISearchState, ISearchProps } from '../../types/types';
import { getSearchValueFromLS, setSearchValueToLS } from '../../utils/utils';

interface ISearchProps {
  searchFunction: (searchValue: string) => Promise<void>;
}

const Search: React.FC<ISearchProps> = ({ searchFunction }) => {
  const [searchValue, setSearchValue] = useState(getSearchValueFromLS());

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    searchFunction?.(searchValue);
    setSearchValueToLS(searchValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <h2>Search planets:</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search..."
          className={styles.input}
          value={searchValue || ''}
          onChange={handleInputChange}
        />
        <Button type={'submit'}>Search</Button>
      </form>
    </>
  );
};

export default Search;

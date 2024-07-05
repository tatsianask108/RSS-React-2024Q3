import styles from './Search.module.css';
import React, { createRef } from 'react';

interface IState {
  searchValue: string | null;
}

interface IProps {
  planetList: (searchValue: string) => void;
}

class Search extends React.Component<IProps> {
  state: IState = {
    searchValue: localStorage.getItem('searchValueTS'),
  };

  inputRef = createRef<HTMLInputElement>();

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const searchValue = this.inputRef.current?.value.trim() || '';
    this.setState({ searchValue });
    this.props.planetList(searchValue);
    localStorage.setItem('searchValueTS', searchValue);
  };

  render() {
    return (
      <>
        <h2>Search planets:</h2>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <input type="search" placeholder="Search..." className={styles.input} ref={this.inputRef} />
          <button type="submit">Search</button>
        </form>
      </>
    );
  }
}

export default Search;

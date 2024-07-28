import { useEffect } from 'react';
import CardList from '../../CardList/CardList';
import Search from '../../Search/Search';
import Loader from '../../shared/Loader/Loader';
import Header from '../../Header/Header';
import { useNavigate } from 'react-router-dom';
import Pagination from '../../Pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../state/store';
import { changePage } from '../../../state/slices/pageSlice/pageSlice';
import { swAPI } from '../../../services/swAPI';
import { setSearchQuery } from '../../../state/slices/searchSlice/searchSlice';

import styles from './MainPage.module.css';

const MainPage = () => {
  const page = useSelector((state: RootState) => state.page.pageNumber);
  const searchQuery = useSelector((state: RootState) => state.search.searchQuery);
  const { data: data, isFetching } = swAPI.useFetchAllPlanetsQuery({ page, searchQuery });
  const planetList = data?.results || [];

  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const handlePageChange = (newPage: number) => {
    dispatch(changePage(newPage));
  };

  const handleSearch = (searchValue: string) => {
    dispatch(setSearchQuery(searchValue));
  };

  useEffect(() => {
    navigate(`?page=${page}`);
  }, [searchQuery]);

  useEffect(() => {
    navigate(`?page=${page}`);
  }, [page]);

  return (
    <div data-testid="mainPage">
      <Header />
      <main className={styles.main}>
        <section>
          <Search searchFunction={handleSearch} />
        </section>
        {isFetching ? (
          <Loader />
        ) : (
          <section>
            <CardList itemsList={planetList} currentPage={page} />
            <Pagination apiData={data} currentPage={page} changePage={handlePageChange} />
          </section>
        )}
      </main>
    </div>
  );
};

export default MainPage;

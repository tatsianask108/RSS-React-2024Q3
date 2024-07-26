import { useState, useEffect, useCallback } from 'react';
import CardList from '../../CardList/CardList';
import Search from '../../Search/Search';
import Loader from '../../shared/Loader/Loader';
import Header from '../../Header/Header';
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';
import Pagination from '../../Pagination/Pagination';
import useLocalStorage from '../../../hooks/useLocalStorage';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../state/store';
import { changePage } from '../../../state/slices/pageSlice/pageSlice';
import { SEARCH_VALUE } from '../../../constants';

import styles from './MainPage.module.css';
import { swAPI } from '../../../services/swAPI';

const MainPage = () => {
  const page = useSelector((state: RootState) => state.page.pageNumber);
  const { data: data, isLoading, isFetching } = swAPI.useFetchAllPlanetsQuery(String(page));
  const results = data?.results || [];

  // const [, setSearchParams] = useSearchParams();
  // const { getValueFromLS } = useLocalStorage(SEARCH_VALUE);
  // const [searchValue] = useState(getValueFromLS());

  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangePage = (newPage: number) => {
    dispatch(changePage(newPage)); 
  };

  useEffect(() => {
    navigate(`?page=${page}`);
  }, [page, navigate]);

  return (
    <div data-testid="mainPage">
      <Header />
      <main className={styles.main}>
        {/* <section>
          <Search searchFunction={getPlanets} />
        </section> */}
        {isLoading || isFetching? (
          <Loader />
        ) : (
          <section>
            <CardList itemsList={results} currentPage={page} />
            <Pagination apiData={data} currentPage={page} changePage={handleChangePage} />
          </section>
        )}
        <Outlet />
      </main>
    </div>
  );
};

export default MainPage;

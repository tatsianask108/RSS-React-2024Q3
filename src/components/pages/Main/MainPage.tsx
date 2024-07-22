import { useState, useEffect, useCallback } from 'react';
import CardList from '../../CardList/CardList';
import { fetchAllPlanets } from '../../../services/ApiService';
import Search from '../../Search/Search';
import Loader from '../../shared/Loader/Loader';
import Header from '../../Header/Header';
import { Outlet, useSearchParams } from 'react-router-dom';
import Pagination from '../../Pagination/Pagination';
import useLocalStorage from '../../../hooks/useLocalStorage';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../state/store';
import { changePages } from '../../../state/pageSlice';
import { SEARCH_VALUE } from '../../../constants';

import styles from './MainPage.module.css';

const MainPage = () => {
  const [apiData, setApiData] = useState<IApiData>();
  const [planetsList, setPlanetsList] = useState<IPlanet[]>();
  const [isLoading, setLoading] = useState(false);
  const [, setSearchParams] = useSearchParams();
  const { getValueFromLS } = useLocalStorage(SEARCH_VALUE);
  const [searchValue] = useState(getValueFromLS());

  const page = useSelector((state: RootState) => state.page.number);
  const dispatch: AppDispatch = useDispatch();

  const handleChangePage = (newPage: number) => {
    dispatch(changePages(newPage));
    setSearchParams({ page: String(newPage) });
  };

  const getPlanets = useCallback(
    async (searchValue: string) => {
      setLoading(true);

      try {
        const data: IApiData | undefined = await fetchAllPlanets(searchValue, page);
        if (data && Array.isArray(data.results)) {
          const planetList = data.results;
          setApiData(data);
          setPlanetsList(planetList);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    },
    [page]
  );

  useEffect(() => {
    getPlanets(searchValue);
  }, [page, getPlanets, searchValue]);

  return (
    <div data-testid="mainPage">
      <Header />
      <main className={styles.main}>
        <section>
          <Search searchFunction={getPlanets} />
        </section>
        {isLoading ? (
          <Loader />
        ) : (
          <section>
            <CardList itemsList={planetsList} currentPage={page} />
            <Pagination apiData={apiData} currentPage={page} changePage={handleChangePage} />
          </section>
        )}
        <Outlet />
      </main>
    </div>
  );
};

export default MainPage;

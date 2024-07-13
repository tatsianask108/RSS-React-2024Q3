import { useState, useEffect, useCallback } from 'react';
import CardList from '../../CardList/CardList';
import { fetchAllPlanets } from '../../../services/ApiService';
import Search from '../../Search/Search';
import Loader from '../../shared/Loader/Loader';
import { getSearchValueFromLS } from '../../../utils/localStorage';
import Header from '../../Header/Header';
import { Outlet, useSearchParams } from 'react-router-dom';

import styles from './MainPage.module.css';
import Pagination from '../../Pagination/Pagination';

const MainPage = () => {
  const [apiData, setApiData] = useState<IApiData>();
  const [planetsList, setPlanetsList] = useState<IPlanet[]>();
  const [isLoading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get('page')) || 1);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    setSearchParams({ page: String(newPage) });
    console.log('page changed, new page: ', newPage);
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
    getPlanets(getSearchValueFromLS());
  }, [page, getPlanets]);

  return (
    <>
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
            <Pagination apiData={apiData} currentPage={page} changePage={handlePageChange} />
          </section>
        )}
        <Outlet />
      </main>
    </>
  );
};

export default MainPage;

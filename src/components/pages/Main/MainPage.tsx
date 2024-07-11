import { useState, useEffect } from 'react';
import ListView from '../../ListView/ListView';
import getApiData from '../../../services/ApiService';
import Search from '../../Search/Search';
import Loader from '../../shared/Loader/Loader';
import { getSearchValueFromLS } from '../../../utils/localStorage';
import Header from '../../Header/Header';
import { Outlet } from 'react-router-dom';

import styles from './MainPage.module.css';

const MainPage = () => {
  const [planetsList, setPlanetsList] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const fetchPlanets = async (searchValue: string) => {
    setLoading(true);

    try {
      const planetsList = await getApiData(searchValue);
      setPlanetsList(planetsList);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlanets(getSearchValueFromLS());
  }, []);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section>
          <Search searchFunction={fetchPlanets} />
        </section>
        {isLoading ? (
          <Loader />
        ) : (
          <section>
            <ListView itemsList={planetsList} title={'Search results: '} />
          </section>
        )}
        <Outlet />
      </main>
    </>
  );
};

export default MainPage;

import { useState, useEffect } from 'react';
import CardList from '../../CardList/CardList';
import { fetchAllPlanets } from '../../../services/ApiService';
import Search from '../../Search/Search';
import Loader from '../../shared/Loader/Loader';
import { getSearchValueFromLS } from '../../../utils/localStorage';
import Header from '../../Header/Header';
import { Outlet } from 'react-router-dom';

import styles from './MainPage.module.css';

const MainPage = () => {
  const [planetsList, setPlanetsList] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const getPlanets = async (searchValue: string) => {
    setLoading(true);

    try {
      const planetsList = await fetchAllPlanets(searchValue);
      setPlanetsList(planetsList);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPlanets(getSearchValueFromLS());
  }, []);

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
            <CardList itemsList={planetsList} title={'Search results: '} />
          </section>
        )}
        <Outlet />
      </main>
    </>
  );
};

export default MainPage;

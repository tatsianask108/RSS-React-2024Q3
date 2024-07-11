import { useState, useEffect } from 'react';
import ListView from '../ListView/ListView';
import getApiData from '../../services/ApiService';
import Search from '../Search/Search';
import Loader from '../shared/Loader/Loader';
import { getSearchValueFromLS } from '../../utils/localStorage';

const MainSection = () => {
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
    </>
  );
};

export default MainSection;

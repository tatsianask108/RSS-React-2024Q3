import { useState, useEffect } from 'react';
import ListView from '../ListView/ListView';
import getApiData from '../../services/ApiService';
import Search from '../Search/Search';
import Loader from '../Loader/Loader';
import { getSearchValueFromLS } from '../../utils/localStorage';

const MainSection = () => {
  const [planetsList, setPlanetsList] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const fetchPlanets = async (searchValue: string) => {
    setLoading(true);

    const planetsList = await getApiData(searchValue);

    setPlanetsList(planetsList);
    setLoading(false);
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

import { NavLink } from 'react-router-dom';
import Card from '../Card/Card';
import styles from './ListView.module.css';
import { TListView } from './types';
import { createCardUrl } from '../../utils/utils';

const ListView = ({ itemsList: planetsList, title }: TListView) => {
  return (
    <>
      <h2>{title}</h2>

      {Array.isArray(planetsList) ? (
        planetsList.length ? (
          <div className={styles.listView}>
            {planetsList.map((planet, index) => (
              <NavLink key={planet.name} to={`${createCardUrl(planet.url)}`}>
                <Card key={`${planet.name}_${index}`} planet={planet} />
              </NavLink>
            ))}
          </div>
        ) : (
          <p className={styles.notFound}>Nothing was found</p>
        )
      ) : (
        <p>Internal server error</p>
      )}
    </>
  );
};

export default ListView;

import { NavLink } from 'react-router-dom';
import Card from '../Card/Card';
import styles from './CardList.module.css';
import { TCardList } from './types';
import { createCardUrl } from '../../utils/utils';

const CardList = ({ itemsList: planetsList, title }: TCardList) => {
  return (
    <>
      <h2>{title}</h2>

      {Array.isArray(planetsList) ? (
        planetsList.length ? (
          <div className={styles.cardList}>
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

export default CardList;

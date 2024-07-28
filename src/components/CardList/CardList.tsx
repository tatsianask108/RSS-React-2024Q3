import Card from '../Card/Card';
import Flyout from '../Flyout/Flyout';
import styles from './CardList.module.css';
import { TCardList } from './types';

const CardList = ({ itemsList: planetsList }: TCardList) => {
  return (
    <>
      <h2>Search results: </h2>
      {Array.isArray(planetsList) ? (
        planetsList.length ? (
          <>
            <div className={styles.cardList} data-testid="cardList">
              {planetsList.map((planet, index) => (
                <Card key={`${planet.name}_${index}`} planet={planet} />
              ))}
            </div>
            <Flyout />
          </>
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

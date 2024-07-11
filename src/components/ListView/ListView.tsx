import Card from '../Card/Card';
import styles from './ListView.module.css';
import { TListView } from './types';

const ListView = ({ itemsList: planetsList, title }: TListView) => {
  return (
    <>
      <h2>{title}</h2>

      {Array.isArray(planetsList) ? (
        planetsList.length ? (
          <div className={styles.listView}>
            {planetsList.map((planet, index) => (
              <Card key={`${planet.name}_${index}`} planet={planet} />
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

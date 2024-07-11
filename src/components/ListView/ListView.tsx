import Card from '../Card/Card';
import styles from './ListView.module.css';
import { TListView } from './types';

const ListView = ({ itemsList: planetsList, title }: TListView) => {
  return (
    <>
      <h2>{title}</h2>
      {planetsList.length ? (
        <div className={styles.listView}>
          {planetsList.map((planet, index) => (
            <Card key={`${planet.name}_${index}`} planet={planet} />
          ))}
        </div>
      ) : (
        <p className={styles.notFound}>Nothing was found</p>
      )}
    </>
  );
};

export default ListView;

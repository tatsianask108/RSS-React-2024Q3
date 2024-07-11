import { useParams } from 'react-router-dom';
import styles from './DetailedPage.module.css';

const DetailedPage = () => {
  const params = useParams();
  // console.log(params)
  return (
    <section className={styles.outlet}>
      DetailedPage
      <br />
      {params.planetName}
    </section>
  );
};

export default DetailedPage;

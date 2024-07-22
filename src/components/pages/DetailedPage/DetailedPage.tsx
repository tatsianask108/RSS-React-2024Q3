import { useNavigate, useParams } from 'react-router-dom';
import { fetchPlanet } from '../../../services/ApiService';
import styles from './DetailedPage.module.css';
import { useEffect, useState } from 'react';
import { getPlanetIdFromUseParams } from '../../../utils/utils';
import Button from '../../shared/Button/Button';
import { CARD_FIELDS_DETAILED } from './constants';
import Loader from '../../shared/Loader/Loader';

const DetailedPage = () => {
  const { planetId: idParam } = useParams();
  const [planet, setPlanet] = useState<IPlanet>();
  const [isLoading, setLoading] = useState(true);

  const navigate = useNavigate();
  const closeOutlet = () => navigate(-1);

  useEffect(() => {
    const getPlanet = async () => {
      if (idParam) {
        try {
          const planetId = getPlanetIdFromUseParams(idParam);
          const planet = await fetchPlanet(planetId);
          if (planet) {
            setPlanet(planet);
          }
        } catch (e) {
          console.error('Error fetching planet', e);
        } finally {
          setLoading(false);
        }
      } else {
        console.error('Planet id was not found in the URL');
      }
    };

    getPlanet();
  }, [idParam]);

  const renderPlanetDescription = () => {
    return CARD_FIELDS_DETAILED.map((key) => (
      <p key={key} className={styles.info}>
        {key}: {planet?.[key]}
      </p>
    ));
  };

  return (
    <>
      <div className={styles.outlet}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Button className={styles.btnClose} onClick={closeOutlet} data-testid="close-button">
              Close
            </Button>
            <h1 data-testid={'heading'}>{planet?.name}</h1>
            {renderPlanetDescription()}
          </>
        )}
      </div>
      <div className={styles.shadow} onClick={closeOutlet}></div>
    </>
  );
};

export default DetailedPage;

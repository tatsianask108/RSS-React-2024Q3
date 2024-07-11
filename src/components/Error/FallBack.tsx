import styles from './FallBack.module.css';

const FALLBACK_MESSAGE = 'An error occurred. Please, reload the page';

const FallBack = () => {
  return <p className={styles.fallback}>{FALLBACK_MESSAGE}</p>;
};

export default FallBack;

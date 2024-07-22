import { cardsPerPage } from '../../constants';
import Button from '../shared/Button/Button';
import styles from './Pagination.module.css';
import { IPaginationProps } from './types';

const Pagination: React.FC<IPaginationProps> = ({ currentPage, changePage, apiData }) => {
  const isPrevDisabled = () => {
    return !apiData?.previous || apiData.results.length < cardsPerPage;
  };

  const isNextDisabled = () => {
    return !apiData?.next || apiData.results.length < cardsPerPage;
  };

  const handlePrevClick = () => {
    changePage(currentPage - 1);
  };

  const handleNextClick = () => {
    changePage(currentPage + 1);
  };

  return (
    <div className={styles.pagination}>
      <Button onClick={handlePrevClick} disabled={isPrevDisabled()}>
        Previous
      </Button>
      <div>{currentPage}</div>
      <Button onClick={handleNextClick} disabled={isNextDisabled()}>
        Next
      </Button>
    </div>
  );
};

export default Pagination;

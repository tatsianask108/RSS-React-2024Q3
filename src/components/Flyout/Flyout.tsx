import Button from '../shared/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../state/store';
import { deleteAllItems } from '../../state/slices/selectedItemsSlice/selectedItemsSlice';

import styles from './Flyout.module.css';
import button from '../shared/Button/Button.module.css';
import { convertToCSV } from '../../utils/convertToCSV';

const Flyout = () => {
  const selectedItems: IPlanet[] = useSelector((state: RootState) => state.selectedItems.selectedItems);
  const dispatch: AppDispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteAllItems());
  };

  return selectedItems.length ? (
    <div className={styles.flyout}>
      <span>Items selected: {selectedItems.length}</span>
      <Button onClick={handleClick}>Unselect all</Button>
      <a
        className={`${button.button} ${styles.flyoutDownload}`}
        href={convertToCSV(selectedItems)}
        download={`${selectedItems.length}_planets.csv`}
      >
        Download
      </a>
    </div>
  ) : null;
};

export default Flyout;

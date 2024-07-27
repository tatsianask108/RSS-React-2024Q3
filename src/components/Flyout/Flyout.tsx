import Button from '../shared/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../state/store';
import { deleteAllItems } from '../../state/slices/selectedItemsSlice/selectedItemsSlice';

import styles from './Flyout.module.css';

const Flyout = () => {
  const selectedItems = useSelector((state: RootState) => state.selectedItems.selectedItems);
  const dispatch: AppDispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteAllItems());
  };

  return selectedItems.length ? (
    <div className={styles.flyout}>
      <span>items selected: {selectedItems.length}</span>
      <Button onClick={handleClick}>Unselect all</Button>
    </div>
  ) : null;
};

export default Flyout;

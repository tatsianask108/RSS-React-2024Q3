import React from 'react';
import styles from './Card.module.css';
import { TCardProps } from './types';
import { CARD_FIELDS } from './constants';
import { addItem, deleteItem } from '../../state/slices/selectedItemsSlice/selectedItemsSlice';
import { AppDispatch, RootState } from '../../state/store';
import { useDispatch, useSelector } from 'react-redux';

const Card: React.FC<TCardProps> = ({ planet }) => {
  const selectedItems = useSelector((state: RootState) => state.selectedItems.selectedItems);
  const dispatch: AppDispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = selectedItems.findIndex((item) => item.name === planet.name);

    if (e.target.checked) {
      dispatch(addItem(planet));
    } else {
      if (index !== -1) {
        dispatch(deleteItem(index));
      }
    }
  };

  const isChecked = selectedItems.some((item) => item.name === planet.name);

  return (
    <div className={styles.card}>
      <input className={styles.checkbox} type="checkbox" checked={isChecked} onChange={handleInputChange} />
      <h3>{planet.name}</h3>
      {CARD_FIELDS.map((key) => (
        <p key={key} className={styles.info}>
          {key}: {planet[key]}
        </p>
      ))}
    </div>
  );
};

export default Card;

import React from 'react';
import styles from './Card.module.css';
import { TCardProps } from './types';
import { CARD_FIELDS } from './constants';

const Card: React.FC<TCardProps> = ({ planet }) => {
  const renderCardFields = () => {
    return CARD_FIELDS.map((key) => (
      <p key={key} className={styles.info}>
        {key}: {planet[key]}
      </p>
    ));
  };

  return (
    <div className={styles.card}>
      <h3>{planet.name}</h3>
      {renderCardFields()}
    </div>
  );
};
export default Card;

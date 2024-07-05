import React from 'react';
import { IPlanet } from '../../types/types';
import styles from './Card.module.css';

type CardType = {
  planet: IPlanet;
};

class Card extends React.Component<CardType> {
  render() {
    return (
      <div className={styles.card}>
        <h3>{this.props.planet.name}</h3>
        <p>terrain: {this.props.planet.terrain}</p>
        <p>climate: {this.props.planet.climate}</p>
        <p>population: {this.props.planet.population}</p>
      </div>
    );
  }
}

export default Card;

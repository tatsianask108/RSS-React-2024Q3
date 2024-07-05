import React from 'react';
import { IPlanet } from '../../types/types';
import Card from '../Card/Card';
import styles from './ListView.module.css';

type ListViewType = {
  planetsList: IPlanet[];
};

class ListView extends React.Component<ListViewType> {
  render() {
    return (
      <>
        <h2>Search results: </h2>
        <div className={styles.listView}>
          {this.props.planetsList.map((planet, index) => (
            <Card key={planet.name + '_' + index} planet={planet} />
          ))}
        </div>
      </>
    );
  }
}

export default ListView;

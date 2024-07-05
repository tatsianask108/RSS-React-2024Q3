import React from 'react';
import ListView from '../ListView/ListView';
import getApiData from '../../services/ApiService';
import { IPlanet } from '../../types/types';

interface IState {
  planetsList: IPlanet[];
}

class MainSection extends React.Component {
  state: IState = {
    planetsList: [],
  };

  getPlanets = async () => {
    this.setState({
      planetsList: await getApiData(),
    });
    // console.log(this.state.planetsList)
  };

  componentDidMount(): void {
    this.getPlanets();
  }

  render() {
    return (
      <main>
        <ListView planetsList={this.state.planetsList} />
      </main>
    );
  }
}

export default MainSection;

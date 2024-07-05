import React from 'react';
import ListView from '../ListView/ListView';
import getApiData from '../../services/ApiService';
import { IPlanet } from '../../types/types';
import Search from '../Search/Search';

interface IState {
  planetsList: IPlanet[];
}

class MainSection extends React.Component {
  state: IState = {
    planetsList: [],
  };

  getPlanets = async (searchValue: string) => {
    this.setState({
      planetsList: await getApiData(searchValue),
    });
    // console.log(this.state.planetsList)
  };

  componentDidMount(): void {
    this.getPlanets(localStorage.getItem('searchValueTS') ?? '');
  }

  render() {
    return (
      <>
        <section>
          <Search planetList={this.getPlanets} />
        </section>
        <section>
          <ListView planetsList={this.state.planetsList} />
        </section>
      </>
    );
  }
}

export default MainSection;

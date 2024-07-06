import React from 'react';
import ListView from '../ListView/ListView';
import getApiData from '../../services/ApiService';
import { IPlanet } from '../../types/types';
import Search from '../Search/Search';
import Loader from '../Loader/Loader';

interface IState {
  planetsList: IPlanet[];
  isLoading: boolean;
}

class MainSection extends React.Component {
  state: IState = {
    planetsList: [],
    isLoading: false,
  };

  fetchPlanets = async (searchValue: string) => {
    this.setState({ isLoading: true });
    this.setState({
      planetsList: await getApiData(searchValue),
      isLoading: false,
    });
    // console.log(this.state.planetsList)
  };

  componentDidMount(): void {
    this.fetchPlanets(localStorage.getItem('searchValueTS') ?? '');
  }

  render() {
    return (
      <>
        <section>
          <Search planetList={this.fetchPlanets} />
        </section>
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <section>
            <ListView planetsList={this.state.planetsList} />
          </section>
        )}
      </>
    );
  }
}

export default MainSection;

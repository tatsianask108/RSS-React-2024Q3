import React from 'react';
import ListView from '../ListView/ListView';
import getApiData from '../../services/ApiService';
import { IPlanet } from '../../types/types';
import Search from '../Search/Search';
import Loader from '../Loader/Loader';
import ErrorButton from '../Error/ErrorButton';

interface IState {
  planetsList: IPlanet[];
  isLoading: boolean;
  hasError: boolean;
}

class MainSection extends React.Component {
  state: IState = {
    planetsList: [],
    isLoading: false,
    hasError: false,
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

  throwError = () => {
    this.setState({ hasError: true });
  };

  render() {
    if (this.state.hasError) {
      throw new Error('(>﹏<) Oops, Custom Error ');
    }

    return (
      <>
        <section>
          <Search planetList={this.fetchPlanets} />
          <ErrorButton onClick={this.throwError} />
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

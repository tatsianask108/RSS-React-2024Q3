import { describe, test as it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CardList from '../CardList';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../../state/store';

const mockPlanetsList: IPlanet[] = Array.from({ length: 10 }, () => ({
  name: `test`,
  url: `test`,
  terrain: 'test',
  climate: 'test',
  population: 'test',
  rotation_period: 'test',
  orbital_period: 'test',
  diameter: 'test',
}));

const renderCardList = (planetsList: IPlanet[]) =>
  render(
    <Provider store={store}>
      <BrowserRouter>
        <CardList itemsList={planetsList} currentPage={1} />
      </BrowserRouter>
    </Provider>
  );

describe('CardList Component: ', () => {
  it('renders the specified number of cards (10)', () => {
    renderCardList(mockPlanetsList);

    const cards = screen.getByTestId('cardList');
    expect(cards.children.length === 10);
  });

  it('appropriate message is displayed if no cards are present', () => {
    renderCardList([]);

    const element = screen.getByText('Nothing was found');
    expect(element).toBeInTheDocument();
  });
});

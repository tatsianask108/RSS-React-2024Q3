import '@testing-library/jest-dom';
import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CardList from '../CardList';
import { BrowserRouter } from 'react-router-dom';

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
    <BrowserRouter>
      <CardList itemsList={planetsList} title="Planets List" />
    </BrowserRouter>
  );

describe('CardList Component: ', () => {
  test('renders the specified number of cards (10)', () => {
    renderCardList(mockPlanetsList);

    const cards = screen.getAllByRole('link');
    expect(cards).toHaveLength(10);
  });

  test('appropriate message is displayed if no cards are present', () => {
    renderCardList([]);

    const element = screen.getByText('Nothing was found');
    expect(element).toBeInTheDocument();
  });
});

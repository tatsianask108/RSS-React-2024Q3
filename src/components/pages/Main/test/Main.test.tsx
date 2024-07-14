import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MainPage from '../MainPage';

describe('MainPage component: ', () => {
  it('rendered', () => {
    render(
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    );

    const mainPageElement = screen.getByTestId('mainPage');
    expect(mainPageElement).toBeInTheDocument();

    const searchElement = screen.getByPlaceholderText('Search...');
    expect(searchElement).toBeInTheDocument();
  });
});

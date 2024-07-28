import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MainPage from '../MainPage';
import { Provider } from 'react-redux';
import { store } from '../../../../state/store';

describe('MainPage component: ', () => {
  it('rendered', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <MainPage />
        </MemoryRouter>
      </Provider>
    );

    const mainPageElement = screen.getByTestId('mainPage');
    expect(mainPageElement).toBeInTheDocument();

    const searchElement = screen.getByPlaceholderText('Search...');
    expect(searchElement).toBeInTheDocument();
  });
});

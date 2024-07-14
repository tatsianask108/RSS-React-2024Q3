import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import DetailedPage from '../DetailedPage';

describe('DetailedPage: ', () => {
  it('renders the loader when isLoading is true', () => {
    render(
      <MemoryRouter initialEntries={['/planets/1']}>
        <DetailedPage />
      </MemoryRouter>
    );

    const loader = screen.getByTestId('loader');
    expect(loader).toBeInTheDocument();
  });
});

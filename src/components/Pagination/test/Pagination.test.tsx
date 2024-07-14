import { render, fireEvent } from '@testing-library/react';
import Pagination from '../Pagination';
import { IPaginationProps } from '../types';

describe('Pagination Component: ', () => {
  const mockChangePage = vi.fn();

  const renderPagination = (props: IPaginationProps) => {
    return render(<Pagination {...props} />);
  };

  afterEach(() => {
    mockChangePage.mockClear();
  });

  it('renders current page number', () => {
    const { getByText } = renderPagination({
      changePage: mockChangePage,
      currentPage: 1,
      apiData: { count: 20, results: [], previous: null, next: null },
    });
    expect(getByText('1')).toBeInTheDocument();
  });

  it('previous button is disabled when there is no previous page', () => {
    const { getByText } = renderPagination({
      changePage: mockChangePage,
      currentPage: 1,
      apiData: { count: 20, results: [], previous: null, next: 'url' },
    });
    const prevButton = getByText('Previous');
    expect(prevButton).toBeDisabled();
  });

  it('next button is disabled when there is no next page', () => {
    const { getByText } = renderPagination({
      changePage: mockChangePage,
      currentPage: 1,
      apiData: { count: 20, results: [], previous: 'url', next: null },
    });
    const nextButton = getByText('Next');
    expect(nextButton).toBeDisabled();
  });

  it('calls changePage when previous button is clicked', () => {
    const { getByText } = renderPagination({
      changePage: mockChangePage,
      currentPage: 2,
      apiData: { count: 20, results: Array(10).fill({}), previous: 'url', next: 'url' },
    });
    const prevButton = getByText('Previous');
    fireEvent.click(prevButton);
    expect(mockChangePage).toHaveBeenCalledWith(1);
  });

  it('calls changePage when next button is clicked', () => {
    const { getByText } = renderPagination({
      changePage: mockChangePage,
      currentPage: 1,
      apiData: { count: 20, results: Array(10).fill({}), previous: 'url', next: 'url' },
    });
    const nextButton = getByText('Next');
    fireEvent.click(nextButton);
    expect(mockChangePage).toHaveBeenCalledWith(2);
  });
});

import { it, expect, beforeEach } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Search from '../Search';

beforeEach(() => {
  localStorage.clear();
});

it('Verify that clicking the Search button saves the entered value to local storage', async () => {
  render(<Search searchFunction={vi.fn()} />);

  const input = screen.getByPlaceholderText('Search...');
  const searchButton = screen.getByRole('button', { name: /search/i });

  fireEvent.change(input, { target: { value: 'test' } });
  fireEvent.click(searchButton);

  await waitFor(() => {
    const currentValue = localStorage.getItem('searchValueTS');
    expect(currentValue).toBe('test');
  });
});

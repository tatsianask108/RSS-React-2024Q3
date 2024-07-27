import { render, screen } from '@testing-library/react';
import ErrorBoundary from '../components/Error/ErrorBoundary';
import FallBack from '../components/Error/FallBack';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';

describe('Root Component', () => {
  it('renders FallBack component when error is thrown', () => {
    const ThrowError = () => {
      throw new Error('Error');
    };
    render(
      <ErrorBoundary fallback={<FallBack />}>
        <ThrowError />
      </ErrorBoundary>
    );
    expect(screen.getByText('An error occurred. Please, reload the page')).toBeInTheDocument();
  });
});

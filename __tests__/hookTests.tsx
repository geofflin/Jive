import React from 'react';
import { render, fireEvent, getByTestId} from '@testing-library/react';
import App from '../src/client/App';

describe('App', () => {
  it('renders', () => {
    const { container } = render(<App />);
  });
});
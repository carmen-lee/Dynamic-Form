import React from 'react'
import { render, screen } from '@testing-library/react';
import App from './Form';

test('renders learn react link', () => {
  render(<App props={{}}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

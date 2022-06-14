import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';
import { MemoryRouter } from 'react-router-dom';

test('renders learn react link', () => {

  render(<App />, {wrapper: MemoryRouter});
  const linkElement = screen.getByText(/Temporary Title/i);
  expect(linkElement).toBeInTheDocument();
});

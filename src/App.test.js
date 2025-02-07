import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hire me button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/hire me/i);
  expect(buttonElement).toBeInTheDocument();
});
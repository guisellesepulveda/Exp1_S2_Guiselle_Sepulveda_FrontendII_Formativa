import { render, screen } from '@testing-library/react';
import App from './App';

test('muestra la página de inicio con el menú', () => {
  render(<App />);
  expect(screen.getByText(/Bienvenido/i)).toBeInTheDocument();
  expect(screen.getByText('Contáctanos')).toBeInTheDocument();
});

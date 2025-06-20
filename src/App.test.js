import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main application and navigation', () => {
  render(<App />);
  // Check for a common element in the Navigation component, like a link or role
  // Assuming Navigation.js renders a <nav> element or links with roles
  const navElement = screen.getByRole('navigation'); // A common role for <nav>
  expect(navElement).toBeInTheDocument();

  // Check if the main content area is there
  const mainContent = document.querySelector('.main-content'); // App.js has <div className='main-content'>
  expect(mainContent).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home Component', () => {
  test('renders welcome message and call to action', () => {
    render(<Home />);

    // Check for the welcome message in the hero banner
    const welcomeHeading = screen.getByRole('heading', { name: /welcome!/i });
    expect(welcomeHeading).toBeInTheDocument();

    // Check for the call-to-action button
    const ctaButton = screen.getByRole('button', { name: /view my work/i });
    expect(ctaButton).toBeInTheDocument();
  });
});

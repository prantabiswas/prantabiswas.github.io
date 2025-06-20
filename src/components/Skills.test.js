import { render, screen } from '@testing-library/react';
import Skills from './Skills';

describe('Skills Component', () => {
  test('renders skills section title and at least one skill category card', () => {
    render(<Skills />);

    // Check for the section title
    const sectionTitle = screen.getByRole('heading', { name: /my skills/i });
    expect(sectionTitle).toBeInTheDocument();

    // Check for a skill category heading (e.g., "Programming Languages")
    // This assumes at least one skill category is rendered.
    const categoryHeading = screen.getByRole('heading', { name: /programming languages/i });
    expect(categoryHeading).toBeInTheDocument();

    // Check for an individual skill item as a further check
    const skillItem = screen.getByText(/javascript \(es6\+\)/i);
    expect(skillItem).toBeInTheDocument();
  });
});

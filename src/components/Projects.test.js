import { render, screen } from '@testing-library/react';
import Projects from './Projects';

describe('Projects Component', () => {
  test('renders projects section title and at least one project card', () => {
    render(<Projects />);

    // Check for the section title
    const sectionTitle = screen.getByRole('heading', { name: /my projects/i });
    expect(sectionTitle).toBeInTheDocument();

    // Check for content indicative of a project card
    // Using text from the sample data in Projects.js
    // This assumes at least one project will have "Technologies Used:"
    const projectCardIndicator = screen.getAllByText(/technologies used:/i);
    expect(projectCardIndicator.length).toBeGreaterThan(0);
    expect(projectCardIndicator[0]).toBeInTheDocument();
  });
});

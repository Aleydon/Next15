import { render, screen } from '@testing-library/react';

import Page from './page';

describe('Page Component', () => {
  it('should get the text My Github', () => {
    render(<Page />);
    const hello = screen.getByText('My Github');
    expect(hello).toBeDefined();
  });

  it('should get the text My Github in the component s heading', () => {
    render(<Page />);
    const heading = screen.getByText('My Github');
    expect(heading).toBeInTheDocument();
  });

  it('must get the link from the page component', () => {
    render(<Page />);
    const link = screen.getByRole('link', { name: 'github.com/Aleydon' });
    expect(link).toBeDefined();
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('aria-label', 'github.com/Aleydon');
  });
});

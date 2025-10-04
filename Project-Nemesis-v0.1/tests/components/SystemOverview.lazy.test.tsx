import { render, screen, waitFor } from '@testing-library/react';
import SystemOverview from '@/app/components/SystemOverview';

describe('SystemOverview Component (Lazy Load)', () => {
  const mockDomains = [
    { name: 'Case Intake', summary: 'Test case intake summary' },
    { name: 'Scheduling', summary: 'Test scheduling summary' },
    { name: 'Digital Records', summary: 'Test records summary' },
    { name: 'Public Access', summary: 'Test public access summary' },
  ];

  it('shows placeholder before content loads', () => {
    render(<SystemOverview domains={mockDomains} />);
    // Placeholder might be aria-busy or skeleton text
    const placeholder = screen.queryByText(/loading/i) || screen.queryByRole('status');
    expect(placeholder).toBeInTheDocument();
  });

  it('renders all domains after load', async () => {
    render(<SystemOverview domains={mockDomains} />);
    await waitFor(() => {
      mockDomains.forEach((domain) => {
        expect(screen.getByText(domain.name)).toBeInTheDocument();
        expect(screen.getByText(domain.summary)).toBeInTheDocument();
      });
    });
  });

  it('uses section with aria-labelledby', async () => {
    const { container } = render(<SystemOverview domains={mockDomains} />);
    await waitFor(() => {
      const section = container.querySelector('section[aria-labelledby]');
      expect(section).toBeInTheDocument();
    });
  });

  it('uses h3 for domain names', async () => {
    const { container } = render(<SystemOverview domains={mockDomains} />);
    await waitFor(() => {
      const h3Elements = container.querySelectorAll('h3');
      expect(h3Elements.length).toBeGreaterThanOrEqual(mockDomains.length);
    });
  });
});

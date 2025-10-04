import { render, screen } from '@testing-library/react';
import ValuePillars from '@/app/components/ValuePillars';
import { getLandingContent } from '@/lib/i18n';

describe('ValuePillars Component', () => {
  const content = getLandingContent('en');

  it('renders all pillars', () => {
    render(<ValuePillars />);
    expect(screen.getByText(content.pillars.transparency.title)).toBeInTheDocument();
    expect(screen.getByText(content.pillars.efficiency.title)).toBeInTheDocument();
    expect(screen.getByText(content.pillars.accessibility.title)).toBeInTheDocument();
    expect(screen.getByText(content.pillars.trust.title)).toBeInTheDocument();
  });

  it('uses h3 for pillar titles', () => {
    const { container } = render(<ValuePillars />);
    const h3Elements = container.querySelectorAll('h3');
    expect(h3Elements).toHaveLength(4);
  });

  it('uses ul/li list structure', () => {
    const { container } = render(<ValuePillars />);
    const list = container.querySelector('ul');
    expect(list).toBeInTheDocument();
    const items = container.querySelectorAll('li');
    expect(items).toHaveLength(4);
  });

  it('renders pillars in order', () => {
    const { container } = render(<ValuePillars />);
    const headings = Array.from(container.querySelectorAll('h3'));
    const titles = headings.map((h) => h.textContent);
    expect(titles).toEqual([
      content.pillars.transparency.title,
      content.pillars.efficiency.title,
      content.pillars.accessibility.title,
      content.pillars.trust.title
    ]);
  });
});

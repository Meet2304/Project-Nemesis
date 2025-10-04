import { render, screen } from '@testing-library/react';
import Hero from '@/app/components/Hero';
import { getLandingContent } from '@/lib/i18n';

describe('Hero Component', () => {
  const content = getLandingContent('en');

  it('renders the mission text', () => {
    render(<Hero />);
    expect(screen.getByText(content.hero.mission)).toBeInTheDocument();
  });

  it('renders the tagline text', () => {
    render(<Hero />);
    expect(screen.getByText(content.hero.tagline)).toBeInTheDocument();
  });

  it('renders the CTA button with accessible name', () => {
    render(<Hero />);
    const button = screen.getByRole('button', { name: content.hero.cta });
    expect(button).toBeInTheDocument();
  });

  it('uses h1 for mission heading', () => {
    const { container } = render(<Hero />);
    const h1 = container.querySelector('h1');
    expect(h1).toBeInTheDocument();
    expect(h1).toHaveTextContent(content.hero.mission);
  });

  it('renders within a section element', () => {
    const { container } = render(<Hero />);
    const section = container.querySelector('section');
    expect(section).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import NavBar from '@/app/components/NavBar';
import { getLandingContent } from '@/lib/i18n';

describe('NavBar Component', () => {
  const content = getLandingContent('en');

  it('renders within a nav element with aria-label', () => {
    const { container } = render(<NavBar />);
    const nav = container.querySelector('nav');
    expect(nav).toBeInTheDocument();
    expect(nav).toHaveAttribute('aria-label', 'Primary');
  });

  it('renders all navigation links', () => {
    render(<NavBar />);
    expect(screen.getByRole('link', { name: content.nav.home })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: content.nav.about })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: content.nav.contact })).toBeInTheDocument();
  });

  it('uses list semantics for navigation items', () => {
    const { container } = render(<NavBar />);
    const list = container.querySelector('ul');
    expect(list).toBeInTheDocument();
    const items = container.querySelectorAll('li');
    expect(items).toHaveLength(3);
  });

  it('has correct href attributes', () => {
    render(<NavBar />);
    const homeLink = screen.getByRole('link', { name: content.nav.home });
    const aboutLink = screen.getByRole('link', { name: content.nav.about });
    const contactLink = screen.getByRole('link', { name: content.nav.contact });
    
    expect(homeLink).toHaveAttribute('href', '#home');
    expect(aboutLink).toHaveAttribute('href', '#about');
    expect(contactLink).toHaveAttribute('href', '#contact');
  });

  it('does not create duplicate nav landmarks', () => {
    const { container } = render(<NavBar />);
    const navElements = container.querySelectorAll('nav');
    expect(navElements).toHaveLength(1);
  });
});

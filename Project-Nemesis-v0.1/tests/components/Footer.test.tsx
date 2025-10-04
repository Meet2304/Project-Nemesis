import { render, screen } from '@testing-library/react';
import Footer from '@/app/components/Footer';
import { getLandingContent } from '@/lib/i18n';

describe('Footer Component', () => {
  const content = getLandingContent('en');

  it('renders contact link with mailto href', () => {
    render(<Footer />);
    const contactLink = screen.getByRole('link', { name: content.footer.contactLinkLabel });
    expect(contactLink).toHaveAttribute('href', `mailto:${content.footer.contactEmail}`);
  });

  it('displays disclaimer text', () => {
    render(<Footer />);
    expect(screen.getByText(content.footer.disclaimer)).toBeInTheDocument();
  });

  it('uses footer landmark', () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector('footer');
    expect(footer).toBeInTheDocument();
  });

  it('displays version from package.json', () => {
    render(<Footer />);
    // Version text might be "Version 0.1.0" or similar
    const versionText = screen.getByText(/version/i);
    expect(versionText).toBeInTheDocument();
  });

  it('includes copyright year', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument();
  });
});

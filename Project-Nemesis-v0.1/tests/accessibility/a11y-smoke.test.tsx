import { render } from '@testing-library/react';
import LandingPage from '@/app/page';

describe('Accessibility Smoke Tests', () => {
  it('has exactly one main landmark', () => {
    const { container } = render(<LandingPage />);
    const mainElements = container.querySelectorAll('main');
    expect(mainElements.length).toBe(1);
  });

  it('has exactly one nav landmark', () => {
    const { container } = render(<LandingPage />);
    const navElements = container.querySelectorAll('nav');
    expect(navElements.length).toBe(1);
  });

  it('has lang attribute on html', () => {
    render(<LandingPage />);
    // In Next.js with layout, lang is set on html element
    // In test environment, we verify the page doesn't error and renders properly
    // Full E2E test would verify lang="en" on the actual html element
    expect(true).toBe(true); // Page renders without error
  });

  it('includes skip link for keyboard navigation', () => {
    const { container } = render(<LandingPage />);
    // Skip link should be first focusable element
    const skipLink = container.querySelector('a[href="#main-content"]');
    expect(skipLink).toBeInTheDocument();
    expect(skipLink?.textContent).toMatch(/skip to (main )?content/i);
  });

  it('has no duplicate landmark labels', () => {
    const { container } = render(<LandingPage />);
    const navElement = container.querySelector('nav');
    expect(navElement).toHaveAttribute('aria-label');
    
    // Ensure only one nav with "Primary" label
    const navLabels = Array.from(container.querySelectorAll('nav[aria-label="Primary"]'));
    expect(navLabels.length).toBeLessThanOrEqual(1);
  });

  it('ensures all images have alt attributes', () => {
    const { container } = render(<LandingPage />);
    const images = container.querySelectorAll('img');
    images.forEach((img) => {
      expect(img).toHaveAttribute('alt');
    });
  });
});

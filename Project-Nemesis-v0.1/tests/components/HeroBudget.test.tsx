import { render } from '@testing-library/react';
import Hero from '@/app/components/Hero';
import NavBar from '@/app/components/NavBar';
import { getLandingContent } from '@/lib/i18n';
import { TextEncoder } from 'util';

// Polyfill TextEncoder for jsdom
if (typeof global.TextEncoder === 'undefined') {
  global.TextEncoder = TextEncoder as any;
}

describe('Hero Critical CSS Budget Heuristic', () => {
  const content = getLandingContent('en');
  const MAX_BUDGET_KB = 25;

  it('hero HTML + inline styles should be under 25KB (heuristic)', () => {
    // NOTE: This is a heuristic test, not a production CSS bundle measurement.
    // Actual bundle size verified by Lighthouse in E2E tests.
    // This test ensures the Hero component markup stays lean.
    
    const { container } = render(<Hero />);
    const heroHTML = container.querySelector('section')?.outerHTML || '';
    const heroByteSize = new TextEncoder().encode(heroHTML).length;
    const heroKB = heroByteSize / 1024;

    // Hero section alone should be well under budget
    expect(heroKB).toBeLessThan(MAX_BUDGET_KB);
    
    // Warn if approaching half the budget (12.5KB)
    if (heroKB > MAX_BUDGET_KB / 2) {
      console.warn(`Hero component is ${heroKB.toFixed(2)}KB, approaching budget threshold`);
    }
  });

  it('navbar HTML should be minimal', () => {
    const { container } = render(<NavBar />);
    const navHTML = container.querySelector('nav')?.outerHTML || '';
    const navByteSize = new TextEncoder().encode(navHTML).length;
    const navKB = navByteSize / 1024;

    // Navbar should be well under 5KB
    expect(navKB).toBeLessThan(5);
  });

  it('combined critical components stay lean', () => {
    // Render both hero and nav together
    const { container: heroContainer } = render(<Hero />);
    const { container: navContainer } = render(<NavBar />);
    
    const heroHTML = heroContainer.querySelector('section')?.outerHTML || '';
    const navHTML = navContainer.querySelector('nav')?.outerHTML || '';
    
    const combinedSize = new TextEncoder().encode(heroHTML + navHTML).length / 1024;
    
    // Combined should still be under budget (most budget is for CSS, not HTML)
    expect(combinedSize).toBeLessThan(MAX_BUDGET_KB);
  });
});

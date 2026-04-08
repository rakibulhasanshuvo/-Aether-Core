import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Navbar from '../Navbar';
import React from 'react';

// Mock framer-motion
interface MockMotionProps extends React.HTMLAttributes<HTMLElement> {
  initial?: unknown;
  animate?: unknown;
  whileHover?: unknown;
  whileTap?: unknown;
  transition?: unknown;
  variants?: unknown;
  layoutId?: string;
}

vi.mock('framer-motion', async () => {
  const actual = await vi.importActual('framer-motion');
  return {
    ...actual,
    motion: {
      nav: ({ children, className, ...props }: MockMotionProps) => (
        <nav className={className} data-testid="motion-nav" {...props}>
          {children}
        </nav>
      ),
      div: ({ children, className, layoutId, ...props }: MockMotionProps) => (
        <div className={className} data-testid="motion-div" data-layoutid={layoutId} {...props}>
          {children}
        </div>
      ),
      span: ({ children, className, ...props }: MockMotionProps) => (
        <span className={className} data-testid="motion-span" {...props}>
          {children}
        </span>
      ),
      h1: ({ children, className, ...props }: MockMotionProps) => (
        <h1 className={className} data-testid="motion-h1" {...props}>
          {children}
        </h1>
      ),
    },
    AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  };
});

// Mock MotionEffects components
vi.mock('@/components/ui/MotionEffects', () => ({
  TextScramble: ({ text, className }: { text: string; className?: string }) => (
    <span data-testid="text-scramble" className={className}>{text}</span>
  ),
  EASE: [0.22, 1, 0.36, 1],
  DURATION_FLUID: 0.7,
}));

// Mock next/navigation
const mockUsePathname = vi.fn();
vi.mock('next/navigation', () => ({
  usePathname: () => mockUsePathname(),
}));

// Mock next/link
vi.mock('next/link', () => ({
  default: ({ children, href, className, onClick, ...props }: any) => {
    // Some links have a custom data-testid passed in
    const testId = props['data-testid'] || `link-${href}`;
    return (
      <a href={href} className={className} data-testid={testId} onClick={onClick}>
        {children}
      </a>
    );
  },
}));

describe('Navbar Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders brand and system status correctly', () => {
    mockUsePathname.mockReturnValue('/');
    render(<Navbar />);

    // Check Brand Text
    expect(screen.getByTestId('text-scramble').textContent).toBe('THE ARCHITECT');

    // Check System Status
    expect(screen.getByText('SYS_V.04')).toBeDefined();
    expect(screen.getByText('ONLINE')).toBeDefined();
  });

  it('renders all navigation links', () => {
    mockUsePathname.mockReturnValue('/');
    render(<Navbar />);

    const capabilitiesLink = screen.getByTestId('link-/capabilities');
    const transmissionsLink = screen.getByTestId('link-/transmissions');
    const terminalLink = screen.getByTestId('link-/terminal');

    expect(capabilitiesLink).toBeDefined();
    expect(capabilitiesLink.textContent).toContain('Capabilities');

    expect(transmissionsLink).toBeDefined();
    expect(transmissionsLink.textContent).toContain('Transmissions');

    expect(terminalLink).toBeDefined();
    expect(terminalLink.textContent).toContain('Terminal');
  });

  it('applies active styling to the currently active route', () => {
    mockUsePathname.mockReturnValue('/transmissions');
    render(<Navbar />);

    const transmissionsLink = screen.getByTestId('link-/transmissions');
    expect(transmissionsLink.className).toContain('text-primary-container');
    expect(transmissionsLink.className).not.toContain('text-on-surface-variant/50');

    // The active indicator (motion.div with layoutId="nav-pill") should be rendered for the active link
    // It's inside the link.
    const activeIndicator = transmissionsLink.querySelector('[data-layoutid="nav-pill"]');
    expect(activeIndicator).toBeDefined();
    expect(activeIndicator).not.toBeNull();
  });

  it('applies inactive styling to non-active routes', () => {
    mockUsePathname.mockReturnValue('/terminal');
    render(<Navbar />);

    const capabilitiesLink = screen.getByTestId('link-/capabilities');
    expect(capabilitiesLink.className).toContain('text-on-surface-variant/50');
    expect(capabilitiesLink.className).not.toContain('text-primary-container');

    // Active indicator should not be present
    const activeIndicator = capabilitiesLink.querySelector('[data-layoutid="nav-pill"]');
    expect(activeIndicator).toBeNull();
  });

  it('renders the Network Access CTA', () => {
    mockUsePathname.mockReturnValue('/');
    render(<Navbar />);

    // Since we now have one for desktop and one for mobile, grab all and check.
    const ctaLinks = screen.getAllByTestId('link-/network');
    expect(ctaLinks.length).toBeGreaterThan(0);
    expect(ctaLinks[0].textContent).toContain('Network Access');
  });

  it('renders mobile menu toggle button and handles menu opening/closing', () => {
    mockUsePathname.mockReturnValue('/');
    render(<Navbar />);

    const toggleButton = screen.getByTestId('mobile-menu-toggle');
    expect(toggleButton).toBeDefined();

    // Mobile menu should not be open initially
    expect(screen.queryByTestId('mobile-menu')).toBeNull();

    // Click to open
    fireEvent.click(toggleButton);
    const mobileMenu = screen.getByTestId('mobile-menu');
    expect(mobileMenu).toBeDefined();

    // Links should be visible inside mobile menu
    const mobileCapabilitiesLink = screen.getByTestId('mobile-link-/capabilities');
    expect(mobileCapabilitiesLink).toBeDefined();
    expect(mobileCapabilitiesLink.textContent).toBe('Capabilities');

    // Click link to close menu
    fireEvent.click(mobileCapabilitiesLink);
    expect(screen.queryByTestId('mobile-menu')).toBeNull();
  });

  it('applies correct active styling to mobile links', () => {
    mockUsePathname.mockReturnValue('/terminal');
    render(<Navbar />);

    const toggleButton = screen.getByTestId('mobile-menu-toggle');
    fireEvent.click(toggleButton);

    const mobileTerminalLink = screen.getByTestId('mobile-link-/terminal');
    expect(mobileTerminalLink.className).toContain('text-primary-container');
    expect(mobileTerminalLink.className).not.toContain('text-on-surface-variant');

    const mobileCapabilitiesLink = screen.getByTestId('mobile-link-/capabilities');
    expect(mobileCapabilitiesLink.className).toContain('text-on-surface-variant');
    expect(mobileCapabilitiesLink.className).not.toContain('text-primary-container');
  });
});

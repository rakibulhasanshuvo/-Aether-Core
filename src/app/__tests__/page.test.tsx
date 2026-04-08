import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Home from '../page';
import React from 'react';

// Define MockMotionProps based on memory and existing tests
interface MockMotionProps extends React.HTMLAttributes<HTMLElement> {
  initial?: unknown;
  animate?: unknown;
  whileHover?: unknown;
  whileTap?: unknown;
  whileInView?: unknown;
  transition?: unknown;
  variants?: unknown;
  viewport?: unknown;
}

// Mock framer-motion
vi.mock('framer-motion', async () => {
  const actual = await vi.importActual('framer-motion');
  return {
    ...actual,
    motion: {
      div: ({ children, className, style, ...props }: MockMotionProps) => (
        <div className={className} style={style} data-testid="motion-div" {...props}>
          {children}
        </div>
      ),
      span: ({ children, className, style, ...props }: MockMotionProps) => (
        <span className={className} style={style} data-testid="motion-span" {...props}>
          {children}
        </span>
      ),
      button: ({ children, className, style, ...props }: MockMotionProps) => (
        <button className={className} style={style} data-testid="motion-button" {...props}>
          {children}
        </button>
      ),
    },
  };
});

// Mock MotionEffects components
vi.mock('@/components/ui/MotionEffects', () => ({
  SleekStagger: ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div data-testid="sleek-stagger" className={className}>{children}</div>
  ),
  SleekItem: ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div data-testid="sleek-item" className={className}>{children}</div>
  ),
  HolographicCard: ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div data-testid="holographic-card" className={className}>{children}</div>
  ),
  TextScramble: ({ text, className }: { text: string; className?: string }) => (
    <span data-testid="text-scramble" className={className}>{text}</span>
  ),
}));

// Mock next/link
vi.mock('next/link', () => ({
  default: ({ children, href, className }: { children: React.ReactNode; href: string; className?: string }) => (
    <a href={href} className={className}>{children}</a>
  ),
}));

// Mock Subcomponents to focus on Home page layout
vi.mock('@/components/home/Hero', () => ({
  default: () => <div data-testid="hero-section">Hero Component Mock</div>
}));

vi.mock('@/components/home/ProcessTimeline', () => ({
  default: () => <div data-testid="process-timeline-section">Process Timeline Component Mock</div>
}));

vi.mock('@/components/ui/PageTransition', () => ({
  default: ({ children }: { children: React.ReactNode }) => <div data-testid="page-transition">{children}</div>
}));

describe('Home Page', () => {
  it('renders without crashing and includes subcomponents', () => {
    render(<Home />);

    // Check for wrapper
    expect(screen.getByTestId('page-transition')).toBeDefined();

    // Check for major subcomponents
    expect(screen.getByTestId('hero-section')).toBeDefined();
    expect(screen.getByTestId('process-timeline-section')).toBeDefined();
  });

  it('renders the Stats Bar with correct values', () => {
    render(<Home />);

    expect(screen.getByText('Systems Built')).toBeDefined();
    expect(screen.getByText('48+')).toBeDefined();

    expect(screen.getByText('Uptime Record')).toBeDefined();
    expect(screen.getByText('99.99%')).toBeDefined();

    expect(screen.getByText('Avg. Latency')).toBeDefined();
    expect(screen.getByText('0.04ms')).toBeDefined();

    expect(screen.getByText('Active Nodes')).toBeDefined();
    expect(screen.getByText('12')).toBeDefined();
  });

  it('renders Quick Navigation Nodes with correct links and text', () => {
    render(<Home />);

    expect(screen.getByTestId('text-scramble')).toBeDefined();
    expect(screen.getByText('SYSTEM_NODES')).toBeDefined();

    const nodes = [
      { title: 'Core Capabilities', desc: 'Architecture blueprints & technical matrix' },
      { title: 'Transmissions', desc: 'Chronological archive of milestones' },
      { title: 'Terminal.logs', desc: 'Decrypted data fragments from the void' },
      { title: 'Network Access', desc: 'Initialize a secure signal handshake' },
    ];

    nodes.forEach(node => {
      expect(screen.getByText(node.title)).toBeDefined();
      expect(screen.getByText(node.desc)).toBeDefined();
    });

    const holographicCards = screen.getAllByTestId('holographic-card');
    expect(holographicCards.length).toBe(4);
  });

  it('renders the Featured Terminal Block correctly', () => {
    render(<Home />);

    expect(screen.getByText('system_monitor.sh — pid: 4096')).toBeDefined();

    // Check terminal output lines
    const terminalLines = [
      'system --status',
      'Scanning all nodes...',
      'Frontend_Synthesis',
      'Backend_Logic',
      'Neural_Interface',
      'Spline_3D_Core',
    ];

    terminalLines.forEach(line => {
        // Need to match partially because of formatting or exact text
        expect(screen.getByText(new RegExp(line, 'i'))).toBeDefined();
    });
  });

  it('renders the Call To Action (CTA) section', () => {
    render(<Home />);

    expect(screen.getByText('Secure_Channel')).toBeDefined();

    // The "Ready to Initialize?" uses a span, so we check parts
    expect(screen.getByText(/Ready to/i)).toBeDefined();
    expect(screen.getByText('Initialize')).toBeDefined();

    expect(screen.getByText(/Open a secure channel to discuss collaboration protocols/i)).toBeDefined();

    // Check for the initialization link
    const initializeBtn = screen.getByText('INITIALIZE SIGNAL');
    expect(initializeBtn).toBeDefined();
    expect(initializeBtn.closest('a')).toHaveProperty('href', expect.stringContaining('/network'));
  });
});

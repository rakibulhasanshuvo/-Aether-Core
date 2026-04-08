import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ProcessTimeline from '../ProcessTimeline';
import React from 'react';

interface MockMotionProps extends React.HTMLAttributes<HTMLElement> {
  initial?: unknown;
  animate?: unknown;
  whileInView?: unknown;
  whileHover?: unknown;
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
    },
    useScroll: vi.fn(() => ({
      scrollYProgress: { get: () => 0, onChange: vi.fn(), destroy: vi.fn() }
    })),
    useTransform: vi.fn(() => "0%"),
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
}));

describe('ProcessTimeline Component', () => {
  it('renders the section header correctly', () => {
    render(<ProcessTimeline />);
    expect(screen.getByText('SYSTEM_DEPLOYMENT_PROTOCOL')).toBeDefined();
  });

  it('renders all timeline steps', () => {
    render(<ProcessTimeline />);

    // Check for all step IDs and titles
    const steps = [
      { id: '01', title: 'DECRYPT | Discovery & Analysis' },
      { id: '02', title: 'ARCHITECT | Structural Engineering' },
      { id: '03', title: 'INITIALIZE | Full-Stack Synthesis' },
      { id: '04', title: 'OPTIMIZE | System Hardening' },
    ];

    steps.forEach(step => {
      expect(screen.getByText(`${step.id}_${step.title}`)).toBeDefined();
    });
  });

  it('renders the active status badge for the in-progress step', () => {
    render(<ProcessTimeline />);
    // Step 02 is IN_PROGRESS
    expect(screen.getByText('Active')).toBeDefined();
  });

  it('contains the expected structure with Motion components', () => {
    render(<ProcessTimeline />);

    // Should have multiple SleekStagger containers (one for header, one for each step)
    const staggers = screen.getAllByTestId('sleek-stagger');
    expect(staggers.length).toBeGreaterThanOrEqual(5); // 1 header + 4 steps

    // Should have multiple SleekItem components
    const items = screen.getAllByTestId('sleek-item');
    expect(items.length).toBeGreaterThanOrEqual(5);

    // Should have HolographicCard for each step
    const cards = screen.getAllByTestId('holographic-card');
    expect(cards.length).toBe(4);
  });
});

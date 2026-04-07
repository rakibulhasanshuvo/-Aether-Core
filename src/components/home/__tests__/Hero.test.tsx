import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Hero from '../Hero';
import React from 'react';

interface MockMotionProps extends React.HTMLAttributes<HTMLElement> {
  initial?: unknown;
  animate?: unknown;
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
    useMotionValue: vi.fn(() => ({ set: vi.fn(), get: vi.fn() })),
    useSpring: vi.fn(() => ({ set: vi.fn(), get: vi.fn() })),
    useTransform: vi.fn(() => ({ set: vi.fn(), get: vi.fn() })),
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
  TextScramble: ({ text, className }: { text: string; className?: string }) => (
    <span data-testid="text-scramble" className={className}>{text}</span>
  ),
  EASE: [0.22, 1, 0.36, 1],
  DURATION_FLUID: 0.7,
}));

describe('Hero Component', () => {
  it('renders all key elements correctly', () => {
    render(<Hero />);

    // Check Status Badge
    expect(screen.getByText(/Neural_Framework \/\/ Live_Session/i)).toBeDefined();

    // Check Main Title
    expect(screen.getByText('THE')).toBeDefined();
    expect(screen.getByText('ARCHITECT')).toBeDefined();

    // Check Subtext
    expect(screen.getByText(/Engineering the intersection of code, design, and dimensional computing/i)).toBeDefined();

    // Check Meta Info / Badges
    expect(screen.getByText(/Available_For_Contracts/i)).toBeDefined();
    expect(screen.getByText(/Based: Digital_Void/i)).toBeDefined();
  });

  it('contains the expected structure with Motion components', () => {
    render(<Hero />);

    // Should have a SleekStagger container
    expect(screen.getByTestId('sleek-stagger')).toBeDefined();

    // Should have multiple SleekItem components
    const items = screen.getAllByTestId('sleek-item');
    expect(items.length).toBeGreaterThanOrEqual(4);

    // Should have TextScramble for the main title
    expect(screen.getByTestId('text-scramble')).toBeDefined();
    expect(screen.getByText('ARCHITECT')).toBeDefined();
  });
});

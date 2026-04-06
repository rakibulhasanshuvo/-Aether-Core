import React from 'react';
import { render, screen } from '@testing-library/react';
import { SleekStagger, SleekItem } from '../MotionEffects';
import { describe, it, expect, vi } from 'vitest';

interface MockMotionProps extends React.HTMLAttributes<HTMLDivElement> {
  initial?: unknown;
  whileInView?: unknown;
  viewport?: unknown;
  variants?: unknown;
  transition?: unknown;
}

// Mock framer-motion to simplify testing if needed,
// but usually we want to test if it renders the children.
vi.mock('framer-motion', async () => {
  const actual = await vi.importActual('framer-motion');
  return {
    ...actual,
    motion: {
      div: ({ children, className, ...props }: MockMotionProps) => (
        <div className={className} data-testid="motion-div" {...props}>
          {children}
        </div>
      ),
    },
    useMotionValue: vi.fn(() => ({ set: vi.fn(), get: vi.fn() })),
    useSpring: vi.fn(() => ({ set: vi.fn(), get: vi.fn() })),
    useTransform: vi.fn(() => ({ set: vi.fn(), get: vi.fn() })),
  };
});

describe('SleekStagger', () => {
  it('renders children correctly', () => {
    render(
      <SleekStagger>
        <div data-testid="child">Child Content</div>
      </SleekStagger>
    );

    expect(screen.getByTestId('child')).toBeDefined();
    expect(screen.getByText('Child Content')).toBeDefined();
  });

  it('applies the provided className', () => {
    const customClass = 'custom-stagger-class';
    render(
      <SleekStagger className={customClass}>
        <div>Content</div>
      </SleekStagger>
    );

    const container = screen.getByTestId('motion-div');
    expect(container.className).toContain(customClass);
  });

  it('renders multiple children in a staggered way (structure-wise)', () => {
    render(
      <SleekStagger>
        <SleekItem>Item 1</SleekItem>
        <SleekItem>Item 2</SleekItem>
      </SleekStagger>
    );

    expect(screen.getByText('Item 1')).toBeDefined();
    expect(screen.getByText('Item 2')).toBeDefined();
  });
});

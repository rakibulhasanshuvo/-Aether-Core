import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { HoverCard } from '../MotionEffects';
import { describe, it, expect, vi, afterEach } from 'vitest';

// Mock framer-motion to capture props passed to motion.div
vi.mock('framer-motion', async () => {
  const actual = await vi.importActual('framer-motion');
  return {
    ...actual,
    motion: {
      div: React.forwardRef(({ children, className, whileHover, whileTap, ...props }: any, ref: any) => (
        <div
          ref={ref}
          className={className}
          data-testid="motion-div"
          data-while-hover={JSON.stringify(whileHover)}
          data-while-tap={JSON.stringify(whileTap)}
          {...props}
        >
          {children}
        </div>
      )),
    },
  };
});

describe('HoverCard', () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it('renders children correctly', () => {
    render(
      <HoverCard>
        <div data-testid="child">Hover Content</div>
      </HoverCard>
    );

    expect(screen.getByTestId('child')).toBeDefined();
    expect(screen.getByText('Hover Content')).toBeDefined();
  });

  it('applies the provided className', () => {
    const customClass = 'custom-hover-class';
    render(
      <HoverCard className={customClass}>
        <div>Content</div>
      </HoverCard>
    );

    const container = screen.getByTestId('motion-div');
    expect(container.className).toContain(customClass);
  });

  it('passes correct motion props to motion.div', () => {
    render(
      <HoverCard>
        <div>Content</div>
      </HoverCard>
    );

    const container = screen.getByTestId('motion-div');

    const whileHover = JSON.parse(container.getAttribute('data-while-hover') || '{}');
    const whileTap = JSON.parse(container.getAttribute('data-while-tap') || '{}');

    expect(whileHover).toEqual({
      scale: 1.02,
      transition: { type: 'spring', stiffness: 400, damping: 17 }
    });
    expect(whileTap).toEqual({ scale: 0.98 });
  });
});

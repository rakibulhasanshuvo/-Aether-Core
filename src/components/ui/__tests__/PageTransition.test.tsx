import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import PageTransition from '../PageTransition';
import { EASE, DURATION_FLUID } from '../MotionEffects';

interface MockMotionProps extends React.HTMLAttributes<HTMLDivElement> {
  initial?: unknown;
  animate?: unknown;
  exit?: unknown;
  variants?: unknown;
  transition?: unknown;
}

afterEach(() => {
  cleanup();
});

vi.mock('framer-motion', async () => {
  const actual = await vi.importActual('framer-motion');
  return {
    ...actual,
    motion: {
      div: ({ children, className, ...props }: MockMotionProps) =>
        React.createElement('div', {
          className,
          'data-testid': 'motion-div',
          'data-variants': JSON.stringify(props.variants),
          'data-initial': JSON.stringify(props.initial),
          'data-animate': JSON.stringify(props.animate),
          'data-exit': JSON.stringify(props.exit),
        }, children),
    },
    AnimatePresence: ({ children }: { children: React.ReactNode }) => React.createElement(React.Fragment, null, children),
  };
});

describe('PageTransition', () => {
  it('renders children correctly', () => {
    render(
      <PageTransition>
        <div data-testid="child">Page Content</div>
      </PageTransition>
    );

    expect(screen.getByTestId('child')).toBeDefined();
    expect(screen.getByText('Page Content')).toBeDefined();
  });

  it('applies the correct motion props', () => {
    render(
      <PageTransition>
        <div>Content</div>
      </PageTransition>
    );

    const motionDiv = screen.getByTestId('motion-div');

    expect(motionDiv.getAttribute('data-initial')).toBe(JSON.stringify('hidden'));
    expect(motionDiv.getAttribute('data-animate')).toBe(JSON.stringify('enter'));
    expect(motionDiv.getAttribute('data-exit')).toBe(JSON.stringify('exit'));

    const variants = JSON.parse(motionDiv.getAttribute('data-variants') || '{}');
    expect(variants.hidden).toBeDefined();
    expect(variants.enter).toBeDefined();
    expect(variants.exit).toBeDefined();

    expect(variants.hidden.opacity).toBe(0);
    expect(variants.hidden.y).toBe(15);
    expect(variants.enter.opacity).toBe(1);
    expect(variants.enter.transition.duration).toBe(DURATION_FLUID);
    expect(variants.enter.transition.ease).toEqual(EASE);
  });

  it('has the correct CSS classes', () => {
    render(
      <PageTransition>
        <div>Content</div>
      </PageTransition>
    );

    const motionDiv = screen.getByTestId('motion-div');
    expect(motionDiv.className).toContain('flex');
    expect(motionDiv.className).toContain('flex-col');
    expect(motionDiv.className).toContain('flex-grow');
    expect(motionDiv.className).toContain('w-full');
  });
});

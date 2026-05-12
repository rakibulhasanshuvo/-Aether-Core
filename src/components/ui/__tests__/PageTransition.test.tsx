import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import PageTransition from '../PageTransition';
import { EASE, DURATION_FLUID } from '../MotionEffects';

// Mock framer-motion to capture props passed to motion.div
vi.mock('framer-motion', async () => {
  const actual = await vi.importActual('framer-motion');
  return {
    ...actual,
    motion: {
      div: React.forwardRef(({ children, className, variants, initial, animate, exit, ...props }: any, ref: any) => (
        <div
          ref={ref}
          className={className}
          data-testid="page-transition-container"
          data-variants={JSON.stringify(variants)}
          data-initial={initial}
          data-animate={animate}
          data-exit={exit}
          {...props}
        >
          {children}
        </div>
      )),
    },
  };
});

describe('PageTransition', () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it('renders children correctly', () => {
    render(
      <PageTransition>
        <div data-testid="child">Page Content</div>
      </PageTransition>
    );

    expect(screen.getByTestId('child')).toBeDefined();
    expect(screen.getByText('Page Content')).toBeDefined();
  });

  it('applies the correct layout classes', () => {
    render(
      <PageTransition>
        <div>Content</div>
      </PageTransition>
    );

    const container = screen.getByTestId('page-transition-container');
    expect(container.className).toBe('flex flex-col flex-grow w-full');
  });

  it('sets the correct motion props (initial, animate, exit)', () => {
    render(
      <PageTransition>
        <div>Content</div>
      </PageTransition>
    );

    const container = screen.getByTestId('page-transition-container');
    expect(container.getAttribute('data-initial')).toBe('hidden');
    expect(container.getAttribute('data-animate')).toBe('enter');
    expect(container.getAttribute('data-exit')).toBe('exit');
  });

  it('provides the correct variants to the motion component', () => {
    render(
      <PageTransition>
        <div>Content</div>
      </PageTransition>
    );

    const container = screen.getByTestId('page-transition-container');
    const variants = JSON.parse(container.getAttribute('data-variants') || '{}');

    expect(variants).toEqual({
      hidden: {
        opacity: 0,
        y: 15,
        filter: 'blur(8px)',
        scale: 0.99
      },
      enter: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        scale: 1,
        transition: {
          duration: DURATION_FLUID,
          ease: EASE,
          staggerChildren: 0.1,
        }
      },
      exit: {
        opacity: 0,
        y: -10,
        filter: 'blur(4px)',
        scale: 0.99,
        transition: {
          duration: 0.3,
          ease: EASE
        }
      }
    });
  });
});

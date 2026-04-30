import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { StaggerItem, DURATION_BASE, EASE } from '../MotionEffects';
import { describe, it, expect, vi, afterEach } from 'vitest';

// Mock framer-motion to capture props passed to motion.div
vi.mock('framer-motion', async () => {
  const actual = await vi.importActual('framer-motion');
  return {
    ...actual,
    motion: {
      div: React.forwardRef(({ children, className, variants, ...props }: any, ref: any) => (
        <div
          ref={ref}
          className={className}
          data-testid="motion-div"
          data-variants={JSON.stringify(variants)}
          {...props}
        >
          {children}
        </div>
      )),
    },
  };
});

describe('StaggerItem', () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it('renders children correctly', () => {
    render(
      <StaggerItem>
        <div data-testid="child">Stagger Content</div>
      </StaggerItem>
    );

    expect(screen.getByTestId('child')).toBeDefined();
    expect(screen.getByText('Stagger Content')).toBeDefined();
  });

  it('applies the provided className', () => {
    const customClass = 'custom-stagger-item-class';
    render(
      <StaggerItem className={customClass}>
        <div>Content</div>
      </StaggerItem>
    );

    const container = screen.getByTestId('motion-div');
    expect(container.className).toContain(customClass);
  });

  it('applies the correct motion variants for entrance animation', () => {
    render(
      <StaggerItem>
        <div>Content</div>
      </StaggerItem>
    );

    const container = screen.getByTestId('motion-div');
    const variants = JSON.parse(container.getAttribute('data-variants') || '{}');

    expect(variants).toEqual({
      hidden: {
        opacity: 0,
        y: 30,
        filter: 'blur(10px)'
      },
      visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
          duration: DURATION_BASE,
          ease: EASE
        }
      }
    });
  });
});

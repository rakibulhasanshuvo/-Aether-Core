import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { HolographicCard } from '../MotionEffects';
import { describe, it, expect, vi, afterEach } from 'vitest';

// Mock framer-motion
vi.mock('framer-motion', () => {
  const mockMotionValue = () => ({
    set: vi.fn(),
    get: vi.fn(() => 0),
    onChange: vi.fn(),
  });

  return {
    motion: {
      div: React.forwardRef(({ children, className, onMouseMove, onMouseLeave, style, ...props }: any, ref: any) => (
        <div
          ref={ref}
          className={className}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          style={style}
          data-testid="motion-div"
          {...props}
        >
          {children}
        </div>
      )),
    },
    useMotionValue: vi.fn(() => mockMotionValue()),
    useSpring: vi.fn(() => mockMotionValue()),
    useTransform: vi.fn(() => mockMotionValue()),
  };
});

import { useMotionValue } from 'framer-motion';

describe('HolographicCard', () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it('renders children correctly', () => {
    render(
      <HolographicCard>
        <div data-testid="child">Card Content</div>
      </HolographicCard>
    );

    expect(screen.getByTestId('child')).toBeDefined();
    expect(screen.getByText('Card Content')).toBeDefined();
  });

  it('applies the provided className', () => {
    const customClass = 'custom-holographic-class';
    render(
      <HolographicCard className={customClass}>
        <div>Content</div>
      </HolographicCard>
    );

    const container = screen.getByTestId('motion-div');
    expect(container.className).toContain(customClass);
  });

  it('updates motion values on mouse move', () => {
    const setMocks: any[] = [];
    (useMotionValue as any).mockImplementation(() => {
      const m = { set: vi.fn(), get: vi.fn(() => 0), onChange: vi.fn() };
      setMocks.push(m.set);
      return m;
    });

    render(
      <HolographicCard>
        <div>Content</div>
      </HolographicCard>
    );

    const container = screen.getByTestId('motion-div');

    // Mock getBoundingClientRect
    container.getBoundingClientRect = vi.fn(() => ({
      left: 100,
      top: 100,
      width: 200,
      height: 200,
      bottom: 300,
      right: 300,
      x: 100,
      y: 100,
      toJSON: () => {},
    }));

    // clientX = 150, left = 100, width = 200
    // x = 150 - 100 - 200/2 = 150 - 100 - 100 = -50
    // clientY = 250, top = 100, height = 200
    // y = 250 - 100 - 200/2 = 250 - 100 - 100 = 50
    fireEvent.mouseMove(container, { clientX: 150, clientY: 250 });

    // In HolographicCard:
    // const mouseX = useMotionValue(0); // setMocks[0]
    // const mouseY = useMotionValue(0); // setMocks[1]

    expect(setMocks[0]).toHaveBeenCalledWith(-50);
    expect(setMocks[1]).toHaveBeenCalledWith(50);
  });

  it('resets motion values on mouse leave', () => {
    const setMocks: any[] = [];
    (useMotionValue as any).mockImplementation(() => {
      const m = { set: vi.fn(), get: vi.fn(() => 0), onChange: vi.fn() };
      setMocks.push(m.set);
      return m;
    });

    render(
      <HolographicCard>
        <div>Content</div>
      </HolographicCard>
    );

    const container = screen.getByTestId('motion-div');
    fireEvent.mouseLeave(container);

    expect(setMocks[0]).toHaveBeenCalledWith(0);
    expect(setMocks[1]).toHaveBeenCalledWith(0);
  });
});

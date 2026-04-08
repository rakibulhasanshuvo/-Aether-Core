import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ProcessTimeline from '../ProcessTimeline';
import React from 'react';

interface MockMotionProps extends React.HTMLAttributes<HTMLElement> {
  initial?: unknown;
  animate?: unknown;
  whileInView?: unknown;
  viewport?: unknown;
  variants?: unknown;
  style?: React.CSSProperties | Record<string, unknown>;
}

// Mock framer-motion
vi.mock('framer-motion', async () => {
  const actual = await vi.importActual('framer-motion');
  return {
    ...actual,
    motion: {
      div: React.forwardRef((props: MockMotionProps, ref: React.Ref<HTMLDivElement>) => {
        const { children, className, style, ...rest } = props;
        return React.createElement('div', {
          className,
          style: style as React.CSSProperties,
          'data-testid': 'motion-div',
          ref,
          ...rest
        }, children);
      }),
    },
    useScroll: vi.fn(() => ({
      scrollYProgress: { get: () => 0, onChange: vi.fn(), destroy: vi.fn() }
    })),
    useTransform: vi.fn(() => "0%"),
  };
});

interface MotionEffectProps {
  children?: React.ReactNode;
  className?: string;
  delay?: number;
}

// Mock MotionEffects components
vi.mock('@/components/ui/MotionEffects', () => ({
  SleekStagger: ({ children, className }: MotionEffectProps) => {
    return React.createElement('div', { 'data-testid': 'sleek-stagger', className }, children);
  },
  SleekItem: ({ children, className }: MotionEffectProps) => {
    return React.createElement('div', { 'data-testid': 'sleek-item', className }, children);
  },
  HolographicCard: ({ children, className }: MotionEffectProps) => {
    return React.createElement('div', { 'data-testid': 'holographic-card', className }, children);
  },
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

  it('alternates layout for even and odd steps (zig-zag pattern)', () => {
    const { container } = render(<ProcessTimeline />);

    // Find all step content containers
    // We target the flex container inside SleekItem that holds the HolographicCard
    const sleeksItems = screen.getAllByTestId('sleek-item');
    // Filter out the header SleekItem
    const stepItems = sleeksItems.slice(1);

    expect(stepItems.length).toBe(4);

    // Even indices in array (steps 1 and 3) should have normal flex-row
    // Odd indices in array (steps 2 and 4) should have flex-row-reverse
    stepItems.forEach((item, index) => {
      const isEven = index % 2 === 0;
      if (isEven) {
         expect(item.className).not.toContain('md:flex-row-reverse');
      } else {
         expect(item.className).toContain('md:flex-row-reverse');
      }
    });
  });

  it('contains the hover interaction scanning line effect', () => {
    const { container } = render(<ProcessTimeline />);

    // Check that there is a scanning line effect inside HolographicCards
    // It is identified by the `group-hover:translate-y-full` class
    const scanningLines = container.querySelectorAll('.group-hover\\:translate-y-full');
    expect(scanningLines.length).toBe(4);

    scanningLines.forEach(line => {
      expect(line.className).toContain('bg-gradient-to-b');
      expect(line.className).toContain('-translate-y-full');
    });
  });

  it('binds timeline path height to useTransform', () => {
    render(<ProcessTimeline />);

    // The timeline path is a motion.div with a specific shadow class
    const motionDivs = screen.getAllByTestId('motion-div');
    // Find the one with the shadow class specific to the vertical timeline line
    const timelinePath = motionDivs.find(div =>
      div.className.includes('shadow-[0_0_15px_var(--primary-container)]')
    );

    expect(timelinePath).toBeDefined();
    // Verify that the style attribute reflects the mock value of useTransform ("0%")
    expect(timelinePath?.style.height).toBe('0%');
  });
});

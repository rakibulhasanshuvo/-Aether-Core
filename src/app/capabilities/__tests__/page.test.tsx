import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import CapabilitiesPage from '../page';
import React from 'react';

// Define types for mocks to avoid 'any'
interface MotionProps extends React.HTMLAttributes<HTMLElement> {
  initial?: unknown;
  animate?: unknown;
  whileInView?: unknown;
  variants?: unknown;
  transition?: unknown;
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  delay?: number;
}

// Mock next/image
vi.mock('next/image', () => ({
  default: (props: any) => <img data-testid="next-image" {...props} />
}));

// Mock framer-motion
vi.mock('framer-motion', () => {
  const motionProxy = new Proxy({}, {
    get: (_, prop) => {
      return function MotionComponent({ children, className, style, ...props }: MotionProps) {
        const Tag = prop as any;
        return (
          <Tag className={className} style={style} data-testid={`motion-${String(prop)}`} {...props}>
            {children}
          </Tag>
        );
      }
    }
  });

  return {
    motion: Object.assign(
      function(Component: any) {
        return function MotionWrappedComponent(props: MotionProps) {
          return <Component {...props} data-testid="motion-custom" />;
        };
      },
      motionProxy
    )
  };
});

// Mock MotionEffects components
vi.mock('@/components/ui/MotionEffects', () => ({
  SleekStagger: ({ children, className }: { children: React.ReactNode; className?: string; delay?: number; stagger?: number }) => (
    <div data-testid="sleek-stagger" className={className}>{children}</div>
  ),
  SleekItem: ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div data-testid="sleek-item" className={className}>{children}</div>
  ),
  HolographicCard: ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div data-testid="holographic-card" className={className}>{children}</div>
  ),
  TextScramble: ({ text }: { text: string; delay?: number }) => (
    <span data-testid="text-scramble">{text}</span>
  )
}));

// Mock PageTransition
vi.mock('@/components/ui/PageTransition', () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="page-transition">{children}</div>
  )
}));

describe('CapabilitiesPage', () => {
  it('renders without crashing', () => {
    render(<CapabilitiesPage />);
    expect(screen.getByTestId('page-transition')).toBeDefined();
  });

  it('renders the main capabilities heading', () => {
    render(<CapabilitiesPage />);
    expect(screen.getByText('CAPABILITIES')).toBeDefined();
    expect(screen.getByText(/Architectural blueprints for high-frequency/i)).toBeDefined();
  });

  it('renders the infrastructure section', () => {
    render(<CapabilitiesPage />);
    expect(screen.getByText('Infrastructure')).toBeDefined();
    expect(screen.getByText('React Synthesis')).toBeDefined();
    expect(screen.getByText('Three.js Voids')).toBeDefined();
    expect(screen.getByText('Rust Core Logic')).toBeDefined();
  });

  it('renders the distributed architecture services', () => {
    render(<CapabilitiesPage />);
    expect(screen.getByText('Distributed Architecture')).toBeDefined();
    expect(screen.getByText('Encryption Layers')).toBeDefined();
    expect(screen.getByText('Data Intelligence')).toBeDefined();
    expect(screen.getByText('Velocity Engine')).toBeDefined();
    expect(screen.getByText('Cloud Synthesis')).toBeDefined();
  });

  it('renders the technical matrix', () => {
    render(<CapabilitiesPage />);
    expect(screen.getByText('Technical Matrix')).toBeDefined();
    expect(screen.getByText('Frontend Synthesis')).toBeDefined();
    expect(screen.getByText('Backend Logic')).toBeDefined();
    expect(screen.getByText('WebGL / GLSL')).toBeDefined();
    expect(screen.getByText('DevOps / CI-CD')).toBeDefined();
  });

  it('uses expected motion and UI components', () => {
    render(<CapabilitiesPage />);
    const staggers = screen.getAllByTestId('sleek-stagger');
    expect(staggers.length).toBeGreaterThan(0);

    const items = screen.getAllByTestId('sleek-item');
    expect(items.length).toBeGreaterThan(0);

    const cards = screen.getAllByTestId('holographic-card');
    expect(cards.length).toBeGreaterThan(0);

    const scrambles = screen.getAllByTestId('text-scramble');
    expect(scrambles.length).toBeGreaterThan(0);
  });
});

import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import AppShell from '../AppShell';
import React from 'react';

// Mock child layout components
vi.mock('@/components/layout/Sidebar', () => ({
  default: () => <div data-testid="sidebar">Sidebar Mock</div>,
}));

vi.mock('@/components/layout/Navbar', () => ({
  default: () => <div data-testid="navbar">Navbar Mock</div>,
}));

vi.mock('@/components/layout/Footer', () => ({
  default: () => <div data-testid="footer">Footer Mock</div>,
}));

// Mock MotionEffects components
vi.mock('@/components/ui/MotionEffects', () => ({
  AetherAura: () => <div data-testid="aether-aura">AetherAura Mock</div>,
}));

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
      main: ({ children, className, style, ...props }: MockMotionProps) => (
        <main className={className} style={style} data-testid="motion-main" {...props}>
          {children}
        </main>
      ),
    },
    AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  };
});

describe('AppShell Component', () => {
  it('renders all layout elements correctly', () => {
    render(
      <AppShell>
        <div data-testid="page-content">Test Page Content</div>
      </AppShell>
    );

    // Verify sub-components are rendered
    expect(screen.getByTestId('aether-aura')).toBeDefined();
    expect(screen.getByTestId('sidebar')).toBeDefined();
    expect(screen.getByTestId('navbar')).toBeDefined();
    expect(screen.getByTestId('footer')).toBeDefined();

    // Verify children content is rendered inside the layout
    expect(screen.getByTestId('page-content')).toBeDefined();
    expect(screen.getByText('Test Page Content')).toBeDefined();
  });

  it('renders motion.main wrapper around children', () => {
    render(
      <AppShell>
        <div>Content</div>
      </AppShell>
    );

    // Check that motion.main is rendered
    expect(screen.getByTestId('motion-main')).toBeDefined();
  });
});

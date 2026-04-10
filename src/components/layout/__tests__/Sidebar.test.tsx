import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import Sidebar from '../Sidebar';
import React from 'react';

// Mock framer-motion
interface MockMotionProps extends React.HTMLAttributes<HTMLElement> {
  initial?: unknown;
  animate?: unknown;
  whileHover?: unknown;
  whileTap?: unknown;
  whileInView?: unknown;
  transition?: unknown;
  variants?: unknown;
  layoutId?: string;
  exit?: unknown;
}

/**
 * Helper to filter out motion-specific props from being passed to standard HTML elements.
 */
function filterMotionProps(props: MockMotionProps) {
  const {
    initial,
    animate,
    whileHover,
    whileTap,
    whileInView,
    transition,
    variants,
    layoutId,
    exit,
    ...rest
  } = props;
  return rest;
}

vi.mock('framer-motion', async () => {
  // Use a minimal mock to avoid dependency on actual framer-motion if it's broken
  return {
    motion: {
      aside: (props: MockMotionProps) => (
        <aside {...filterMotionProps(props)} data-testid="motion-aside">
          {props.children}
        </aside>
      ),
      div: (props: MockMotionProps) => (
        <div
          {...filterMotionProps(props)}
          data-testid="motion-div"
          data-layoutid={props.layoutId}
        >
          {props.children}
        </div>
      ),
      span: (props: MockMotionProps) => (
        <span {...filterMotionProps(props)} data-testid="motion-span">
          {props.children}
        </span>
      ),
    },
    AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  };
});

// Mock MotionEffects components
vi.mock('@/components/ui/MotionEffects', () => ({
  EASE: [0.22, 1, 0.36, 1],
  DURATION_BASE: 0.4,
  SleekStagger: ({ children }: { children: React.ReactNode }) => <div data-testid="sleek-stagger">{children}</div>,
  SleekItem: ({ children }: { children: React.ReactNode }) => <div data-testid="sleek-item">{children}</div>,
}));

// Mock next/navigation
const mockUsePathname = vi.fn();
vi.mock('next/navigation', () => ({
  usePathname: () => mockUsePathname(),
}));

// Mock next/link
vi.mock('next/link', () => ({
  default: ({ children, href, className, onClick, ...props }: any) => {
    // In Sidebar, Link uses aria-label which we can use as testId
    const testId = props['aria-label'] || `link-${href}`;
    return (
      <a href={href} className={className} data-testid={testId} onClick={onClick}>
        {children}
      </a>
    );
  },
}));

describe('Sidebar Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('renders correctly in collapsed state by default', () => {
    mockUsePathname.mockReturnValue('/');
    render(<Sidebar />);

    // Brand header should be present
    expect(screen.getByText('ARCHITECT_OS')).toBeDefined();

    // In collapsed state, labels should not be visible (controlled by isHovered)
    expect(screen.queryByText('Home')).toBeNull();
    expect(screen.queryByText('Capabilities')).toBeNull();
  });

  it('renders all navigation icons', () => {
    mockUsePathname.mockReturnValue('/');
    render(<Sidebar />);

    expect(screen.getByText('home')).toBeDefined();
    expect(screen.getByText('account_tree')).toBeDefined();
    expect(screen.getByText('history_edu')).toBeDefined();
    expect(screen.getByText('terminal')).toBeDefined();
    expect(screen.getByText('hub')).toBeDefined();
  });

  it('expands on hover and shows labels', () => {
    mockUsePathname.mockReturnValue('/');
    render(<Sidebar />);

    const sidebar = screen.getByTestId('motion-aside');

    // Hover
    fireEvent.mouseEnter(sidebar);

    // Labels should now be visible
    expect(screen.getByText('Home')).toBeDefined();
    expect(screen.getByText('Capabilities')).toBeDefined();
    expect(screen.getByText('Transmissions')).toBeDefined();
    expect(screen.getByText('Terminal')).toBeDefined();
    expect(screen.getByText('Network')).toBeDefined();

    // System status should also be visible
    expect(screen.getByText('SYSTEM_STATUS: ACTIVE')).toBeDefined();
  });

  it('collapses on mouse leave', () => {
    mockUsePathname.mockReturnValue('/');
    render(<Sidebar />);

    const sidebar = screen.getByTestId('motion-aside');

    // Hover
    fireEvent.mouseEnter(sidebar);
    expect(screen.getByText('Home')).toBeDefined();

    // Mouse leave
    fireEvent.mouseLeave(sidebar);
    expect(screen.queryByText('Home')).toBeNull();
  });

  it('highlights the active route', () => {
    mockUsePathname.mockReturnValue('/capabilities');
    render(<Sidebar />);

    // Hover to reveal labels so we can easily find the link by testId (aria-label)
    const sidebar = screen.getByTestId('motion-aside');
    fireEvent.mouseEnter(sidebar);

    // In Sidebar.tsx, the active link has text-[#00F2FF]
    const capabilitiesLink = screen.getByTestId('Capabilities');
    expect(capabilitiesLink.className).toContain('text-[#00F2FF]');

    const homeLink = screen.getByTestId('Home');
    expect(homeLink.className).not.toContain('text-[#00F2FF]');
    expect(homeLink.className).toContain('text-[#393939]');

    // Active indicator (motion.div with layoutId="sidebar-active")
    const activeIndicator = capabilitiesLink.querySelector('[data-layoutid="sidebar-active"]');
    expect(activeIndicator).toBeDefined();
    expect(activeIndicator).not.toBeNull();
  });

  it('renders Initialize Signal CTA and handles hover', () => {
    mockUsePathname.mockReturnValue('/');
    render(<Sidebar />);

    const cta = screen.getByTestId('Initialize Signal — Contact');
    expect(cta).toBeDefined();

    // Label should be hidden initially
    expect(screen.queryByText('Initialize Signal')).toBeNull();

    // Hover sidebar
    const sidebar = screen.getByTestId('motion-aside');
    fireEvent.mouseEnter(sidebar);

    // Label should be visible
    expect(screen.getByText('Initialize Signal')).toBeDefined();
  });
});

import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import NodeVisual from '../NodeVisual';
import React from 'react';

// Mock next/image for stability
vi.mock('next/image', () => ({
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} data-testid="mock-next-image" />;
  },
}));

import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

describe('NodeVisual Component', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders without crashing', () => {
    render(<NodeVisual />);
    // Check for a distinctive text element
    expect(screen.getByText(/System Node: Pulse_Core/i)).toBeDefined();
  });

  it('renders the background image correctly', () => {
    render(<NodeVisual />);

    const image = screen.getByTestId('mock-next-image');
    expect(image).toBeDefined();
    expect(image.getAttribute('alt')).toBe('abstract architectural technical nodes');
    expect(image.getAttribute('src')).toContain('lh3.googleusercontent.com');
  });

  it('renders the expected text content and metrics', () => {
    render(<NodeVisual />);

    // Check main labels
    expect(screen.getByText(/System Node: Pulse_Core/i)).toBeDefined();
    expect(screen.getByText(/Infrastructure/i)).toBeDefined();

    // Check metrics content
    const metricsContainer = screen.getByText(/UPTIME:/i).parentElement;
    expect(metricsContainer?.textContent).toContain('UPTIME: 99.999%');
    expect(metricsContainer?.textContent).toContain('LATENCY: 0.04ms');
    expect(metricsContainer?.textContent).toContain('STATUS: OPTIMIZED');
  });
});

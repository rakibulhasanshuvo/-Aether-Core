import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from '../Footer';
import React from 'react';

describe('Footer Component', () => {
  it('renders correctly', () => {
    render(<Footer />);

    // Check brand name
    expect(screen.getByText('THE ARCHITECT')).toBeDefined();

    // Check slogan
    expect(
      screen.getByText('Synthesizing the digital void into tangible interfaces.')
    ).toBeDefined();

    // Check copyright text
    expect(
      screen.getByText('© 2024 THE ARCHITECT // [ENCRYPTED TRANSMISSION]')
    ).toBeDefined();
  });
});

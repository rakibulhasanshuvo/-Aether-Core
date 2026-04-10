import { render, act } from '@testing-library/react';
import { TextScramble } from '../MotionEffects';
import React from 'react';
import { expect, test, vi, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

afterEach(() => {
  cleanup();
});

// Mock framer-motion as it might cause issues in test environment
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => React.createElement('div', props, children),
  },
  useMotionValue: () => ({ set: vi.fn(), get: () => 0 }),
  useSpring: () => ({ set: vi.fn(), get: () => 0 }),
  useTransform: () => ({ get: () => 0 }),
}));

test('TextScramble eventually displays the final text', async () => {
  vi.useFakeTimers();
  const text = 'Hello';
  const { getByText, findByText } = render(<TextScramble text={text} />);

  // Initial state might be empty or scrambled

  // Advance timers
  await act(async () => {
    vi.advanceTimersByTime(10000); // More than enough time for 5 chars at 30ms each with 1/3 iteration
  });

  const element = await findByText(text);
  expect(element).toBeDefined();

  vi.useRealTimers();
});

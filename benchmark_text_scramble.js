const { performance } = require('perf_hooks');

const text = "Hello Cyber-Luxury World! This is a long string to scramble. Let's see how much faster it gets.";
const chars = '!<>-_\\/[]{}—=+*^?#________';

const ITERATIONS = 1_000_000;
let dummyResult = '';

// BASELINE
function runBaseline() {
    let iteration = 0;
    const start = performance.now();
    for (let i = 0; i < ITERATIONS; i++) {
        dummyResult = text
            .split('')
            .map((char, index) => {
                if (index < iteration) return char;
                return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('');
        iteration += 1 / 3;
        if (iteration >= text.length) iteration = 0;
    }
    const end = performance.now();
    return end - start;
}

// OPTIMIZED
function runOptimized() {
    let iteration = 0;
    const textArray = text.split('');
    const start = performance.now();
    for (let i = 0; i < ITERATIONS; i++) {
        dummyResult = textArray
            .map((char, index) => {
                if (index < iteration) return char;
                return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('');
        iteration += 1 / 3;
        if (iteration >= text.length) iteration = 0;
    }
    const end = performance.now();
    return end - start;
}

console.log(`Running benchmark with ${ITERATIONS} iterations...`);

// Warmup
runBaseline();
runOptimized();

const baselineTime = runBaseline();
const optimizedTime = runOptimized();

console.log(`Baseline (split inside loop): ${baselineTime.toFixed(2)}ms`);
console.log(`Optimized (hoisted split): ${optimizedTime.toFixed(2)}ms`);
const improvement = ((baselineTime - optimizedTime) / baselineTime * 100).toFixed(2);
console.log(`Improvement: ${improvement}% faster`);
console.log(`Speedup multiplier: ${(baselineTime / optimizedTime).toFixed(2)}x`);

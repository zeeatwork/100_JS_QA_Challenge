# JavaScript Test Automation Engineer — 100 Easy Coding Problems

A beginner-friendly JavaScript practice project for a new test automation engineer.

## What this teaches

Solve **100 realistic workday problems**, each designed for **20 minutes or less**. The problems focus on:

- Primitive types
- Arithmetic and comparison operators
- Boolean evaluation, truthiness, and falsiness
- Strict equality
- `&&`, `||`, `!`, and `??`
- Ternary expressions
- String properties and methods
- Number and Math methods
- Small, readable functions suitable for test-automation code

The scenarios use QA language: test status, retries, builds, environments, suites, tickets, browsers, durations, workers, approvals, and release readiness.

## Requirements

- Node.js 18+ recommended
- No external dependencies
- Node's built-in `node:test` runner

## Run the tests

```bash
npm test
```

The exercise files intentionally contain `TODO` implementations, so this command is expected to fail until you solve the problems.

Run the complete reference implementations:

```bash
npm run test:solutions
```

## Solve one problem

1. Open `src/problems/problem-001.js`.
2. Read the requirement and examples.
3. Predict the JavaScript feature you need.
4. Implement the function.
5. Run its focused unit test:

```bash
node --test tests/problem-01.test.js
```

6. Fix failures using the assertion output.
7. Only then check the matching file in `solutions/`.

## Spaced repetition

The 100 problems intentionally repeat concepts after increasing gaps. For example:

- `typeof` returns in Problems 1–4.
- `===` returns repeatedly from Problems 5 through 100.
- `%` appears in Problems 10 and 17.
- `.length` returns in Problems 22, 36, 67, and 95.
- `startsWith()`, `endsWith()`, and `includes()` return later.
- `toLowerCase()`, `trim()`, and `slice()` return repeatedly.
- `Number.isFinite()`, `Math.max()`, `Math.min()`, and `Math.round()` return after a delay.
- `||` and `??` are deliberately contrasted in Problems 56–57 and 86–87.

See `docs/spaced-repetition.md` for a retrieval schedule.

## 20-minute routine

- **2 min:** Read the requirement and predict the operator/method.
- **12 min:** Code.
- **4 min:** Run the unit test and debug.
- **2 min:** Recall the method/property from memory and write a one-line note.

If you reach 20 minutes, stop and review. Reattempt the problem during its next spaced-repetition review.

## Project structure

```text
javascript-qa-100-problems/
├── src/problems/       # Your 100 starter exercises
├── tests/              # Unit tests for your implementations
├── solutions/          # Reference implementations
├── docs/
│   ├── problem-index.md
│   └── spaced-repetition.md
├── package.json
└── README.md
```

## Learning rule

Favor correct, readable JavaScript over clever code. These problems are intentionally easy; the difficulty comes from retrieving the right language feature without repeatedly looking it up.

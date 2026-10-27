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

## Version 2 (in progress)

Problems 50-100 are being rewritten in batches of 10 with single-method drills, more edge-case tests, and gradually harder, more realistic QA tasks. Problems 50-59 are done. See `docs/v2-plan.md` for the plan and batch status.

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

The 100 problems repeat key concepts after increasing gaps, so you recall a method several times instead of seeing it once. See `docs/spaced-repetition.md` for a retrieval schedule.

## Hints

Headers for Problems 01-59 don't name the method to use. Working out which one fits is part of the practice. If you're stuck, `docs/hints.md` has one folded hint per problem. Problems 60-100 still name the method and will move to hints as they're rewritten. Try the hint before the reference solution.

## 20-minute routine

- **2 min:** Read the requirement and predict the operator/method.
- **12 min:** Code.
- **4 min:** Run the unit test and debug. Still stuck? Open the hint.
- **2 min:** Recall the method/property from memory and write a one-line note.

If you reach 20 minutes, stop and review. Reattempt the problem during its next spaced-repetition review.

## Project structure

```text
javascript-qa-100-problems/
├── src/problems/       # Your 100 starter exercises
├── tests/              # Unit tests for your implementations
├── solutions/          # Reference implementations
├── docs/
│   ├── hints.md
│   ├── problem-index.md
│   ├── spaced-repetition.md
│   └── v2-plan.md
├── package.json
└── README.md
```

## Learning rule

Favor correct, readable JavaScript over clever code. These problems are intentionally easy; the difficulty comes from retrieving the right language feature without repeatedly looking it up.

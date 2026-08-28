import test from 'node:test';
import assert from 'node:assert/strict';
import { hasNoFailures } from '../src/problems/problem-85.js';

test('Problem 85: hasNoFailures', () => {
  assert.deepStrictEqual(hasNoFailures(false), true);
  assert.deepStrictEqual(hasNoFailures(true), false);
});

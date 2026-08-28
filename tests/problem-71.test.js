import test from 'node:test';
import assert from 'node:assert/strict';
import { isPositive } from '../src/problems/problem-71.js';

test('Problem 71: isPositive', () => {
  assert.deepStrictEqual(isPositive(1), true);
  assert.deepStrictEqual(isPositive(0), false);
  assert.deepStrictEqual(isPositive(-1), false);
});

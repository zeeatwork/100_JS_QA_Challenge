import test from 'node:test';
import assert from 'node:assert/strict';
import { isPositiveFinite } from '../src/problems/problem-80.js';

test('Problem 80: isPositiveFinite', () => {
  assert.deepStrictEqual(isPositiveFinite(4), true);
  assert.deepStrictEqual(isPositiveFinite(0), false);
  assert.deepStrictEqual(isPositiveFinite(Infinity), false);
});

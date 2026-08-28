import test from 'node:test';
import assert from 'node:assert/strict';
import { isFiniteNumber } from '../src/problems/problem-41.js';

test('Problem 41: isFiniteNumber', () => {
  assert.deepStrictEqual(isFiniteNumber(10), true);
  assert.deepStrictEqual(isFiniteNumber(Infinity), false);
  assert.deepStrictEqual(isFiniteNumber(NaN), false);
});

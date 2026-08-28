import test from 'node:test';
import assert from 'node:assert/strict';
import { isFiniteNumber } from '../../solutions/problem-41.js';

test('Reference solution 41: isFiniteNumber', () => {
  assert.deepStrictEqual(isFiniteNumber(10), true);
  assert.deepStrictEqual(isFiniteNumber(Infinity), false);
  assert.deepStrictEqual(isFiniteNumber(NaN), false);
});

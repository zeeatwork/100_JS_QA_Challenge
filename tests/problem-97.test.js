import test from 'node:test';
import assert from 'node:assert/strict';
import { getRemainingPercent } from '../src/problems/problem-97.js';

test('Problem 97: getRemainingPercent', () => {
  assert.deepStrictEqual(getRemainingPercent(90), 10);
  assert.deepStrictEqual(getRemainingPercent(100), 0);
});

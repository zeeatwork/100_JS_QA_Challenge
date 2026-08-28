import test from 'node:test';
import assert from 'node:assert/strict';
import { incrementRunNumber } from '../src/problems/problem-15.js';

test('Problem 15: incrementRunNumber', () => {
  assert.deepStrictEqual(incrementRunNumber(17), 18);
  assert.deepStrictEqual(incrementRunNumber(0), 1);
});

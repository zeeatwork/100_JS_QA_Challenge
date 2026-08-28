import test from 'node:test';
import assert from 'node:assert/strict';
import { incrementRunNumber } from '../../solutions/problem-15.js';

test('Reference solution 15: incrementRunNumber', () => {
  assert.deepStrictEqual(incrementRunNumber(17), 18);
  assert.deepStrictEqual(incrementRunNumber(0), 1);
});

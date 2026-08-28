import test from 'node:test';
import assert from 'node:assert/strict';
import { absoluteDelta } from '../src/problems/problem-73.js';

test('Problem 73: absoluteDelta', () => {
  assert.deepStrictEqual(absoluteDelta(3, 8), 5);
  assert.deepStrictEqual(absoluteDelta(8, 3), 5);
  assert.deepStrictEqual(absoluteDelta(4, 4), 0);
});

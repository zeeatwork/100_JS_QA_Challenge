import test from 'node:test';
import assert from 'node:assert/strict';
import { maxRetries } from '../src/problems/problem-74.js';

test('Problem 74: maxRetries', () => {
  assert.deepStrictEqual(maxRetries(1, 3), 3);
  assert.deepStrictEqual(maxRetries(5, 2), 5);
});

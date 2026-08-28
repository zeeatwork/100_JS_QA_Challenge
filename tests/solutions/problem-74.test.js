import test from 'node:test';
import assert from 'node:assert/strict';
import { maxRetries } from '../../solutions/problem-74.js';

test('Reference solution 74: maxRetries', () => {
  assert.deepStrictEqual(maxRetries(1, 3), 3);
  assert.deepStrictEqual(maxRetries(5, 2), 5);
});

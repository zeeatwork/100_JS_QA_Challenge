import test from 'node:test';
import assert from 'node:assert/strict';
import { canRetry } from '../src/problems/problem-12.js';

test('Problem 12: canRetry', () => {
  assert.deepStrictEqual(canRetry('failed', 1), true);
  assert.deepStrictEqual(canRetry('failed', 2), false);
  assert.deepStrictEqual(canRetry('passed', 0), false);
});

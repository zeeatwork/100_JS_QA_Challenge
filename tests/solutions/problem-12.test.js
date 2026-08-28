import test from 'node:test';
import assert from 'node:assert/strict';
import { canRetry } from '../../solutions/problem-12.js';

test('Reference solution 12: canRetry', () => {
  assert.deepStrictEqual(canRetry('failed', 1), true);
  assert.deepStrictEqual(canRetry('failed', 2), false);
  assert.deepStrictEqual(canRetry('passed', 0), false);
});

import test from 'node:test';
import assert from 'node:assert/strict';
import { isWithinRetryLimit } from '../src/problems/problem-18.js';

test('Problem 18: isWithinRetryLimit', () => {
  assert.deepStrictEqual(isWithinRetryLimit(2), true);
  assert.deepStrictEqual(isWithinRetryLimit(3), false);
  assert.deepStrictEqual(isWithinRetryLimit(0), true);
});

import test from 'node:test';
import assert from 'node:assert/strict';
import { clampRetryCount } from '../src/problems/problem-47.js';

test('Problem 47: clampRetryCount', () => {
  assert.deepStrictEqual(clampRetryCount(-2), 0);
  assert.deepStrictEqual(clampRetryCount(2), 2);
});

import test from 'node:test';
import assert from 'node:assert/strict';
import { isReady } from '../src/problems/problem-14.js';

test('Problem 14: isReady', () => {
  assert.deepStrictEqual(isReady(false), true);
  assert.deepStrictEqual(isReady(true), false);
});

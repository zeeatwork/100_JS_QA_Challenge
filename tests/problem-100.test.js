import test from 'node:test';
import assert from 'node:assert/strict';
import { isReleaseReady } from '../src/problems/problem-100.js';

test('Problem 100: isReleaseReady', () => {
  assert.deepStrictEqual(isReleaseReady(true, true, true), true);
  assert.deepStrictEqual(isReleaseReady(true, false, true), false);
  assert.deepStrictEqual(isReleaseReady(false, true, true), false);
});

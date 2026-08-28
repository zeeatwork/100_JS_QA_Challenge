import test from 'node:test';
import assert from 'node:assert/strict';
import { isQuickCheck } from '../src/problems/problem-59.js';

test('Problem 59: isQuickCheck', () => {
  assert.deepStrictEqual(isQuickCheck(4), true);
  assert.deepStrictEqual(isQuickCheck(5), false);
  assert.deepStrictEqual(isQuickCheck(6), false);
});

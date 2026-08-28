import test from 'node:test';
import assert from 'node:assert/strict';
import { isTruthy } from '../src/problems/problem-20.js';

test('Problem 20: isTruthy', () => {
  assert.deepStrictEqual(isTruthy('login'), true);
  assert.deepStrictEqual(isTruthy(''), false);
  assert.deepStrictEqual(isTruthy(0), false);
  assert.deepStrictEqual(isTruthy(null), false);
});

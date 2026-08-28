import test from 'node:test';
import assert from 'node:assert/strict';
import { isTruthy } from '../../solutions/problem-20.js';

test('Reference solution 20: isTruthy', () => {
  assert.deepStrictEqual(isTruthy('login'), true);
  assert.deepStrictEqual(isTruthy(''), false);
  assert.deepStrictEqual(isTruthy(0), false);
  assert.deepStrictEqual(isTruthy(null), false);
});

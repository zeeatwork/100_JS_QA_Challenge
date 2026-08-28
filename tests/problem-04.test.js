import test from 'node:test';
import assert from 'node:assert/strict';
import { isUndefined } from '../src/problems/problem-04.js';

test('Problem 04: isUndefined', () => {
  assert.deepStrictEqual(isUndefined(undefined), true);
  assert.deepStrictEqual(isUndefined(null), false);
  assert.deepStrictEqual(isUndefined('x'), false);
});

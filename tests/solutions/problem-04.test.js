import test from 'node:test';
import assert from 'node:assert/strict';
import { isUndefined } from '../../solutions/problem-04.js';

test('Reference solution 04: isUndefined', () => {
  assert.deepStrictEqual(isUndefined(undefined), true);
  assert.deepStrictEqual(isUndefined(null), false);
  assert.deepStrictEqual(isUndefined('x'), false);
});

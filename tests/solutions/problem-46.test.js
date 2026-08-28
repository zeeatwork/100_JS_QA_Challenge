import test from 'node:test';
import assert from 'node:assert/strict';
import { isNaNValue } from '../../solutions/problem-46.js';

test('Reference solution 46: isNaNValue', () => {
  assert.deepStrictEqual(isNaNValue(NaN), true);
  assert.deepStrictEqual(isNaNValue('x'), false);
  assert.deepStrictEqual(isNaNValue(undefined), false);
});

import test from 'node:test';
import assert from 'node:assert/strict';
import { isZero } from '../../solutions/problem-72.js';

test('Reference solution 72: isZero', () => {
  assert.deepStrictEqual(isZero(0), true);
  assert.deepStrictEqual(isZero('0'), false);
  assert.deepStrictEqual(isZero(1), false);
});

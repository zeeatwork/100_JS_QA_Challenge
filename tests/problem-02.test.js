import test from 'node:test';
import assert from 'node:assert/strict';
import { isNumber } from '../src/problems/problem-02.js';

test('Problem 02: isNumber', () => {
  assert.deepStrictEqual(isNumber(42), true);
  assert.deepStrictEqual(isNumber('42'), false);
  assert.deepStrictEqual(isNumber(NaN), true);
});

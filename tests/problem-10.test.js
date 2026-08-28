import test from 'node:test';
import assert from 'node:assert/strict';
import { isEven } from '../src/problems/problem-10.js';

test('Problem 10: isEven', () => {
  assert.deepStrictEqual(isEven(8), true);
  assert.deepStrictEqual(isEven(7), false);
  assert.deepStrictEqual(isEven(0), true);
});

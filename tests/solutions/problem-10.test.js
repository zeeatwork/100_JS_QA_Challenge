import test from 'node:test';
import assert from 'node:assert/strict';
import { isEven } from '../../solutions/problem-10.js';

test('Reference solution 10: isEven', () => {
  assert.deepStrictEqual(isEven(8), true);
  assert.deepStrictEqual(isEven(7), false);
  assert.deepStrictEqual(isEven(0), true);
});

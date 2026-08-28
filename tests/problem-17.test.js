import test from 'node:test';
import assert from 'node:assert/strict';
import { getRemainder } from '../src/problems/problem-17.js';

test('Problem 17: getRemainder', () => {
  assert.deepStrictEqual(getRemainder(17, 5), 2);
  assert.deepStrictEqual(getRemainder(10, 5), 0);
});

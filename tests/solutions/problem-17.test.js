import test from 'node:test';
import assert from 'node:assert/strict';
import { getRemainder } from '../../solutions/problem-17.js';

test('Reference solution 17: getRemainder', () => {
  assert.deepStrictEqual(getRemainder(17, 5), 2);
  assert.deepStrictEqual(getRemainder(10, 5), 0);
});

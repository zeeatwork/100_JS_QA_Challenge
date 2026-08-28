import test from 'node:test';
import assert from 'node:assert/strict';
import { absoluteDelta } from '../../solutions/problem-73.js';

test('Reference solution 73: absoluteDelta', () => {
  assert.deepStrictEqual(absoluteDelta(3, 8), 5);
  assert.deepStrictEqual(absoluteDelta(8, 3), 5);
  assert.deepStrictEqual(absoluteDelta(4, 4), 0);
});

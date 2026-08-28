import test from 'node:test';
import assert from 'node:assert/strict';
import { minDuration } from '../../solutions/problem-75.js';

test('Reference solution 75: minDuration', () => {
  assert.deepStrictEqual(minDuration(9, 4), 4);
  assert.deepStrictEqual(minDuration(2, 7), 2);
});

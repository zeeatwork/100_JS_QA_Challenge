import test from 'node:test';
import assert from 'node:assert/strict';
import { isWithinDuration } from '../../solutions/problem-88.js';

test('Reference solution 88: isWithinDuration', () => {
  assert.deepStrictEqual(isWithinDuration(1), true);
  assert.deepStrictEqual(isWithinDuration(10), true);
  assert.deepStrictEqual(isWithinDuration(0), false);
  assert.deepStrictEqual(isWithinDuration(11), false);
});

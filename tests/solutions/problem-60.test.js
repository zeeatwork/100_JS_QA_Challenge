import test from 'node:test';
import assert from 'node:assert/strict';
import { isLongRunning } from '../../solutions/problem-60.js';

test('Reference solution 60: isLongRunning', () => {
  assert.deepStrictEqual(isLongRunning(31), true);
  assert.deepStrictEqual(isLongRunning(30), false);
  assert.deepStrictEqual(isLongRunning(10), false);
});

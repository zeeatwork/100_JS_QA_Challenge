import test from 'node:test';
import assert from 'node:assert/strict';
import { isLongRunning } from '../src/problems/problem-60.js';

test('Problem 60: isLongRunning', () => {
  assert.deepStrictEqual(isLongRunning(31), true);
  assert.deepStrictEqual(isLongRunning(30), false);
  assert.deepStrictEqual(isLongRunning(10), false);
});

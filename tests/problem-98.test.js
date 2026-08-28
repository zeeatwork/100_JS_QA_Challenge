import test from 'node:test';
import assert from 'node:assert/strict';
import { isComplete } from '../src/problems/problem-98.js';

test('Problem 98: isComplete', () => {
  assert.deepStrictEqual(isComplete(true), true);
  assert.deepStrictEqual(isComplete(false), false);
  assert.deepStrictEqual(isComplete(1), false);
});

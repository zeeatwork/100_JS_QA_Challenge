import test from 'node:test';
import assert from 'node:assert/strict';
import { isComplete } from '../../solutions/problem-98.js';

test('Reference solution 98: isComplete', () => {
  assert.deepStrictEqual(isComplete(true), true);
  assert.deepStrictEqual(isComplete(false), false);
  assert.deepStrictEqual(isComplete(1), false);
});

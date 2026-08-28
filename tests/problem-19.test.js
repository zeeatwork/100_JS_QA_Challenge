import test from 'node:test';
import assert from 'node:assert/strict';
import { isAtLeastPriority } from '../src/problems/problem-19.js';

test('Problem 19: isAtLeastPriority', () => {
  assert.deepStrictEqual(isAtLeastPriority(3), true);
  assert.deepStrictEqual(isAtLeastPriority(2), false);
  assert.deepStrictEqual(isAtLeastPriority(5), true);
});

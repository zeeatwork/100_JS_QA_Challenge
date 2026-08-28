import test from 'node:test';
import assert from 'node:assert/strict';
import { isAtLeastPriority } from '../../solutions/problem-19.js';

test('Reference solution 19: isAtLeastPriority', () => {
  assert.deepStrictEqual(isAtLeastPriority(3), true);
  assert.deepStrictEqual(isAtLeastPriority(2), false);
  assert.deepStrictEqual(isAtLeastPriority(5), true);
});

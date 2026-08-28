import test from 'node:test';
import assert from 'node:assert/strict';
import { isSafeId } from '../src/problems/problem-79.js';

test('Problem 79: isSafeId', () => {
  assert.deepStrictEqual(isSafeId(9007199254740991), true);
  assert.deepStrictEqual(isSafeId(9007199254740992), false);
});

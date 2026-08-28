import test from 'node:test';
import assert from 'node:assert/strict';
import { isSafeId } from '../../solutions/problem-79.js';

test('Reference solution 79: isSafeId', () => {
  assert.deepStrictEqual(isSafeId(9007199254740991), true);
  assert.deepStrictEqual(isSafeId(9007199254740992), false);
});

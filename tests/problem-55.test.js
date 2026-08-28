import test from 'node:test';
import assert from 'node:assert/strict';
import { notBlocked } from '../src/problems/problem-55.js';

test('Problem 55: notBlocked', () => {
  assert.deepStrictEqual(notBlocked(false), true);
  assert.deepStrictEqual(notBlocked(true), false);
});

import test from 'node:test';
import assert from 'node:assert/strict';
import { notBlocked } from '../../solutions/problem-55.js';

test('Reference solution 55: notBlocked', () => {
  assert.deepStrictEqual(notBlocked(false), true);
  assert.deepStrictEqual(notBlocked(true), false);
});

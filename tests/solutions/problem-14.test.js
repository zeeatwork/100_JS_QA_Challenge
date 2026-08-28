import test from 'node:test';
import assert from 'node:assert/strict';
import { isReady } from '../../solutions/problem-14.js';

test('Reference solution 14: isReady', () => {
  assert.deepStrictEqual(isReady(false), true);
  assert.deepStrictEqual(isReady(true), false);
});

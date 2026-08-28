import test from 'node:test';
import assert from 'node:assert/strict';
import { isBoolean } from '../../solutions/problem-03.js';

test('Reference solution 03: isBoolean', () => {
  assert.deepStrictEqual(isBoolean(true), true);
  assert.deepStrictEqual(isBoolean(false), true);
  assert.deepStrictEqual(isBoolean(0), false);
});

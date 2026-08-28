import test from 'node:test';
import assert from 'node:assert/strict';
import { isString } from '../../solutions/problem-01.js';

test('Reference solution 01: isString', () => {
  assert.deepStrictEqual(isString('ready'), true);
  assert.deepStrictEqual(isString(42), false);
  assert.deepStrictEqual(isString(true), false);
});

import test from 'node:test';
import assert from 'node:assert/strict';
import { getTestNameLength } from '../../solutions/problem-67.js';

test('Reference solution 67: getTestNameLength', () => {
  assert.deepStrictEqual(getTestNameLength('login'), 5);
  assert.deepStrictEqual(getTestNameLength(''), 0);
});

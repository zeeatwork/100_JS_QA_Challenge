import test from 'node:test';
import assert from 'node:assert/strict';
import { getTestNameLength } from '../src/problems/problem-67.js';

test('Problem 67: getTestNameLength', () => {
  assert.deepStrictEqual(getTestNameLength('login'), 5);
  assert.deepStrictEqual(getTestNameLength(''), 0);
});

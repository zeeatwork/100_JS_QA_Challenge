import test from 'node:test';
import assert from 'node:assert/strict';
import { defaultTimeout } from '../src/problems/problem-57.js';

test('Problem 57: defaultTimeout', () => {
  assert.deepStrictEqual(defaultTimeout(null), 30000);
  assert.deepStrictEqual(defaultTimeout(0), 0);
  assert.deepStrictEqual(defaultTimeout(5000), 5000);
});

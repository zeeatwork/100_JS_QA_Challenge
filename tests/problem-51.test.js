import test from 'node:test';
import assert from 'node:assert/strict';
import { sameBuildNumber } from '../src/problems/problem-51.js';

test('Problem 51: sameBuildNumber', () => {
  assert.deepStrictEqual(sameBuildNumber(42, 42), true);
  assert.deepStrictEqual(sameBuildNumber(42, '42'), false);
});

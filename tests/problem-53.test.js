import test from 'node:test';
import assert from 'node:assert/strict';
import { bothChecksGreen } from '../src/problems/problem-53.js';

test('Problem 53: bothChecksGreen', () => {
  assert.deepStrictEqual(bothChecksGreen(true, true), true);
  assert.deepStrictEqual(bothChecksGreen(true, false), false);
});

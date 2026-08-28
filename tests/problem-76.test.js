import test from 'node:test';
import assert from 'node:assert/strict';
import { ceilWaitMinutes } from '../src/problems/problem-76.js';

test('Problem 76: ceilWaitMinutes', () => {
  assert.deepStrictEqual(ceilWaitMinutes(2.1), 3);
  assert.deepStrictEqual(ceilWaitMinutes(3), 3);
});

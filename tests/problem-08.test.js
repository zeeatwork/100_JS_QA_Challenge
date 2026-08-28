import test from 'node:test';
import assert from 'node:assert/strict';
import { multiplyTestRuns } from '../src/problems/problem-08.js';

test('Problem 08: multiplyTestRuns', () => {
  assert.deepStrictEqual(multiplyTestRuns(5, 4), 20);
  assert.deepStrictEqual(multiplyTestRuns(2, 0), 0);
});

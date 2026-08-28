import test from 'node:test';
import assert from 'node:assert/strict';
import { selectWorkerCount } from '../src/problems/problem-86.js';

test('Problem 86: selectWorkerCount', () => {
  assert.deepStrictEqual(selectWorkerCount(null), 1);
  assert.deepStrictEqual(selectWorkerCount(4), 4);
  assert.deepStrictEqual(selectWorkerCount(0), 0);
});

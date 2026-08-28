import test from 'node:test';
import assert from 'node:assert/strict';
import { addRetryCounts } from '../src/problems/problem-06.js';

test('Problem 06: addRetryCounts', () => {
  assert.deepStrictEqual(addRetryCounts(2, 3), 5);
  assert.deepStrictEqual(addRetryCounts(0, 4), 4);
});

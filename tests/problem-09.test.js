import test from 'node:test';
import assert from 'node:assert/strict';
import { divideTestCases } from '../src/problems/problem-09.js';

test('Problem 09: divideTestCases', () => {
  assert.deepStrictEqual(divideTestCases(20, 4), 5);
  assert.deepStrictEqual(divideTestCases(9, 3), 3);
});

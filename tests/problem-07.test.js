import test from 'node:test';
import assert from 'node:assert/strict';
import { subtractOpenBugs } from '../src/problems/problem-07.js';

test('Problem 07: subtractOpenBugs', () => {
  assert.deepStrictEqual(subtractOpenBugs(10, 4), 6);
  assert.deepStrictEqual(subtractOpenBugs(3, 3), 0);
});

import test from 'node:test';
import assert from 'node:assert/strict';
import { subtractOpenBugs } from '../../solutions/problem-07.js';

test('Reference solution 07: subtractOpenBugs', () => {
  assert.deepStrictEqual(subtractOpenBugs(10, 4), 6);
  assert.deepStrictEqual(subtractOpenBugs(3, 3), 0);
});

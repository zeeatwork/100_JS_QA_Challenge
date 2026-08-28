import test from 'node:test';
import assert from 'node:assert/strict';
import { toFixedScore } from '../src/problems/problem-43.js';

test('Problem 43: toFixedScore', () => {
  assert.deepStrictEqual(toFixedScore(98.126), '98.13');
  assert.deepStrictEqual(toFixedScore(10), '10.00');
});

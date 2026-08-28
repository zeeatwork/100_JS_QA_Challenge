import test from 'node:test';
import assert from 'node:assert/strict';
import { roundPercentage } from '../src/problems/problem-77.js';

test('Problem 77: roundPercentage', () => {
  assert.deepStrictEqual(roundPercentage(98.6), 99);
  assert.deepStrictEqual(roundPercentage(98.4), 98);
});

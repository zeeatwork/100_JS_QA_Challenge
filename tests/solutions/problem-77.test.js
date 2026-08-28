import test from 'node:test';
import assert from 'node:assert/strict';
import { roundPercentage } from '../../solutions/problem-77.js';

test('Reference solution 77: roundPercentage', () => {
  assert.deepStrictEqual(roundPercentage(98.6), 99);
  assert.deepStrictEqual(roundPercentage(98.4), 98);
});

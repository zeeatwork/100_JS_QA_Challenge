import test from 'node:test';
import assert from 'node:assert/strict';
import { getPercentage } from '../../solutions/problem-96.js';

test('Reference solution 96: getPercentage', () => {
  assert.deepStrictEqual(getPercentage(45, 50), 90);
  assert.deepStrictEqual(getPercentage(5, 10), 50);
});

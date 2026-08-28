import test from 'node:test';
import assert from 'node:assert/strict';
import { getRemainingPercent } from '../../solutions/problem-97.js';

test('Reference solution 97: getRemainingPercent', () => {
  assert.deepStrictEqual(getRemainingPercent(90), 10);
  assert.deepStrictEqual(getRemainingPercent(100), 0);
});

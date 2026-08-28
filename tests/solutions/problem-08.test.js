import test from 'node:test';
import assert from 'node:assert/strict';
import { multiplyTestRuns } from '../../solutions/problem-08.js';

test('Reference solution 08: multiplyTestRuns', () => {
  assert.deepStrictEqual(multiplyTestRuns(5, 4), 20);
  assert.deepStrictEqual(multiplyTestRuns(2, 0), 0);
});

import test from 'node:test';
import assert from 'node:assert/strict';
import { bothChecksGreen } from '../../solutions/problem-53.js';

test('Reference solution 53: bothChecksGreen', () => {
  assert.deepStrictEqual(bothChecksGreen(true, true), true);
  assert.deepStrictEqual(bothChecksGreen(true, false), false);
});

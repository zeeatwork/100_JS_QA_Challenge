import test from 'node:test';
import assert from 'node:assert/strict';
import { roundDuration } from '../../solutions/problem-49.js';

test('Reference solution 49: roundDuration', () => {
  assert.deepStrictEqual(roundDuration(12.6), 13);
  assert.deepStrictEqual(roundDuration(12.4), 12);
});

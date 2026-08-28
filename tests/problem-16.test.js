import test from 'node:test';
import assert from 'node:assert/strict';
import { decrementQueueCount } from '../src/problems/problem-16.js';

test('Problem 16: decrementQueueCount', () => {
  assert.deepStrictEqual(decrementQueueCount(5), 4);
  assert.deepStrictEqual(decrementQueueCount(1), 0);
});

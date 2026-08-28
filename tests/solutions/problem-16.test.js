import test from 'node:test';
import assert from 'node:assert/strict';
import { decrementQueueCount } from '../../solutions/problem-16.js';

test('Reference solution 16: decrementQueueCount', () => {
  assert.deepStrictEqual(decrementQueueCount(5), 4);
  assert.deepStrictEqual(decrementQueueCount(1), 0);
});

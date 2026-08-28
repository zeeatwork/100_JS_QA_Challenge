import test from 'node:test';
import assert from 'node:assert/strict';
import { isRetryableStatus } from '../src/problems/problem-83.js';

test('Problem 83: isRetryableStatus', () => {
  assert.deepStrictEqual(isRetryableStatus('failed'), true);
  assert.deepStrictEqual(isRetryableStatus('timed-out'), true);
  assert.deepStrictEqual(isRetryableStatus('passed'), false);
});

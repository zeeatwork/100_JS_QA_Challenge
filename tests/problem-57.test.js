import test from 'node:test';
import assert from 'node:assert/strict';
import { getSlowestDuration, atLeastOneWorker, getOverrunMs } from '../src/problems/problem-57.js';

test('Problem 57: getSlowestDuration returns the longest duration', () => {
  assert.deepStrictEqual(getSlowestDuration(120, 450, 300), 450);
  assert.deepStrictEqual(getSlowestDuration(5, 5, 5), 5);
  assert.deepStrictEqual(getSlowestDuration(0, 0, 1), 1);
});

test('Problem 57: atLeastOneWorker never returns less than 1', () => {
  assert.deepStrictEqual(atLeastOneWorker(0), 1);
  assert.deepStrictEqual(atLeastOneWorker(-2), 1);
  assert.deepStrictEqual(atLeastOneWorker(4), 4);
});

test('Problem 57: getOverrunMs is 0 when the test finished on time', () => {
  assert.deepStrictEqual(getOverrunMs(1000, 1250), 250);
  assert.deepStrictEqual(getOverrunMs(1000, 1000), 0);
  assert.deepStrictEqual(getOverrunMs(1000, 800), 0);
});

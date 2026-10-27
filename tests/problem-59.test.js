import test from 'node:test';
import assert from 'node:assert/strict';
import { resultLabel, describeTestCount, formatDuration } from '../src/problems/problem-59.js';

test('Problem 59: resultLabel maps booleans to labels', () => {
  assert.deepStrictEqual(resultLabel(true), "PASS");
  assert.deepStrictEqual(resultLabel(false), "FAIL");
});

test('Problem 59: describeTestCount uses the singular only for 1', () => {
  assert.deepStrictEqual(describeTestCount(1), "1 test");
  assert.deepStrictEqual(describeTestCount(0), "0 tests");
  assert.deepStrictEqual(describeTestCount(12), "12 tests");
});

test('Problem 59: formatDuration switches to seconds at 1000ms', () => {
  assert.deepStrictEqual(formatDuration(1500), "1.5s");
  assert.deepStrictEqual(formatDuration(1000), "1s");
  assert.deepStrictEqual(formatDuration(999), "999ms");
  assert.deepStrictEqual(formatDuration(0), "0ms");
});

import test from 'node:test';
import assert from 'node:assert/strict';
import { parseDurationMs, parseRetryAfter, getMajorVersion } from '../src/problems/problem-56.js';

test('Problem 56: parseDurationMs reads millisecond durations', () => {
  assert.deepStrictEqual(parseDurationMs("250ms"), 250);
  assert.deepStrictEqual(parseDurationMs("  1200ms"), 1200);
  assert.deepStrictEqual(parseDurationMs("0ms"), 0);
});

test('Problem 56: parseRetryAfter returns NaN for unusable headers', () => {
  assert.deepStrictEqual(parseRetryAfter("3"), 3);
  assert.deepStrictEqual(parseRetryAfter("120"), 120);
  assert.deepStrictEqual(parseRetryAfter(""), NaN);
  assert.deepStrictEqual(parseRetryAfter("soon"), NaN);
});

test('Problem 56: getMajorVersion reads the first version number', () => {
  assert.deepStrictEqual(getMajorVersion("18.17.1"), 18);
  assert.deepStrictEqual(getMajorVersion("22.0.0"), 22);
  assert.deepStrictEqual(getMajorVersion("3"), 3);
});

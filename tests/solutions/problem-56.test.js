import test from 'node:test';
import assert from 'node:assert/strict';
import { parseDurationMs, parseStoryPoints, getMajorVersion } from '../../solutions/problem-56.js';

test('Reference solution 56: parseDurationMs reads millisecond durations', () => {
  assert.deepStrictEqual(parseDurationMs("250ms"), 250);
  assert.deepStrictEqual(parseDurationMs("  1200ms"), 1200);
  assert.deepStrictEqual(parseDurationMs("0ms"), 0);
});

test('Reference solution 56: parseStoryPoints returns NaN for unusable estimates', () => {
  assert.deepStrictEqual(parseStoryPoints("5 pts"), 5);
  assert.deepStrictEqual(parseStoryPoints("13 points"), 13);
  assert.deepStrictEqual(parseStoryPoints("8"), 8);
  assert.deepStrictEqual(parseStoryPoints(""), NaN);
  assert.deepStrictEqual(parseStoryPoints("TBD"), NaN);
});

test('Reference solution 56: getMajorVersion reads the major number from a Fix Version', () => {
  assert.deepStrictEqual(getMajorVersion("2.4.1"), 2);
  assert.deepStrictEqual(getMajorVersion("10.0.0"), 10);
  assert.deepStrictEqual(getMajorVersion("3"), 3);
});

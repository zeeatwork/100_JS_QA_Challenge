import test from 'node:test';
import assert from 'node:assert/strict';
import { getBuildDate, getRunSuffix, getShortSha } from '../../solutions/problem-51.js';

test('Reference solution 51: getBuildDate returns the date part of a timestamp', () => {
  assert.deepStrictEqual(getBuildDate("2026-10-14T09:30:00Z"), "2026-10-14");
  assert.deepStrictEqual(getBuildDate("2025-01-02T23:59:59.999Z"), "2025-01-02");
});

test('Reference solution 51: getRunSuffix returns the last four characters', () => {
  assert.deepStrictEqual(getRunSuffix("run_8812391"), "2391");
  assert.deepStrictEqual(getRunSuffix("run_0001"), "0001");
  assert.deepStrictEqual(getRunSuffix("r12"), "r12");
});

test('Reference solution 51: getShortSha returns a seven-character SHA', () => {
  assert.deepStrictEqual(getShortSha("f1170ee9a2c4b1"), "f1170ee");
  assert.deepStrictEqual(getShortSha("f1170ee"), "f1170ee");
  assert.deepStrictEqual(getShortSha("abc"), "abc");
});

import test from 'node:test';
import assert from 'node:assert/strict';
import { isValidRetryCount, normalizeEnvironment, getTicketNumber, shouldBlockRelease, clampWorkers, isOddShard } from '../../solutions/problem-50.js';

test('Reference solution 50: accepts only whole, non-negative retry counts', () => {
  assert.deepStrictEqual(isValidRetryCount(3), true);
  assert.deepStrictEqual(isValidRetryCount(0), true);
  assert.deepStrictEqual(isValidRetryCount(-1), false);
  assert.deepStrictEqual(isValidRetryCount(2.5), false);
  assert.deepStrictEqual(isValidRetryCount("3"), false);
});

test('Reference solution 50: cleans up environment names from config', () => {
  assert.deepStrictEqual(normalizeEnvironment(" Staging "), "staging");
  assert.deepStrictEqual(normalizeEnvironment("PROD"), "prod");
  assert.deepStrictEqual(normalizeEnvironment("  qa\n"), "qa");
  assert.deepStrictEqual(normalizeEnvironment("dev"), "dev");
});

test('Reference solution 50: reads the number out of a ticket ID', () => {
  assert.deepStrictEqual(getTicketNumber("QA-1042"), 1042);
  assert.deepStrictEqual(getTicketNumber("BUG-7"), 7);
  assert.deepStrictEqual(getTicketNumber("PLAT-0300"), 300);
});

test('Reference solution 50: blocks a release on failures or missing approval', () => {
  assert.deepStrictEqual(shouldBlockRelease(0, true), false);
  assert.deepStrictEqual(shouldBlockRelease(2, true), true);
  assert.deepStrictEqual(shouldBlockRelease(0, false), true);
  assert.deepStrictEqual(shouldBlockRelease(3, false), true);
});

test('Reference solution 50: keeps worker count between 1 and 8', () => {
  assert.deepStrictEqual(clampWorkers(0), 1);
  assert.deepStrictEqual(clampWorkers(1), 1);
  assert.deepStrictEqual(clampWorkers(4), 4);
  assert.deepStrictEqual(clampWorkers(8), 8);
  assert.deepStrictEqual(clampWorkers(12), 8);
});

test('Reference solution 50: identifies odd-numbered shards', () => {
  assert.deepStrictEqual(isOddShard(1), true);
  assert.deepStrictEqual(isOddShard(2), false);
  assert.deepStrictEqual(isOddShard(7), true);
  assert.deepStrictEqual(isOddShard(10), false);
});

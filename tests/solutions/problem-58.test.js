import test from 'node:test';
import assert from 'node:assert/strict';
import { getBaseUrl, getRetryCount, getHeadless } from '../../solutions/problem-58.js';

test('Reference solution 58: getBaseUrl keeps deliberate settings, including empty strings', () => {
  assert.deepStrictEqual(getBaseUrl(), "http://localhost:3000");
  assert.deepStrictEqual(getBaseUrl(null), "http://localhost:3000");
  assert.deepStrictEqual(getBaseUrl("https://staging.example.com"), "https://staging.example.com");
  assert.deepStrictEqual(getBaseUrl(""), "");
});

test('Reference solution 58: getRetryCount keeps 0 retries', () => {
  assert.deepStrictEqual(getRetryCount(), 2);
  assert.deepStrictEqual(getRetryCount(0), 0);
  assert.deepStrictEqual(getRetryCount(5), 5);
});

test('Reference solution 58: getHeadless keeps an explicit false', () => {
  assert.deepStrictEqual(getHeadless(), true);
  assert.deepStrictEqual(getHeadless(null), true);
  assert.deepStrictEqual(getHeadless(false), false);
  assert.deepStrictEqual(getHeadless(true), true);
});

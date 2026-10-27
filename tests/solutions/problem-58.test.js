import test from 'node:test';
import assert from 'node:assert/strict';
import { getAssignee, getRetryCount, getHeadless } from '../../solutions/problem-58.js';

test('Reference solution 58: getAssignee falls back only when the field is empty', () => {
  assert.deepStrictEqual(getAssignee(), "Unassigned");
  assert.deepStrictEqual(getAssignee(null), "Unassigned");
  assert.deepStrictEqual(getAssignee("jsmith"), "jsmith");
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

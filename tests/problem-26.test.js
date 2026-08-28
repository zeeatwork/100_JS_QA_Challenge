import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeStatus } from '../src/problems/problem-26.js';

test('Problem 26: normalizeStatus', () => {
  assert.deepStrictEqual(normalizeStatus('PASSED'), 'passed');
  assert.deepStrictEqual(normalizeStatus('FAILED'), 'failed');
});

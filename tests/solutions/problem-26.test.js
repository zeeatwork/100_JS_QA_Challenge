import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeStatus } from '../../solutions/problem-26.js';

test('Reference solution 26: normalizeStatus', () => {
  assert.deepStrictEqual(normalizeStatus('PASSED'), 'passed');
  assert.deepStrictEqual(normalizeStatus('FAILED'), 'failed');
});

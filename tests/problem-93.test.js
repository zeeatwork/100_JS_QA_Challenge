import test from 'node:test';
import assert from 'node:assert/strict';
import { getEnvironmentCode } from '../src/problems/problem-93.js';

test('Problem 93: getEnvironmentCode', () => {
  assert.deepStrictEqual(getEnvironmentCode('Staging'), 'st');
  assert.deepStrictEqual(getEnvironmentCode('QA'), 'qa');
});

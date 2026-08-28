import test from 'node:test';
import assert from 'node:assert/strict';
import { getEnvironmentCode } from '../../solutions/problem-93.js';

test('Reference solution 93: getEnvironmentCode', () => {
  assert.deepStrictEqual(getEnvironmentCode('Staging'), 'st');
  assert.deepStrictEqual(getEnvironmentCode('QA'), 'qa');
});

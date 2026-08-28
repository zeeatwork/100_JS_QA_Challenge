import test from 'node:test';
import assert from 'node:assert/strict';
import { getEnvironmentLength } from '../../solutions/problem-22.js';

test('Reference solution 22: getEnvironmentLength', () => {
  assert.deepStrictEqual(getEnvironmentLength('staging'), 7);
  assert.deepStrictEqual(getEnvironmentLength(''), 0);
});

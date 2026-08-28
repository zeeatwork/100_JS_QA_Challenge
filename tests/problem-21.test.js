import test from 'node:test';
import assert from 'node:assert/strict';
import { getEnvironmentLabel } from '../src/problems/problem-21.js';

test('Problem 21: getEnvironmentLabel', () => {
  assert.deepStrictEqual(getEnvironmentLabel('staging'), 'staging');
  assert.deepStrictEqual(getEnvironmentLabel('prod'), 'prod');
});

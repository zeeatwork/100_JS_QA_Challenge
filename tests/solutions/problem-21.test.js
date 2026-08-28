import test from 'node:test';
import assert from 'node:assert/strict';
import { getEnvironmentLabel } from '../../solutions/problem-21.js';

test('Reference solution 21: getEnvironmentLabel', () => {
  assert.deepStrictEqual(getEnvironmentLabel('staging'), 'staging');
  assert.deepStrictEqual(getEnvironmentLabel('prod'), 'prod');
});

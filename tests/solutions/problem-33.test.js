import test from 'node:test';
import assert from 'node:assert/strict';
import { replaceEnvironment } from '../../solutions/problem-33.js';

test('Reference solution 33: replaceEnvironment', () => {
  assert.deepStrictEqual(replaceEnvironment('app-staging'), 'app-qa');
  assert.deepStrictEqual(replaceEnvironment('staging-api'), 'qa-api');
});

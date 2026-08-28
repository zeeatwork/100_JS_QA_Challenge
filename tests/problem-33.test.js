import test from 'node:test';
import assert from 'node:assert/strict';
import { replaceEnvironment } from '../src/problems/problem-33.js';

test('Problem 33: replaceEnvironment', () => {
  assert.deepStrictEqual(replaceEnvironment('app-staging'), 'app-qa');
  assert.deepStrictEqual(replaceEnvironment('staging-api'), 'qa-api');
});

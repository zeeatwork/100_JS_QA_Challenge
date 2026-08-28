import test from 'node:test';
import assert from 'node:assert/strict';
import { sliceSuitePrefix } from '../src/problems/problem-70.js';

test('Problem 70: sliceSuitePrefix', () => {
  assert.deepStrictEqual(sliceSuitePrefix('smoke-login'), 'smoke');
  assert.deepStrictEqual(sliceSuitePrefix('regression'), 'regre');
});

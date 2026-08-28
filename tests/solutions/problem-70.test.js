import test from 'node:test';
import assert from 'node:assert/strict';
import { sliceSuitePrefix } from '../../solutions/problem-70.js';

test('Reference solution 70: sliceSuitePrefix', () => {
  assert.deepStrictEqual(sliceSuitePrefix('smoke-login'), 'smoke');
  assert.deepStrictEqual(sliceSuitePrefix('regression'), 'regre');
});

import test from 'node:test';
import assert from 'node:assert/strict';
import { replaceSpacesWithDash } from '../src/problems/problem-94.js';

test('Problem 94: replaceSpacesWithDash', () => {
  assert.deepStrictEqual(replaceSpacesWithDash('daily smoke'), 'daily-smoke');
  assert.deepStrictEqual(replaceSpacesWithDash('nightly regression'), 'nightly-regression');
});

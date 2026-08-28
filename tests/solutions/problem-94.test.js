import test from 'node:test';
import assert from 'node:assert/strict';
import { replaceSpacesWithDash } from '../../solutions/problem-94.js';

test('Reference solution 94: replaceSpacesWithDash', () => {
  assert.deepStrictEqual(replaceSpacesWithDash('daily smoke'), 'daily-smoke');
  assert.deepStrictEqual(replaceSpacesWithDash('nightly regression'), 'nightly-regression');
});

import test from 'node:test';
import assert from 'node:assert/strict';
import { findFirstFailure, hasProjectSeparator, getValueAfterColon } from '../../solutions/problem-52.js';

test('Reference solution 52: findFirstFailure locates the first FAIL', () => {
  assert.deepStrictEqual(findFirstFailure("PASS PASS FAIL"), 10);
  assert.deepStrictEqual(findFirstFailure("FAIL then FAIL"), 0);
  assert.deepStrictEqual(findFirstFailure("PASS PASS"), -1);
});

test('Reference solution 52: hasProjectSeparator checks for a dash', () => {
  assert.deepStrictEqual(hasProjectSeparator("QA-12"), true);
  assert.deepStrictEqual(hasProjectSeparator("-12"), true);
  assert.deepStrictEqual(hasProjectSeparator("QA12"), false);
  assert.deepStrictEqual(hasProjectSeparator(""), false);
});

test('Reference solution 52: getValueAfterColon reads the value after the first colon', () => {
  assert.deepStrictEqual(getValueAfterColon("status:passed"), "passed");
  assert.deepStrictEqual(getValueAfterColon("url:http://x"), "http://x");
  assert.deepStrictEqual(getValueAfterColon("no colon here"), "");
});

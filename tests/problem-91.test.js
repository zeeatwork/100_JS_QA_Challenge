import test from 'node:test';
import assert from 'node:assert/strict';
import { buildCaseInsensitiveKey } from '../src/problems/problem-91.js';

test('Problem 91: buildCaseInsensitiveKey', () => {
  assert.deepStrictEqual(buildCaseInsensitiveKey(' QA-10 '), 'qa-10');
  assert.deepStrictEqual(buildCaseInsensitiveKey(' BUG-2'), 'bug-2');
});

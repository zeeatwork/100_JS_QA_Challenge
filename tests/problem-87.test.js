import test from 'node:test';
import assert from 'node:assert/strict';
import { selectBrowser } from '../src/problems/problem-87.js';

test('Problem 87: selectBrowser', () => {
  assert.deepStrictEqual(selectBrowser(undefined), 'chromium');
  assert.deepStrictEqual(selectBrowser(''), 'chromium');
  assert.deepStrictEqual(selectBrowser('firefox'), 'firefox');
});

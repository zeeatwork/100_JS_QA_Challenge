import test from 'node:test';
import assert from 'node:assert/strict';
import { selectBrowser } from '../../solutions/problem-87.js';

test('Reference solution 87: selectBrowser', () => {
  assert.deepStrictEqual(selectBrowser(undefined), 'chromium');
  assert.deepStrictEqual(selectBrowser(''), 'chromium');
  assert.deepStrictEqual(selectBrowser('firefox'), 'firefox');
});

import test from 'node:test';
import assert from 'node:assert/strict';
import { defaultBrowser } from '../../solutions/problem-56.js';

test('Reference solution 56: defaultBrowser', () => {
  assert.deepStrictEqual(defaultBrowser('firefox'), 'firefox');
  assert.deepStrictEqual(defaultBrowser(''), 'chromium');
});

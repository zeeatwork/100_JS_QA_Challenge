import test from 'node:test';
import assert from 'node:assert/strict';
import { lowercaseBrowser } from '../../solutions/problem-64.js';

test('Reference solution 64: lowercaseBrowser', () => {
  assert.deepStrictEqual(lowercaseBrowser('CHROME'), 'chrome');
  assert.deepStrictEqual(lowercaseBrowser('Firefox'), 'firefox');
});

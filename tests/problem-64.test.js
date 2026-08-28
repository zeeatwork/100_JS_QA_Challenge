import test from 'node:test';
import assert from 'node:assert/strict';
import { lowercaseBrowser } from '../src/problems/problem-64.js';

test('Problem 64: lowercaseBrowser', () => {
  assert.deepStrictEqual(lowercaseBrowser('CHROME'), 'chrome');
  assert.deepStrictEqual(lowercaseBrowser('Firefox'), 'firefox');
});

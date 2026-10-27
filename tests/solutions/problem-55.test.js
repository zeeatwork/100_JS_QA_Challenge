import test from 'node:test';
import assert from 'node:assert/strict';
import { isProdUrl, isQaTicket, isRegressionBug } from '../../solutions/problem-55.js';

test('Reference solution 55: isProdUrl detects production URLs', () => {
  assert.deepStrictEqual(isProdUrl("https://prod.example.com/login"), true);
  assert.deepStrictEqual(isProdUrl("https://staging.example.com"), false);
  assert.deepStrictEqual(isProdUrl("http://prod.example.com"), false);
});

test('Reference solution 55: isQaTicket checks the project prefix', () => {
  assert.deepStrictEqual(isQaTicket("QA-12"), true);
  assert.deepStrictEqual(isQaTicket("qa-12"), false);
  assert.deepStrictEqual(isQaTicket("BUG-QA-1"), false);
});

test('Reference solution 55: isRegressionBug only counts the tag at the start', () => {
  assert.deepStrictEqual(isRegressionBug("[Regression] Login button unresponsive"), true);
  assert.deepStrictEqual(isRegressionBug("Login button unresponsive [Regression]"), false);
  assert.deepStrictEqual(isRegressionBug("[regression] Login button unresponsive"), false);
  assert.deepStrictEqual(isRegressionBug(""), false);
});

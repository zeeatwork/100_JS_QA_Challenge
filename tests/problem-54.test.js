import test from 'node:test';
import assert from 'node:assert/strict';
import { isSameBrowser, toTagKey, isPassedStatus } from '../src/problems/problem-54.js';

test('Problem 54: isSameBrowser ignores capitalization', () => {
  assert.deepStrictEqual(isSameBrowser("Chrome", "chrome"), true);
  assert.deepStrictEqual(isSameBrowser("FIREFOX", "Firefox"), true);
  assert.deepStrictEqual(isSameBrowser("Chrome", "Edge"), false);
});

test('Problem 54: toTagKey lowercases tags', () => {
  assert.deepStrictEqual(toTagKey("@Smoke"), "@smoke");
  assert.deepStrictEqual(toTagKey("@REGRESSION"), "@regression");
  assert.deepStrictEqual(toTagKey("@a11y"), "@a11y");
});

test('Problem 54: isPassedStatus recognizes passed in any capitalization', () => {
  assert.deepStrictEqual(isPassedStatus("PASSED"), true);
  assert.deepStrictEqual(isPassedStatus("Passed"), true);
  assert.deepStrictEqual(isPassedStatus("passed"), true);
  assert.deepStrictEqual(isPassedStatus("FAILED"), false);
});

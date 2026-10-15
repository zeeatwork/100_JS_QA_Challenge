import test from 'node:test';
import assert from 'node:assert/strict';
import { isProdUrl, isQaTicket, isCommentLine } from '../../solutions/problem-55.js';

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

test('Reference solution 55: isCommentLine only counts // at the very start', () => {
  assert.deepStrictEqual(isCommentLine("// skip for now"), true);
  assert.deepStrictEqual(isCommentLine("  // indented"), false);
  assert.deepStrictEqual(isCommentLine("const a = 1; // note"), false);
});

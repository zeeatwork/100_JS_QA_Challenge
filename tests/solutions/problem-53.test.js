import test from 'node:test';
import assert from 'node:assert/strict';
import { cleanTicketId, isBlankComment, countVisibleCharacters } from '../../solutions/problem-53.js';

test('Reference solution 53: cleanTicketId removes surrounding whitespace', () => {
  assert.deepStrictEqual(cleanTicketId("  QA-12 "), "QA-12");
  assert.deepStrictEqual(cleanTicketId("\tBUG-9\n"), "BUG-9");
  assert.deepStrictEqual(cleanTicketId("QA-12"), "QA-12");
});

test('Reference solution 53: isBlankComment detects empty or whitespace-only comments', () => {
  assert.deepStrictEqual(isBlankComment("   "), true);
  assert.deepStrictEqual(isBlankComment(""), true);
  assert.deepStrictEqual(isBlankComment("\n\t"), true);
  assert.deepStrictEqual(isBlankComment(" ok "), false);
});

test('Reference solution 53: countVisibleCharacters ignores surrounding whitespace', () => {
  assert.deepStrictEqual(countVisibleCharacters(" Login "), 5);
  assert.deepStrictEqual(countVisibleCharacters("Sign up"), 7);
  assert.deepStrictEqual(countVisibleCharacters("   "), 0);
});

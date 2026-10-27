import test from 'node:test';
import assert from 'node:assert/strict';
import { cleanTicketKey, isBlankSummary, getSummaryLength } from '../../solutions/problem-53.js';

test('Reference solution 53: cleanTicketKey removes surrounding whitespace', () => {
  assert.deepStrictEqual(cleanTicketKey("  QA-12 "), "QA-12");
  assert.deepStrictEqual(cleanTicketKey("\tBUG-9\n"), "BUG-9");
  assert.deepStrictEqual(cleanTicketKey("QA-12"), "QA-12");
});

test('Reference solution 53: isBlankSummary detects empty or whitespace-only summaries', () => {
  assert.deepStrictEqual(isBlankSummary("   "), true);
  assert.deepStrictEqual(isBlankSummary(""), true);
  assert.deepStrictEqual(isBlankSummary("\n\t"), true);
  assert.deepStrictEqual(isBlankSummary(" Login fails "), false);
});

test('Reference solution 53: getSummaryLength ignores surrounding whitespace', () => {
  assert.deepStrictEqual(getSummaryLength(" Login fails "), 11);
  assert.deepStrictEqual(getSummaryLength("Export button missing"), 21);
  assert.deepStrictEqual(getSummaryLength("   "), 0);
});

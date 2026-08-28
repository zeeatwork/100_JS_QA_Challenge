import test from 'node:test';
import assert from 'node:assert/strict';
import { getLastTicketDigit } from '../src/problems/problem-69.js';

test('Problem 69: getLastTicketDigit', () => {
  assert.deepStrictEqual(getLastTicketDigit('BUG-27'), '7');
  assert.deepStrictEqual(getLastTicketDigit('QA-4'), '4');
});
